import React from "react";

const archives = [
  {
    id: 1,
    title: "Ancient Manuscript",
    type: "Manuscript",
    image:
      "manuscript.png",
    description:
      "A digitized Buddhist scripture written on handmade palm-leaf paper, dating back to the 17th century.",
  },
  {
    id: 2,
    title: "Sacred Thangka Painting",
    type: "Mural",
    image:
      "paint.png",
    description:
      "A hand-painted Thangka depicting Avalokiteshvara, an exquisite example of Tibetan artistry.",
  },
  {
    id: 3,
    title: "Bronze Buddha Statue",
    type: "Artifact",
    image:
      "buddha.png",
    description:
      "A rare 18th-century bronze statue preserved and digitized for global access.",
  },
  {
    id: 4,
    title: "Monastery Wall Mural",
    type: "Mural",
    image:
      "wall.png",
    description:
      "Colorful monastery wall mural depicting the Wheel of Life, digitally preserved in high resolution.",
  },
];

const Archive = () => {
  return (
    <div className="bg-gradient-to-b from-white to-gray-50 min-h-screen py-16 px-6 md:px-20">
      {/* Page Heading */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-indigo-700">Digital Archive</h1>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          Explore digitized manuscripts, murals, and artifacts from Sikkim’s
          sacred monasteries. Each item has been carefully preserved for
          researchers, students, and cultural enthusiasts worldwide.
        </p>
      </div>

      {/* Archive Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {archives.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-2xl shadow hover:shadow-xl transition overflow-hidden"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-56 object-cover"
            />
            <div className="p-6">
              <span className="inline-block text-xs uppercase bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full">
                {item.type}
              </span>
              <h2 className="text-2xl font-semibold text-indigo-700 mt-3">
                {item.title}
              </h2>
              <p className="text-gray-600 mt-3">{item.description}</p>
              <div className="mt-4 flex gap-3">
                <button className="bg-indigo-600 text-white px-4 py-2 rounded-xl hover:bg-indigo-700 transition">
                  View in Detail
                </button>
                <button className="bg-gray-100 text-indigo-700 px-4 py-2 rounded-xl hover:bg-gray-200 transition">
                  Download
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Archive;
