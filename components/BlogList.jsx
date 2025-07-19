import React, { useState } from 'react';
import BlogItem from '@/components/BlogItem';
import { blog_data } from '@/Assets/assets';
import './BlogList.css'; // Optional if using plain CSS for styling buttons/layout

const BlogList = () => {

  const [menu, setMenu] = useState("All");

  return (
    <div className="blog-list">
      <div className="filter-buttons">
        <button onClick={()=> setMenu('All')} className={menu==="All" ? "filter-btn active" : "filter-btn"}>All</button>
        <button onClick={()=> setMenu('Startup')} className={menu==='Startup' ? "filter-btn active" : "filter-btn"}>Startup</button>
        <button onClick={()=> setMenu('Technology')} className={menu==='Technology' ? "filter-btn active" : "filter-btn"}>Technology</button>
        <button onClick={()=> setMenu('Lifestyle')} className={menu==='Lifestyle' ? "filter-btn active" : "filter-btn"}>Lifestyle</button>
      </div>

      <div className="blog-grid">
        {blog_data.filter((item) => menu === "All" ? true : item.category === menu).map((item, index) => (
          <BlogItem
            key={index}
            image={item.image}
            title={item.title}
            description={item.description}
            category={item.category}
            id={item.id}
          />
        ))}
      </div>
    </div>
  );
};

export default BlogList;
