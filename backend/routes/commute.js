const express = require("express");
const router = express.Router();
const Trip = require("../models/Trip");

// POST /api/calculate
router.post("/calculate", async (req, res) => {
  try {
    if (!req.body) return res.status(400).json({ error: "Request body is missing!" });

    const { mode, distance } = req.body;
    if (!mode || distance === undefined || distance === null) {
      return res.status(400).json({ error: "Both 'mode' and 'distance' are required!" });
    }

    const emissionFactors = { car: 0.21, bus: 0.10, train: 0.05, cycle: 0.0, walk: 0.0 };
    const emissions = distance * (emissionFactors[mode] ?? 0);

    const trip = new Trip({ mode, distance, emissions });
    await trip.save();

    res.json({ emissions, message: "Trip saved successfully!" });
  } catch (err) {
    console.error("Error in /api/calculate:", err);
    res.status(500).json({ error: "Server error" });
  }
});

// POST /api/calculate-multiple
router.post("/calculate-multiple", async (req, res) => {
  try {
    const tripsData = req.body.trips;
    if (!Array.isArray(tripsData) || tripsData.length === 0) {
      return res.status(400).json({ error: "Trips array is required!" });
    }

    const emissionFactors = { car: 0.21, bus: 0.10, train: 0.05, cycle: 0.0, walk: 0.0 };
    const savedTrips = [];

    for (const tripData of tripsData) {
      const { mode, distance } = tripData;
      if (!mode || distance === undefined || distance === null) continue;

      const emissions = distance * (emissionFactors[mode] ?? 0);
      const trip = new Trip({ mode, distance, emissions });
      await trip.save();
      savedTrips.push(trip);
    }

    res.json({ message: "All trips saved!", trips: savedTrips });
  } catch (err) {
    console.error("Error in /api/calculate-multiple:", err);
    res.status(500).json({ error: "Server error" });
  }
});

// GET /api/trips
router.get("/trips", async (req, res) => {
  try {
    const trips = await Trip.find();
    res.json(trips);
  } catch (err) {
    console.error("Error in /api/trips:", err);
    res.status(500).json({ error: "Server error" });
  }
});

module.exports = router;
