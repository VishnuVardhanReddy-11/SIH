import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const events = [
  {
    id: 1,
    name: "Losar – Tibetan New Year",
    date: new Date(2025, 1, 21),
    location: "Rumtek Monastery",
    description:
      "Losar marks the Tibetan New Year with vibrant mask dances, prayers, and celebrations that welcome prosperity and peace.",
  },
  {
    id: 2,
    name: "Saga Dawa Festival",
    date: new Date(2025, 5, 5),
    location: "Tashiding Monastery",
    description:
      "One of the most sacred festivals in Sikkim, commemorating the birth, enlightenment, and nirvana of Lord Buddha.",
  },
  {
    id: 3,
    name: "Pang Lhabsol",
    date: new Date(2025, 8, 12),
    location: "Pemayangtse Monastery",
    description:
      "A unique festival paying homage to Mount Khangchendzonga, celebrated with warrior dances and rituals.",
  },
  {
    id: 4,
    name: "Drupka Teshi",
    date: new Date(2025, 6, 20),
    location: "Phodong Monastery",
    description:
      "Celebrates the day Lord Buddha delivered his first sermon, spreading the Four Noble Truths.",
  },
];

const Events = () => {
  const [addedDates, setAddedDates] = useState([]);

  const addToCalendar = (date) => {
    const time = date.getTime();
    if (!addedDates.find((d) => d.getTime() === time)) {
      setAddedDates([...addedDates, date]);
    }
  };

  const tileClassName = ({ date, view }) => {
    if (view === "month") {
      // If date is added by user -> red
      if (addedDates.find((d) => d.toDateString() === date.toDateString())) {
        return "bg-red-500 text-white font-bold rounded-full";
      }
      // If date is in events but not added -> green
      if (events.find((e) => e.date.toDateString() === date.toDateString())) {
        return "bg-green-300 text-green-900 font-bold rounded-full";
      }
    }
    return null;
  };

  return (
    <div className="bg-gradient-to-b from-white to-gray-50 min-h-screen py-16 px-6 md:px-20">
      {/* Page Heading */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-indigo-700">Cultural Calendar</h1>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          Stay updated with Sikkim’s vibrant cultural festivals, monastic rituals, and community gatherings.
        </p>
      </div>

      {/* Calendar */}
      <div className="mb-12 flex justify-center">
        <Calendar
          tileClassName={tileClassName}
          minDetail="month"
          nextLabel=">"
          prevLabel="<"
        />
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
                <h2 className="text-2xl font-semibold text-indigo-700">{event.name}</h2>
                <p className="text-gray-500 mt-1">{event.date.toDateString()}</p>
                <p className="text-gray-600 mt-3">{event.description}</p>
                <p className="mt-3 font-medium text-indigo-600">📍 {event.location}</p>
              </div>
              <div className="mt-4 md:mt-0 flex gap-3">
                <button
                  onClick={() => addToCalendar(event.date)}
                  className="bg-indigo-600 text-white px-4 py-2 rounded-xl hover:bg-indigo-700 transition"
                >
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
