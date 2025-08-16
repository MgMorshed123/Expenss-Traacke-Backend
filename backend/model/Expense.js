import mongoose from "mongoose";

const expenseSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  title: { type: String, required: true, minlength: 3 },
  amount: {
    type: Number,
    required: true,
    min: [0, "Amount must be greater than 0"],
  },
  category: {
    type: String,
    required: true,
    enum: ["Food", "Transport", "Shopping", "Others"],
  },
  date: { type: Date, required: true },
});

export default mongoose.model("Expense", expenseSchema);
