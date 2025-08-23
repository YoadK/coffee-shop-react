require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();
app.use(cors({ origin: "http://localhost:5173", credentials: true }));
app.use(express.json());

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("✅ Mongo connected"))
  .catch((e) => console.error("Mongo error:", e));

const productSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    price: { type: Number, required: true, min: 0 },
    category: { type: String, default: "general" },
  },
  { timestamps: true }
);

const Product = mongoose.model("Product", productSchema);

app.get("/api/products", async (req, res) => {
  try {
    const { q = "", category, page = 1, limit = 10 } = req.query;
    const filter = q ? { name: { $regex: q, $options: "i" } } : {};
    if (category) filter.category = category;

    const skip = (Number(page) - 1) * Number(limit);
    const [data, total] = await Promise.all([
      Product.find(filter).sort({ createdAt: -1 }).skip(skip).limit(Number(limit)),
      Product.countDocuments(filter),
    ]);

    res.json({ data, total, page: Number(page), limit: Number(limit) });
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
});

app.post("/api/products", async (req, res) => {
  try {
    const { name, price, category } = req.body;
    if (!name || price == null) return res.status(400).json({ error: "name and price are required" });
    const doc = await Product.create({ name, price, category });
    res.status(201).json(doc);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`✅ API on http://localhost:${port}`));
