'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Info, Beer, Mail, Menu, X } from 'lucide-react';
import { FaInstagram } from 'react-icons/fa';

const EventNavbar: React.FC = () => {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <>
      <motion.header
        initial={{ y: -60 }}
        animate={{ y: showNavbar ? 0 : -100 }}
        transition={{ duration: 0.4, ease: 'easeInOut' }}
        className="w-full bg-black bg-opacity-60 backdrop-blur-md text-white px-6 py-4 flex items-center justify-between shadow-md fixed top-0 left-0 z-[999]"
      >
        {/* Logo */}
        <div className="flex items-center gap-3">
          <img
            src="/logo.jpeg"
            alt="Logo"
            className="w-12 h-12 rounded-full object-cover border-2 border-white"
          />
          <span className="text-xl font-extrabold tracking-wide text-white">
            NR Events
          </span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8 text-md font-semibold text-white">
          <a href="#about" className="flex items-center gap-2 hover:text-pink-400 transition">
            <Info size={18} /> About
          </a>
          <a href="#pubs" className="flex items-center gap-2 hover:text-pink-400 transition">
            <Beer size={18} /> Pubs We Offer
          </a>
          <a href="#contact" className="flex items-center gap-2 hover:text-pink-400 transition">
            <Mail size={18} /> Contact Us
          </a>
        </nav>

        {/* Right - Contact & Menu */}
        <div className="flex items-center gap-4">
          {/* Phone + Insta (Desktop) */}
          <div className="hidden md:flex items-center gap-4 text-sm text-white">
            <a
              href="tel:+919391620139"
              className="flex items-center gap-2 hover:text-pink-400 transition"
            >
              <Phone size={16} /> +91 93916 20139
            </a>
            <a
              href="https://instagram.com/nreventsclub"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl text-transparent bg-gradient-to-br from-yellow-400 via-pink-500 to-purple-600 bg-clip-text hover:scale-110 transition"
            >
              <FaInstagram />
            </a>
          </div>

          {/* Mobile: Phone + Insta */}
          <div className="md:hidden flex items-center gap-3 text-xs text-white">
            <a href="tel:+919391620139" className="flex items-center gap-1">
              <Phone size={14} /> +91 93916 20139
            </a>
           <a
  href="https://instagram.com/nreventsclub"
  target="_blank"
  rel="noopener noreferrer"
  className="text-xl text-pink-500 hover:text-pink-400 transition hover:scale-110"
>
  <FaInstagram />
</a>

          </div>

          {/* Hamburger Toggle */}
          <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden text-white">
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden fixed top-20 left-0 w-full bg-black bg-opacity-80 text-white flex flex-col gap-6 px-6 py-8 z-40 shadow-lg"
          >
            <a onClick={() => setMenuOpen(false)} href="#about" className="flex items-center gap-2 text-lg hover:text-pink-400">
              <Info size={20} /> About
            </a>
            <a onClick={() => setMenuOpen(false)} href="#pubs" className="flex items-center gap-2 text-lg hover:text-pink-400">
              <Beer size={20} /> Pubs We Offer
            </a>
            <a onClick={() => setMenuOpen(false)} href="#contact" className="flex items-center gap-2 text-lg hover:text-pink-400">
              <Mail size={20} /> Contact Us
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default EventNavbar;
