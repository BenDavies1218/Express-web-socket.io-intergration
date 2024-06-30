import { useState, useEffect } from "react";
import io from "socket.io-client";

const useMessage = () => {
  const [receivedMessages, setReceivedMessages] = useState([]);
  const [message, setMessage] = useState("");
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    const newSocket = io("http://localhost:3001");
    setSocket(newSocket);

    newSocket.on("receive_message", (data) => {
      setReceivedMessages((prevMessages) => [...prevMessages, data.message]);
    });

    return () => newSocket.close();
  }, []);

  const sendMessage = () => {
    if (socket && message) {
      socket.emit("send_message", { message });
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
