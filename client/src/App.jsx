import "./App.css";
import TournamentChat from "./components/TournamentChat";

function App() {
  // PASS THE USER JWT OR ID HERE
  const userId = "USER ID or JWT";
  // USERNAME OF CLIENT
  const username = "some ID";
  // TOURNAMENT ID
  const tournamentChatId = "some ID";

  return (
    <div className="App">
      <TournamentChat
        TournamentChatId={tournamentChatId}
        userId={userId}
        username={username}
      />
    </div>
  );
}

export default App;
