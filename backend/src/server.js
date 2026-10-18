import app from "./app.js";
import http from "http";
import Connectdb from "./config/db.js";
const PORT = process.env.PORT;
const server = http.createServer(app);

import { initializeSocket } from "./config/socket.config.js";

export const io = initializeSocket(server);

server.listen(PORT, () =>{
    console.log(`server is running on port ${PORT}`)
    Connectdb()
})
