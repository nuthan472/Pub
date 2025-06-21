import React from "react";
import { FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full bg-gradient-to-r from-blue-800 via-blue-600 to-black text-white py-4 px-8 shadow-xl">
      <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-7xl mx-auto gap-3">
        <p className="text-sm md:text-base font-medium text-white">
          © {new Date().getFullYear()} NR Events Clubbing. All Rights Reserved.
        </p>
        <div className="flex gap-6 text-2xl">
          <a
            href="https://www.instagram.com/nr_events_45?igsh=anE5Z2JvcXFjZDJy"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-400 transition duration-300"
          >
            <FaInstagram />
          </a>
        </div>
      </div>
    </footer>
  );
}
