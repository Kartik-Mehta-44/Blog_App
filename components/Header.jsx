import { assets } from '@/Assets/assets';
import React from 'react';
import Image from 'next/image';
import './Header.css'; // Link to external CSS

const Header = () => {
  return (
    <div className="header-container">
      <div className="header-inner">
        <Image src={assets.logo} className="logo" alt="logo" />
        <button className="get-started-btn">
          Get Started <Image src={assets.arrow} alt="arrow" />
        </button>
      </div>

      <div className="header-content">
        <h1 className="header-title">Latest Blogs</h1>
        <p className="header-description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam molestiae aliquam quas culpa aut saepe. Incidunt non animi voluptate cum numquam fuga eaque ea beatae, facilis cupiditate repellat! Blanditiis, saepe!
        </p>
        <form className="subscribe-form" action="">
          <input type="email" placeholder="Enter your mail" className="email-input" />
          <button type="submit" className="subscribe-button">Subscribe</button>
        </form>
      </div>
    </div>
  );
};

export default Header;
