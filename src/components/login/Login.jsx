import React, { useState, useContext } from "react";
import axios from "axios";
import "../login/Login.css";
import { UserContext } from "../Api/context/AppContext";
<<<<<<< HEAD
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import logodeafault from "../../components/assets/logo-removebg-preview.png";

import { FaEye, FaEyeSlash } from "react-icons/fa";
function LoginPage() {
  const { setautho, setUser, setToken } = useContext(UserContext);
=======
import { Link, useNavigate } from "react-router-dom";

import { FaLock, FaEye, FaEyeSlash } from 'react-icons/fa';
function LoginPage() {
  const { autho, setautho, setUser, setToken } = useContext(UserContext);
>>>>>>> 1fe8341fa44ded06e4e9fd326c581ebdce9bf057

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

<<<<<<< HEAD
=======


>>>>>>> 1fe8341fa44ded06e4e9fd326c581ebdce9bf057
  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

<<<<<<< HEAD
=======






>>>>>>> 1fe8341fa44ded06e4e9fd326c581ebdce9bf057
  const handleLogin = async (e) => {
    const payload = {
      username: email,
      password: password,
    };

    e.preventDefault();
    try {
      const response = await axios.post(
        "http://143.244.142.0/api/v1/accounts/login",
        payload
      );
<<<<<<< HEAD
=======

      const EmailAmit = localStorage.setItem("emailData", email);
      const PasswordAmit = localStorage.setItem("PasswordAmit", password);

      // Adjust the API endpoint as needed
      console.log("Login successful", response.data);
      let token = response.data.data.auth_token.access;
      let user_id = response.data.data.user_id;

      localStorage.setItem("token", token);
      setToken(token);
      setautho(true);
      localStorage.setItem("user", response.data.data.user_id);

      localStorage.setItem(
        "make",
        response.data.data.marketplace[0].marketplace_name
      );

      console.log(
        response.data.data.marketplace[0].marketplace_name,
        "________marke y"
      );

      setUser(user_id);
      setEmail("");
      setPassword("");

      navigate("/home/main");
>>>>>>> 1fe8341fa44ded06e4e9fd326c581ebdce9bf057

      localStorage.setItem("emailData", email);
      localStorage.setItem("PasswordAmit", password);

      // Save logo information to session storage
      const organization = response.data.data.org;
      let logoUrl = null;

      if (organization && organization.logo) {
        logoUrl = `http://143.244.142.0${organization.logo}`;
      } else {
        logoUrl = logodeafault;
      }

      sessionStorage.setItem("logo", logoUrl);
      // Adjust the API endpoint as needed
      let token = response.data.data.auth_token.access;
      let user_id = response.data.data.user_id;

      localStorage.setItem("token", token);
      setToken(token);
      setautho(true);
      localStorage.setItem("user", response.data.data.user_id);
      localStorage.setItem("orgid", response.data.data.org.id);

      localStorage.setItem(
        "profile",
        JSON.stringify({
          email: response.data.data.email,
          name: response.data.data.first_name,
          mobile: response.data.data.mobile,
        })
      );

      localStorage.setItem(
        "make",
        response.data.data.marketplace[0].marketplace_name
      );

      localStorage.setItem(
        "marketplace_nameId",
        response.data.data.marketplace[0].id
      );
      setUser(user_id);
      setEmail("");
      setPassword("");

      setTimeout(() => {
        navigate("/home");
      }, 1000);
    } catch (error) {
      setError(error.response.data.message);
      console.error("Login failed:", error);
    }
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <h1 className="login-title">Log In</h1>
        <form onSubmit={handleLogin} className="login-form">
          <label className="login-label">Email Address</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={handleEmailChange}
            placeholder="me@example.com"
            className="login-input"
          />
<<<<<<< HEAD
=======
          {/* <label className="login-label">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={handlePasswordChange}
            placeholder="••••••••••"
            className="login-input"
          /> */}
>>>>>>> 1fe8341fa44ded06e4e9fd326c581ebdce9bf057

          <div>
            <label className="login-label">Password</label>
            <div className="password-input-container">
              <input
<<<<<<< HEAD
                type={showPassword ? "text" : "password"}
=======
                type={showPassword ? 'text' : 'password'}
>>>>>>> 1fe8341fa44ded06e4e9fd326c581ebdce9bf057
                id="password"
                name="password"
                value={password}
                onChange={handlePasswordChange}
                placeholder="••••••••••"
                className="login-input"
              />
<<<<<<< HEAD
              <div
                className="password-toggle-icon"
                onClick={handleTogglePassword}
              >
=======
              <div className="password-toggle-icon" onClick={handleTogglePassword}>
>>>>>>> 1fe8341fa44ded06e4e9fd326c581ebdce9bf057
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </div>
            </div>
          </div>

          <button type="submit" className="login-button">
            Submit
          </button>
<<<<<<< HEAD
          <p className="mt-3">
            <Link to="/forget-pass">Forget Password</Link>
          </p>
          <p className="mt-3">
            Created account? <Link to="/register">Register</Link>
          </p>
=======
          <p className="mt-3"><Link to="/forget-pass">Forget Password</Link></p>
          <p className="mt-3">Created account? <Link to="/">Register</Link></p>
>>>>>>> 1fe8341fa44ded06e4e9fd326c581ebdce9bf057
        </form>
        {error && <p className="login-error text-danger">{error}</p>}
      </div>
    </div>
  );
}

export default LoginPage;


