"use client";

import { useState, useEffect } from "react";
import monasteryData from "../../data/monasteries.json";
import { MapPin, Mountain, ChevronDown } from "lucide-react";

const toRad = (value) => (value * Math.PI) / 180;
const getDistance = (lat1, lon1, lat2, lon2) => {
  const R = 6371;
  const dLat = toRad(lat2 - lat1);
  const dLon = toRad(lon2 - lon1);
  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.sin(dLon / 2) ** 2;
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
};

const VirtualTour = () => {
  const [userLocation, setUserLocation] = useState(null);
  const [sortedMonasteries, setSortedMonasteries] = useState([]);
  const [expandedIndex, setExpandedIndex] = useState(null);
  const [locationDenied, setLocationDenied] = useState(false);

  useEffect(() => {
    if (!navigator.geolocation) return alert("Geolocation not supported");
    navigator.geolocation.getCurrentPosition(
      (pos) =>
        setUserLocation({
          lat: pos.coords.latitude,
          lon: pos.coords.longitude,
        }),
      () => setLocationDenied(true)
    );
  }, []);

  useEffect(() => {
    if (userLocation) {
      const monasteriesWithDistance = monasteryData.map((m) => ({
        ...m,
        distance: getDistance(
          userLocation.lat,
          userLocation.lon,
          m.latitude,
          m.longitude
        ).toFixed(2),
      }));
      monasteriesWithDistance.sort((a, b) => a.distance - b.distance);
      setSortedMonasteries(monasteriesWithDistance);
    } else {
      setSortedMonasteries(monasteryData);
    }
  }, [userLocation]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white text-gray-900">
      {/* Hero Section */}
      <div className="bg-gradient-to-b from-indigo-200 to-white border-b shadow-sm">
        <div className="container mx-auto px-4 py-16 text-center max-w-3xl">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Mountain className="h-10 w-10 text-indigo-700" />
            <h1 className="text-5xl md:text-6xl font-extrabold text-indigo-900">
              Sikkim Monasteries
            </h1>
          </div>
          <p className="text-lg md:text-xl text-indigo-800 mb-6">
            Discover the spiritual heritage of Sikkim through its ancient monasteries.
          </p>
          <div className="flex items-center justify-center gap-2 text-sm text-indigo-600 font-medium">
            <MapPin className="h-5 w-5" />
            <span>
              Location-based discovery • Detailed information • Navigation included
            </span>
          </div>
        </div>
      </div>

      <div className="flex justify-center px-4 py-8">
        <div className="w-full max-w-3xl space-y-8">
          {/* Location Status */}
          {!userLocation && !locationDenied && (
            <div className="text-center text-gray-600 font-medium">
              Fetching your location...
            </div>
          )}
          {locationDenied && (
            <div className="text-center text-red-600 font-semibold">
              Please enable location to find nearby monasteries.
            </div>
          )}

          {/* Etiquette */}
          <div className="bg-indigo-100 p-5 rounded-2xl shadow-md">
            <h2 className="font-bold text-lg mb-2 text-indigo-900">
              Monastery Etiquette
            </h2>
            <ul className="list-disc list-inside space-y-1 text-indigo-800 text-sm">
              <li>Dress modestly inside monastery premises.</li>
              <li>Maintain silence in prayer areas.</li>
              <li>Seek permission before taking photographs.</li>
              <li>Respect local customs and monks' routines.</li>
            </ul>
          </div>

          {/* Monasteries Header */}
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-3xl font-bold text-indigo-900 mb-1">
                {userLocation ? "Nearby Monasteries" : "Featured Monasteries"}
              </h2>
              <p className="text-indigo-700 text-sm">
                {userLocation
                  ? "Sorted by distance from your location"
                  : "Enable location access to see distances and personalized recommendations"}
              </p>
            </div>
            <div className="text-right">
              <div className="text-3xl font-extrabold text-indigo-700">
                {monasteryData.length}
              </div>
              <div className="text-xs text-indigo-600 uppercase tracking-wide">
                Monasteries
              </div>
            </div>
          </div>

          {/* Monastery Cards */}
          {sortedMonasteries.map((monastery, index) => (
            <div
              key={monastery.name}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="p-5 flex justify-between items-center">
                <div>
                  <h3 className="text-xl font-semibold text-indigo-900">
                    {monastery.name}
                  </h3>
                  {userLocation && (
                    <p className="text-indigo-700 text-sm mt-1">
                      {monastery.distance} km away
                    </p>
                  )}
                </div>
                <button
                  onClick={() =>
                    setExpandedIndex(expandedIndex === index ? null : index)
                  }
                  className="p-2 bg-indigo-200 rounded-full hover:bg-indigo-300 transition"
                >
                  <ChevronDown
                    className={`h-5 w-5 text-indigo-800 transform transition-transform duration-300 ${
                      expandedIndex === index ? "rotate-180" : ""
                    }`}
                  />
                </button>
              </div>

              {expandedIndex === index && (
                <div className="p-5 border-t border-indigo-100 space-y-3 text-indigo-800">
                  {/* Buttons: Google Maps & Visit Page */}
                  <div className="flex gap-3 flex-wrap">
                    <a
                      href={`https://www.google.com/maps/search/?api=1&query=${monastery.latitude},${monastery.longitude}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block bg-indigo-500 text-white px-4 py-2 rounded-lg hover:bg-indigo-600 font-medium"
                    >
                      Navigate on Google Maps
                    </a>

                    <a
                      href={`/RumtekMonastery`} // static page for Rumtek, can be dynamic later
                      className="inline-block bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 font-medium"
                    >
                      Visit Monastery Page
                    </a>
                  </div>

                  {/* Description */}
                  {monastery.description && (
                    <p className="mt-2">{monastery.description}</p>
                  )}

                  {/* Highlights */}
                  {monastery.highlights?.length > 0 && (
                    <div>
                      <h4 className="font-semibold">Highlights:</h4>
                      <ul className="list-disc list-inside space-y-1">
                        {monastery.highlights.map((h, i) => (
                          <li key={i}>{h}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Tips */}
                  {monastery.tips?.length > 0 && (
                    <div>
                      <h4 className="font-semibold">Tips for Visitors:</h4>
                      <ul className="list-disc list-inside space-y-1">
                        {monastery.tips.map((tip, i) => (
                          <li key={i}>{tip}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Timings & Ticket */}
                  <div className="flex justify-between items-center mt-2 text-indigo-900 font-medium">
                    <p>
                      <span className="font-semibold">Timings:</span> {monastery.timings}
                    </p>
                    <p>
                      <span className="font-semibold">Ticket:</span> {monastery.entryFee}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}

          {/* Footer */}
          <div className="bg-indigo-100 rounded-2xl p-6 mt-12 text-center shadow-md">
            <h3 className="font-bold text-indigo-900 mb-2 text-lg">
              Planning Your Spiritual Journey
            </h3>
            <p className="text-indigo-800 text-sm">
              Each monastery offers unique experiences and spiritual insights.
              Visit during early morning hours for the most peaceful atmosphere.
              Respect local customs and the sacred nature of these places.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VirtualTour;
