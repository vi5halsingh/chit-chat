import mongoose from "mongoose";


const conversationSchema = mongoose.Schema({
    participant : [{
        type:mongoose.Schema.Types.ObjectId,
        ref:'user',
        required:true
    }],
    lastmessage : {
        type:mongoose.Schema.Types.ObjectId,
        ref:"message",
        default : null

    }
}, {timeStamp : true})


const conversationModel = mongoose.model("conversation", conversationSchema)

export default conversationModel;
