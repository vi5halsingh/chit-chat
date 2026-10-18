import userModel from "../model/user.model.js";
import bcrypt from "bcrypt"
import jwt from 'jsonwebtoken'

export const userRegister = async(req, res)=>{
    const {name, email, userName,password} = req.body;
    const photoUrl = req.file ? `/uploads/${req.file.filename} `: null ;
    // console.log("photo", photoUrl)
    try {
        const isExist = await userModel.findOne({$or : [{email}, {userName}]})
    
        if (isExist){
            throw new Error("user already exist with email or user name")
        }
    
        const hashPassword = bcrypt.hashSync(password, 10)
        
        const user = await userModel.create({
            name : name,
            email :email,
            userName :userName,
            password : hashPassword,
            photo : photoUrl  || ''
        })
        if(!user){
            throw new Error("error while creating an user");
        }
        res.status(200).json({
            success :true,
            message : "user created successfully",
            data : user,

        })
    
    } catch (error) {
        console.log(error)
        res.status(error.statusCode || 500).json({
            success : false,
            message : error.message || "something went wrong while creating user",
            stack : error.stack
        })
    }
    
}

export const loginUser = async(req, res) =>{
    const {userName, email,password } = req.body;
   
    if(!userName && !email) {
        throw new Error("email or user name is required")
    }
    if(!password) {
        throw new Error("password is required")
    }
    try {
         const user = await userModel.findOne({$or : [{email}, {userName}]})
    
        if (!user){
            throw new Error("user not exist with email or user name")
        }
    
        const isPasswordMatch = bcrypt.compare(password,user.password)

        if (!isPasswordMatch){
            throw new Error("incorrect password")
        }
        
        const token =jwt.sign({
            name : user.email,
            email : user.email,
            _id : user._id,
            userName : user.userName,
            photo : user.photo || ""
        }, process.env.JWT_SECRET, {
            expiresIn:'1d'
        })

        res.cookie('token', token,{
            httpOnly : true,
            secure : process.env.NODE_ENV === "production",
            sameSite:"strict",
            maxAge:7 * 24 * 60 * 60 * 1000
        })
        res.status(200).json({
            success : true,
            message : "user logged in successfully",
            data : token
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            success : false,
            message : "something went wrong"
        })
    }
}

