import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const uri = process.env.URL;
console.log(uri);



export const connectDB = async () => {
    await mongoose.connect(uri);
    console.log("DB Connected");
}