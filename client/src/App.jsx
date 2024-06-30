import "./App.css";
import io from "socket.io-client";
import { useState, useEffect } from "react";

function App() {
  const [sentMessages, setSentMessages] = useState([]);
  const [message, setMessage] = useState("");
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    const newSocket = io("http://localhost:3001");
    setSocket(newSocket);

    newSocket.on("receive_message", (data) => {
      setSentMessages((prevMessages) => [...prevMessages, data.message]);
    });

    return () => newSocket.close();
  }, []);

  const sendMessage = () => {
    if (socket && message) {
      socket.emit("send_message", { message });
      setMessage("");
    }
  };

  return (
    <div className="App">
      <input
        placeholder="message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button onClick={sendMessage}>Send a Message</button>
      <h1>Messages</h1>
      <ul>
        {sentMessages.map((msg, index) => (
          <li key={index}>{msg}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
