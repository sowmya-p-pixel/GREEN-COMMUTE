const mongoose = require("mongoose");

const TripSchema = new mongoose.Schema({
  mode: { type: String, required: true },
  distance: { type: Number, required: true },
  emissions: { type: Number, required: true },
});

module.exports = mongoose.model("Trip", TripSchema);
