# 💰 Expense Tracker Backend

Welcome to the backend of the **Expense Tracker App**! This robust Node.js-based backend powers a feature-rich expense tracking application with secure authentication, expense management, and automated monthly reporting.

---

## 🚀 Features

- 🔐 **Secure Authentication**:
  - OTP-based registration and verification
  - JWT-based authorization
  - Password reset functionality
  - 
    <img width="872" height="539" alt="image" src="https://github.com/user-attachments/assets/5aa7d69b-f943-473e-a016-c9849586e0bb" />

- 💸 **Expense Management**:
  - Add expenses
  - View expenses
  - Update expenses
  - Delete expenses
- 📧 **Email Integration**:
  - Automated emails for account verification
  - Password reset emails
  - Monthly expense reports
- 🕒 **Scheduled Reports**:
  - Monthly spending summaries sent automatically via cron jobs
- 🔒 **Protected Routes**:
  - JWT-based authentication for secure access to expense-related APIs

---

## 🛠️ Tech Stack

- **Node.js & Express.js**: Fast and scalable server-side framework
- **MongoDB & Mongoose**: NoSQL database with an elegant ORM
- **JWT**: Secure token-based authentication
- **bcrypt.js**: Password hashing for enhanced security
- **Nodemailer**: Email delivery for OTPs and reports
- **node-cron**: Scheduled tasks for automated monthly reports

---

## 📂 Project Setup

Follow these steps to get the project up and running:

### 1️⃣ Clone the Repository
- `git clone https://github.com/MgMorshed123/Expenss-Tracker-Backend.git`
- `cd Expenss-Tracker-Backend`

### 2️⃣ Install Dependencies
- `npm install`

### 3️⃣ Set Up Environment Variables
- Create a `.env` file in the root directory with the following variables:
  - `MONGO_URI=mongodb+srv://<your-mongo-uri>`
  - `PORT=5000`
  - `GMAIL_USER=your_gmail@gmail.com`
  - `GMAIL_PASS=your_gmail_app_password`
  - `JWT_SECRET=your_jwt_secret_key`
- ⚠️ **Important**: Use a [Gmail App Password](https://support.google.com/accounts/answer/185833) instead of your regular Gmail password for `GMAIL_PASS`.

### 4️⃣ Run the Project
- Start the development server:
  - `npm start`
- The server will be live at:
  - 👉 **http://localhost:5000**

---

## 🔑 API Endpoints

### Auth Routes
- `POST /api/auth/register`: Register a new user and send OTP to email
- `POST /api/auth/verify-otp`: Verify OTP to activate the account
- `POST /api/auth/login`: Log in with email and password to receive a JWT token
- `POST /api/auth/forgot-password`: Request an OTP for password reset
- `POST /api/auth/reset-password`: Reset password using the OTP

### Expense Routes (JWT-Protected)
- `POST /api/expenses`: Add a new expense
- `GET /api/expenses`: Retrieve all expenses for the logged-in user
- `PATCH /api/expenses/:id`: Update an existing expense
- `DELETE /api/expenses/:id`: Delete an expense

---

## 📧 Automated Monthly Reports

On the 1st of every month at midnight (Asia/Dhaka timezone), users receive a detailed email summary of their expenses from the past 30 days, including:
- **Total Spent**: Overall expenditure
- **Number of Transactions**: Total transactions made
- **Top 3 Spending Categories**: Highlighting where the money went

---

## ✅ Example User Flow

- **Register**: User signs up and receives an OTP via email
- **Verify OTP**: User verifies the OTP to activate their account
- **Log In**: User logs in and receives a JWT token
- **Manage Expenses**: User adds, views, updates, or deletes expenses stored in MongoDB
- **Receive Reports**: Monthly expense summaries are automatically emailed

---

## 📜 License

- This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

## 🤝 Contributing

Contributions are welcome! Please fork the repository, create a feature branch, and submit a pull request.
- Fork the repo
- Create a branch (`git checkout -b feature/your-feature`)
- Commit changes (`git commit -m 'Add your feature'`)
- Push to the branch (`git push origin feature/your-feature`)
- Open a pull request

---

## 📬 Contact

- For questions or feedback, reach out to [MgMorshed123](https://github.com/MgMorshed123).

Happy tracking! 💸
