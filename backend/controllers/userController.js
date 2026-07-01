import {User} from "../models/userModel"
import bcrypt from "bcryptjs"
export const register = async(req,res)=>{
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

        const hashedPassword =await bcrypt.hash(password,10);
        await User.create({
            username,
            fullname,
            password:hashedPassword,
            gender,
            profileimage
        })
        
    } catch (error) {
        
    }
}