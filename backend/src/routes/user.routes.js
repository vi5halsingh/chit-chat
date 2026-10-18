import express from "express"
import {loginUser, userRegister} from "../controllers/user.controller.js"
import upload from "../middlewares/multer.middleware.js";
import { isAuthenticated } from "../middlewares/auth.middleware.js";
const router = express.Router()

router.post('/register',upload.single("photo"), userRegister);
router.post('/login', loginUser);

router.get('/profile',isAuthenticated ,(req, res)=>{
    const user = req.user;
    if(!user){
       return res.status(401).json({
            success : false,
            message : "User not logged in",
            
        })
    }

    res.status(200).json({
        success : true,
        message : "user profile fateched",
        data : user
    })
})

export default router;