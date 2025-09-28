import express from "express";
import nodemailer from "nodemailer";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: { user: "kethamreddyvishnuvardhanreddy@gmail.com", pass: "uupa uazf xehb ahxc" },
});

app.post("/api/subscribe", (req, res) => {
  const { email } = req.body;
  const mailOptions = {
    from: "kethamreddyvishnuvardhanreddy@gmail.com",
    to: email,
    subject: "Monastery360 Registration",
    text: "You have successfully registered in Monastery360! 🌸",
  };
  transporter.sendMail(mailOptions, (err, info) => {
    if (err) return res.status(500).json({ message: "Failed to send email" });
    res.json({ message: "Email sent successfully!" });
  });
});

app.listen(5000, () => console.log("Server running on port 5000"));
