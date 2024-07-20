import { useState, useEffect } from "react";
import io from "socket.io-client";

const useMessage = (props) => {
  const [receivedMessages, setReceivedMessages] = useState([]);
  const [message, setMessage] = useState("");
  const [socket, setSocket] = useState(null);

  // USE PROPS TO SET THESE
  const username = "ben";
  const userId = "669bb4c46b124aa44f5c2f95";
  const tournamentChatId = "669bb4c56b124aa44f5c2f98";

  // "undefined" means the URL will be computed from the `window.location` object. but in a dev environment use the local port
  const URL =
    process.env.NODE_ENV === "production" ? undefined : "http://localhost:3001";

  useEffect(() => {
    // Create a new socket connection
    const newSocket = io(URL);
    setSocket(newSocket);

    // Join the room
    newSocket.emit("join_room", tournamentChatId);

    // Listen for incoming messages
    newSocket.on("receive_message", (data) => {
      console.log(data);
      setReceivedMessages((prevMessages) => [...prevMessages, data]);
    });

    // Listen for previous messages when joining a room
    newSocket.on("load_messages", (messages) => {
      console.log(messages);
      setReceivedMessages(messages);
    });

    // Clean up on unmount
    return () => {
      newSocket.off("receive_message");
      newSocket.off("load_messages");
      newSocket.close();
    };
  }, [URL, tournamentChatId]);

  const sendMessage = (e) => {
    e.preventDefault();

    if (socket && message) {
      socket.emit("send_message", {
        message,
        userId,
        tournamentId: tournamentChatId,
        username,
      });
      setMessage("");
    }
  };

  return {
    receivedMessages,
    message,
    setMessage,
    sendMessage,
  };
};

export default useMessage;
