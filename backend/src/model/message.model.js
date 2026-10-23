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
    },
    messageType : {
        type : String,
        enum:['text', 'pdf', 'image','video','file','audio'],
        default:'text'
    },

    media :{
        url :{
            type : String,
            default : null
        },
        size : {
            type : Number
        },
        mimeType:{
            type : String,
            default : null
        },
        fileName :{
            type:String,
            default : null
        },
        publicId :{
            type:String,
            default:null
        }
    }
    
}, {timestamp:true })

const messageModel = mongoose.model("message", messageSchema);
export default messageModel;