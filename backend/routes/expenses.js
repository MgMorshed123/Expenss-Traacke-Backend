import express from "express";
import authMiddleware from "../middleware/auth.js";
import Expense from "../model/Expense.js";

const router = express.Router();

router.post("/", authMiddleware, async (req, res) => {
  const { title, amount, category, date } = req.body;

  try {
    const expense = new Expense({
      userId: req.userId,
      title,
      amount,
      category,
      date,
    });
    await expense.save();
    res.status(201).json(expense);
  } catch (err) {
    console.log(err);
    res.status(400).json({ error: err.message });
  }
});

router.get("/", authMiddleware, async (req, res) => {
  try {
    const expenses = await Expense.find({ userId: req.userId }).sort({
      date: -1,
    });
    res.json(expenses);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.patch("/:id", authMiddleware, async (req, res) => {
  const { id } = req.params;
  try {
    const expense = await Expense.findOneAndUpdate(
      { _id: id, userId: req.userId },
      req.body,
      { new: true, runValidators: true }
    );
    console.log("expense", expense);
    if (!expense) return res.status(404).json({ message: "Expense not found" });
    res.json(expense);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

router.delete("/:id", authMiddleware, async (req, res) => {
  const { id } = req.params;
  try {
    const expense = await Expense.findOneAndDelete({
      _id: id,
      userId: req.userId,
    });
    if (!expense) return res.status(404).json({ message: "Expense not found" });
    res.json({ message: "Expense deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
