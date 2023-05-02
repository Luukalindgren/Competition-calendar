import React, { useState, useEffect } from "react";
import Competition from "../components/Competition";
import * as ReactBootStarp from "react-bootstrap";
import Footer from "../components/nav/Footer.jsx";
import "../App.css";

const Home = () => {

  const [competitions, setCompetitions] = useState([{}]);
  const [loading, setLoading] = useState(false);

  // Do something when component mounts
  useEffect(() => {
    fetchCompetitions();
  }, []);

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


  return (
    <div className="Main">
      <div className="Main-item">
        <h2>
          {loading
            ? "Ensimmäinen lataus voi kestää, koska render.com säästää resursseja laittamalla bäkkärin unitilaan..."
            : "Kisoja tänään: " + competitions.length}
        </h2>
      </div>
      <div className="Main-context">
        {loading ? (
          <ReactBootStarp.Spinner animation="border" />
        ) : (
          <ul className="Main-list">
            {competitions.map((competition) => (
              <Competition
                key={competition.id}
                id={competition.id}
                _id={competition._id}
                name={competition.name}
                location={competition.location}
                time={competition.time}
                area={competition.area}
                favourite={competition.favourite}
              />
            ))}
          </ul>
        )}
      </div>
      <Footer/>
    </div>
  );
};

export default Home;
