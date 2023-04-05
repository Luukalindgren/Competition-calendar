const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Competition = require("./models/competition");

mongoose.connect(
  "mongodb+srv://luslin:iFLvPfSCRtB7NJd7@testi.wnkxl99.mongodb.net/Kisakalenteri?retryWrites=true&w=majority",
  { useNewUrlParser: true }
);
const db = mongoose.connection;
db.on("error", (error) => console.error(error));
db.once("open", () => console.log("Connected to database"));

app.use(express.json());

app.get("/competitions", async (req, res) => {
  const competitions = await Competition.find();
  res.json(competitions);
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
