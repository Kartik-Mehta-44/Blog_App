import { assets } from '@/Assets/assets';
import React, { useState } from 'react';
import Image from 'next/image';
import './Header.css'; // Link to external CSS
import axios from 'axios';
import { toast } from 'react-toastify';
import Link from 'next/link';

const Header = () => {

  const [email, setEmail] = useState("");

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("email", email);
    const response = await axios.post('/api/email', formData);
    if(response.data.success) {
      toast.success(response.data.msg);
      setEmail("");
    }
    else {
      toast.error("Error");
    }
  }

  return (
    <div className="header-container">
      <div className="header-inner">
        <Image src={assets.logo} className="logo" alt="logo" />
        <Link href='/admin'>
        <button className="get-started-btn">
          Get Started <Image src={assets.arrow} alt="arrow" />
        </button>
        </Link>
      </div>

      <div className="header-content">
        <h1 className="header-title">Latest Blogs</h1>
        <p className="header-description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam molestiae aliquam quas culpa aut saepe. Incidunt non animi voluptate cum numquam fuga eaque ea beatae, facilis cupiditate repellat! Blanditiis, saepe!
        </p>
        <form  onSubmit={onSubmitHandler} className="subscribe-form" action="">
          <input onChange={(e) =>setEmail(e.target.value) } value={email} type="email" placeholder="Enter your mail" className="email-input" />
          <button type="submit" className="subscribe-button">Subscribe</button>
        </form>
      </div>
    </div>
  );
};

export default Header;
