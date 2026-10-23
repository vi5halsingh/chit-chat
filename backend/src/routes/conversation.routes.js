
import express from "express";
import { createConversation } from "../controllers/conversation.controller.js";
import { isAuthenticated } from "../middlewares/auth.middleware.js";


const router = express.Router();

router.post("/", isAuthenticated, createConversation);

export default router;