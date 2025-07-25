import React from 'react'
import { assets } from '@/Assets/assets'
import Image from 'next/image'
import './BlogTableItem.css'

const BlogTableItem = ({ authorImg, title, author, date, deleteBlog, id }) => {
  const blogDate = new Date(date)

  return (
    <tr className="blog-row">
      <th scope="row" className="blog-author-cell">
        <Image
          src={authorImg || assets.profile_icon}
          alt="author"
          width={40}
          height={40}
          className="blog-author-avatar"
        />
        <span className="blog-author-name">{author || 'Unknown Author'}</span>
      </th>
      <td className="blog-title-cell">{title || 'Untitled'}</td>
      <td className="blog-date-cell">{blogDate.toDateString()}</td>
      <td
        className="blog-action-cell"
        onClick={() => deleteBlog(id)}
      >
        x
      </td>
    </tr>
  )
}

export default BlogTableItem
