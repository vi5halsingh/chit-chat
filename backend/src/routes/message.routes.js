import express from "express";
import { sendMessage } from "../controllers/message.controller.js";
import { isAuthenticated } from "../middlewares/auth.middleware.js";
import upload from "../middlewares/multer.middleware.js";

const router = express.Router();
router.post(
  "/",
  isAuthenticated,
  upload.single("media"),
  sendMessage
);

export default router;