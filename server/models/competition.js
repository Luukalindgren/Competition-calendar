const mongoose = require("mongoose");

const competitionSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  time: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  area: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Competition", competitionSchema);
