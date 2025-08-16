export const generateOTPEmail = (otp, email) => `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>ExpenseTracker OTP Verification</title>
</head>
<body style="margin: 0; padding: 0; font-family: 'Poppins', Arial, Helvetica, sans-serif; background-color: #f0fdf4; color: #1f2937;">
  <table align="center" width="100%" cellpadding="0" cellspacing="0" style="max-width: 600px; margin: 40px auto; background-color: #ffffff; border: 1px solid #e5e7eb; border-radius: 12px;">
    <tr>
      <td style="background: linear-gradient(to right, #16a34a, #4f46e5); padding: 20px; text-align: center;">
        <h1 style="color: #ffffff; font-size: 26px; font-weight: bold; margin: 0;">ExpenseTracker</h1>
        <p style="color: #e5e7eb; font-size: 14px; margin: 8px 0 0;">Verify Your Account</p>
      </td>
    </tr>
    <tr>
      <td style="padding: 24px;">
        <h2 style="font-size: 22px; font-weight: bold; color: #1f2937; margin: 0 0 16px;">Hello  ${otp},</h2>
        <p style="font-size: 16px; color: #4b5563; line-height: 24px; margin: 0 0 16px;">
          Thank you for signing up with ExpenseTracker! To complete your registration, please use the following One-Time Password (OTP).
        </p>
        <div style="text-align: center; margin: 24px 0;">
          <span style="display: inline-block; background-color: #f0fdf4; border: 1px solid #16a34a; border-radius: 8px; padding: 12px 24px; font-size: 24px; font-weight: bold; color: #16a34a; letter-spacing: 4px;">
            ${email}
          </span>
        </div>
        <p style="font-size: 16px; color: #4b5563; line-height: 24px; margin: 0 0 16px;">
          This OTP expires in 15 minutes. Please enter it on the verification page to activate your account.
        </p>
        <p style="font-size: 14px; color: #4b5563; line-height: 20px; margin: 0;">
          If you didn’t request this OTP, please ignore this email or contact support.
        </p>
      </td>
    </tr>
  </table>
</body>
</html>
`;
