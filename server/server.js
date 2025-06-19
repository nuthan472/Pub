// server.js
const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Endpoint
app.post("/api/contact", async (req, res) => {
  const { name, phone, people, couples, club } = req.body;

  if (!name || !phone || !people || !couples || !club) {
    return res.status(400).json({ error: "All fields are required." });
  }

  // Gmail SMTP Setup
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "nrevents1920@gmail.com",           // Your Gmail
      pass: "pcxqovgyrbkejiyu",                 // App password only
    },
  });

  // Mail options
  const mailOptions = {
    from: `"NR Events" <nrevents1920@gmail.com>`,
    to: "nrevents1920@gmail.com", // Send to self (can also cc others)
    subject: "🎉 New Club Booking from Website",
    html: `
      <div style="font-family: sans-serif; color: #333;">
        <h2>🍾 New Booking Details</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Total People:</strong> ${people}</p>
        <p><strong>Couples:</strong> ${couples}</p>
        <p><strong>Preferred Club:</strong> ${club}</p>
        <br/>
        <p style="color: #888;">Sent via NR Events Booking Form</p>
      </div>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log("✅ Email sent to: nrevents1920@gmail.com");
    res.status(200).json({ message: "Booking email sent successfully." });
  } catch (error) {
    console.error("❌ Email Error:", error.message);
    res.status(500).json({ error: "Failed to send booking email." });
  }
});

// Start Server
app.listen(PORT, () => {
  console.log(`🚀 Server is live on http://localhost:${PORT}`);
});
