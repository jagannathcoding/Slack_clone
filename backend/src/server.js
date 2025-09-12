import express from "express";
import { ENV } from "./config/env.js";
import { connectDB } from "./config/db.js";


const app=express();



app.get("/",(req,res)=>{
    res.send("Hello WOrld 12");
})



app.listen(ENV.PORT,()=>{
    console.log("Server is running on port",ENV.PORT);
    connectDB()
})