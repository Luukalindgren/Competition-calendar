const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const Competition = require("./models/competition");
require("dotenv").config();

// TODO:
// DONE Add scraper and things that are needed for it
// - Make the scraper update API/DB on Reacts useEffect, that way it updates automatically
// DONE Change React to use API/DB instead of static data "http://localhost:3000/competitions"
// DONE Hide MongoDB connection string to .env file
// - Add the functionalities in README.md

const URL = process.env.DATABASE_URL;

mongoose.connect(URL, { useNewUrlParser: true });
const db = mongoose.connection;
db.on("error", (error) => console.error(error));
db.once("open", () => console.log("Connected to database"));

app.use(express.json());
app.use(cors());

app.get("/competitions", async (req, res) => {
  const competitions = await Competition.find();
  res.json(competitions);
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
