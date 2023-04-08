import React from "react";

export default function Competition(props) {
  const weatherForecast =
    "https://ilmatieteenlaitos.fi/saa/" +
    (props.area == null ? "" : props.area.split(", ")[1]);
  const competitionSite = "https://discgolfmetrix.com/" + props.id;
  return (
    <li key={props.id} className="Main-list-item">
      <h2>{props.name}</h2>
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
