import { useState } from "react";
import "./App.css";
import Smiley from "./components/Smiley";
import { smileys } from "./models";

function App() {
  const [feeling, setFeeling] = useState("");

  return (
    <div>
      <div>{feeling}</div>
      <div className="app">
        <h2>Quelle est ton humeur du jour ?</h2>
        <div className="smileys-box">
          {smileys.map((smiley) => (
            <Smiley key={smiley.id} smiley={smiley} setFeeling={setFeeling} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
