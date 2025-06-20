import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

// --- DATA ---
const pubOffers = [
  {
    name: "Sugar Factory Reloaded",
    icon: "🍻",
    desc: "Signature craft beers & gourmet bites",
    color: "#26ffe6",
    image: "/sugar-factory-reloaded.jpeg"
  },
  {
    name: "Blurred",
    icon: "🎉",
    desc: "Biggest party nights & exclusive VIP areas",
    color: "#fbc531",
    image: "/blurred.jpg"
  },
  {
    name: "Ginza",
    icon: "🍺",
    desc: "Brewmaster's specials & live music",
    color: "#ff7f50",
    image: "/ginza.avif"
  },
  {
    name: "Mirror Sports bar",
    icon: "✨",
    desc: "Stunning ambience & rooftop nights",
    color: "#a259f7",
    image: "/mirror-roof-top.jpg"
  },
  {
    name: "Hungry Hippee",
    icon: "🌃",
    desc: "Sky-high views & neon cocktails",
    color: "#63B3ED",
    image: "/hungry-hippe.jpeg"
  },
  {
    name: "Skyye Lounge",
    icon: "🌃",
    desc: "Sky-high views & neon cocktails",
    color: "#FF4D4F",
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?fit=crop&w=600&q=80"
  },
];

const discountDeals = [
  {
    title: "Ladies Night",
    desc: "1+1 on drinks every Wednesday 💃",
    bg: "linear-gradient(135deg,#ffe53b,#ff6fd8)",
    image: "/ladies-night.jpeg"
  },
  {
    title: "Happy Hours",
    desc: "50% off 6-8pm daily ⏰",
    bg: "linear-gradient(135deg,#38f9d7,#43e97b)",
    image: "/happy-hours.jpg"
  },
  {
    title: "Group Free Entry",
    desc: "Entry free for groups of 5+ 🎊",
    bg: "linear-gradient(135deg,#fa709a,#fee140)",
    image: "/crowd-in-blr.webp"
  },
  {
    title: "Student Special",
    desc: "Show ID, get 20% off 📚",
    bg: "linear-gradient(135deg,#b2fefa,#0ed2f7)",
    image: "/studentbars.jpg"
  },
  {
    title: "Birthday Bash",
    desc: "Free dessert & shoutout for birthday groups 🎂",
    bg: "linear-gradient(135deg,#fd6e6a,#ffc600)",
    image: "/birthday-party-restaurant.webp"
  },
];

