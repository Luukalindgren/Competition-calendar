import { useState, useEffect } from "react";
import Competition from "../components/Competition";
import Footer from "../components/nav/Footer.jsx";
import { Spinner }  from "react-bootstrap";
import "../App.css";

// TODO
// DONE Fetch the favourite competitions from the API
// DONE Display the competitions in the same way as in the Competition.jsx
// DONE favourite marking, it works from Postman, but not from the app
// Make favourite marking render correctly right after click

const Favourites = () => {
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
      const newFavourites = data.filter((competition) => competition.favourite);
      setFavourites(newFavourites);
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
          <Spinner animation="border" />
        ) : (
        <ul className="Main-list">
          {favourites.map((favourite) => (
            <Competition
              key={favourite.id}
              id={favourite.id}
              _id={favourite._id}
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
