import React, { useState, useEffect, useRef } from "react";
import { MapPin, Volume2 } from "lucide-react";

const pois = [
  { id: 1, name: "Parking", lat: 27.2889347, lon: 88.56208041 },
  { id: 2, name: "Entrance", lat: 27.28851332, lon: 88.56200941 },
  { id: 3, name: "Pillar", lat: 27.28852589, lon: 88.5618096 },
  { id: 4, name: "Paintings & Chakra Centre", lat: 27.28862027, lon: 88.56148053 },
  { id: 5, name: "View Point", lat: 27.28854528, lon: 88.56161848 }
];

const audioLinks = {
  1: "https://res.cloudinary.com/dq0r8sqi5/video/upload/v1758073686/Parking_nnszuz.mp3",
  2: "https://res.cloudinary.com/dq0r8sqi5/video/upload/v1758073686/Entrance_ubscrd.mp3",
  3: "https://res.cloudinary.com/dq0r8sqi5/video/upload/v1758073685/Pillar_igtjo6.mp3",
  4: "https://res.cloudinary.com/dq0r8sqi5/video/upload/v1758073661/main_temple_entrance_and_paintings_takpor.mp3",
  5: "https://res.cloudinary.com/dq0r8sqi5/video/upload/v1758073685/Viewpoint_abbk01.mp3"
};

function haversine(lat1, lon1, lat2, lon2) {
  const R = 6371e3;
  const toRad = (x) => (x * Math.PI) / 180;
  const φ1 = toRad(lat1);
  const φ2 = toRad(lat2);
  const Δφ = toRad(lat2 - lat1);
  const Δλ = toRad(lon2 - lon1);

  const a =
    Math.sin(Δφ / 2) ** 2 +
    Math.cos(φ1) * Math.cos(φ2) * Math.sin(Δλ / 2) ** 2;
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  return R * c;
}

export default function RumtekMonastery() {
  const [userLocation, setUserLocation] = useState(null);
  const [currentAudioId, setCurrentAudioId] = useState(null);
  const audioRef = useRef(null);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.watchPosition(
        (pos) => setUserLocation({ lat: pos.coords.latitude, lon: pos.coords.longitude }),
        (err) => console.error("Error fetching location:", err),
        { enableHighAccuracy: true }
      );
    }
  }, []);

  const toggleAudio = (id) => {
    // If clicking the same POI
    if (currentAudioId === id) {
      audioRef.current.pause();
      audioRef.current = null;
      setCurrentAudioId(null);
    } else {
      // Stop previous audio
      if (audioRef.current) {
        audioRef.current.pause();
      }
      // Play new audio
      const audio = new Audio(audioLinks[id]);
      audio.play();
      audioRef.current = audio;
      setCurrentAudioId(id);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-10 grid grid-cols-1 md:grid-cols-2 gap-10">
      {/* Left Side - Image */}
      <div>
        <h2 className="text-2xl font-bold mb-4 text-emerald-700">Rumtek Monastery</h2>
        <img
          src="rumtek.jpg"
          alt="Rumtek Monastery"
          className="rounded-xl shadow-lg w-full"
        />
      </div>

      {/* Right Side - POIs */}
      <div className="space-y-4">
        {pois.map((poi) => {
          let distance = null;
          let isNearby = false;

          if (userLocation) {
            distance = haversine(userLocation.lat, userLocation.lon, poi.lat, poi.lon);
            isNearby = distance <= 5;
          }

          return (
            <div
              key={poi.id}
              className={`border rounded-lg p-4 shadow-sm flex items-center justify-between transition-colors ${
                isNearby
                  ? "bg-emerald-50 border-emerald-300"
                  : "bg-white border-gray-200"
              }`}
            >
              <div>
                <h3 className="font-semibold text-gray-800 flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-emerald-600" />
                  {poi.name}
                </h3>
                <p className="text-sm text-gray-500">
                  Lat: {poi.lat}, Lon: {poi.lon}
                </p>
                {distance !== null && (
                  <p className="text-xs text-gray-400">
                    {distance.toFixed(1)} meters away
                  </p>
                )}
              </div>

              {/* Audio button */}
              {isNearby ? (
                <button
                  onClick={() => toggleAudio(poi.id)}
                  className={`p-2 rounded-full ${
                    currentAudioId === poi.id
                      ? "bg-emerald-300 hover:bg-emerald-400"
                      : "bg-emerald-100 hover:bg-emerald-200"
                  }`}
                >
                  <Volume2 className="h-6 w-6 text-emerald-600" />
                </button>
              ) : (
                <button
                  disabled
                  className="p-2 bg-gray-100 rounded-full opacity-50 cursor-not-allowed"
                >
                  <Volume2 className="h-6 w-6 text-gray-400" />
                </button>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
