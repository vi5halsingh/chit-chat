import { useEffect } from "react";
import socket from "../utils/socket.js";

export default function useSocket(isAuthenticated) {
  useEffect(() => {
    console.log("AUTH STATE:", isAuthenticated);

    if (!isAuthenticated) {
      console.log("User unauthenticated; disconnecting socket");
      socket.disconnect();
      return;
    }

    const onConnect = () => {
      console.log("CONNECTED:", socket.id);
    };

    const onDisconnect = (reason) => {
      console.log("DISCONNECTED:", reason);
    };

    const onConnectError = (error) => {
      console.error("CONNECT ERROR:", {
        message: error.message,
        description: error.description,
        context: error.context,
      });
    };

    socket.on("connect", onConnect);
    socket.on("disconnect", onDisconnect);
    socket.on("connect_error", onConnectError);

    socket.connect();
    

    return () => {
      console.log("Socket effect cleanup");

      socket.off("connect", onConnect);
      socket.off("disconnect", onDisconnect);
      socket.off("connect_error", onConnectError);

      socket.disconnect();
    };
  }, [isAuthenticated]);
}
