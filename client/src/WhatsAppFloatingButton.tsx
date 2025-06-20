import React from "react";

// Place this at the end of your app, e.g. <App /> <CrazyWhatsAppFloatingButton />
// Edit the phone number below!
const whatsappNumber = "919391620139";
const defaultMessage = encodeURIComponent("Hi! I'm interested in booking a party night.");

export default function CrazyWhatsAppFloatingButton() {
  return (
    <>
      <a
        href={`https://wa.me/${whatsappNumber}?text=${defaultMessage}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        style={{
          position: "fixed",
          right: 32,
          bottom: 32,
          zIndex: 1000,
          textDecoration: "none",
          filter: "drop-shadow(0 4px 32px #25D366bb)",
        }}
      >
        <span
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 62,
            height: 62,
            borderRadius: "50%",
            background: "linear-gradient(135deg, #25D366 0%, #128C7E 100%)",
            boxShadow: "0 4px 32px 0 #25D366bb, 0 2px 6px #128C7E66",
            border: "4px solid #fff",
            animation: "crazy-shake 1.5s cubic-bezier(.36,.07,.19,.97) infinite both",
            transition: "transform 0.15s",
          }}
        >
          {/* Official WhatsApp icon, white on green */}
          <svg
            width="38"
            height="38"
            viewBox="0 0 38 38"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{
              filter: "drop-shadow(0 0 8px #25D366) drop-shadow(0 0 2px #128C7E)",
              transform: "rotate(-10deg) scale(1.18)",
            }}
          >
            <circle cx="19" cy="19" r="16" fill="#25D366" />
            <path
              d="M25.5 21.7c-.36.82-1.75 1.57-2.46 1.68-.65.1-1.48.15-2.38-.15-.54-.17-1.25-.41-2.15-.8-3.8-1.62-6.3-5.68-6.5-5.97-.18-.26-1.56-2.1-1.56-4.01 0-1.92.97-2.87 1.32-3.26.35-.39.77-.49 1.03-.49.26 0 .52.003.75.014.24.012.56-.09.87.65.3.71 1.01 2.51 1.09 2.69.08.18.15.4.03.66-.12.26-.18.42-.36.65s-.38.5-.54.67c-.18.18-.37.38-.16.75.21.37.92 1.5 1.98 2.44 1.38 1.21 2.5 1.6 2.89 1.78.4.18.62.15.85-.09.23-.24.98-1.11 1.25-1.48.27-.37.52-.31.86-.18.34.13 2.21 1.02 2.59 1.2.38.18.63.28.72.44.09.16.09.91-.22 1.72z"
              fill="#fff"
            />
          </svg>
        </span>
      </a>
      {/* CRAZY SHAKE KEYFRAMES: injects global style */}
      <style>
        {`
        @keyframes crazy-shake {
          10%, 90% {
            transform: translateX(-2px) rotate(-8deg) scale(1.06);
          }
          20%, 80% {
            transform: translateX(2px) rotate(10deg) scale(1.12);
          }
          30%, 50%, 70% {
            transform: translateX(-4px) rotate(-12deg) scale(1.09);
          }
          40%, 60% {
            transform: translateX(4px) rotate(12deg) scale(1.16);
          }
          100% {
            transform: none;
          }
        }
        `}
      </style>
    </>
  );
}