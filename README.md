# 🎮 Full-Stack Game Portal

A **full-stack web application** that allows users to register, log in, recover passwords, and play games like **KBC**, **Memory Game**, and **Tetris**.  
It features **JWT authentication**, **role-based access control**, and **score tracking** with a modern **React** front-end.

---

## 🚀 Features

- 🧑‍💻 **User Authentication**
  - Register, Login, and Forgot Password using **Node.js**, **Express**, and **MongoDB**
  - Passwords are securely hashed using **bcrypt**
  - **JWT-based** token authentication for secure access

- 🔒 **Role-Based Access**
  - Separate **User** and **Admin** dashboards
  - Protected routes using middleware (`requireSignIn`, `isAdmin`)

- 🏆 **Game Integration**
  - Play multiple games like **KBC**, **Memory Game**, and **Tetris**
  - Scores are dynamically updated and stored in MongoDB

- 📸 **Profile Management**
  - Upload user profile photos using **express-formidable** and **fs** module
  - Store photo data in MongoDB

- 🔔 **Instant Feedback**
  - Added **Toast notifications** using **React Toastify**
  - Provides instant feedback for login, registration, and score updates

---

## 🛠️ Tech Stack

**Frontend:**
- React.js  
- React Router DOM  
- React Toastify  

**Backend:**
- Node.js  
- Express.js  
- MongoDB (Mongoose)  
- JWT Authentication  
- bcrypt for password hashing  
- express-formidable for file uploads  

---

## 📁 Project Structure

project/
├── backend/
│ ├── controllers/
│ │ └── authController.js
│ ├── models/
│ │ └── userModel.js
│ ├── routes/
│ │ └── authRoute.js
│ ├── middlewares/
│ │ └── authMiddleware.js
│ └── server.js
│
├── frontend/
│ ├── src/
│ │ ├── components/
│ │ │ └── Routes/
│ │ ├── pages/
│ │ │ ├── auth/
│ │ │ ├── Game/
│ │ │ ├── Admin/
│ │ │ └── user/
│ │ └── App.js
│ └── package.json
