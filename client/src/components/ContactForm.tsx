"use client";

import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { motion } from "framer-motion";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    people: "",
    couples: "",
    club: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const API_BASE =
      process.env.NODE_ENV === "production"
        ? "https://nrevents-backend.onrender.com"
        : "http://localhost:5000";

    try {
      const response = await fetch(`${API_BASE}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (response.ok) {
        toast.success("🎉 Booking request sent!");
        setForm({ name: "", phone: "", people: "", couples: "", club: "" });
      } else {
        const errorData = await response.json();
        toast.error("❌ Failed: " + (errorData.error || "Try again later."));
      }
    } catch (error) {
      toast.error("⚠️ Server error! Try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen bg-cover bg-center text-white p-10 flex items-center justify-center"
      style={{ backgroundImage: "url('/crowd-in-blr.webp')" }}
    >
      <Toaster position="top-center" reverseOrder={false} />
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="w-full max-w-2xl bg-white/10 backdrop-blur-md rounded-2xl shadow-2xl p-8"
      >
        <h2 className="text-4xl font-extrabold text-center mb-6 text-pink-400 drop-shadow animate-pulse">
          🎉 Book Your Club Night
        </h2>

        <form onSubmit={handleSubmit} className="grid gap-6">
          {[
            { name: "name", type: "text", placeholder: "Your Name" },
            { name: "phone", type: "tel", placeholder: "Phone Number" },
            { name: "people", type: "number", placeholder: "How many people?" },
            { name: "couples", type: "number", placeholder: "How many couples?" },
          ].map((input, i) => (
            <motion.input
              key={i}
              type={input.type}
              name={input.name}
              placeholder={input.placeholder}
              value={form[input.name]}
              onChange={handleChange}
              required
              whileFocus={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
              className="p-4 rounded-lg bg-white/20 placeholder-gray-300 text-white outline-none focus:ring-2 focus:ring-pink-500"
            />
          ))}

          <motion.input
            list="clubs"
            name="club"
            placeholder="Select or type a pub..."
            value={form.club}
            onChange={handleChange}
            whileFocus={{ scale: 1.03 }}
            transition={{ duration: 0.3 }}
            className="p-4 rounded-lg bg-white/20 placeholder-gray-300 text-white outline-none focus:ring-2 focus:ring-pink-500"
          />
          <datalist id="clubs">
            <option value="Arbor Brewing Company" />
            <option value="Byg Brewski" />
            <option value="Toit" />
            <option value="LOFT 38" />
            <option value="Skyye Lounge" />
          </datalist>

          <motion.button
            type="submit"
            disabled={loading}
            whileHover={!loading && { scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className={`$${
              loading ? "bg-pink-300 cursor-not-allowed" : "bg-pink-600 hover:bg-pink-700"
            } text-white font-bold py-3 px-6 rounded-lg shadow-lg transition-all duration-300`}
          >
            {loading ? "⏳ Booking..." : "🍾 Submit & Party"}
          </motion.button>
        </form>
      </motion.div>
    </motion.div>
  );
}