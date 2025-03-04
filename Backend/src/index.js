import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./db/index.js"
import authRoutes from "./routes/auth.js";

dotenv.config({
    path: "./.env",
})
// connectDB();

const app = express();
// app.use(cors());
// app.use(express.json());
// app.use("/api", authRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
