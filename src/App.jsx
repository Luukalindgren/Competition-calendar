import { useState } from "react";
import LLLogo from "/LL.png";
import competitionsJson from "/src/data.json";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const competitions = competitionsJson.kisat;

  return (
    <div className="App">
      <div className="Header">
        <img src={LLLogo} className="logo" alt="logo" />
        <h1>Kisakalenteri</h1>
      </div>
      <div className="Main">
        <p>Tähän tulee näkyviin fribakisat</p>
        <ul className="Main-list">
          {competitions.map((competition) => (
            <li key={competition.id} className="Main-list-item">
              <h2>{competition.nimi}</h2>
              <p>{competition.paikka}</p>
              <b>{competition.aika}</b>
              <p>{competition.alue}</p>
            </li>
          ))}
        </ul>
      </div>
      <div className="Footer">
        <code>@2023 by Luuka Lindgren</code>
      </div>
    </div>
  );
}

export default App;
