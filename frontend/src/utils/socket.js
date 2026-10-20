import {io} from "socket.io-client"
const url = 'http://localhost:5173'
const socket = io(url,{
    autoConnect:false,
    withCredentials:true,
    
})

socket.on("connect",() =>{
    console.log("socket connected", socket.id);
});

socket.on("connect_error", (error)=>{
    console.log("error while connection socket",error)
})

export default socket;