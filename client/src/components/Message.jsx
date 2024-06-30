import useMessage from "../hooks/useMessage";

export default function Messager() {
  const { message, setMessage, receivedMessages, sendMessage } = useMessage();
  return (
    <>
      <input
        placeholder="message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button onClick={sendMessage}>Send a Message</button>
      <h1>Messages</h1>
      <ul>
        {receivedMessages.map((msg, index) => (
          <li key={index}>{msg}</li>
        ))}
      </ul>
    </>
  );
}
