import { useState } from "react";
import "./App.css";
import TournamentChat from "./components/TournamentChat";

function App() {
  // PASS THE TOURNAMENT ID HERE
  const [chatRoom, setChatRoom] = useState(1);

  // PASS THE USER JWT OR ID HERE
  const userId = "ben";

  return (
    <div className="App">
      <h3>{chatRoom}</h3>
      <button onClick={() => setChatRoom((prevChatRoom) => prevChatRoom + 1)}>
        +
      </button>
      <button onClick={() => setChatRoom((prevChatRoom) => prevChatRoom - 1)}>
        -
      </button>

      <TournamentChat chatId={chatRoom.toString()} userId={userId} />
    </div>
  );
}

export default App;
