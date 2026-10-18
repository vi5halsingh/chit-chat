import mongoose from "mongoose"

const messageSchema = mongoose.Schema({
    conversation :{
        type:mongoose.Schema.Types.ObjectId,
        ref:"conversation"
    },
    message : {
        type : String,
        required : true
    },
    sender : {
        type :mongoose.Schema.Types.ObjectId,
        ref : "user",
        required : true
    },
    status : {
        type : String,
        enum : ['sent', 'delevared','read'],
        default:'sent'
    }
}, {timeStamp:true })

const messageModel = mongoose.model("user", messageSchema);
export default messageModel;