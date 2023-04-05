import { useState, useEffect } from "react";
import LLLogo from "/LL.png";
import competitionsJson from "/src/data.json";

import "./App.css";

function App() {
  const [competitions, setCompetitions] = useState([{}]);

  useEffect(() => {
    fetch("/api")
      .then((response) => response.json())
      .then((data) => {
        setCompetitions(data);
      });
  }, []);

  return (
    <div className="App">
      <div className="Header">
        <a href="https://github.com/Luukalindgren">
          <img src={LLLogo} className="logo" alt="logo" />
        </a>
        <h1>Kisakalenteri</h1>
      </div>
      <div className="Main">
        <h4>Kisoja tänään: {competitions.length} </h4>
        <ul className="Main-list">
          {competitions.map((competition) => (
            <li key={competition.ID} className="Main-list-item">
              <h2>{competition.nimi}</h2>
              <p>{competition.paikka}</p>
              <b>{competition.aika}</b>
              <p>{competition.alue}</p>
              <a href="">Weather forecast</a>
              <a href="">Course map</a>
              <a href="">Driving instructions</a>
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
