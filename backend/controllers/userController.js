import {User} from "../models/userModel.js"
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken";
export const register = async(req,res)=>{
     console.log(req.body);
    try {
        const {fullname,username,password, confirmpassword,gender}=req.body;
        if(!fullname || !username || !password || !confirmpassword || !gender){
            return res.status(400).json({message:"all fields are required"})

        }
        if(password!== confirmpassword){
             return res.status(400).json({message:"password and confirmPassword not Same"})
        }

        const user = await User.findOne({username});
        if(user){
             return res.status(400).json({message:"username alredy exits plz try different username"});
        }
          const maleProfilePhoto =`https://api.dicebear.com/9.x/adventurer/svg?seed=${username}`;
          const femaleProfilePhoto =`https://api.dicebear.com/9.x/adventurer/svg?seed=${username}`;
        const hashedPassword =await bcrypt.hash(password,10);
        await User.create({
            username,
            fullname,
            password:hashedPassword,
            gender,
            profileimage:gender === "male" ?maleProfilePhoto:femaleProfilePhoto,
        });
        return res.status(201).json({
            message:"account is created success",
            success:true
        })
        
    } catch (error) {
        console.log(error)
        
    }
};

// login

export const login = async (req,res)=>{
    try {
        
        const {username,password}=req.body;
        if( !username || !password ){
            return res.status(400).json({message:"all fields are required"})

        };
        const user= await User.findOne({username});
        if(!user){
            return res.status(400).json({
                message:"incorrect password or username",
                success:false
            });
        };
        const isPasswordMatch = await bcrypt.compare(password,user.password);
        if(!isPasswordMatch){
            return res.status(400).json({
                message:"incorrect password or username",
                success:false
            });
        };

        const tokenData ={
            userId:user._id
        };
        const token= await jwt.sign(tokenData,process.env.JWT_SECRET_KEY,{expiresIn:"1d"});//process.env.JWT_SECRET_KEY

        return res.status(200).cookie("token",token,{maxAge:1*24*60*60*1000}).json({
            _id:user._id,
            username:user.username,
            fullname:user.fullname,
            profileimage:user.profileimage,
             message:"loging",
            success:true
        });
        
        
    } catch (error) {
        console.log(error)
    }
};

export const logout = (req,res)=>{
    try {
        return res.status(200).cookie("token","",{maxAge:0}).json({
            message:"logged out successfully"
        })
    } catch (error) {
        console.log(error)
        
    }

};


export const getOtherUser = async (req,res)=>{
    try {
        
        const loggedInUserId = req.id;
        const otherUsers= await User.find({_id:{$ne:loggedInUserId}}).select("-password");
        return res.status(200).json(otherUsers)
    } catch (error) {
        console.log(error);
    }
};