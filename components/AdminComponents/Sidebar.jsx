import React from 'react'
import { assets } from '@/Assets/assets'
import Image from 'next/image'
import Link from 'next/link'
import './Sidebar.css'    // ← make sure this path is correct

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar__logo">
        <Link href='/'>
          <Image src={assets.logo} width={120} alt="logo" />
        </Link>
      </div>

      <div className="sidebar__content">
        <div className="sidebar__links">
          <Link href="/admin/addProduct" className="sidebar__link">
            <Image src={assets.add_icon} alt="add" width={28} />
            <p>Add Blogs</p>
          </Link>

          <Link href="/admin/blogList" className="sidebar__link">
            <Image src={assets.blog_icon} alt="blog" width={28} />
            <p>Blog Lists</p>
          </Link>

          <Link href="/admin/subscriptions" className="sidebar__link">
            <Image src={assets.email_icon} alt="email" width={28} />
            <p>Subscriptions</p>
          </Link>
        </div>
        
      </div>
    </div>
  )
}

export default Sidebar
