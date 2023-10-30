
import React, { useState, useContext, } from 'react';
import axios from 'axios';
import '../login/Login.css';
import { UserContext } from '../Api/context/AppContext';
import { useNavigate } from 'react-router-dom';
function LoginPage() {

  const { autho, setautho ,setUser , setToken} = useContext(UserContext)

  const navigate = useNavigate()


  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [error, setError] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = async (e) => {
    const payload = {
      username: email,
      password: password

    };

    e.preventDefault();
    try {
      const response = await axios.post('http://143.244.142.0/api/v1/accounts/login', payload); // Adjust the API endpoint as needed
      console.log('Login successful', response.data);
      let token = response.data.data.auth_token.access
      let user_id = response.data.data.user_id
      
      localStorage.setItem("token", token);
      setToken(token)
      setautho(true)
      localStorage.setItem("user", response.data.data.user_id);
    
      setUser(user_id)
      setEmail("")
      setPassword("")
      
      navigate("/")

      // Redirect the user to another page or perform additional actions upon successful login
    } catch (error) {
      setError(error.response.data.message);
      console.error('Login failed:', error);
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
          <label className="login-label">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={handlePasswordChange}
            placeholder="••••••••••"
            className="login-input"
          />
          <button type="submit" className="login-button">Submit</button>
        </form>
        {error && (<p className="login-error text-danger">{error}</p>)}
      </div>
    </div>
  );
}

export default LoginPage;
