import cron from "node-cron";
import User from "../model/User.js";
import Expense from "../model/Expense.js";
import { sendEmail } from "../utils/email.js";

// Core function to generate and send a report for the last 30 days
const sendMonthlyReports = async () => {
  try {
    const users = await User.find();
    const now = new Date();
    const monthAgo = new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000);

    for (const user of users) {
      const expenses = await Expense.find({
        userId: user._id,
        date: { $gte: monthAgo },
      });

      if (expenses.length === 0) continue;

      const totalSpent = expenses.reduce((sum, exp) => sum + exp.amount, 0);
      const transactions = expenses.length;

      const categoryMap = {};
      expenses.forEach((exp) => {
        categoryMap[exp.category] =
          (categoryMap[exp.category] || 0) + exp.amount;
      });

      const topCategories = Object.entries(categoryMap)
        .sort(([, a], [, b]) => b - a)
        .slice(0, 3)
        .map(([cat, amt]) => `${cat}: $${amt.toFixed(2)}`)
        .join(", ");

      const { htmlContent, plainText } = generateEmailTemplate(
        user,
        totalSpent,
        transactions,
        topCategories
      );

      await sendEmail(
        user.email,
        "Your ExpenseTracker Monthly Report",
        plainText,
        htmlContent
      );
    }

    console.log("Monthly reports sent");
  } catch (err) {
    console.error("Error sending monthly reports:", err);
  }
};

// Automatic cron job - runs on 1st of each month at midnight
export const scheduleMonthlyReports = () => {
  cron.schedule("0 0 1 * *", sendMonthlyReports, {
    timezone: "Asia/Dhaka",
  });
};
