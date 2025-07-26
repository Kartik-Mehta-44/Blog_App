'use client'

import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Footer from '@/components/Footer'
import { assets, blog_data } from '@/Assets/assets'
import './blogPage.css'
import axios from 'axios'

const BlogPage = ({ params }) => {
  const [data, setData] = useState(null)

  const fetchBlogData = async () => {
    const response = await axios.get('/api/blog',{
      params:{
        id: params.id
      }
    });
    setData(response.data);
  }

  useEffect(() => {
    fetchBlogData()
  }, [])

  if (!data) return null

  return (
    <div className="blog-page">
      <header className="blog-header">
        <Link href="/">
          <Image
            src={assets.logo}
            width={130}
            alt="logo"
            className="logo"
          />
        </Link>
        <button className="btn-get-started">
          Get Started
          <Image src={assets.arrow} alt="arrow" className="btn-arrow" />
        </button>
      </header>

      <section className="blog-intro">
        <h1 className="blog-title">{data.title}</h1>
        <Image
          src={data.authorImg}
          width={60}
          height={60}
          alt="author"
          className="author-img"
        />
        <p className="author-name">{data.author}</p>
      </section>

      <article className="blog-content">
        <div className="main-image-wrap">
          <Image
            src={data.image}
            width={1200}
            height={720}
            alt="blog"
            className="main-image"
          />
        </div>

        <p className="section-text">{data.description}</p>

        <div className="social-share">
          <p className="share-text">Share this article on social media</p>
          <div className="social-icons">
            <Image src={assets.facebook_icon} alt="facebook" width={50} />
            <Image src={assets.twitter_icon} alt="twitter" width={50} />
            <Image src={assets.googleplus_icon} alt="google" width={50} />
          </div>
        </div>
      </article>

      <Footer />
    </div>
  )
}

export default BlogPage
