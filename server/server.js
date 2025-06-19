const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

app.post("/api/contact", async (req, res) => {
  const { name, phone, people, couples, club } = req.body;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "nrevents1920@gmail.com", // ✅ your Gmail
      pass: "pcxqovgyrbkejiyu",        // ✅ app password (no spaces!)
    },
  });

  const mailOptions = {
    from: "nrevents1920@gmail.com",
    to: "nrevents1920@gmail.com",
    subject: "🎉 New Club Booking",
    html: `
      <h2>New Booking</h2>
      <p><b>Name:</b> ${name}</p>
      <p><b>Phone:</b> ${phone}</p>
      <p><b>People:</b> ${people}</p>
      <p><b>Couples:</b> ${couples}</p>
      <p><b>Club:</b> ${club}</p>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: "Email sent successfully ✅" });
  } catch (error) {
    console.error("❌ Email send failed:", error);
    res.status(500).json({ error: "Failed to send email" });
  }
});

app.listen(5000, () => {
  console.log("🚀 Server running at http://localhost:5000");
});
