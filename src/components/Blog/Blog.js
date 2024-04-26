import Markdown from 'markdown-to-jsx'
import { useEffect, useState } from 'react'
import Code from './Code'
import './blog.css'
import { useLocation } from 'react-router-dom'
const Blog = () => {
  const [postContent, setPostContent] = useState('')

  const location = useLocation()

  console.log(location.pathname.split('/')[2])

  useEffect(() => {
    import(`../../markdowns/${location.pathname.split('/')[2]}.md`).then(
      (res) => {
        fetch(res.default)
          .then((response) => response.text())
          .then((response) => setPostContent(response))
          .catch((err) => console.log(err))
      },
    )
  }, [])

  return (
    <article className="article">
      <div className="container">
        <div className="post-wrapper">
          <Markdown
            options={{
              overrides: {
                Code: {
                  component: Code,
                },
              },
            }}
          >
            {postContent}
          </Markdown>
        </div>
      </div>
    </article>
  )
}

export default Blog
