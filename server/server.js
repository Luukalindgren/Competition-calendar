const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const Competition = require("./models/competition");
const cron = require("node-cron");
require("dotenv").config();

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

// Update the database every hour
cron.schedule("0 * * * *", () => {
  console.log("Running scraper every 30 min");
  const { spawn } = require("child_process");
  const pythonProcess = spawn("python", ["./scraper/scraper.py"]);
  pythonProcess.stdout.on("data", (data) => {
    console.log(data.toString());
  });
  pythonProcess.stderr.on("data", (data) => {
    console.log(data.toString());
  });
  pythonProcess.on("close", (code) => {
    console.log(`Python scraper process exited with code ${code}`);
  });
});
