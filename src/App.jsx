import { useState, useEffect } from "react";
import * as ReactBootStarp from "react-bootstrap";

import Competition from "./components/Competition";
import Header from "./components/nav/Header";

import "./App.css";

// TODO:
// DONE Add scraper and things that are needed for it
// SORT OF DONE (update/30m) Make the scraper update API/DB on Reacts useEffect, that way it updates automatically
// DONE Change React to use API/DB instead of static data "http://localhost:3000/competitions"
// DONE Hide MongoDB connection string to .env file
// HALF DONE Add the functionalities in README.md
// DONE Publish frontend to GitHub Pages
// DONE Publish backend to Heroku or AWS or something
// - FIX render.com that backend runs scraper
// - Add a area selector that shows the narrows down the competitions to the selected area
//

function App({ routes }) {
  const [competitions, setCompetitions] = useState([{}]);
  const [loading, setLoading] = useState(false);

  // Fetch competitions from API
  const fetchCompetitions = async () => {
    try {
      setLoading(true); // For loading spinner/screen/thing
      const response = await fetch(
        "https://competition-calendar-server.onrender.com/competitions"
      );
      const data = await response.json();
      //console.log(data);
      setCompetitions(data);
      setLoading(false); // For loading spinner/screen/thing
    } catch (error) {
      setLoading(false); // For loading spinner/screen/thing
      console.log(error);
    }
  };

  // Do something when component mounts
  useEffect(() => {
    fetchCompetitions();
  }, []);

  // Render the page
  return (
    <div className="App">
      <Header></Header>

      <div className="Main">
        <h4>
          {loading
            ? "Ensimmäinen lataus voi kestää, koska render.com säästää resursseja laittamalla bäkkärin unitilaan..."
            : "Kisoja tänään: " + competitions.length}{" "}
        </h4>
        {loading ? (
          <ReactBootStarp.Spinner animation="border" />
        ) : (
          <ul className="Main-list">
            {competitions.map((competition) => (
              <Competition
                key={competition.id}
                id={competition.id}
                name={competition.name}
                location={competition.location}
                time={competition.time}
                area={competition.area}
              />
            ))}
          </ul>
        )}
      </div>
      <div className="Footer">
        <p>Competition data is from discgolfmetrix.com</p>
        <code>@2023 by Luuka Lindgren</code>
      </div>
    </div>
  );
}

export default App;
