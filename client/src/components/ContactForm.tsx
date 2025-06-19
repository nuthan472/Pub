"use client";
import React, { useState } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    people: "",
    couples: "",
    club: "Best Pubs in Koramangala",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
     const response = await fetch("http://localhost:5000/api/contact", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(form),
});


      if (response.ok) {
        alert("🎉 Booking request sent successfully!");
        setForm({
          name: "",
          phone: "",
          people: "",
          couples: "",
          club: "Best Pubs in Koramangala",
        });
      } else {
        const errorData = await response.json();
        alert("❌ Failed to send: " + (errorData.error || "Try again later."));
      }
    } catch (error) {
      console.error("Error:", error);
      alert("⚠️ Server not reachable. Try again after starting the backend.");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-purple-900 text-white p-10 flex items-center justify-center">
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
            <option value="Bob’s Bar" />
            <option value="Byg Brewski" />
            <option value="Church Street Social" />
            <option value="Fenny's Lounge & Kitchen" />
            <option value="Gilly's Restobar" />
            <option value="Hangover" />
            <option value="House of Commons" />
            <option value="Koramangala Social" />
            <option value="LOFT 38" />
            <option value="Pecos Mojo" />
            <option value="Prost Brewpub" />
            <option value="Skyye Lounge" />
            <option value="The 13th Floor" />
            <option value="The Bier Library" />
            <option value="The Local" />
            <option value="The Pump House" />
            <option value="Tipsy Bull" />
            <option value="Toit" />
            <option value="XU Fashion Bar Kitchen" />
          </datalist>

          <button
            type="submit"
            className="bg-pink-600 hover:bg-pink-700 text-white font-bold py-3 px-6 rounded-lg shadow-lg transition-all duration-300 hover:scale-105"
          >
            🍾 Submit & Party
          </button>
        </form>
      </div>
    </div>
  );
}
