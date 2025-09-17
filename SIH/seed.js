const mongoose = require('mongoose');
const POI = require('./models/poi'); // Assuming you modularize your model
const dotenv = require('dotenv');

dotenv.config();

const mongoURI = process.env.MONGO_URI || 'mongodb://localhost:27017/monastery_db';

mongoose.connect(mongoURI)
  .then(async () => {
    console.log('Connected to MongoDB');

    const pois = [
      {
        name: "Pillar",
        coords: { lat: 27.3181, lng: 88.6112 },
        audioUrl: "https://res.cloudinary.com/demo/video/upload/v1694700000/pillar1.mp3"
      },
      {
        name: "Mural",
        coords: { lat: 27.3183, lng: 88.6115 },
        audioUrl: "https://res.cloudinary.com/demo/video/upload/v1694700000/mural1.mp3"
      }
    ];

    await POI.deleteMany({});
    await POI.insertMany(pois);
    console.log('Database seeded with POIs.');
    mongoose.connection.close();
  })
  .catch(err => console.error('Error seeding database:', err));