import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/database.js";
import userRoute from "./routes/userRoutes.js"     


dotenv.config({});
const app=express();
const PORT =process.env.PORT || 3000


// middleware
app.use(express.json());

// test route
app.get("/",(req,res)=>{
 res.send("Backend Running");
});

app.get("/app",(req,res)=>{
    res.send("app")
})

 // routes 
 app.use("/api/v1/user",userRoute) //http://localhost:8080/api/v1/user/register
 
 // database connect
connectDB();

app.listen(5000,(req,res)=>{
    console.log(`server listen at port 5000`);
})