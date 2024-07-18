import useMessage from "../hooks/useMessage";

export default function TournamentChat(props) {
  const { message, setMessage, receivedMessages, sendMessage } =
    useMessage(props);

  return (
    <>
      <h1>Messages</h1>
      <ul>
        {receivedMessages.map((msg, index) => (
          <li key={index}>{msg}</li>
        ))}
      </ul>
      <input
        placeholder="message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button onClick={sendMessage}>Send a Message</button>
    </>
  );
}
