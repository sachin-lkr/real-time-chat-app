import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/database.js";
const app=express();

dotenv.config({})
const PORT =process.env.PORT || 8080
 connectDB();

app.listen(PORT,(req,res)=>{
    console.log(`server listen at port ${PORT}`);
})