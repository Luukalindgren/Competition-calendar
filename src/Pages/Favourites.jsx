import React, { useState, useEffect } from "react";
import Competition from "../components/Competition";
import Footer from "../components/nav/Footer.jsx";
import * as ReactBootStarp from "react-bootstrap";
import "../App.css";

// TODO
// Fetch the favourite competitions from the API
// Display the competitions in the same way as in the Competition.jsx

const Favourites = (props) => {
  const [favourites, setFavourites] = useState([{}]);
  const [loading, setLoading] = useState(false);

  // Do something when component mounts
  useEffect(() => {
    fetchFavourites();
  }, []);

  // Fetch favourite competitions from API
  const fetchFavourites = async () => {
    try {
      setLoading(true); // For loading spinner/screen/thing
      const response = await fetch(
        "https://competition-calendar-server.onrender.com/competitions"
      );
      const data = await response.json();
      //console.log(data);
      const favourites = data.filter((competition) => competition.favourite);
      setFavourites(favourites);
      setLoading(false); // For loading spinner/screen/thing
    } catch (error) {
      setLoading(false); // For loading spinner/screen/thing
      console.log(error);
    }
  };

  return (
    <div className="Main">
      <div className="Main-item">
        <h2>Suosikit:</h2>
      </div>
      <div className="Main-context">
      {loading ? (
          <ReactBootStarp.Spinner animation="border" />
        ) : (
        <ul className="Main-list">
          {favourites.map((favourite) => (
            <Competition
              key={favourite.id}
              id={favourite.id}
              name={favourite.name}
              location={favourite.location}
              time={favourite.time}
              area={favourite.area}
              favourite={favourite.favourite}
            />
          ))}
        </ul>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Favourites;
