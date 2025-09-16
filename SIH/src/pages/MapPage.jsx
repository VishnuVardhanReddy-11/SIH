import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import AudioGuide from "../components/AudioGuide";
// Fix default marker icon issue in Leaflet with Vite
import "leaflet/dist/leaflet.css";
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
  iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
});

const monasteries = [
  {
    id: 1,
    name: "Rumtek Monastery",
    coords: [27.3256, 88.6122],
    description: "Seat of the Karmapa, one of the largest monasteries in Sikkim.",
  },
  {
    id: 2,
    name: "Pemayangtse Monastery",
    coords: [27.3004, 88.2333],
    description: "Known for stunning wooden sculptures and 17th-century history.",
  },
  {
    id: 3,
    name: "Tashiding Monastery",
    coords: [27.3156, 88.2656],
    description: "The holiest monastery in Sikkim, offering serenity and peace.",
  },
];

const MapPage = () => {
  return (
    <div className="bg-gradient-to-b from-white to-gray-50 min-h-screen py-16 px-6 md:px-20">
      {/* Page Heading */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-indigo-700">Monastery Map</h1>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          Navigate through the monasteries of Sikkim with our interactive map.
          Discover their locations, history, and cultural significance.
        </p>
      </div>

      {/* Map Section */}
      <div className="w-full h-[70vh] rounded-2xl overflow-hidden shadow-lg">
        <MapContainer
          center={[27.3256, 88.6122]}
          zoom={9}
          scrollWheelZoom={true}
          className="h-full w-full"
        >
          <TileLayer
            attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {monasteries.map((m) => (
            <Marker key={m.id} position={m.coords}>
              <Popup>
                <h2 className="font-semibold text-lg">{m.name}</h2>
                <p className="text-gray-600">{m.description}</p>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
      <AudioGuide />
    </div>
  );
};

export default MapPage;