// --- COMPONENTS ---
function OffersGrid() {
  return (
    <div className="offers-grid-container" style={{ margin: "2.5rem 0" }}>
      <h2
        style={{
          textAlign: "center",
          fontWeight: 800,
          fontSize: 36,
          marginBottom: 24,
          color: "#fff",
          letterSpacing: 1.2,
          textShadow: "0 4px 22px #000a",
        }}
      >
        What We Offer At Top Pubs
      </h2>
      <div
        className="offers-grid"
        style={{
          display: "grid",
          gap: 40,
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          maxWidth: 1150,
          margin: "0 auto",
        }}
      >
        {pubOffers.map((pub, i) => (
          <motion.div
            key={pub.name}
            initial={{ y: 50, opacity: 0, scale: 0.95 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.12, type: "spring", stiffness: 70 }}
            whileHover={{
              y: -24,
              scale: 1.07,
              boxShadow: `0 8px 50px ${pub.color}cc, 0 2px 16px #fffbe6cc`,
              border: `2.5px solid ${pub.color}`,
              background:
                "radial-gradient(ellipse at 50% 20%, #222 10%, #111 70%, #000 120%)",
              filter: "brightness(1.09) saturate(1.1)",
            }}
            style={{
              background:
                "linear-gradient(135deg, #181e47 0%, #10141a 100%)",
              borderRadius: 32,
              minHeight: 320,
              padding: "0 1.5rem 2.2rem 1.5rem",
              boxShadow: "0 2px 18px #0a1833cc",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              border: "2.5px solid transparent",
              position: "relative",
              overflow: "hidden",
              transition: "box-shadow .22s, border .22s, background .22s, transform .22s, filter .22s",
            }}
          >
            {/* Premium Glass Effect for Image */}
            <div
              style={{
                position: "relative",
                width: "100%",
                height: 130,
                marginBottom: 16,
                borderTopLeftRadius: 32,
                borderTopRightRadius: 32,
                overflow: "hidden",
                boxShadow: `0 8px 40px ${pub.color}40`,
                background: "#090f1f",
              }}
            >
              <img
                src={pub.image}
                alt={pub.name}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  filter: "brightness(0.95) saturate(1.12)",
                  borderTopLeftRadius: 32,
                  borderTopRightRadius: 32,
                  transition: "filter .2s",
                }}
              />
              {/* Glass reflection */}
              <div
                style={{
                  position: "absolute",
                  left: 0,
                  top: 0,
                  width: "100%",
                  height: "100%",
                  background:
                    "linear-gradient(115deg, #fff3 14%, #fff0 68%)",
                  pointerEvents: "none",
                }}
              />
            </div>
            <span
              style={{
                fontSize: 45,
                marginBottom: 12,
                display: "block",
                filter: `drop-shadow(0 0 14px ${pub.color}66)`,
                textShadow: `0 3px 12px #0007`,
              }}
            >
              {pub.icon}
            </span>
            <div
              style={{
                fontWeight: 800,
                fontSize: 22,
                marginBottom: 8,
                color: `${pub.color}`,
                letterSpacing: 0.6,
                textAlign: "center",
                textShadow: "0 2px 12px #0009",
              }}
            >
              {pub.name}
            </div>
            <div
              style={{
                fontSize: 15.5,
                color: "#e0eafc",
                textAlign: "center",
                fontWeight: 500,
                letterSpacing: 0.1,
                textShadow: "0 1.5px 6px #0007",
              }}
            >
              {pub.desc}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function DiscountsCarousel() {
  const [idx, setIdx] = useState(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const AUTO_SLIDE_INTERVAL = 3200;

  // Auto sliding
  useEffect(() => {
    timeoutRef.current = setTimeout(() => {
      setIdx((i) => (i + 1) % discountDeals.length);
    }, AUTO_SLIDE_INTERVAL);
    return () => clearTimeout(timeoutRef.current!);
  }, [idx]);

  const prev = () => setIdx((i) => (i - 1 + discountDeals.length) % discountDeals.length);
  const next = () => setIdx((i) => (i + 1) % discountDeals.length);

  return (
    <div
      className="discounts-carousel-container"
      style={{
        margin: "3.7rem 0 0 0",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <h2
        style={{
          textAlign: "center",
          fontWeight: 800,
          fontSize: 32,
          marginBottom: 24,
          color: "#fff",
          letterSpacing: 1.1,
          textShadow: "0 4px 22px #000a",
        }}
      >
        Hot Discounts & Deals
      </h2>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 28,
          minHeight: 305,
        }}
      >
        {/* Prev Button */}
        <button
          onClick={prev}
          style={{
            background: "none",
            border: "none",
            fontSize: 44,
            color: "#7cd2ff",
            cursor: "pointer",
            transition: "color 0.15s",
            padding: 7,
            borderRadius: 16,
            zIndex: 2,
            opacity: 0.9,
            boxShadow: "0 2px 12px #0f3050a0",
          }}
          aria-label="Previous discount"
        >
          ‹
        </button>
        {/* Discount Card */}
        <div
          style={{
            minWidth: 480,
            maxWidth: 620,
            width: "61vw",
            height: 270,
            display: "flex",
            alignItems: "stretch",
            justifyContent: "center",
            userSelect: "none",
          }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={discountDeals[idx].title}
              initial={{ x: 100, opacity: 0, scale: 0.98 }}
              animate={{ x: 0, opacity: 1, scale: 1.13 }}
              exit={{ x: -100, opacity: 0, scale: 0.98 }}
              transition={{ type: "spring", stiffness: 80, damping: 18 }}
              style={{
                background: discountDeals[idx].bg,
                borderRadius: 32,
                boxShadow: "0 4px 50px #2228",
                padding: "0 0 2.2rem 0",
                color: "#222",
                fontWeight: 700,
                fontSize: 21,
                position: "relative",
                minHeight: 235,
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-end",
                alignItems: "center",
                overflow: "hidden",
                width: "100%",
              }}
            >
              <img
                src={discountDeals[idx].image}
                alt={discountDeals[idx].title}
                style={{
                  width: "100%",
                  height: 152,
                  objectFit: "cover",
                  borderTopLeftRadius: 32,
                  borderTopRightRadius: 32,
                  marginBottom: 0,
                  boxShadow: "0 4px 24px #0003",
                }}
              />
              <div style={{ fontSize: 29, margin: "21px 0 9px 0", textShadow: "0 2px 10px #fff" }}>
                {discountDeals[idx].title}
              </div>
              <div style={{ fontSize: 17, fontWeight: 500, letterSpacing: 0.2 }}>{discountDeals[idx].desc}</div>
              {/* Animated badge */}
              <motion.div
                initial={{ scale: 0, rotate: -45 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ delay: 0.12, type: "spring", stiffness: 200, damping: 15 }}
                style={{
                  position: "absolute",
                  top: 14,
                  right: 18,
                  background: "#fff",
                  color: "#0ea5e9",
                  fontWeight: 800,
                  fontSize: 13,
                  padding: "5px 13px",
                  borderRadius: 20,
                  boxShadow: "0 3px 12px #fff5",
                  letterSpacing: 0.7,
                  textTransform: "uppercase",
                  opacity: 0.97,
                }}
              >
                {idx + 1} / {discountDeals.length}
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>
        {/* Next Button */}
        <button
          onClick={next}
          aria-label="Next discount"
          style={{
            background: "none",
            border: "none",
            fontSize: 44,
            color: "#7cd2ff",
            cursor: "pointer",
            transition: "color 0.15s",
            padding: 7,
            borderRadius: 16,
            zIndex: 2,
            opacity: 0.9,
            boxShadow: "0 2px 12px #0f3050a0",
          }}
        >
          ›
        </button>
      </div>
      <div style={{ marginTop: 21, display: "flex", gap: 10, justifyContent: "center" }}>
        {discountDeals.map((_, i) => (
          <motion.div
            key={i}
            style={{
              width: 14,
              height: 14,
              borderRadius: "50%",
              background: idx === i ? "#0ea5e9" : "#eee",
              boxShadow: idx === i ? "0 2px 8px #0ea5e9aa" : "none",
              transition: "background 0.2s",
            }}
            animate={{ scale: idx === i ? 1.3 : 1 }}
          />
        ))}
      </div>
    </div>
  );
}

function AnimatedWaveBg() {
  // Animate background with framer-motion
  return (
    <motion.div
      aria-hidden
      initial={false}
      animate={{
        backgroundPosition: [
          "0% 50%",
          "100% 48%",
          "0% 52%",
          "100% 50%",
          "0% 50%",
        ],
        backgroundSize: [
          "200% 200%",
          "210% 190%",
          "205% 210%",
          "220% 190%",
          "200% 200%",
        ],
      }}
      transition={{
        duration: 22,
        repeat: Infinity,
        ease: "linear",
      }}
      style={{
        position: "fixed",
        zIndex: -2,
        inset: 0,
        width: "100vw",
        height: "100vh",
        background:
          "linear-gradient(120deg, #0e1a30 0%, #0d1432 35%, #0c1a3a 65%, #2e4e8e 100%)",
        backgroundImage:
          "radial-gradient(ellipse 60% 50% at 50% 0%, #2563eb 0%, #0e1a30 60%)," +
          "radial-gradient(ellipse 60% 50% at 80% 100%, #020617 10%, #172554 60%)",
        backgroundBlendMode: "screen, color-burn",
        backgroundRepeat: "no-repeat",
        backgroundSize: "200% 200%",
        backgroundPosition: "0% 50%",
        filter: "blur(0px) brightness(1.07)",
        transition: "background-position 0.5s, background-size 0.5s",
      }}
    />
  );
}

// --- MAIN PAGE COMPONENT ---
export default function PubOffersAndDiscounts() {
  return (
    <div style={{ position: "relative", minHeight: "100vh", overflow: "hidden" }}>
      <AnimatedWaveBg />
      <div
        style={{
          position: "relative",
          zIndex: 1,
          padding: "2vw 0",
          minHeight: "100vh",
        }}
      >
        <OffersGrid />
        <DiscountsCarousel />
      </div>
    </div>
  );
}