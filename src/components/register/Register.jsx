import React, { useState, useEffect } from 'react';
import "./Register.css"

import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

function RegisterPage() {

 
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [password, setPassword] = useState('');
  const [selectedOrg, setSelectedOrg] = useState('');

  const [organizations, setOrganizations] = useState([]);
  const [error, setError] = useState('');

   const navigate =useNavigate()
  useEffect(() => {
    getOrganizations();
  }, []);

  const getOrganizations = async () => {
    try {
      const response = await axios.get("http://143.244.142.0/api/v1/organizations/fetch/org/");
      setOrganizations(response.data.results);
    } catch (error) {
      console.error(error);
    }
  };

  const handleFirstnameChange = (e) => {
    setFirstname(e.target.value);
  };

  const handleLastnameChange = (e) => {
    setLastname(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleMobileChange = (e) => {
    setMobile(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSelectOrg = (org) => {
    setSelectedOrg(org);
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    const payload = {
      first_name: firstname,
      last_name: lastname,
      email: email,
      mobile: mobile,
      password: password,
      org: selectedOrg,
    };

    try {
      const response = await axios.post('http://143.244.142.0/api/v1/users/create/user/', payload);
      console.log('respo ____oxd', response.data);
      // Check if the registration was successful based on the API response
      if (response.data) {
        console.log('Registration successful', response.data);
        // let token  = response.data.token.access
        // localStorage.setItem("token", token);
        navigate("/login")      
      } else {
        setError('Registration failed. Please check your data.');
      }
    } catch (error) {

      const errormsg = error.response.data

      setError(errormsg);
      console.error('Registration failed:', errormsg);
    }
  };

  return (
    <div className="register-page">
      <div className="register-container">
        <h1 className="register-title">Register</h1>
        <form onSubmit={handleRegister} className="register-form">
          <div className="input-group">
            <label className="register-label">Firstname</label>
            <input
              type="text"
              id="firstname"
              name="firstname"
              value={firstname}
              onChange={handleFirstnameChange}
              placeholder="firstname"
              className="register-input"
            />
          </div>
          <div className="input-group">
            <label className="register-label">Lastname</label>
            <input
              type="text"
              id="lastname"
              name="lastname"
              value={lastname}
              onChange={handleLastnameChange}
              placeholder="lastname"
              className="register-input"
            />
          </div>
          <div className="input-group">
            <label className="register-label">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={handleEmailChange}
              placeholder="me@example.com"
              className="register-input"
            />
            {error && <p className="register-error">{error.email}</p>}
          </div>
          <div className="input-group">
            <label className="register-label">Mobile</label>
            <input
              type="number"
              id="mobile"
              name="mobile"
              value={mobile}
              onChange={handleMobileChange}
              placeholder="phone number"
              className="register-input"
            />
          </div>
          <div className="input-group">
            <label className="register-label">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={handlePasswordChange}
              placeholder="••••••••••"
              className="register-input"
            />
            {error && <p className="register-error">{error.password}</p>}
          </div>
          <div className="input-group">
            <select value={selectedOrg} onChange={(e) => handleSelectOrg(e.target.value)}>
              <option value="">Select an organization</option>
              {organizations.map((org) => (
                <option key={org.id} value={org.company_name}>
                  {org.company_name}
                </option>
              ))}
            </select>
            {error && <p className="register-error">{error.email}</p>}
          </div>
          <button type="submit" className="register-button">Register</button>
          <p className='reg_log'>Already have an account? <Link to="/login">Sign in</Link></p>



        </form>
      </div>
    </div>
  );
}

export default RegisterPage;
