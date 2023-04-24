import React from "react";
import Competition from "../components/Competition";
import Footer from "../components/nav/Footer.jsx";
import "../App.css";

// TODO
// Fetch the favourite competitions from the API
// Display the competitions in the same way as in the Competition.jsx

const Favourites = (props) => {

  const favourites= [];

  return (
    <div className="Main">
      <div className="Main-item">
        <h2>Suosikit:</h2>
      </div>
      <div className="Main-context">
          <ul className="Main-list">
            {favourites.map((favourite) => (
              <Competition
                key={favourite.id}
                id={favourite.id}
                name={favourite.name}
                location={favourite.location}
                time={favourite.time}
                area={favourite.area}
              />
            ))}
          </ul>
      </div>
      <Footer />
    </div>
  );
};

export default Favourites;
