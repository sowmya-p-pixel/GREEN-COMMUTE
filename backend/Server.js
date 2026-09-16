const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

// Routes
const commuteRoutes = require("./routes/commute");

const app = express();
const PORT = 5000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// MongoDB connection (Local)
mongoose.connect("mongodb://127.0.0.1:27017/greencommute")
  .then(() => console.log("✅ MongoDB Connected (Local)"))
  .catch(err => console.error("❌ MongoDB Connection Error:", err));

// Routes
app.use("/api", commuteRoutes);

// Optional home route
app.get("/", (req, res) => {
  res.send("Welcome to Green Commute API!");
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
