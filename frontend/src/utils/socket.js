import { io } from "socket.io-client";

const socket = io(import.meta.env.VITE_SOCKET_URL || "http://localhost:3000", {
  autoConnect: false,
  // Keep Socket.IO's polling fallback while diagnosing the WebSocket path.
  // The client will upgrade to WebSocket automatically when possible.
});

export default socket;
