import jwt from "jsonwebtoken"


export  const isAuthenticated = (req, res, next) =>{
    try {
        
    
    const token = req.cookies?.token || req.headers.Authorization?.replace("Bearer","")

    if(!token){
        return res.status(401).json({
            success : false,
            message : "User not logged in",

        })
    }
  
    const user = jwt.verify(token,process.env.JWT_SECRET)
    req.user = user;
    next ()
    } catch (error) {
        console.log(error)
           if (error.name === "JsonWebTokenError" || error.name === "TokenExpiredError") {
        return res.status(401).json({
            success: false,
            message: "Invalid or expired token",
        });
    }
        return res.status(500).json({
            success : false,
            message : "something went wrong",
            stack : error.stack
        })
    }

}