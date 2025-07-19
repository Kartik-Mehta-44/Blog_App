import React from 'react';
import { assets } from '@/Assets/assets';
import Sidebar from '@/components/AdminComponents/Sidebar';
import Image from 'next/image';
import './layout.css';  // make sure this path matches your project structure
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Layout({ children }) {
  return (
    <div className="layout-container">
        <ToastContainer theme='dark'/>
      <Sidebar />

      <div className="layout-content">
        <header className="layout-header">
          <h3 className="layout-title">Admin Panel</h3>
          <Image
            className="layout-profile-icon"
            src={assets.profile_icon}
            width={40}
            height={40}
            alt="profile"
          />
        </header>

        <main className="layout-children">
          {children}
        </main>
      </div>
    </div>
  );
}
