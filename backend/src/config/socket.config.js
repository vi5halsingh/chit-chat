import {Server} from "socket.io"

export const initializeSocket = (httpServer) =>{
const io = new Server(httpServer,{
    credential:true,
    origin:"http://localhost:5173"
})

io.on("connection",(socket) =>{
    console.log(`new connection with socket ${socket.id}`)

    socket.on("disconnect",() =>{
        console.log(`connect dicsonnected with socket ${socket.id}`)
    });
});

return io;
};