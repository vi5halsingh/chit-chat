import conversationModel from "../model/conversation.model.js";

export const createConversation = async (req, res) => {
  try {
    const { receiverId } = req.body;
    const senderId = req.user._id;

    if (!receiverId) {
      return res.status(400).json({
        success: false,
        message: "Receiver ID is required",
      });
    }

    if (senderId.toString() === receiverId.toString()) {
      return res.status(400).json({
        success: false,
        message: "You cannot create a conversation with yourself",
      });
    }

    // Check whether a conversation already exists
    let conversation = await conversationModel.findOne({
      participant: { $all: [senderId, receiverId] },
      $expr: {
        $eq: [{ $size: "$participant" }, 2],
      },
    });

    // Create a new conversation if it doesn't exist
    if (!conversation) {
      conversation = await conversationModel.create({
        participant: [senderId, receiverId],
      });
    }

    return res.status(200).json({
      success: true,
      message: "Conversation fetched successfully",
      data: conversation,
    });
  } catch (error) {
    console.error("Create conversation error:", error);

    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};
