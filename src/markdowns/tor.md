# The Onion Router (Tor) and the Hidden serives (DarkWeb)

&nbsp;

You probably heard the word Dark Web right? its is like the wild west of the internet, where all sorts of interesting—and sometimes shady—things happen. It's a place where you can do stuff anonymously, thanks to something called the Tor network. Tor is like a super-secret tunnel that hides your identity online. But how does it do that? Stick around, and I'll break it down for you in simple terms. Get ready for a journey into the digital unknown, where the rules are different, and anything is possible! Welcome to the Tor Network.

![  ](https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Tor-logo-2011-flat.svg/1200px-Tor-logo-2011-flat.svg.png)

&nbsp;

When you use Tor, your internet traffic is routed through a series of nodes called relays. These relays are operated by volunteers around the world. Each relay in the network only knows about the relay that passed it the data and the relay it's passing the data to. This multi-layered encryption is why it's called "The Onion Router" - each layer of encryption is like peeling back a layer of an onion.

<span style="background-color:red">**Relay**</span> : A relay is a computer server that helps to transmit data within the Tor network, There are three types of relays:

&nbsp;

![  ](https://miro.medium.com/v2/resize:fit:768/1*RGLbNwKuC24L3NWm7DwoCQ.png)

&nbsp;

- Entry Node (Guard Node): This is the first relay that your data passes through when you connect to the Tor network. It knows your IP address but doesn't know what you're doing on the internet.
  &nbsp;

- Middle Node: These relays pass your encrypted data from one relay to another. Each middle node only knows about the relay that passed it the data and the relay it's passing the data to. They add additional layers of encryption to your data.
  &nbsp;

- Exit Node: This is the last relay that your data passes through before reaching its final destination (e.g., a website). The exit node decrypts the final layer of encryption and sends your request to the destination. However, the website only sees the IP address of the exit node, not your original IP address, providing anonymity.

&nbsp;

Encryption, In the context of Tor, each relay adds a layer of encryption to the data packet, which is akin to wrapping it in layers of an onion (hence the name "The Onion Router"). Each relay only knows how to decrypt one layer, so they can only see the information about the next relay, maintaining anonymity.

After passing all steps and finally access the hidden service, when data is sent back to you (e.g., a web page you requested), it goes through the same process in reverse, passing through the series of nodes before reaching your device.

In addition to the layered encryption provided by Tor, end-to-end encryption (such as HTTPS for websites) ensures that the content of your communication remains secure even if intercepted by a malicious actor.

&nbsp;
&nbsp;

## <span style="color:red">**Lets see how the communcation b/n the cient and the hidden service handled, including a sample request to help you want kind of request happend in every stepay**</span>

&nbsp;

1. Client Request (Outgoing):

<Code language="javascript">

REQUEST: - Destination: example.onion
Circuit: [Relay1 -> Relay2 -> Relay3]
Encryption: Onion-layered encryption
MESSAGE: Descriptor Request

</Code>

2.Descriptor Retrieval (Outgoing)

<Code language="javascript">
REQUEST: - Destination: Distributed Hash Table (DHT) or Directory Servers 
  Circuit: [Relay4 -> Relay5 -> Relay6] 
  Encryption: Onion-layered encryption 
  MESSAGE: Descriptor Request for example.onion

</Code>

3. Descriptor Response (Incoming):

<Code language="javascript">
RESPONSE: 
Descriptor for example.onion:
  Public key: [Public Key]
  Introduction points: [IP1, IP2, IP3]

</Code>

4. Introduction Point Selection (Outgoing):

<Code language="javascript">
REQUEST:
Destination: IP1 (Introduction Point 1) 
  Circuit: [Relay7 -> Relay8 -> Relay9] 
  Encryption: Onion-layered encryption 
  MESSAGE: Introduction Request for connection to example.onion
</Code>

5. Introduction (Incoming):

<Code language="javascript">
RESPONSE: - Connection established to Introduction Point 1
</Code>

6.Rendezvous Point Setup (Outgoing):

<Code language="javascript">
REQUEST: - Destination: Randomly selected Rendezvous Point 
  Circuit: [Relay10 -> Relay11 -> Relay12] 
  Encryption: Onion-layered encryption 
  MESSAGE: - Rendezvous Point Setup for connection to example.onion
</Code>

7. Rendezvous (Incoming):

<Code language="javascript">
RESPONSE: - Connection established to Rendezvous Point
</Code>

8. End-to-End Communication:


&nbsp;


## <span style="border-bottom:1px solid red">**Let me explain things somethings that might be a bit confusing, which is introduction points and rendezvous point, Distributed Hash Table(DHT)**</span>


&nbsp;

### <span style="border-bottom:1px solid red">**Distributed Hash Table(DHT)**</span>

DHT, or Distributed Hash Table, is a decentralized system for storing and retrieving information across a network. In the context of Tor, the DHT is used by Tor's Onion service protocol to facilitate the discovery of introduction points for hidden services. Each hidden service publishes its descriptor—a summary of its public key and a list of introduction points—into the DHT. Clients looking to connect to a hidden service query the DHT to retrieve the descriptor, allowing them to establish connections with the service's introduction points.

&nbsp;
&nbsp;


### <span style="border-bottom:1px solid red">**introduction points**</span>


When a client wants to connect to a Tor hidden service, it selects one introduction point from the list provided in the hidden service's descriptor. 
The client then establishes a connection to this single introduction point which means it  sends a request to initiate communication with the hidden service, indicating the client's desire to connect.

&nbsp;
&nbsp;


### <span style="border-bottom:1px solid red">**Rendezvous Point**</span>

Rendezvous Point is temporary meeting point established between a client and a hidden service, Both the client and the hidden service independently establish a connection to the rendezvous point through the Tor network. This creates a rendezvous circuit where they can communicate securely without directly knowing each other's IP addresses

&nbsp;
&nbsp;

### <span style="border-bottom:1px solid red">**Quick Summery**</span>

When a client wants to connect to a Tor hidden service, it selects one introduction point from the list provided in the hidden service's descriptor. The client then establishes a connection to this single introduction point and sends a request to initiate communication with the hidden service.


The introduction point forwards this request to the hidden service, and if the hidden service accepts the connection, they both proceed to set up a rendezvous point to establish a meeting point for further communication. Once the rendezvous point is established, the client and the hidden service can communicate directly without involving any additional introduction points












&nbsp;
&nbsp;

### Thanks, 

