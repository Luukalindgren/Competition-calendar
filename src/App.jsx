import { useState, useEffect } from "react";
import LLLogo from "/LL.png";
//import competitionsJson from "/src/data.json";
import "./App.css";

// TODO:
// DONE Add scraper and things that are needed for it
// SORT OF DONE (update/1h) Make the scraper update API/DB on Reacts useEffect, that way it updates automatically
// DONE Change React to use API/DB instead of static data "http://localhost:3000/competitions"
// DONE Hide MongoDB connection string to .env file
// - Add the functionalities in README.md

function App() {
  const [competitions, setCompetitions] = useState([{}]);

  useEffect(() => {
    const fetchCompetitions = async () => {
      const response = await fetch("http://localhost:3000/competitions");
      const data = await response.json();
      console.log(data);
      setCompetitions(data);
      };
      fetchCompetitions()
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
            <li key={competition.id} className="Main-list-item">
              <h2>{competition.name}</h2>
              <p>{competition.location}</p>
              <b>{competition.time}</b>
              <p>{competition.area}</p>
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
