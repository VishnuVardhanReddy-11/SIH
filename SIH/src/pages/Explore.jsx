import React from "react";
import { useNavigate } from "react-router-dom"; // import useNavigate

const monasteries = [
  {
    id: 1,
    name: "Rumtek Monastery",
    location: "Gangtok, East Sikkim",
    latitude: 27.3389,
    longitude: 88.5583,
    image: "rumtek.jpg",
    description:
      "One of the largest monasteries in Sikkim, Rumtek is the seat of the Karmapa and a vibrant center of Tibetan Buddhism.",
  },
  {
    id: 2,
    name: "Pemayangtse Monastery",
    location: "Pelling, West Sikkim",
    latitude: 27.2951,
    longitude: 88.2158,
    image: "Pemayangtse.png",
    description:
      "Founded in the 17th century, Pemayangtse is renowned for its stunning wooden sculptures and sacred relics.",
  },
  {
    id: 3,
    name: "Tashiding Monastery",
    location: "West Sikkim",
    latitude: 27.3167,
    longitude: 88.2667,
    image: "Tashiding.png",
    description:
      "Tashiding is considered the holiest monastery in Sikkim, offering breathtaking views and spiritual serenity.",
  },
];

const Explore = () => {
  const navigate = useNavigate(); // initialize navigate

  return (
    <div className="bg-gradient-to-b from-white to-gray-50 min-h-screen py-16 px-6 md:px-20">
      {/* Page Heading */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-indigo-700">Explore Monasteries</h1>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          Discover the spiritual and cultural gems of Sikkim. Each monastery tells
          a story of devotion, art, and history.
        </p>
      </div>

      {/* Monastery Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {monasteries.map((monastery) => (
          <div
            key={monastery.id}
            className="bg-white rounded-2xl shadow hover:shadow-xl transition overflow-hidden"
          >
            <img
              src={monastery.image}
              alt={monastery.name}
              className="w-full h-56 object-cover"
            />
            <div className="p-6">
              <h2 className="text-2xl font-semibold text-indigo-700">
                {monastery.name}
              </h2>
              <p className="text-gray-500 mt-1">{monastery.location}</p>
              <p className="text-gray-600 mt-3">{monastery.description}</p>
              <div className="mt-4 flex gap-3">
                {/* Virtual Tour Button */}
                <button
                  onClick={() => navigate("/virtual-tour")}
                  className="bg-indigo-600 text-white px-4 py-2 rounded-xl hover:bg-indigo-700 transition"
                >
                  Virtual Tour
                </button>

                {/* View on Map */}
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${monastery.latitude},${monastery.longitude}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-100 text-indigo-700 px-4 py-2 rounded-xl hover:bg-gray-200 transition inline-block"
                >
                  View on Map
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Explore;
