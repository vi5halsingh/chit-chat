import mongoose from "mongoose"
const MONGO_URI = process.env.MONGO_URI;

console.log("MONGO_URI", MONGO_URI)
async function Connectdb(){
     await mongoose.connect(MONGO_URI).then(()=>{
        console.log("database connected")
     })
}

export default Connectdb