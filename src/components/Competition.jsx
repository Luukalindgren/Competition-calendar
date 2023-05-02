import { useState } from "react";
import { StarOutlined, StarFilled } from "@ant-design/icons";
import "../App.css";

// TODO
// Add star icon to the competition for marking it to favourites
// Make array for favourite competitions and add the competition to it when the star is clicked
// Send the array to API and save it to the database

export default function Competition(props) {
  const [favourite, setFavourite] = useState(false);

  function toggleFavourite() {
    fetch(
      `https://competition-calendar-server.onrender.com/competitions/${props._id}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ favourite: !props.favourite }),
      }
    )
    .then((response) => response.json())
    .then((data) => {
      setFavourite(data.favourite);
      console.log(data);
    })
    .catch((error) => {
      console.log(error);
    });
  }

  // Weird function to check if the competition is favourite, otherwise page wont render clicked star correctly
  // FIX THIS, now works only when marking as favourite, not when removing favourite
  function isFavourite() {
    if (props.favourite) {
      return true;
    } if (favourite) {
      return true; 
    } else {
      return false;
    }
  }

  const weatherForecast =
  `https://ilmatieteenlaitos.fi/saa/${
    (props.area == null ? "" : props.area.split(", ")[1])}`;

  const competitionSite = `https://discgolfmetrix.com/${props.id}`;

  return (
    <li className="Main-list-item">
      <h2>{props.name}</h2>
      <div className="Favourite-icon">
        {isFavourite() ? (
          <StarFilled onClick={toggleFavourite} className="Favourited" />
        ) : (
          <StarOutlined onClick={toggleFavourite} />
        )}
      </div>
      <p>{props.location}</p>
      <b>{props.time}</b>
      <p>{props.area}</p>
      <a href={weatherForecast}>Weather forecast</a>
      <a href="" style={{ pointerEvents: "none" }}>
        Course map
      </a>
      <a href="" style={{ pointerEvents: "none" }}>
        Driving instructions
      </a>
      <a href={competitionSite}>Competition site</a>
    </li>
  );
}
