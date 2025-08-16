export const generateRegistrationSuccessEmail = (email, otp) => `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>ExpenseTracker Registration Success</title>
</head>
<body style="margin: 0; padding: 0; font-family: 'Poppins', Arial, Helvetica, sans-serif; background-color: #f0fdf4; color: #1f2937;">
  <table align="center" width="100%" cellpadding="0" cellspacing="0" style="max-width: 600px; margin: 40px auto; background-color: #ffffff; border: 1px solid #e5e7eb; border-radius: 12px;">
    <tr>
      <td style="background: linear-gradient(to right, #16a34a, #4f46e5); padding: 20px; text-align: center;">
        <h1 style="color: #ffffff; font-size: 26px; font-weight: bold; margin: 0;">ExpenseTracker</h1>
        <p style="color: #e5e7eb; font-size: 14px; margin: 8px 0 0;">Welcome to Your Financial Journey!</p>
      </td>
    </tr>
    <tr>
      <td style="padding: 24px;">
        <h2 style="font-size: 22px; font-weight: bold; color: #1f2937; margin: 0 0 16px;">Registration Successful!</h2>
        <p style="font-size: 16px; color: #4b5563; line-height: 24px; margin: 0 0 16px;">
          Congratulations! Your ExpenseTracker account has been successfully created.
        </p>
        <p style="font-size: 16px; color: #4b5563; line-height: 24px; margin: 0 0 16px;">
          To activate your account, please use the following One-Time Password (OTP) on the verification page.
        </p>
        <div style="text-align: center; margin: 24px 0;">
          <span style="display: inline-block; background-color: #f0fdf4; border: 1px solid #16a34a; border-radius: 8px; padding: 12px 24px; font-size: 24px; font-weight: bold; color: #16a34a; letter-spacing: 4px;">
            ${otp}
          </span>
        </div>
        <p style="font-size: 16px; color: #4b5563; line-height: 24px; margin: 0 0 16px;">
          This OTP expires in 15 minutes. Click the button below to verify your account.
        </p>
        <div style="text-align: center; margin: 24px 0;">
          <a href="http://localhost:3000/verify-otp?email=${encodeURIComponent(
            email
          )}" style="display: inline-block; background: linear-gradient(to right, #16a34a, #4f46e5); color: #ffffff; font-size: 16px; font-weight: medium; padding: 12px 24px; border-radius: 8px; text-decoration: none;">
            Verify OTP
          </a>
        </div>
        <p style="font-size: 16px; color: #4b5563; line-height: 24px; margin: 0 0 24px;">
          Once verified, you can log in and start tracking your expenses.
        </p>
        <div style="text-align: center; margin: 24px 0;">
          <a href="http://localhost:3000/login" style="display: inline-block; background: linear-gradient(to right, #16a34a, #4f46e5); color: #ffffff; font-size: 16px; font-weight: medium; padding: 12px 24px; border-radius: 8px; text-decoration: none;">
            Go to Login
          </a>
        </div>
        <p style="font-size: 14px; color: #4b5563; line-height: 20px; margin: 0;">
          If you didn’t register with ExpenseTracker, please ignore this email or contact support.
        </p>
      </td>
    </tr>
    <tr>
      <td style="background: linear-gradient(to right, #16a34a, #4f46e5); padding: 16px; text-align: center;">
        <p style="color: #e5e7eb; font-size: 12px; margin: 0;">&copy; 2025 ExpenseTracker. All rights reserved.</p>
        <p style="color: #e5e7eb; font-size: 12px; margin: 8px 0 0;">
          <a href="http://localhost:3000/contact" style="color: #e5e7eb; text-decoration: underline;">Contact Us</a> | 
          <a href="http://localhost:3000/privacy" style="color: #e5e7eb; text-decoration: underline;">Privacy Policy</a>
        </p>
      </td>
    </tr>
  </table>
</body>
</html>
`;
