import React from "react";
import { motion } from "framer-motion";

interface PubProps {
  name: string;
  image: string;
  location: string;
  hours: string;
}

export default function PubCard({ name, image, location, hours }: PubProps) {
  return (
    <motion.div
      className="bg-white text-black rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300"
      whileHover={{ rotate: 1 }}
    >
      <img src={image} alt={name} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-bold mb-1">{name}</h3>
        <p className="text-sm text-gray-600">📍 {location}</p>
        <p className="text-sm text-gray-600">🕒 {hours}</p>
      </div>
    </motion.div>
  );
}