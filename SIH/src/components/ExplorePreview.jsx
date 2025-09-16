import React from "react";
import { Link } from "react-router-dom";
import Tag from "./Tag";

// Mock data for featured monasteries (replace with API later)
const FEATURED_MONASTERIES = [
  {
    id: "rumtek",
    name: "Rumtek Monastery",
    short: "Large monastery with vibrant murals and active ritual life.",
    tags: ["Mahayana", "Tourist-friendly"],
    heroImage: "https://placehold.co/400x250?text=Rumtek",
  },
  {
    id: "pemayangtse",
    name: "Pemayangtse Monastery",
    short: "Historic gompa known for its architecture and thangkas.",
    tags: ["Heritage", "Mural"],
    heroImage: "https://placehold.co/400x250?text=Pemayangtse",
  },
  {
    id: "tashiding",
    name: "Tashiding Monastery",
    short: "Sacred site famous for its Bhumchu festival and spiritual significance.",
    tags: ["Festival", "Remote"],
    heroImage: "https://placehold.co/400x250?text=Tashiding",
  },
];

const ExplorePreview = () => {
  return (
    <section className="max-w-6xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-emerald-700 mb-6">Featured Monasteries</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {FEATURED_MONASTERIES.map((m) => (
          <div
            key={m.id}
            className="bg-white rounded-2xl overflow-hidden shadow hover:shadow-lg transition"
          >
            <img src={m.heroImage} alt={m.name} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-gray-800">{m.name}</h3>
              <p className="text-gray-600 mt-2">{m.short}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {m.tags.map((tag, idx) => (
                  <Tag key={idx}>{tag}</Tag>
                ))}
              </div>
              <div className="mt-4 flex gap-2">
                <Link
                  to={`/virtual-tour/${m.id}`}
                  className="px-3 py-1 rounded bg-emerald-600 text-white text-sm hover:bg-emerald-700 transition"
                >
                  Virtual Tour
                </Link>
                <Link
                  to={`/archive/${m.id}`}
                  className="px-3 py-1 rounded border text-sm hover:bg-gray-100 transition"
                >
                  Archive
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExplorePreview;
