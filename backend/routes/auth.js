import express from "express";
import bcrypt from "bcryptjs";
import { sendEmail } from "../utils/email.js";
import { generateOTP } from "../utils/otp.js";
import User from "../model/User.js";
import jwt from "jsonwebtoken";
import { generateOTPEmail } from "../utils/otpTemplate.js";
import { generateRegistrationSuccessEmail } from "../utils/RegistrationSuccessEmail.js";

const router = express.Router();

// Registration
router.post("/register", async (req, res) => {
  const { email, password } = req.body;
  try {
    const existingUser = await User.findOne({ email });
    if (existingUser)
      return res.status(400).json({ message: "User already exists" });

    const hashedPassword = await bcrypt.hash(password, 10);
    const otp = generateOTP();
    const otpExpires = new Date(Date.now() + 15 * 60 * 1000); // 2 minutes

    const user = new User({ email, password: hashedPassword, otp, otpExpires });
    console.log("user", user);
    await user.save();

    await sendEmail(
      email,
      "Account Verification OTP",
      `Your OTP is ${otp}. It expires in 15 minutes.`,
      generateRegistrationSuccessEmail(email, otp)
    );

    res.status(201).json({ message: "User registered. OTP sent to email." });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: err.message });
  }
});

// Verify OTP
router.post("/verify-otp", async (req, res) => {
  const { email, otp } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user || user.otp !== otp || user.otpExpires < Date.now()) {
      return res.status(400).json({ message: "Invalid or expired OTP" });
    }

    user.isVerified = true;
    user.otp = undefined;
    user.otpExpires = undefined;
    await user.save();

    res.json({ message: "OTP verified. You can now login." });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Login
router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    if (!user.isVerified) {
      return res
        .status(403)
        .json({ message: "Account not verified. Please verify OTP." });
    }

    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });
    res.json({ token });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Forgot Password
router.post("/forgot-password", async (req, res) => {
  const { email } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ message: "User not found" });

    const otp = generateOTP();
    const otpExpires = new Date(Date.now() + 15 * 60 * 1000);

    user.otp = otp;
    user.otpExpires = otpExpires;
    await user.save();

    await sendEmail(
      email,
      "Password Reset OTP",
      `Your OTP for password reset is ${otp}. It expires in 15 minutes.`,
      generateOTPEmail(email, otp)
    );

    res.json({ message: "OTP sent to email for password reset." });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Reset Password
router.post("/reset-password", async (req, res) => {
  const { email, otp, newPassword } = req.body;
  try {
    const user = await User.findOne({ email });
    // console.log(!user || user.otp !== otp || user.otpExpires < Date.now());
    if (!user || user.otp !== otp || user.otpExpires < Date.now()) {
      return res.status(400).json({ message: "Invalid or expired OTP" });
    }

    const hashedPassword = await bcrypt.hash(newPassword, 10);
    user.password = hashedPassword;
    user.otp = undefined;
    user.otpExpires = undefined;
    await user.save();

    res.json({ message: "Password reset successful." });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
