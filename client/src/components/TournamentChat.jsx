import useMessage from "../hooks/useMessage";

export default function TournamentChat(props) {
  const { message, setMessage, receivedMessages, sendMessage } =
    useMessage(props);

  return (
    <>
      <form onSubmit={sendMessage}>
        <h1>Messages</h1>
        {receivedMessages.map((msg, index) => (
          <h5 key={index}>
            {msg.username}: {msg.message}
          </h5>
        ))}
        <input
          placeholder="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button type="submit">Send a Message</button>
      </form>
    </>
  );
}
