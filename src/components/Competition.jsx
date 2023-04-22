import React from "react";
import { StarOutlined, StarFilled } from "@ant-design/icons"
import "../App.css"; 

// Add star icon to the competition for marking it to favourites

export default function Competition(props) {
  const weatherForecast =
    "https://ilmatieteenlaitos.fi/saa/" +
    (props.area == null ? "" : props.area.split(", ")[1]);
  const competitionSite = "https://discgolfmetrix.com/" + props.id;
  return (
    <li className="Main-list-item">
      <h2>{props.name}</h2>
      <div className="Favourite-icon"><StarOutlined></StarOutlined></div>
      <p>{props.location}</p>
      <b>{props.time}</b>
      <p>{props.area}</p>
      <a href={weatherForecast}>Weather forecast</a>
      <a href="">Course map</a>
      <a href="">Driving instructions</a>
      <a href={competitionSite}>Competition site</a>
    </li>
  );
}
