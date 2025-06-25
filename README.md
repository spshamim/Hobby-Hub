# 🚀 HobbyHUB - A Modern Social Platform for Hobby Enthusiasts

A full-stack web application that connects people with shared interests and hobbies. Built with modern technologies featuring a beautiful UI and powerful functionality.

## 🌐 Live Demo

Visit our live website: https://hobby-hub.web.app

## ✨ Features

-   🎨 **Modern UI/UX Design**

    -   Responsive layout that works on all devices
    -   Beautiful animations and transitions
    -   Intuitive user interface

-   🔥 **Real-time Updates**

    -   Instant data synchronization
    -   Dynamic content updates

-   🔒 **Secure Authentication**

    -   Firebase authentication integration
    -   Secure user sessions
    -   Protected routes

-   📱 **Mobile-First Approach**

    -   Optimized for all screen sizes
    -   Touch-friendly interface
    -   Smooth mobile experience

-   🎯 **Advanced Features**
    -   Typewriter effect for dynamic text
    -   Interactive tooltips
    -   Smooth carousel/slider functionality
    -   Toast notifications for user feedback

## 🛠️ Tech Stack

### Frontend

-   **Framework:** React 19
-   **Build Tool:** Vite
-   **Styling:** TailwindCSS
-   **Authentication:** Firebase
-   **State Management:** React Hooks
-   **Routing:** React Router
-   **HTTP Client:** Axios
-   **UI Components:**
    -   React Icons
    -   React Tooltip
    -   React Hot Toast
    -   Swiper

### Backend

-   **Runtime:** Node.js
-   **Framework:** Express.js
-   **Database:** MongoDB
-   **Middleware:** CORS, dotenv
-   **Architecture:** MVC Pattern

## 📁 Project Structure

```
assignment_10/
├── frontend/                 # React frontend application
│   ├── src/
│   │   ├── components/      # Reusable UI components
│   │   ├── pages/          # Page components
│   │   ├── hooks/          # Custom React hooks
│   │   ├── layouts/        # Layout components
│   │   ├── routes/         # Routing configuration
│   │   └── utilities/      # Utility functions
│   ├── public/             # Static assets
│   └── package.json        # Frontend dependencies
│
└── backend/                # Node.js backend server
    ├── config/             # Configuration files
    ├── controllers/        # Route controllers
    ├── middleware/         # Custom middleware
    ├── routes/             # API routes
    ├── utils/              # Utility functions
    ├── app.js             # Express app configuration
    └── index.js           # Application entry point
```

## 🚀 Getting Started

### Prerequisites

-   Node.js (v14 or higher)
-   MongoDB
-   npm or yarn
-   Firebase account (for authentication)

### Frontend Setup

1. **Navigate to frontend directory**

    ```bash
    cd frontend
    ```

2. **Install dependencies**

    ```bash
    npm install
    ```

3. **Start development server**

    ```bash
    npm run dev
    ```

4. **Build for production**
    ```bash
    npm run build
    ```

### Backend Setup

1. **Navigate to backend directory**

    ```bash
    cd backend
    ```

2. **Install dependencies**

    ```bash
    npm install
    ```

3. **Create environment file**
   Create a `.env` file in the backend root directory:

    ```
    PORT=5000
    MONGODB_URI=your_mongodb_connection_string
    ```

4. **Start development server**

    ```bash
    npm run dev
    ```

5. **Start production server**
    ```bash
    node index.js
    ```

## 📝 Available Scripts

### Frontend Scripts

-   `npm run dev` - Start development server
-   `npm run build` - Build for production
-   `npm run lint` - Run ESLint
-   `npm run preview` - Preview production build

### Backend Scripts

-   `npm run dev` - Start development server with nodemon
-   `npm test` - Run tests (not configured yet)

## 🔧 Environment Variables

### Backend Environment Variables

-   `PORT`: The port number on which the server will run (default: 5000)
-   `MONGODB_URI`: MongoDB connection string

## 📚 API Documentation

The API endpoints are organized in the `backend/routes` directory. Each route file corresponds to a specific resource or feature of the application.

## 🗄️ Database

The application uses MongoDB as the primary database. Make sure to set up your MongoDB connection string in the backend environment variables.

## 🔐 Authentication

Firebase Authentication is used for user management, providing secure login, registration, and session management.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

---

Made with ❤️ by Shamim
