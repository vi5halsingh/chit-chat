import messageModel from "../model/message.model.js";
import conversationModel from "../model/conversation.model.js";
import {io} from "../server.js"

export const sendMessage = async (req, res) => {
  try {
    const { conversationId, message } = req.body;
    const senderId = req.user._id;
    const file = req.file;

    if (!conversationId) {
      return res.status(400).json({
        success: false,
        message: "Conversation ID is required",
      });
    }

    if (!message?.trim() && !file) {
      return res.status(400).json({
        success: false,
        message: "Message or media is required",
      });
    }

    const conversation = await conversationModel.findOne({
      _id: conversationId,
      participant: senderId,
    });

    if (!conversation) {
      return res.status(404).json({
        success: false,
        message: "Conversation not found",
      });
    }

    let messageType = "text";

    if (file) {
      if (file.mimetype.startsWith("image/")) {
        messageType = "image";
      } else if (file.mimetype.startsWith("video/")) {
        messageType = "video";
      } else if (file.mimetype.startsWith("audio/")) {
        messageType = "audio";
      } else {
        messageType = "file";
      }
    }

    const newMessage = await messageModel.create({
      conversation: conversationId,
      sender: senderId,
      message: message?.trim() || "",
      messageType,
      media: file
        ? {
            url: `/uploads/${file.filename}`,
            fileName: file.originalname,
            mimeType: file.mimetype,
            size: file.size,
          }
        : undefined,
    });

    conversation.lastmessage = newMessage._id;
    await conversation.save();

    const recieverId = conversation.participant.find(
      (participant) =>{ participant.id !== senderId}
    )

    if(recieverId){
      io.to(recieverId.toString()).emit("recieve-message", newMessage)
    }

    return res.status(201).json({
      success: true,
      message: "Message sent successfully",
      data: newMessage,
    });
  } catch (error) {
    console.error("Send message error:", error);

    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};