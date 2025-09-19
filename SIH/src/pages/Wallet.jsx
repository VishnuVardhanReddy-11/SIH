import React, { useState, useEffect } from "react";

const POIS = [
  { id: 1, name: "Parking", lat: 27.2889347, lon: 88.56208041 },
  { id: 2, name: "Entrance", lat: 27.28851332, lon: 88.56200941 },
  { id: 3, name: "Pillar", lat: 27.28852589, lon: 88.5618096 },
  { id: 4, name: "Paintings & Chakra Centre", lat: 27.28862027, lon: 88.56148053 },
  { id: 5, name: "View Point", lat: 27.28854528, lon: 88.56161848 },
];

const SHOPS = [
  { id: 1, name: "Himalayan Café", key: "cafe123", minPoints: 40, discount: "5%" },
  { id: 2, name: "Souvenir Shop", key: "souvenir456", minPoints: 80, discount: "10%" },
];

function getDistance(lat1, lon1, lat2, lon2) {
  const R = 6371e3; // Earth radius in meters
  const toRad = (d) => (d * Math.PI) / 180;
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

const WalletPage = () => {
  const [username, setUsername] = useState("");
  const [activeUser, setActiveUser] = useState(null);
  const [wallet, setWallet] = useState({ points: 0, visitedPOIs: [] });
  const [shopKey, setShopKey] = useState("");
  const [message, setMessage] = useState(null);
  const HOME_BASE = { lat: 27.3389, lon: 88.6117 };

  useEffect(() => {
    if (activeUser) localStorage.setItem(activeUser, JSON.stringify(wallet));
  }, [wallet, activeUser]);

  const showMessage = (text, type = "info") => {
    setMessage({ text, type });
    setTimeout(() => setMessage(null), 3000);
  };

  const activateWallet = () => {
    const data = localStorage.getItem(username);
    if (data) {
      showMessage(`👋 Welcome back ${username}, wallet restored!`, "success");
      setWallet(JSON.parse(data));
    } else {
      showMessage(`✨ Wallet created for ${username}`, "success");
      setWallet({ points: 0, visitedPOIs: [] });
    }
    setActiveUser(username);
  };

  const checkLocation = () => {
    navigator.geolocation.getCurrentPosition((pos) => {
      const { latitude, longitude } = pos.coords;
      const distFromHome = getDistance(latitude, longitude, HOME_BASE.lat, HOME_BASE.lon);

      if (distFromHome >= 10000) {
        showMessage("⚠️ You moved 10km away. Points expired!", "error");
        setWallet({ points: 0, visitedPOIs: [] });
        return;
      }

      POIS.forEach((poi) => {
        const d = getDistance(latitude, longitude, poi.lat, poi.lon);
        if (d <= 15 && !wallet.visitedPOIs.includes(poi.id)) { // distance threshold reduced to 15 meters
          setWallet((prev) => ({
            points: prev.points + 10,
            visitedPOIs: [...prev.visitedPOIs, poi.id],
          }));
          showMessage(`🎯 +10 points! You reached ${poi.name}`, "success");
        }
      });
    });
  };

  const redeemDiscount = () => {
    const shop = SHOPS.find((s) => s.key === shopKey);
    if (!shop) return showMessage("❌ Invalid shop key!", "error");
    if (wallet.points < shop.minPoints)
      return showMessage(`⚠️ Not enough points! You need ${shop.minPoints} for ${shop.discount}.`, "error");

    setWallet((prev) => ({ ...prev, points: prev.points - shop.minPoints }));
    showMessage(`🏷️ Discount applied at ${shop.name}!`, "success");
    setShopKey("");
  };

  if (!activeUser)
    return (
      <div className="flex items-center justify-center py-20 bg-gradient-to-b from-indigo-50 to-white">
        <div className="bg-white shadow-xl rounded-xl p-8 w-full max-w-md">
          {message && (
            <div
              className={`mb-4 p-3 rounded ${
                message.type === "success"
                  ? "bg-green-100 text-green-800"
                  : message.type === "error"
                  ? "bg-red-100 text-red-800"
                  : "bg-blue-100 text-blue-800"
              }`}
            >
              {message.text}
            </div>
          )}
          <h1 className="text-2xl font-bold mb-4 text-indigo-700">💼 Activate Wallet</h1>
          <input
            type="text"
            placeholder="Enter Username"
            className="border p-2 w-full mb-4 rounded"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <button
            onClick={activateWallet}
            className="bg-indigo-700 text-white px-4 py-2 w-full rounded hover:bg-indigo-800 transition"
          >
            Activate
          </button>
        </div>
      </div>
    );

  return (
    <div className="flex items-center justify-center py-20 bg-gradient-to-b from-indigo-50 to-white p-4">
      <div className="bg-white shadow-2xl rounded-2xl p-8 w-full max-w-lg relative">
        {message && (
          <div
            className={`mb-4 p-3 rounded ${
              message.type === "success"
                ? "bg-green-100 text-green-800"
                : message.type === "error"
                ? "bg-red-100 text-red-800"
                : "bg-blue-100 text-blue-800"
            }`}
          >
            {message.text}
          </div>
        )}

        <h1 className="text-2xl font-bold text-indigo-700 mb-4">💰 Wallet for {activeUser}</h1>
        <p className="mb-2 text-lg">✨ Points: <span className="font-bold">{wallet.points}</span></p>

        {/* Display shop names with min points and discount */}
        <p className="mb-2 text-lg font-semibold">🏬 Available Shops:</p>
        <ul className="mb-4 list-disc list-inside text-gray-700">
          {SHOPS.map((shop) => (
            <li key={shop.id}>
              {shop.name} — {shop.minPoints} points for {shop.discount}
            </li>
          ))}
        </ul>

        <button
          onClick={checkLocation}
          className="bg-green-600 text-white px-4 py-2 rounded w-full mb-4 hover:bg-green-700 transition"
        >
          📍 Check Location & Earn Points
        </button>

        <h2 className="text-lg font-semibold mb-2">🏷️ Redeem Discount</h2>
        <div className="flex mb-4">
          <input
            type="text"
            placeholder="Enter Shop Key"
            className="border p-2 flex-grow rounded-l"
            value={shopKey}
            onChange={(e) => setShopKey(e.target.value)}
          />
          <button
            onClick={redeemDiscount}
            className="bg-purple-600 text-white px-4 rounded-r hover:bg-purple-700 transition"
          >
            Redeem
          </button>
        </div>

        {/* Back Button */}
        <button
          onClick={() => setActiveUser(null)}
          className="mt-4 bg-gray-300 text-gray-800 px-4 py-2 rounded hover:bg-gray-400 transition"
        >
          🔙 Back
        </button>
      </div>
    </div>
  );
};

export default WalletPage;
