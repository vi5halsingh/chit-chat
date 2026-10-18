import mongoose from "mongoose";


const conversationSchema = mongoose.Schema({
    participant : [{
        type:mongoose.Schema.Types.ObjectId,
        ref:'user'
    }],
    lastmessage : {
        type:String,

    }
}, {timeStamp : true})


const conversation = mongoose.model("conversation", conversationSchema)

export default conversation;
