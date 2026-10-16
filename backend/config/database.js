import mongoose from "mongoose"
import dotenv from "dotenv";

dotenv.config({});
const connectDB =async ()=>{
  await mongoose.connect(process.env.MONGO_URI).then(()=>{
    console.log("database connected");
  }).catch((err)=>{
    console.log("Database connection failed:",err);
  })
};

export default connectDB;