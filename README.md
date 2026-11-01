# 💬 ChatApp - Real-Time Chat Application

**ChatApp** is a modern, full-stack real-time chat application built using the MERN stack and Socket.IO. It provides users with instant 1-on-1 messaging, secure cookie-based authentication, and live online status tracking.

---

## 📁 Project Directory Structure

```text
ChatApp/
│
├── backend/
│   ├── config/
│   │   └── database.js
│   ├── controllers/
│   │   ├── messageController.js
│   │   └── userController.js
│   ├── middleware/
│   │   └── isAuthenticated.js
│   ├── models/
│   │   ├── conversationModel.js
│   │   ├── messageModel.js
│   │   └── userModel.js
│   ├── routes/
│   │   ├── messageRoute.js
│   │   └── userRoutes.js
│   ├── .env
│   ├── index.js
│   ├── package-json
│   └── package-lock.json
│
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   │   ├── Dashboard/
│   │   │   │   ├── FeatureCard.jsx
│   │   │   │   └── Navbar.jsx
│   │   │   └── HomePageComponents/
│   │   │       ├── Message.jsx
│   │   │       ├── MessageContainer.jsx
│   │   │       ├── Messages.jsx
│   │   │       ├── OtherUser.jsx
│   │   │       ├── OtherUsers.jsx
│   │   │       ├── SendInput.jsx
│   │   │       └── Sidebar.jsx
│   │   ├── hooks/
│   │   │   ├── useGetMessages.jsx
│   │   │   └── useGetOtherUsers.jsx
│   │   ├── page/
│   │   │   ├── Dashboard.jsx
│   │   │   ├── HomePage.jsx
│   │   │   ├── Login.jsx
│   │   │   └── SignUp.jsx
│   │   ├── redux/
│   │   │   ├── messageSlice.js
│   │   │   ├── store.js
│   │   │   └── userSlice.js
│   │   └── App.jsx
│   └── package.json
│
└── .gitignore
```
## 🚀 Tech Stack

### Frontend
* **React.js** (Vite)
* **Redux Toolkit** (State Management)
* **Tailwind CSS** (Styling & Modern UI)
* **Axios** & **React Hot Toast**

### Backend
* **Node.js** & **Express.js**
* **Socket.IO** (Real-time bi-directional communication)
* **MongoDB & Mongoose** (Database & ODM)
* **JWT (JSON Web Tokens)** & **Bcrypt.js** (Security & Authentication)

---

## ✨ Key Features

* **⚡ Real-time Messaging:** Powered by Socket.IO for instant, low-latency message delivery without page reloads.
* **🔒 Secure Authentication:** Protected routes and session management using JWT stored in HTTP-only cookies.
* **🟢 Live Online Status:** Real-time socket events to track when users connect or disconnect from the platform.
* **🔍 Instant User Search:** Quick search functionality in the sidebar to filter and find contacts instantly.
* **🎨 Sleek Dark UI:** Modern glassmorphism-inspired dark theme designed with Tailwind CSS for an optimal chat experience.

---

## ⚙️ Environment Variables (`.env`)

Create `.env` files in your backend and frontend directories with the following configurations:

### Backend `.env`
```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
NODE_ENV=development
```
### Frontend `.env`
```env
VITE_API_URL=http://localhost:5000
```
## 🛠️ Installation & Setup
Follow these steps to run the project locally:
### 1. Clone the repository

git clone
[https://github.com/sachin-lkr/real-time-chat-app.git](https://github.com/sachin-lkr/real-time-chat-app.git)
cd ChatApp

### 2. Backend Setup
```
 cd backend
 npm install
 npm run dev
```
### 3. Frontend Setup
```
  cd ../frontend
  npm install
  npm run dev
```

## 👨‍💻 Author

**Sachin Kumar**  
*Full-Stack JavaScript & MERN Stack Developer*

[![GitHub](https://img.shields.io/badge/GitHub-Profile-blue?style=flat&logo=github)](https://github.com/sachin-lkr)  
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-blue?style=flat&logo=linkedin)](https://www.linkedin.com/in/sachin-kumar-bind/)  
[![Email](https://img.shields.io/badge/Email-Contact-red?style=flat&logo=gmail)](mailto:sachin9973083181@gmail.com)
