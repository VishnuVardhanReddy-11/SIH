import React from "react";

const events = [
  {
    id: 1,
    name: "Losar – Tibetan New Year",
    date: "February 21, 2025",
    location: "Rumtek Monastery",
    description:
      "Losar marks the Tibetan New Year with vibrant mask dances, prayers, and celebrations that welcome prosperity and peace.",
  },
  {
    id: 2,
    name: "Saga Dawa Festival",
    date: "June 5, 2025",
    location: "Tashiding Monastery",
    description:
      "One of the most sacred festivals in Sikkim, commemorating the birth, enlightenment, and nirvana of Lord Buddha.",
  },
  {
    id: 3,
    name: "Pang Lhabsol",
    date: "September 12, 2025",
    location: "Pemayangtse Monastery",
    description:
      "A unique festival paying homage to Mount Khangchendzonga, celebrated with warrior dances and rituals.",
  },
  {
    id: 4,
    name: "Drupka Teshi",
    date: "July 20, 2025",
    location: "Phodong Monastery",
    description:
      "Celebrates the day Lord Buddha delivered his first sermon, spreading the Four Noble Truths.",
  },
];

const Events = () => {
  return (
    <div className="bg-gradient-to-b from-white to-gray-50 min-h-screen py-16 px-6 md:px-20">
      {/* Page Heading */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-indigo-700">Cultural Calendar</h1>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          Stay updated with Sikkim’s vibrant cultural festivals, monastic
          rituals, and community gatherings. Plan your visit to witness the
          heritage come alive.
        </p>
      </div>

      {/* Events List */}
      <div className="space-y-8">
        {events.map((event) => (
          <div
            key={event.id}
            className="bg-white rounded-2xl shadow hover:shadow-xl transition p-6"
          >
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <div>
                <h2 className="text-2xl font-semibold text-indigo-700">
                  {event.name}
                </h2>
                <p className="text-gray-500 mt-1">{event.date}</p>
                <p className="text-gray-600 mt-3">{event.description}</p>
                <p className="mt-3 font-medium text-indigo-600">
                  📍 {event.location}
                </p>
              </div>
              <div className="mt-4 md:mt-0 flex gap-3">
                <button className="bg-indigo-600 text-white px-4 py-2 rounded-xl hover:bg-indigo-700 transition">
                  Add to Calendar
                </button>
                <button className="bg-gray-100 text-indigo-700 px-4 py-2 rounded-xl hover:bg-gray-200 transition">
                  Book Visit
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Events;
