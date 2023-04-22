import React from "react";
import Footer from "../components/nav/Footer.jsx";
import "../App.css";

// TODO
// Fetch the favourite competitions from the API
// Display the competitions in the same way as in the Competition.jsx

const Favourites = () => {
  return (
    <div className="Main">
      <div className="Main-item">
        <h2>Suosikit</h2>
      </div>
      <Footer />
    </div>
  );
};

export default Favourites;
