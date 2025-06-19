import React from "react";
import PubCard from "./PubCard";

const pubs = [
  {
    name: "Sugar Factory Reloaded",
    image: "/sugar-factory-reloaded.jpeg",
    location: "Kormangala",
    hours: "12:00 PM - 1:00 AM",
  },
  {
    name: "Mirror Sports bar",
    image: "/mirror-roof-top.jpg",
    location: "Kormangala",
    hours: "12:00 PM - 12:00 AM",
  },
   {
    name: "Blurred",
    image: "/blurred.jpg",
    location: "Kormangala",
    hours: "12:00 PM - 12:00 AM",
  },
  // Add more pubs here
];

export default function PubsGrid() {
  return (
    <div className="p-10 bg-gray-800">
      <h2 className="text-3xl font-bold text-center mb-10 text-pink-400">🔥 Last We hosted Pubs</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {pubs.map((pub, i) => (
          <PubCard key={i} {...pub} />
        ))}
      </div>
    </div>
  );
}