import mongoose from "mongoose"


const chatSchema = mongoose.Schema({
    message : {
        type : String,
        required : true
    },
    sentBy : {
        type :mongoose.Schema.ObjectId,
        ref : "user",
        required : true
    },
    status : {
        type : String,
        enum : ['sent', 'delevared','read'],
        default:'sent'
    }
}, {timeStamp:true })

const chatModel = mongoose.model("user", chatSchema);
export default chatModel;