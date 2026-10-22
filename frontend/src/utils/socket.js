import { io } from "socket.io-client";

const socket = io("http://localhost:3000", {
  autoConnect: false,
  transports: ["websocket"],
  reconnection: false,
});

export default socket;