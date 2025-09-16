import React from "react";

const VirtualTour = () => {
  return (
    <div className="bg-gradient-to-b from-white to-gray-50 min-h-screen py-16 px-6 md:px-20">
      {/* Page Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-emerald-700">
          🏯 Virtual Monastery Tours
        </h1>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          Step into the monasteries of Sikkim from anywhere in the world. Explore
          360° panoramic views, sacred halls, ancient murals, and peaceful
          courtyards with an immersive virtual tour experience.
        </p>
      </div>

      {/* 360° Viewer Placeholder */}
      <div className="flex justify-center">
        <div className="w-full md:w-4/5 h-[500px] bg-gray-200 rounded-2xl shadow-lg flex items-center justify-center text-gray-600 text-lg">
          🔄 360° Virtual Tour Viewer Placeholder
        </div>
      </div>

      {/* Featured Monasteries */}
      <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          {
            name: "Rumtek Monastery",
            desc: "Known as the Dharma Chakra Centre, one of the most important monasteries in Sikkim.",
          },
          {
            name: "Pemayangtse Monastery",
            desc: "A 17th-century monastery with intricate woodwork and ancient murals.",
          },
          {
            name: "Tashiding Monastery",
            desc: "Sacred site famous for its Bhumchu festival and spiritual significance.",
          },
        ].map((monastery, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-2xl shadow hover:shadow-xl transition"
          >
            <h2 className="text-xl font-semibold text-emerald-700">
              {monastery.name}
            </h2>
            <p className="mt-2 text-gray-600">{monastery.desc}</p>
            <button className="mt-4 px-4 py-2 bg-emerald-600 text-white rounded-xl hover:bg-emerald-700 transition">
              Start Tour
            </button>
          </div>
        ))}
      </div>

      {/* Call to Action */}
      <div className="text-center mt-20">
        <h2 className="text-2xl font-bold text-gray-800">
          Ready to explore Sikkim’s monasteries in 360°?
        </h2>
        <button className="mt-6 px-6 py-3 bg-emerald-600 text-white text-lg rounded-xl shadow hover:bg-emerald-700 transition">
          Launch Full Virtual Experience
        </button>
      </div>
    </div>
  );
};

export default VirtualTour;
