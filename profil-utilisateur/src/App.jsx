import { useState } from "react";
import "./App.css";

function App() {
  const [userInput, setUserInput] = useState("");

  return (
    <div className="app">
      <input type="text" onChange={(e) => setUserInput(e.target.value)} />
      {userInput}
    </div>
  );
}

export default App;
