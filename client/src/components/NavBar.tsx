'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Phone, Info, Beer, Mail } from 'lucide-react';

const EventNavbar: React.FC = () => {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setShowNavbar(false); // Scrolling down
      } else {
        setShowNavbar(true); // Scrolling up
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <motion.header
      initial={{ y: -60 }}
      animate={{ y: showNavbar ? 0 : -100 }}
      transition={{ duration: 0.4, ease: 'easeInOut' }}
      className="w-full bg-black text-white px-6 py-4 flex items-center justify-between shadow-md fixed top-0 left-0 z-50"
    >
      {/* Logo */}
      <div className="flex items-center gap-3">
        <img
          src="/logo.jpeg"
          alt="Logo"
          className="w-12 h-12 rounded-full object-cover border border-blue-700"
        />
        <span className="text-xl font-bold tracking-wide text-blue-700">NR Events</span>
      </div>

      {/* Nav Links */}
      <nav className="hidden md:flex gap-8 text-lg">
        <a
          href="#about"
          className="flex items-center gap-2 hover:text-blue-700 transition-all duration-200"
        >
          <Info size={18} /> About
        </a>
        <a
          href="#pubs"
          className="flex items-center gap-2 hover:text-blue-700 transition-all duration-200"
        >
          <Beer size={18} /> Pubs We Offer
        </a>
        <a
          href="#contact"
          className="flex items-center gap-2 hover:text-blue-700 transition-all duration-200"
        >
          <Mail size={18} /> Contact Us
        </a>
      </nav>

      {/* Phone Number */}
      <div className="flex items-center gap-2 text-sm text-blue-300">
        <Phone size={16} className="text-blue-500" /> +91 98765 43210
      </div>
    </motion.header>
  );
};

export default EventNavbar;
