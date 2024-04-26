import { AiOutlineArrowRight } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import './blogs.css' // Import CSS file for regular CSS styles
import { useState } from 'react'
import blogsJson from './blogs.json'
function BlogData({ data }) {
  return (
    <Link to={`/blog/${data.path}`} className="blog-link">
      <div className="blog-card">
        <span className="blog-category">{data.category.split(' ')[0]}</span>
        <h2 className="blog-title">{data.title}</h2>
        <p className="blog-abstract">{data.abstract}..</p>

        <div className="blog-footer">
          <a className="blog-learn-more">
            Learn More{' '}
            <span className="arrow-icon">
              <AiOutlineArrowRight />
            </span>
          </a>

          <a className="blog-read-time">{data.readTime}</a>
        </div>
      </div>
    </Link>
  )
}

export default function Blogs() {
  const [blogs, setBlogs] = useState([1, 2, 3, 4])
  const blogsData = {
    id: 1,
    category: 'Technology',
    title: 'Sample Blog Title',
    abstract:
      'This is a sample abstract for the blog post. It contains some information about the content of the blog post.',
  }

  const sampleReadTime = '5 min read'
  return (
    <div className="MainBlogs">
      {blogsJson.map((blog) => (
        <BlogData data={blog} />
      ))}
    </div>
  )
}
