# Job Portal (MERN Stack)

## Overview
The **Job Portal** is a full-stack web application built using the **MERN stack (MongoDB, Express.js, React, Node.js)**. This platform allows users to search and apply for jobs while providing recruiters the ability to post job openings, review applications, and manage hiring decisions.

## Features
### Job Seekers:
- Sign up and log in to the platform.
- Search and filter jobs based on category, location, and keywords.
- Apply for jobs and keep track of their applications.
- View the status of their applications (Accepted/Rejected/Pending).

### Recruiters:
- Sign up and log in to post job vacancies.
- Manage job listings (edit, delete jobs).
- View job applications from candidates.
- Accept or reject applications.

### General Features:
- Secure authentication using JWT.
- Responsive and user-friendly UI.
- RESTful API for seamless data handling.
- Real-time updates on job applications.

## Tech Stack
### Frontend (Client)
- React.js (with React Router & Redux for state management)
- Axios (for API calls)
- TailwindCSS / Bootstrap (for styling)

### Backend (Server)
- Node.js & Express.js (for handling API requests)
- MongoDB & Mongoose (for database storage & management)
- JWT (for authentication)
- bcrypt (for password hashing)
- Multer (for file uploads if needed)

## Installation & Setup
### Prerequisites
Ensure you have the following installed:
- Node.js (v14+)
- MongoDB (local or cloud instance like MongoDB Atlas)
- Git

### Steps to Run the Project
1. **Clone the Repository:**
```sh
git clone https://github.com/your-username/job-portal.git
cd job-portal
```

2. **Setup the Client:**
```sh
cd client
npm install
```

3. **Setup the Server:**
```sh
cd ../server
npm install
```

4. **Environment Configuration:**
- Create a `.env` file in both `client/` and `server/` directories.
- Add the following environment variables:

#### Client (`client/.env`)
```
REACT_APP_API_URL=http://localhost:5000
```

#### Server (`server/.env`)
```
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

5. **Run the Backend Server:**
```sh
npm start
```

6. **Run the Frontend Client:**
```sh
cd ../client
npm start
```

7. **Access the Application:**
Open your browser and go to `http://localhost:3000`


## Folder Structure
```
mainproject/
│── client/        # React frontend
│── server/        # Node.js/ExpressJS backend
│── .gitignore
```

---
### 🌟 Show Your Support
If you like this project, please ⭐️ the repository on GitHub!

Happy Coding! 🚀
