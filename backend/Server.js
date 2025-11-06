const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();

// ✅ Middlewares (order matters!)
app.use(cors());
app.use(express.json());

// ✅ Connect to MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/contactdb", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log("✅ MongoDB connected"))
  .catch(err => console.error("❌ MongoDB connection error:", err));

// ✅ Schema & Model
const ContactSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  service: { type: String },
  message: { type: String, required: true },
});

const Contact = mongoose.model("Contact", ContactSchema);

// ✅ Test route
app.get("/", (req, res) => {
  res.send("✅ Backend server is running and MongoDB connected!");
});

// ✅ Contact form route
app.post("/api/contact", async (req, res) => {
  try {
    console.log("📩 POST /api/contact triggered");
    console.log("➡️ Body received:", req.body);

    // validate that data came through
    if (!req.body.name || !req.body.email || !req.body.message) {
      return res.status(400).json({ success: false, message: "Missing required fields" });
    }

    const contact = new Contact(req.body);
    await contact.save();

    console.log("✅ Message saved successfully");
    res.status(200).json({ success: true, message: "Message saved successfully!" });
  } catch (error) {
    console.error("❌ Error saving message:", error);
    res.status(500).json({ success: false, message: "Server error" });
  }
});

// ✅ Start server
const PORT = 5000;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
