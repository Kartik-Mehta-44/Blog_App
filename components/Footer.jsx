import React from 'react';
import Image from "next/image";
import { assets } from '@/Assets/assets';
import './Footer.css'; // Assuming Footer.css is in the same folder

const Footer = () => {
  return (
    <div className="footer-container">
      <Image src={assets.logo_light} alt="logo" width={120} />
      <p className="footer-text">All rights reserved. Copyright @blogger</p>
      <div className="footer-icons">
        <Image src={assets.facebook_icon} alt="facebook" width={40} />
        <Image src={assets.twitter_icon} alt="twitter" width={40} />
        <Image src={assets.googleplus_icon} alt="google" width={40} />
      </div>
    </div>
  );
};

export default Footer;
