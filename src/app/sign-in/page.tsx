"use client"; // Add this line at the top of your file

import React, { useState } from "react";
import { useRouter } from "next/navigation"; // Import useRouter for redirection
import "./style.css";
import "boxicons/css/boxicons.min.css";

const LoginSignupPage = () => {
  const [activeForm, setActiveForm] = useState("login");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  // Hardcoded credentials
  const validCredentials = [
    { username: "admin", password: "admin123" },
    { username: "geeth", password: "pass123" },
    { username: "sai", password: "password2" },
    { username: "mohan", password: "securePass" },
  ];

  // Handle form toggle
  const toggleForm = (form: string) => {
    setActiveForm(form);
  };

  // Login functionality
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    // Check if the entered username and password match any of the credentials
    const isValidUser = validCredentials.some(
      (cred) => cred.username === username && cred.password === password
    );

    if (isValidUser) {
      // Redirect to admin page if credentials are correct
      router.push("/admin");
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div className={`container ${activeForm === "register" ? "active" : ""}`}>
      {/* Login Form */}
      <div className="form-box login">
        <form onSubmit={handleLogin}>
          <h1>Login</h1>
          <div className="input-box">
            <input
              type="text"
              placeholder="Username"
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <i className="bx bxs-user"></i>
          </div>
          <div className="input-box">
            <input
              type="password"
              placeholder="Password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <i className="bx bxs-lock-alt"></i>
          </div>
          <div className="forgot-link">
            <a href="#">Forgot Password?</a>
          </div>
          <button type="submit" className="btn">
            Login
          </button>
          <p>or login with social platforms</p>
          <div className="social-icons">
            <a href="#">
              <i className="bx bxl-google"></i>
            </a>
            <a href="#">
              <i className="bx bxl-facebook"></i>
            </a>
            <a href="#">
              <i className="bx bxl-github"></i>
            </a>
            <a href="#">
              <i className="bx bxl-linkedin"></i>
            </a>
          </div>
        </form>
      </div>

      {/* Register Form */}
      <div className="form-box register">
        <form>
          <h1>Registration</h1>
          <div className="input-box">
            <input type="text" placeholder="Username" required />
            <i className="bx bxs-user"></i>
          </div>
          <div className="input-box">
            <input type="email" placeholder="Email" required />
            <i className="bx bxs-envelope"></i>
          </div>
          <div className="input-box">
            <input type="password" placeholder="Password" required />
            <i className="bx bxs-lock-alt"></i>
          </div>
          <button type="submit" className="btn">
            Register
          </button>
          <p>or register with social platforms</p>
          <div className="social-icons">
            <a href="#">
              <i className="bx bxl-google"></i>
            </a>
            <a href="#">
              <i className="bx bxl-facebook"></i>
            </a>
            <a href="#">
              <i className="bx bxl-github"></i>
            </a>
            <a href="#">
              <i className="bx bxl-linkedin"></i>
            </a>
          </div>
        </form>
      </div>

      {/* Toggle Sections */}
      <div className="toggle-box">
        <div className="toggle-panel toggle-left">
          <h1>Hello, Welcome!</h1>
          <p>Don't have an account?</p>
          <button className="btn register-btn" onClick={() => toggleForm("register")}>
            Register
          </button>
        </div>

        <div className="toggle-panel toggle-right">
          <h1>Welcome Back!</h1>
          <p>Already have an account?</p>
          <button className="btn login-btn" onClick={() => toggleForm("login")}>
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginSignupPage;
