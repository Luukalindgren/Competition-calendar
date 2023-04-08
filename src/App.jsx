import { useState, useEffect } from "react";
import LLLogo from "/LL.png";
import Competition from "./Competition";
import "./App.css";

// TODO:
// DONE Add scraper and things that are needed for it
// SORT OF DONE (update/30m) Make the scraper update API/DB on Reacts useEffect, that way it updates automatically
// DONE Change React to use API/DB instead of static data "http://localhost:3000/competitions"
// DONE Hide MongoDB connection string to .env file
// HALF DONE Add the functionalities in README.md
// Done Publish frontend to GitHub Pages
// - Publish backend to Heroku or AWS or something
// - Add a area selector that shows the narrows down the competitions to the selected area
//

function App() {
  const [competitions, setCompetitions] = useState([{}]);

  useEffect(() => {
    const fetchCompetitions = async () => {
      const response = await fetch(
        "https://competition-calendar-server.onrender.com/competitions"
      );
      const data = await response.json();
      console.log(data);
      setCompetitions(data);
    };
    fetchCompetitions();
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
            <Competition
              id={competition.id}
              name={competition.name}
              location={competition.location}
              time={competition.time}
              area={competition.area}
            />
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
