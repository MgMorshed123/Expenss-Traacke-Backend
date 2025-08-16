import nodemailer from "nodemailer";
import { generateOTPEmail } from "./otpTemplate.js";

export const sendEmail = async (to, subject, text, html = null) => {
  const transporter = nodemailer.createTransport({
    // Configure with your email service (e.g., Gmail, SendGrid)
    service: "gmail",
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_PASS,
    },
  });

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to,
    subject,
    text,
    html: html || generateOTPEmail(text.match(/Your OTP is (\d{6})/)?.[1], to),
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log(`Email sent to ${to}`);
  } catch (error) {
    console.error(`Error sending email to ${to}:`, error);
    throw new Error("Failed to send email");
  }
};
