# A Framework that revolutionized Desktop Application Development. Tauri

Meet Tauri, your go-to toolkit for building sleek native desktop applications using your favorite web technologies like React, Vue, or Svelte for the frontend, and a lightweight Rust backend.

![enter image description here](https://miro.medium.com/v2/resize:fit:1400/1*8NKoEabWemAlgqWPzWCRIA.jpeg)

### <span style="border-bottom:1px solid yellow">**So, what sets Tauri apart from Electron?**</span>

&nbsp;

Well, for starters, while Electron has been the trusty tool for many JavaScript developers over the past decade,It does have certain drawbacks. The primary complaints? Its huge bundle size and memory consumption of the machine . But fear not, Tauri comes in to save the day with a more efficient approach.

Here's how it works: instead of relying on Node.js and Chromium like Electron does, Tauri switches things up. It swaps out Node.js for Rust—a speedy, compiled language—and replaces Chromium with lightweight libraries such as WRY and TAO. The result? A significantly smaller bundle size and better performance overall.

But that's not all! Tauri's API opens up a world of native functionalities like accessing the filesystem, making HTTP requests, and sending notifications—all done securely and seamlessly.

With Tauri, building desktop apps feels like a cool, wanna try it out, lets do it

To get Started , make sure that you have RUST and Node js installed on your system.

1. Open up terminal and run this command:

<Code language="javascript">
npx create-tauri-app 
</Code>

&nbsp;

![enter image description here](https://i.ibb.co/CKNfRX9/image.png)

then Select you favourite frontend Framework and hit enter!

After it finishes, you'll see a file structure that's familiar

![enter image description here](https://blog.logrocket.com/wp-content/uploads/2022/09/tauri-app-file-structure.png?is-pending-load=1)

The **Src** is the frontend part, while the **src-tauri** is the backend portion


So Lets look at the main entry point which is the Main.rs file in the backend

<Code language="javascript">
//Main.rs
// Prevents additional console window on Windows in release
#![cfg_attr(
    all(not(debug_assertions), target_os = "windows"),
    windows_subsystem = "windows"
)]

#[tauri::command]
fn greet(name: &str) -> String {
    format!("Hello, {}! You've been greeted from Rust!", name)
}
fn main() {
    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![greet])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}


</Code>

The Main.rs file contains the application entry point, where a greet function is defined (which aceepts a name as paramater and returns a formated string!) as a Tauri command, which it can be invoked (called) from the frontend side( react ) 

here is how 

<Code language="javascript">
import React, { useState } from 'react';
import { invoke } from "@tauri-apps/api/core"

function App() {
  const [name, setName] = useState('');
  const [greeting, setGreeting] = useState('');

  const handleGreet = async () => {
    try {
      const response = await invoke('greet', { name });
      setGreeting(response);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return(
    &lt;&gt;
       &lt;input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) =&gt; setName(e.target.value)}
      /&gt;
      &lt;button onClick={handleGreet}&gt;Greet&lt;/button&gt;
      {greeting && &lt;p&gt;{greeting}&lt;/p&gt;}
    &lt;/&gt;
  )}
export default App;
</Code>;

In this implementation, we leverage Tauri's Invoke method to directly call the Rust function Greet from the frontend, passing along the necessary name parameter. This parameter is then processed by the Rust function, which generates the corresponding output. Subsequently, we update the application state based on the received output.


So lets do one more practice, we'll introduce a new feature to enable users to create and save files locally, coupled with a notification system for user feedback

We'll begin by implementing a Rust function on the backend. This function will accept the file content and path as arguments, and it will proceed to create and save the file locally. Upon successful completion, it will return a success message to the frontend



<Code language="javascript">
//Main.rs
// Prevents additional console window on Windows in release
#![cfg_attr(
    all(not(debug_assertions), target_os = "windows"),
    windows_subsystem = "windows"
)]

use std::fs;
use std::io;

#[tauri::command]
fn greet(name: &str) -> String {
    format!("Hello, {}! You've been greeted from Rust!", name)
}


#[tauri::command]
fn create_and_save_file(content: String, path: String) -> Result<String, io::Error> {
    //  write the content to the specified file path
    match fs::write(&path, content) {
        Ok(()) => Ok(format!("File '{}' created and saved successfully.", path)),
        Err(err) => Err(err),
    }
}

fn main() {
    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![greet,create_and_save_file])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}


</Code>

Here we wrote the function to the previous code , and also add the function in the tauri generate_handler 


In the frontend implementation, we'll create a React component that captures the file content and path from input fields. When the user clicks a button, the component will invoke the corresponding Rust function via Tauri, passing the content and path as parameters. Upon receiving a success message from the backend, the component will trigger a simple native desktop notification displaying the success message.


<Code language="javascript">
import React, { useState } from 'react';
import { invoke } from "@tauri-apps/api/core"
import { sendNotification } from '@tauri-apps/api/notification';

function App() {
  const [content, setContent] = useState('');
  const [path, setPath] = useState('');

  const handleCreateAndSaveFile = async () => {
    try {
      const response = await invoke('create_and_save_file', {
        content,
        path
      });
      if (response.startsWith("File")) {
        await sendNotification({
          title: "File Saved",
          body: response,
        });
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return(
    &lt;&gt;
       &lt;input
        type="text"
        placeholder="Enter file content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      /&gt;
       &lt;input
        type="text"
        placeholder="Enter file path"
        value={path}
        onChange={(e) => setPath(e.target.value)}
      /&gt;
      &lt;button onClick={handleCreateAndSaveFile}&gt;Create & Save File&lt;/button&gt;
    &lt;/&gt;
  )}
export default App;
</Code>


Hero we go, so now we have done our job, we want to build our project to an excutable file

To do this Adjust everything you need inclduing the name the icon etc.. in the Tauri.conf.json

then once you finished run the command

<Code language="javascipt">
npx tauri build
</Code>

and you will get the release exe in the target directory,

Congrats You just built  your frist Tauri Desktop App, cool yeah?


Hope you enjoyed :)
