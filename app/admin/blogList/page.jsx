'use client'

import React, { useEffect, useState } from 'react'
import './blogList.css'
import BlogTableItem from '@/components/AdminComponents/BlogTableItem'
import axios from 'axios'
import { toast } from 'react-toastify'

const BlogListPage = () => {
  const [blogs, setBlogs] = useState([])

  const fetchBlogs = async () => {
    const { data } = await axios.get('/api/blog')
    setBlogs(data.blogs)
  }

  const deleteBlog = async (id) => {
    try {
      // interpolate the id directly into the URL so Next sees `?id=…`
      const { data } = await axios.delete(`/api/blog?id=${id}`)
      toast.success(data.msg)
      fetchBlogs()
    } catch (err) {
      toast.error(err.response?.data?.error || 'Delete failed')
    }
  }

  useEffect(() => {
    fetchBlogs()
  }, [])

  return (
    <div className="blog-list-container">
      <h1 className="blog-list-heading">All blogs</h1>
      <div className="blog-table-wrapper">
        <table className="blog-table">
          <thead className="blog-table-head">
            <tr>
              <th className="blog-table-cell blog-table-cell--author">
                Author name
              </th>
              <th className="blog-table-cell">Blog title</th>
              <th className="blog-table-cell">Date</th>
              <th className="blog-table-cell">Action</th>
            </tr>
          </thead>
          <tbody>
            {blogs.map((item) => (
              <BlogTableItem
                key={item._id}
                id={item._id}
                title={item.title}
                author={item.author}
                authorImg={item.authorImg}
                date={item.date}
                deleteBlog={deleteBlog}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default BlogListPage
