import mongoose from 'mongoose';

const uri = "mongodb+srv://km3078372:vjZ3@rtef6DM3.8@firstcluster.bhifzyi.mongodb.net/blog_app";


export const connectDB = async () => {
    await mongoose.connect(uri);
    console.log("DB Connected");
}