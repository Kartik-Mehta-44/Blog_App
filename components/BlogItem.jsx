import React, { useState } from 'react';
import Image from 'next/image';
import { assets } from '@/Assets/assets';
import './BlogItem.css'; // External CSS
import Link from 'next/link';


const BlogItem = ({ title, description, category, image, id}) => {
  return (
    <div className="blog-card">
      <Link href={`/blog/${id}`}>
      <Image src={image} alt="blog-img" width={330} height={250} className="blog-image" />
      </Link>
      <p className="blog-category">{category}</p>

      <div className="blog-content">
        <h5 className="blog-title">{title}</h5>
        <p className="blog-description">{description}</p>
        <Link href={`/blog/${id}`} className="read-more">
          Read more <Image src={assets.arrow} alt="arrow" width={12} className="arrow-icon" />
        </Link>
      </div>
    </div>
  );
};

export default BlogItem;
