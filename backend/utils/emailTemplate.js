export const generateEmailTemplate = (
  user,
  totalSpent,
  transactions,
  topCategories
) => {
  const plainText = `
ExpenseTracker Monthly Report

Hello ${user.name || "User"},

Here's your expense summary for the last 30 days:

Total Spent: $${totalSpent.toFixed(2)}
Number of Transactions: ${transactions}
Top Categories: ${topCategories || "None"}

View your dashboard: http://localhost:3000/dashboard

© 2025 ExpenseTracker. All rights reserved.
Contact Us: http://localhost:3000/contact
Privacy Policy: http://localhost:3000/privacy
`;

  const htmlContent = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>ExpenseTracker Monthly Report</title>
</head>
<body style="margin: 0; padding: 0; font-family: Arial, Helvetica, sans-serif; background-color: #f0fdf4; color: #1f2937;">
  <table align="center" width="100%" cellpadding="0" cellspacing="0" style="max-width: 600px; margin: 40px auto; background-color: #ffffff; border: 1px solid #e5e7eb; border-radius: 12px;">
    <tr>
      <td style="background-color: #16a34a; padding: 20px; text-align: center;">
        <h1 style="color: #ffffff; font-size: 26px; font-weight: bold; margin: 0;">ExpenseTracker</h1>
        <p style="color: #e5e7eb; font-size: 14px; margin: 8px 0 0;">Your Monthly Expense Report</p>
      </td>
    </tr>
    <tr>
      <td style="padding: 24px;">
        <h2 style="font-size: 22px; font-weight: bold; color: #1f2937; margin: 0 0 16px;">Hello ${
          user.name || "User"
        },</h2>
        <p style="font-size: 16px; color: #4b5563; line-height: 24px; margin: 0 0 24px;">
          Here's your expense summary for the last 30 days. Stay on top of your finances with ExpenseTracker!
        </p>
        <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f9fafb; border-radius: 8px; padding: 20px; margin-bottom: 24px;">
          <tr>
            <td style="padding-bottom: 16px;">
              <h3 style="font-size: 18px; font-weight: bold; color: #1f2937; margin: 0;">Total Spent</h3>
              <p style="font-size: 22px; font-weight: bold; color: #16a34a; margin: 8px 0 0;">$${totalSpent.toFixed(
                2
              )}</p>
            </td>
          </tr>
          <tr>
            <td style="padding: 16px 0;">
              <h3 style="font-size: 18px; font-weight: bold; color: #1f2937; margin: 0;">Number of Transactions</h3>
              <p style="font-size: 18px; color: #4b5563; margin: 8px 0 0;">${transactions}</p>
            </td>
          </tr>
          <tr>
            <td style="padding-top: 16px;">
              <h3 style="font-size: 18px; font-weight: bold; color: #1f2937; margin: 0;">Top Categories</h3>
              <p style="font-size: 16px; color: #4b5563; margin: 8px 0 0;">${
                topCategories || "None"
              }</p>
            </td>
          </tr>
        </table>
        <div style="text-align: center;">
          <a href="http://localhost:3000/dashboard" style="display: inline-block; background-color: #16a34a; color: #ffffff; font-size: 16px; font-weight: medium; padding: 12px 24px; border-radius: 8px; text-decoration: none;">View Dashboard</a>
        </div>
      </td>
    </tr>
    <tr>
      <td style="background-color: #16a34a; padding: 16px; text-align: center;">
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

  return { htmlContent, plainText };
};
