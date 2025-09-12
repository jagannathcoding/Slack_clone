import express from "express";
import { ENV } from "./config/env.js";


const app=express();



app.get("/",(req,res)=>{
    res.send("Hello WOrld 12");
})

console.log("Mongo_uri",ENV.MONGO_URI); 

app.listen(ENV.PORT,()=>{
    console.log("Server is running on port",ENV.PORT);
})