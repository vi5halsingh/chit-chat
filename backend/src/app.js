import dotenv from "dotenv"
dotenv.config()
import express from "express";
const app = express();
import cors from "cors";
import cookieParser from "cookie-parser"

app.use(express.json());
const corsOption = {
    origin:["http://localhost:5173",
            "http://localhost:3000"
    ],
    allowedHeaders :["Content-Type","Authorization"],
    methods:['POST','GET','PUT','PATCH','DELETE'],
    credentials : true
}
app.use(cors(corsOption))
app.use(express.urlencoded({extended :true}))
app.use(cookieParser())

app.use((err, req, res, _) =>{
   const  statusCode = err.statusCode || 500
   const message  = err.statusMessage || "something went wrong"

    console.log(`error occures with status code ${statusCode} and message : ${message}`)

    res.status(statusCode).json({
        success :false,
        status : statusCode,
        message : message,
        stack : process.env.NODE_ENV === "development" ? err.stack : undefined
    })
})

import userRouter from "./routes/user.routes.js";

app.use("/api",userRouter )

import conversationRoutes from "./routes/conversation.routes.js";

app.use("/api/conversations", conversationRoutes);

import messageRoutes from "./routes/message.routes.js";

app.use("/api/message", messageRoutes);


export default app;
