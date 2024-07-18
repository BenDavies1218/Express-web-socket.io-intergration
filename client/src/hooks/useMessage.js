import { useState, useEffect } from "react";
import io from "socket.io-client";

const useMessage = (props) => {
  const [receivedMessages, setReceivedMessages] = useState([]);
  const [message, setMessage] = useState("");
  const [socket, setSocket] = useState(null);
  const userId = props.userId;
  const chatId = props.chatId;

  const URL =
    process.env.NODE_ENV === "production" ? undefined : "http://localhost:3001";

  useEffect(() => {
    const newSocket = io(URL);
    setSocket(newSocket);

    newSocket.emit("join_room", chatId);

    newSocket.on("load_messages", (messages) => {
      setReceivedMessages(messages.map((msg) => msg.message));
    });

    newSocket.on("receive_message", (data) => {
      setReceivedMessages((prevMessages) => [...prevMessages, data.message]);
    });

    return () => newSocket.close();
  }, [URL, chatId]);

  const sendMessage = () => {
    if (socket && message) {
      socket.emit("send_message", { message, userId, chatId });
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
