import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="bg-gradient-to-b from-indigo-50 via-white to-white min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-cover bg-center h-[80vh]" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=1400&q=80')" }}>
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <div className="text-center px-4">
            <h1 className="text-4xl md:text-6xl font-extrabold text-white drop-shadow-lg">
              Welcome to Monastery360
            </h1>
            <p className="mt-4 text-lg md:text-2xl text-gray-200 max-w-2xl mx-auto">
              Explore the sacred monasteries of Sikkim through immersive digital experiences.
            </p>
            <div className="mt-6 flex justify-center gap-4">
              <Link
                to="/virtual-tour"
                className="bg-indigo-600 text-white px-6 py-3 rounded-xl shadow hover:bg-indigo-700 transition"
              >
                Start Virtual Tour
              </Link>
              <Link
                to="/explore"
                className="bg-white text-indigo-700 px-6 py-3 rounded-xl shadow hover:bg-gray-100 transition"
              >
                Explore Monasteries
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-6 md:px-20 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-indigo-700">Preserving Heritage Digitally</h2>
        <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
          Monastery360 brings Sikkim’s sacred monasteries to your screen with 360° virtual tours, 
          cultural archives, and immersive storytelling. Our goal is to make heritage accessible while preserving fragile treasures.
        </p>
      </section>

      {/* Features Section */}
      <section className="py-16 px-6 md:px-20 bg-gray-50">
        <h2 className="text-3xl font-bold text-center text-indigo-700">Key Features</h2>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="bg-white p-8 rounded-2xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-indigo-600">🌄 Virtual Tours</h3>
            <p className="mt-3 text-gray-600">
              Walk through monastery interiors, prayer halls, and sacred relic rooms in stunning 360° panoramas.
            </p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-indigo-600">📜 Digital Archives</h3>
            <p className="mt-3 text-gray-600">
              Access digitized manuscripts, murals, and artifacts for research, learning, and global appreciation.
            </p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-indigo-600">🎉 Cultural Calendar</h3>
            <p className="mt-3 text-gray-600">
              Stay updated on festivals, teachings, and rituals with our interactive cultural event listings.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 text-center bg-indigo-700 text-white">
        <h2 className="text-3xl md:text-4xl font-bold">Begin Your Journey Today</h2>
        <p className="mt-4 max-w-2xl mx-auto text-gray-200">
          Dive into the spiritual and cultural richness of Sikkim’s monasteries from anywhere in the world.
        </p>
        <Link
          to="/map"
          className="mt-6 inline-block bg-white text-indigo-700 font-semibold px-6 py-3 rounded-xl shadow hover:bg-gray-100 transition"
        >
          Explore the Map
        </Link>
      </section>
    </div>
  );
};

export default Home;
