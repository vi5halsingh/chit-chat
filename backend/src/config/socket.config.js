import { Server } from "socket.io";

export const initializeSocket = (httpServer) => {
  const io = new Server(httpServer, {
    cors: {
      origin: "http://localhost:5173",
      credentials: true,
    },
  });

  io.engine.on("initial_headers", (headers, request) => {
    console.log("HANDSHAKE RECEIVED:", request.url);
  });

  io.on("connection", (socket) => {
    console.log("SOCKET CONNECTED:", socket.id);
  });

//   io.engine.on("connection_error", (error) => {
//     console.log("ENGINE ERROR:", error.code, error.message);
//   });

  io.engine.on("connection_error", (error) => {
  console.log("SOCKET ENGINE ERROR:", {
    code: error.code,
    message: error.message,
    context: error.context,
  });
});

  return io;
};