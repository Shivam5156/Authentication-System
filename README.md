# 🔐 MERN Authentication System

A secure and modern MERN Stack Authentication System built using **MongoDB, Express.js, React.js, and Node.js**. This project implements JWT Authentication with HTTP-only Cookies, Protected Routes, and User Authentication.

---

## 🚀 Features

- 👤 User Registration
- 🔑 User Login
- 🚪 User Logout
- 🔒 JWT Authentication
- 🍪 HTTP-only Cookie Authentication
- 🛡️ Protected Routes
- ✅ Password Hashing using bcrypt
- ⚡ REST API
- 📱 Responsive Frontend

---

## 🛠️ Tech Stack

### Frontend
- React.js
- React Router DOM
- Axios
- React Toastify

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT
- bcryptjs
- Cookie Parser
- CORS
- dotenv

---

## 📂 Project Structure

```
mern-auth/
│
├── client/
│   ├── src/
│   ├── public/
│   └── package.json
│
├── server/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── config/
│   └── server.js
│
└── README.md
```

---

## ⚙️ Installation

### Clone Repository

```bash
git clone https://github.com/your-username/mern-auth.git
```

### Go to Project

```bash
cd mern-auth
```

### Install Frontend Dependencies

```bash
cd client
npm install
```

### Install Backend Dependencies

```bash
cd ../server
npm install
```

---

## 🔑 Environment Variables

Create a `.env` file inside the **server** folder.

```env
PORT=3000

MONGO_URI=your_mongodb_connection_string

JWT_SECRET=your_secret_key

CLIENT_URL=http://localhost:5173
```

---

## ▶️ Run the Project

### Backend

```bash
cd server
npm run dev
```

### Frontend

```bash
cd client
npm run dev
```

---

## 🔐 Authentication Flow

- User Registers
- Password is hashed using bcrypt
- User logs in
- JWT Token is generated
- Token is stored in an HTTP-only Cookie
- Protected Routes verify the JWT Token
- User can securely logout

---

## 📌 Future Improvements

- Google Authentication
- Role-Based Authentication
- Refresh Token
- Two-Factor Authentication (2FA)

---

## 🤝 Contributing

Contributions are welcome!

1. Fork the repository
2. Create a new branch
3. Commit your changes
4. Push your branch
5. Open a Pull Request

---

## ⭐ Support

If you like this project, don't forget to **Star ⭐ the repository**.

---
