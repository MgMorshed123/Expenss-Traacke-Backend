import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";
import authRoutes from "./routes/auth.js";
import expenseRoutes from "./routes/expenses.js";
import { scheduleMonthlyReports } from "./services/report.js";

dotenv.config();
const app = express();

// Enable CORS for frontend
app.use(
  cors({
    origin: "https://expenss-tracker-frontend.onrender.com",
    credentials: true,
  })
);

app.use(express.json());

// Connect to MongoDB
connectDB();

// Routes
app.use("/auth", authRoutes);
app.use("/expenses", expenseRoutes);

// Start cron job for reports
scheduleMonthlyReports();
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
