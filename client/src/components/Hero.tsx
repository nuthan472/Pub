"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Users, Image as Poster, Video } from "lucide-react";

// Typewriter Hook
const useTypewriter = (text, speed = 70) => {
  const [displayedText, setDisplayedText] = useState("");
  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayedText(text.slice(0, i + 1));
      i++;
      if (i === text.length) clearInterval(interval);
    }, speed);
    return () => clearInterval(interval);
  }, [text, speed]);
  return displayedText;
};

const services = [
  {
    icon: <Users size={28} className="text-orange-200" />,
    title: "Crowd-Pulling Events",
    text: "Unstoppable energy + perfect crowd flow. We make your party *legendary*.",
    bg: "/crowd-in-blr.webp",
  },
  {
    icon: <Poster size={28} className="text-pink-200" />,
    title: "Poster Design & Branding",
    text: "Scroll-stopping designs that roar online and offline.",
    bg: "/preview-page0.jpg",
  },
  {
    icon: <Video size={28} className="text-blue-200" />,
    title: "Video Shoots & Promos",
    text: "Cinematic trailers of your party. Reels. Vibes. Everything.",
    bg: "/viedo.jpg",
  },
];

const Hero = () => {
  const headingText = useTypewriter("NR Events — Bangalore’s Craziest Party Creators 🎉");

  return (
    <div
      className="relative bg-cover bg-center min-h-screen flex items-center justify-center text-center sm:px-6 px-4"
      style={{ backgroundImage: "url('/nightlife-of-bangalore-kitty-ko-eventsflare.jpg')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70 z-0" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 max-w-6xl w-full py-14"
      >
        <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold text-orange-400 mb-6">
          {headingText}
        </h1>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="text-white/90 text-sm sm:text-lg max-w-3xl mx-auto mb-10"
        >
          From wild pub nights to massive festivals, we pack the crowd, build the vibe, and capture the thrill. 🔥
        </motion.p>

        {/* Service Cards */}
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 px-2">
          {services.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05 }}
              transition={{ delay: i * 0.2, duration: 0.5 }}
              className="relative group overflow-hidden rounded-2xl border border-white/10 shadow-xl backdrop-blur-md"
            >
              {/* Background Image */}
              <div
                className="absolute inset-0 z-0 bg-cover bg-center brightness-50 group-hover:scale-110 transition-all duration-500"
                style={{ backgroundImage: `url(${s.bg})` }}
              />

              {/* Hover Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/10 to-white/5 opacity-0 group-hover:opacity-100 transition duration-300 z-0" />

              {/* Content */}
              <div className="relative z-10 p-6 text-left text-white">
                <div className="mb-4 animate-pulse">{s.icon}</div>
                <h3 className="text-lg font-semibold mb-2">{s.title}</h3>
                <p className="text-white/80 text-sm leading-relaxed">{s.text}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.a
          href="/contact"
          whileHover={{ scale: 1.05 }}
          className="inline-block mt-12 px-6 py-3 sm:px-8 sm:py-4 bg-gradient-to-r from-orange-500 to-pink-500 rounded-full text-white font-bold text-base sm:text-lg transition-all duration-300 shadow-md hover:shadow-orange-400/40"
        >
          🚀 Let’s Plan Your Event
        </motion.a>
      </motion.div>
    </div>
  );
};

export default Hero;