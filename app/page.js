'use client'
import Image from "next/image";
import styles from "./page.module.css";
import Header from "@/components/Header";
import BlogList from "@/components/BlogList";
import Footer from "@/components/Footer";
import { ToastContainer } from "react-toastify";

export default function Home() {
  return (
   <>
   <ToastContainer theme="dark"/>
   <Header/>
   <BlogList/>
   <Footer/>
   </>
  );
}
