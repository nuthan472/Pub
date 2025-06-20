"use client";

import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { motion } from "framer-motion";
import { FaBeer } from "react-icons/fa";
import { GiPartyPopper } from "react-icons/gi";
import { MdOutlineCelebration } from "react-icons/md";

// Animated 3 beer glasses (kept as a fun visual touch)
function AnimatedBeers() {
  return (
    <motion.div
      className="flex justify-center gap-8 mb-8"
      initial={false}
      animate={{
        scale: [1, 1.1, 1],
        rotate: [0, 8, -8, 0],
      }}
      transition={{
        duration: 3,
        repeat: Infinity,
        repeatType: "mirror",
        ease: "easeInOut",
      }}
    >
      {[0, 1, 2].map((i) => (
        <motion.div
          key={i}
          animate={{
            y: [0, -14, 0],
            scale: [1, 1.07, 1],
            rotate: i === 1 ? [0, 3, -3, 0] : [0, 0, 0, 0],
          }}
          transition={{
            duration: 2.2 + i * 0.4,
            repeat: Infinity,
            repeatType: "mirror",
            delay: i * 0.3,
            ease: "easeInOut",
          }}
        >
          <FaBeer
            size={66}
            style={{
              filter: "drop-shadow(0 4px 18px #ffecb3b0)",
              color: "#fffde4",
              stroke: "#ffb100",
              strokeWidth: 1,
            }}
          />
        </motion.div>
      ))}
    </motion.div>
  );
}

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    people: "",
    couples: "",
    club: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const API_BASE = "https://nr-events-backend-3.onrender.com";

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

  // Replace with your actual image file in /public, e.g. "/pub-bg.jpg"
  const bgImage = "/hungry-hippe.jpeg";

  return (
    <div
      style={{
        position: "relative",
        minHeight: "100vh",
        background: `url(${bgImage}) center center / cover no-repeat fixed`,
        overflow: "hidden",
      }}
    >
      {/* Overlay to darken the image for better content contrast */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "rgba(20,22,28,0.62)",
          zIndex: 0,
        }}
      />
      <Toaster position="top-center" reverseOrder={false} />
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.9 }}
        className="min-h-screen text-white p-6 lg:p-16 flex flex-col lg:flex-row items-center justify-center gap-12"
        style={{ position: "relative", zIndex: 1 }}
      >
        {/* LEFT - Animated Text and Beers */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="flex-1 space-y-6 text-center lg:text-left lg:pl-10 lg:pt-10"
        >
          <h2 className="text-5xl font-bold text-yellow-400 drop-shadow-lg flex items-center justify-center lg:justify-start gap-2">
            <GiPartyPopper /> Let's Get Lit!
          </h2>
          <p className="text-lg text-gray-100 max-w-lg mx-auto lg:mx-0">
            Fill the form & we’ll reserve your perfect night out! From sky lounges to craft beer spots — we’ve got it all 🥂
          </p>
          <AnimatedBeers />
          <div className="text-5xl text-yellow-300 flex justify-center lg:justify-start gap-8">
            <MdOutlineCelebration />
          </div>
        </motion.div>

        {/* RIGHT - Booking Form */}
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          whileHover={{
            rotateX: 5,
            rotateY: -7,
            scale: 1.03,
            boxShadow: "0 8px 40px #7ee8fa88, 0 1.5px 4px #fffbe6cc",
          }}
          className="flex-1 w-full max-w-xl bg-white/10 backdrop-blur-md rounded-2xl shadow-2xl p-8"
          style={{ perspective: 1000 }}
        >
          <h2 className="text-4xl font-extrabold text-center mb-6 text-yellow-400 drop-shadow animate-pulse">
            🍺 Book Your Club Night
          </h2>

          <form onSubmit={handleSubmit} className="grid gap-6">
            {["name", "phone", "people", "couples"].map((field, i) => (
              <motion.input
                key={i}
                type={["phone", "people", "couples"].includes(field) ? "number" : "text"}
                name={field}
                placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
                value={form[field as keyof typeof form]}
                onChange={handleChange}
                required
                whileFocus={{ scale: 1.04, borderColor: "#7ee8fa" }}
                transition={{ duration: 0.2 }}
                className="p-4 rounded-lg bg-white/20 placeholder-gray-300 text-white outline-none focus:ring-2 focus:ring-yellow-400"
              />
            ))}

            <motion.input
              list="clubs"
              name="club"
              placeholder="Select or type a pub..."
              value={form.club}
              onChange={handleChange}
              whileFocus={{ scale: 1.04, borderColor: "#7ee8fa" }}
              transition={{ duration: 0.2 }}
              className="p-4 rounded-lg bg-white/20 placeholder-gray-300 text-white outline-none focus:ring-2 focus:ring-yellow-400"
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
              whileHover={!loading && { scale: 1.06 }}
              whileTap={{ scale: 0.96 }}
              className={`${
                loading ? "bg-yellow-300 cursor-not-allowed" : "bg-yellow-500 hover:bg-yellow-600"
              } text-white font-bold py-3 px-6 rounded-lg shadow-lg transition-all duration-300`}
            >
              {loading ? "⏳ Booking..." : "🍾 Submit & Party"}
            </motion.button>
          </form>
        </motion.div>
      </motion.div>
    </div>
  );
}