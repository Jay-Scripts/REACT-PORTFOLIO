import express from "express";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

// Contact form endpoint
app.post("/api/contact", (req, res) => {
  const { name, email, subject, message } = req.body;

  if (!name || !email || !subject || !message) {
    return res.status(400).json({
      error: "All fields are required.",
    });
  }

  // In production: send email (e.g., via Nodemailer, SendGrid, Resend)
  // For now, we just log and respond
  console.log("Contact form submission:", { name, email, subject, message });

  res.json({
    success: true,
    message: "Message received. Thank you!",
  });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
