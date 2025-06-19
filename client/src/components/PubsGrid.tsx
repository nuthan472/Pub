import React from "react";
import PubCard from "./PubCard";

const pubs = [
  {
    name: "Toit",
    image: "/toit.jpg",
    location: "Indiranagar",
    hours: "12:00 PM - 1:00 AM",
  },
  {
    name: "Byg Brewski",
    image: "/byg.jpg",
    location: "Sarjapur Road",
    hours: "12:00 PM - 12:00 AM",
  },
  // Add more pubs here
];

export default function PubsGrid() {
  return (
    <div className="p-10 bg-gray-800">
      <h2 className="text-3xl font-bold text-center mb-10 text-pink-400">🔥 Trending Pubs</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {pubs.map((pub, i) => (
          <PubCard key={i} {...pub} />
        ))}
      </div>
    </div>
  );
}