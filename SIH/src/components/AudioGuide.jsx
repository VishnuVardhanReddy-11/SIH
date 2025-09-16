// src/components/AudioGuide.jsx
import React, { useEffect, useState } from "react";

const POIS = [
  {
    id: "p1",
    name: "Pillar",
    lat: 27.3181,
    lng: 88.6112,
    audioUrl:
      "https://res.cloudinary.com/demo/video/upload/v1694700000/pillar1.mp3",
  },
  {
    id: "p2",
    name: "Mural",
    lat: 27.3183,
    lng: 88.6115,
    audioUrl:
      "https://res.cloudinary.com/demo/video/upload/v1694700000/mural1.mp3",
  },
];

const AudioGuide = () => {
  const [status, setStatus] = useState("Click start to begin tracking...");
  const [audioMap] = useState(() => {
    const map = {};
    POIS.forEach((p) => {
      map[p.id] = new Audio(p.audioUrl);
    });
    return map;
  });
  const [inRange, setInRange] = useState({});

  // Distance between two coordinates in meters
  function dM(lat1, lon1, lat2, lon2) {
    const R = 6371e3;
    const φ1 = (lat1 * Math.PI) / 180,
      φ2 = (lat2 * Math.PI) / 180;
    const Δφ = ((lat2 - lat1) * Math.PI) / 180;
    const Δλ = ((lon2 - lon1) * Math.PI) / 180;

    const a =
      Math.sin(Δφ / 2) ** 2 +
      Math.cos(φ1) * Math.cos(φ2) * Math.sin(Δλ / 2) ** 2;
    return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  }

  function onPos(pos) {
    const uLat = pos.coords.latitude,
      uLng = pos.coords.longitude;
    setStatus(`You are at: ${uLat.toFixed(5)}, ${uLng.toFixed(5)}`);

    const newRange = { ...inRange };
    POIS.forEach((p) => {
      const dist = dM(uLat, uLng, p.lat, p.lng);
      if (dist <= 5 && !newRange[p.id]) {
        newRange[p.id] = true;
        audioMap[p.id]
          .play()
          .catch(() =>
            alert(`You are near ${p.name}. Tap to play the audio manually.`)
          );
      } else if (dist > 10) {
        newRange[p.id] = false;
      }
    });
    setInRange(newRange);
  }

  function onErr(err) {
    console.error("Geolocation error:", err);
    setStatus("Error getting location.");
  }

  function startTrack() {
    if (!navigator.geolocation) {
      alert("Geolocation not supported");
      return;
    }
    navigator.geolocation.watchPosition(onPos, onErr, {
      enableHighAccuracy: true,
    });
    setStatus("Tracking started...");
  }

  return (
    <div className="p-6 bg-white rounded-xl shadow-md max-w-lg mx-auto mt-8 text-center">
      <h2 className="text-2xl font-bold text-emerald-700 mb-4">
        Smart Tourism Audio Guide
      </h2>
      <button
        onClick={startTrack}
        className="px-4 py-2 bg-emerald-600 text-white rounded hover:bg-emerald-700 transition"
      >
        Start Tour
      </button>
      <div id="status" className="mt-4 text-gray-700 font-medium">
        {status}
      </div>
    </div>
  );
};

export default AudioGuide;
