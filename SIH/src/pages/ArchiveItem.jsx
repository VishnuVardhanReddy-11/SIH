import React, { useState } from "react";

const archives = [
  {
    id: 1,
    title: "Ancient Manuscript",
    type: "Manuscript",
    image: "manuscript.png",
    description:
      "A digitized Buddhist scripture written on handmade palm-leaf paper, dating back to the 17th century.",
    details:
      "This manuscript contains rare Buddhist teachings preserved on delicate palm-leaf paper. Experts believe it originates from the early 1600s, showcasing the traditional script and ink techniques of Sikkimese monasteries.",
  },
  {
    id: 2,
    title: "Sacred Thangka Painting",
    type: "Mural",
    image: "paint.png",
    description:
      "A hand-painted Thangka depicting Avalokiteshvara, an exquisite example of Tibetan artistry.",
    details:
      "This Thangka is painted using natural mineral pigments and gold dust. It represents Avalokiteshvara, the Bodhisattva of Compassion, and is traditionally used for meditation practices.",
  },
  {
    id: 3,
    title: "Bronze Buddha Statue",
    type: "Artifact",
    image: "buddha.png",
    description:
      "A rare 18th-century bronze statue preserved and digitized for global access.",
    details:
      "Cast in the 18th century using the lost-wax technique, this statue reflects the mastery of Buddhist artisans in Sikkim. The bronze composition gives it a timeless shine.",
  },
  {
    id: 4,
    title: "Monastery Wall Mural",
    type: "Mural",
    image: "wall.png",
    description:
      "Colorful monastery wall mural depicting the Wheel of Life, digitally preserved in high resolution.",
    details:
      "The Wheel of Life mural illustrates the Buddhist concept of Samsara. Each section of the wheel depicts different realms of existence, serving as a visual guide for monks and visitors.",
  },
];

const Archive = () => {
  const [selectedItem, setSelectedItem] = useState(null);

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
                <button
                  onClick={() => setSelectedItem(item)}
                  className="bg-indigo-600 text-white px-4 py-2 rounded-xl hover:bg-indigo-700 transition"
                >
                  View in Detail
                </button>
                <a
                  href={item.image}
                  download={item.title}
                  className="bg-gray-100 text-indigo-700 px-4 py-2 rounded-xl hover:bg-gray-200 transition"
                >
                  Download
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedItem && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl p-6 max-w-xl w-full shadow-lg relative">
            {/* Close Button */}
            <button
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 text-2xl"
              onClick={() => setSelectedItem(null)}
            >
              ✕
            </button>

            <img
              src={selectedItem.image}
              alt={selectedItem.title}
              className="w-full h-64 object-cover rounded-xl mb-4"
            />
            <h2 className="text-3xl font-bold text-indigo-700 mb-2">
              {selectedItem.title}
            </h2>
            <p className="text-sm uppercase text-indigo-600 font-medium mb-4">
              {selectedItem.type}
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              {selectedItem.details}
            </p>

            <div className="flex justify-between">
              {/* Back Button */}
              <button
                onClick={() => setSelectedItem(null)}
                className="bg-indigo-600 text-white px-6 py-2 rounded-xl hover:bg-indigo-700 transition"
              >
                ← Back
              </button>

              {/* Download Button */}
              <a
                href={selectedItem.image}
                download={selectedItem.title}
                className="bg-gray-100 text-indigo-700 px-6 py-2 rounded-xl hover:bg-gray-200 transition"
              >
                Download
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Archive;
