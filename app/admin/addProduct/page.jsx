'use client'

import React, { useState } from 'react'
import { assets } from '@/Assets/assets'
import Image from 'next/image'
import './page.css'
import axios from 'axios'
import { toast } from 'react-toastify'

const Page = () => {
  const [image, setImage] = useState(false)
  const [data, setData] = useState({
    title: '',
    description: '',
    category: 'Startup',
    author: 'Modi JI',
    authorImg: '/author_img.png',
  });

  const onChangeHandler = (event) => {
    const name = event.target.name
    const value = event.target.value
    setData((data) => ({ ...data, [name]: value }))
    console.log(data)
  }

  const onSubmitHandler  = async (e) => {
    e.preventDefault();
    const formData = new FormData();

    formData.append('title', data.title);
    formData.append('description', data.description);
    formData.append('category', data.category);
    formData.append('author', data.author);
    formData.append('authorImg', data.authorImg);
    formData.append('image', image);

    const response = await axios.post('/api/blog',formData);
    if(response.data.success) {
        toast.success(response.data.msg);
        setImage(false);
        setData({
            title: '',
            description: '',
            category: 'Startup',
            author: 'Modi JI',
            authorImg: '/author_img.png',
        });
    }
    else 
        toast.error("Error");
  }

  return (
    <form className="blog-form"onSubmit={onSubmitHandler}>
      <p className="form-heading">Upload Thumbnail</p>
      <label htmlFor="image" className="upload-label">
        <Image
          className="upload-img"
          src={!image ? assets.upload_area : URL.createObjectURL(image)}
          width={140}
          height={70}
          alt="upload"
        />
      </label>
      <input
        onChange={(e) => setImage(e.target.files[0])}
        type="file"
        id="image"
        hidden
        required
      />

      <p className="form-heading">Blog Title</p>
      <input
        name="title"
        onChange={onChangeHandler}
        value={data.title}
        className="form-input"
        type="text"
        placeholder="Type here"
        required
      />

      <p className="form-heading">Blog Description</p>
      <textarea
        name="description"
        onChange={onChangeHandler}
        value={data.description}
        className="form-input"
        placeholder="Write here"
        required
        rows={6}
      />

      <p className="form-heading">Blog Category</p>
      <select
        name="category"
        onChange={onChangeHandler}
        value={data.category}
        className="form-select"
      >
        <option value="Startup">Startup</option>
        <option value="Technology">Technology</option>
        <option value="Lifestyle">Lifestyle</option>
      </select>

      <button type="submit" className="form-button">
        ADD
      </button>
    </form>
  )
}

export default Page
