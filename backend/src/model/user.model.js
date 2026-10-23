import mongoose from "mongoose"


const userSchema = mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    email : {
        type : String,
        unique : true,
        required : true,
        lowercase : true,
        trim:true,
        index:true
    },
    userName:{
        type : String,
        unique : true,
        required : true
    },
    password :{
        type : String,
        required : true
    },
    photo :{
        type : String,
        
    },
    lastSeen: {
  type: Date,
  default: null,
}
}, {timestamp:true })

const userModel = mongoose.model("user", userSchema);
export default userModel;