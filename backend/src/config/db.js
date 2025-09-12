import mongoose from "mongoose";
import { ENV } from "./env.js";

export const connectDB=async()=>{
    try {
       const conn= await mongoose.connect(ENV.MONGO_URI);
        console.log("Connected to MongoDB successfully", conn.connection.host);
    } catch (error) {
        console.log("Error in connecting to MongoDB",error.messsage);
        process.exit(1);
    }
}