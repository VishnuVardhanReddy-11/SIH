// server.js
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors()); // Allow cross-origin requests from your front-end

// Connect to MongoDB
const mongoURI = process.env.MONGO_URI || 'mongodb://localhost:27017/monastery_db';

mongoose.connect(mongoURI)
  .then(() => console.log('MongoDB connected successfully'))
  .catch(err => console.error('MongoDB connection error:', err));

// Define the schema for Points of Interest (POIs)
const poiSchema = new mongoose.Schema({
  name: String,
  coords: {
    lat: Number,
    lng: Number,
  },
  audioUrl: String,
});

const POI = mongoose.model('POI', poiSchema);

// API endpoint to check for nearby POIs
app.post('/api/check-location', async (req, res) => {
  const { latitude, longitude } = req.body;

  if (latitude === undefined || longitude === undefined) {
    return res.status(400).json({ message: 'Latitude and longitude are required.' });
  }

  const userLat = parseFloat(latitude);
  const userLng = parseFloat(longitude);

  // A simple distance calculation (Haversine formula)
  const dM = (lat1, lon1, lat2, lon2) => {
    const R = 6371e3; // metres
    const φ1 = lat1 * Math.PI / 180;
    const φ2 = lat2 * Math.PI / 180;
    const Δφ = (lat2 - lat1) * Math.PI / 180;
    const Δλ = (lon2 - lon1) * Math.PI / 180;

    const a = Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
              Math.cos(φ1) * Math.cos(φ2) *
              Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

    return R * c; // in meters
  };

  try {
    const pois = await POI.find({});
    let foundPoi = null;

    for (const poi of pois) {
      const distance = dM(userLat, userLng, poi.coords.lat, poi.coords.lng);
      if (distance <= 50) { // Check if within 50 meters
        foundPoi = poi;
        break;
      }
    }

    if (foundPoi) {
      res.json({
        message: 'You are near a Point of Interest!',
        poi: {
          name: foundPoi.name,
          audioUrl: foundPoi.audioUrl,
        }
      });
    } else {
      res.json({ message: 'No nearby Points of Interest.' });
    }

  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));