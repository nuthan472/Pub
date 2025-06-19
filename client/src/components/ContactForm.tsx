"use client";
import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    people: "",
    couples: "",
    club: "Best Pubs in Koramangala",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
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
        setForm({
          name: "",
          phone: "",
          people: "",
          couples: "",
          club: "Best Pubs in Koramangala",
        });
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
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-purple-900 text-white p-10 flex items-center justify-center">
      <Toaster position="top-center" reverseOrder={false} />
      <div className="w-full max-w-2xl bg-white/10 backdrop-blur-sm rounded-2xl shadow-2xl p-8">
        <h2 className="text-4xl font-extrabold text-center mb-6 text-pink-400 drop-shadow">
          🎉 Book Your Club Night
        </h2>

        <form onSubmit={handleSubmit} className="grid gap-6">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            required
            className="p-4 rounded-lg bg-white/20 placeholder-gray-300 text-white outline-none focus:ring-2 focus:ring-pink-500"
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={form.phone}
            onChange={handleChange}
            required
            className="p-4 rounded-lg bg-white/20 placeholder-gray-300 text-white outline-none focus:ring-2 focus:ring-pink-500"
          />
          <input
            type="number"
            name="people"
            placeholder="How many people?"
            value={form.people}
            onChange={handleChange}
            required
            className="p-4 rounded-lg bg-white/20 placeholder-gray-300 text-white outline-none focus:ring-2 focus:ring-pink-500"
          />
          <input
            type="number"
            name="couples"
            placeholder="How many couples?"
            value={form.couples}
            onChange={handleChange}
            required
            className="p-4 rounded-lg bg-white/20 placeholder-gray-300 text-white outline-none focus:ring-2 focus:ring-pink-500"
          />
          <input
            list="clubs"
            name="club"
            placeholder="Select or type a pub..."
            value={form.club}
            onChange={handleChange}
            className="p-4 rounded-lg bg-white/20 placeholder-gray-300 text-white outline-none focus:ring-2 focus:ring-pink-500"
          />
          <datalist id="clubs">
            <option value="Arbor Brewing Company" />
            <option value="Byg Brewski" />
            <option value="Toit" />
            <option value="LOFT 38" />
            <option value="Skyye Lounge" />
            {/* Add more clubs if needed */}
          </datalist>

          <button
            type="submit"
            disabled={loading}
            className={`${
              loading ? "bg-pink-300 cursor-not-allowed" : "bg-pink-600 hover:bg-pink-700"
            } text-white font-bold py-3 px-6 rounded-lg shadow-lg transition-all duration-300 ${
              !loading && "hover:scale-105"
            }`}
          >
            {loading ? "⏳ Booking..." : "🍾 Submit & Party"}
          </button>
        </form>
      </div>
    </div>
  );
}
