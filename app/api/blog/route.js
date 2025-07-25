import { connectDB } from "@/lib/config/db";
import BlogModel from "@/lib/models/BlogModel";
import {writeFile} from 'fs/promises';
import { NextResponse } from "next/server";
const fs = require('fs');

const LoadDB = async () => {
    await connectDB();
}
LoadDB();

// To get all blogs
export async function GET(request) {

    const blogID = request.nextUrl.searchParams.get("id");
    if(blogID) {
        const blog = await BlogModel.findById(blogID);
        return NextResponse.json(blog);
    }
    else {
        const blogs = await BlogModel.find({});
        return NextResponse.json({blogs})
    }
}

// API endpoint for uploading
export async function POST(request) {

    const formData = await request.formData();
    const timeStamp = Date.now();

    const image = formData.get('image');
    const imageByteData = await image.arrayBuffer();
    const buffer = Buffer.from(imageByteData);
    const path = `./public/${timeStamp}_${image.name}`;
    await writeFile(path, buffer);

    const imageUrl = `/${timeStamp}_${image.name}`;

    const blogData = {
        title: `${formData.get('title')}`,
        description: `${formData.get('description')}`,
        category: `${formData.get('category')}`,
        author: `${formData.get('author')}`,
        image: imageUrl,
        authorImg: `${formData.get('authorImg')}`
    } 

    await BlogModel.create(blogData);
    console.log("Blog Saved");

    return NextResponse.json({
        success: true,
        msg: "Blog Added"
    });
}

// Deleting -

export async function DELETE(request) {
    const id = await request.nextUrl.searchParams.get('id');
    const blog = await BlogModel.findById(id);
   try {
    // blog.image is like "/12345_myimage.png"
    const filePath = path.join(process.cwd(), 'public', blog.image)
    await unlink(filePath)
  } catch (err) {
    console.warn('Could not delete image file:', err.message)
    // We continue even if unlink fails
  }
    await BlogModel.findByIdAndDelete(id);
    
    return NextResponse.json({msg: "Blog Deleted"});
}