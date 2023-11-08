import React, { useState, useEffect } from 'react';
import './Register.css';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import VerifyOtp from './VerifyOtp';
function RegisterPage() {
  const [organizations, setOrganizations] = useState([]);
  const [marketdata, setMarketData] = useState([]);

  const [showPassword, setShowPassword] = useState(false);

  const [showECom, setshowECom] = useState(true);
  const [propEmail, setpropEmail] = useState("");


  const [userData, setUserData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    market_place: '',
    org: '',
    password: '',
    mobile: '',
  });
  console.log(userData.email)

  const [error, setError] = useState('');

  const navigate = useNavigate();

  useEffect(() => {
    getOrganizations();
    getMarketPlaceData();
  }, []);

  const getOrganizations = async () => {
    try {
      const response = await axios.get('http://143.244.142.0/api/v1/organizations/fetch/org/');
      setOrganizations(response.data.results);
    } catch (error) {
      console.error(error);
    }
  };

  const getMarketPlaceData = async () => {
    try {
      const response = await axios.get('http://143.244.142.0/api/v1/parts/get/marketplace/');
      setMarketData(response.data.results);
    } catch (error) {
      console.error(error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value,
    });

    setpropEmail(userData.email)
    console.log(propEmail, "propemail")
  };

  // ... (Other code remains the same)

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://143.244.142.0/api/v1/users/new/create/user/', userData);
      if (response.data) {
        console.log('User Created Successfully', response.data);



        //  localStorage.setItem("Email", userData.email)
        // console.log("____________-use data", userData.email)

        // Reset the form fields
        setUserData({
          first_name: '',
          last_name: '',
          email: '',
          market_place: '',
          org: '',
          password: '',
          mobile: '',
        });

        setshowECom(false)
        // navigate("/otp")
      } else {
        setError('User creation failed. Please check your data.');
      }
    } catch (error) {
      console.error('User creation failed:', error.response.data);
      const emailError = error.response.data.email ? error.response.data.email[0] : '';
      const marketError = error.response.data.market ? error.response.data.market[0] : '';
      const orgError = error.response.data.org ? error.response.data.org[0] : '';
      setError(`User creation failed. Please try again later. Email: ${emailError}, Market: ${marketError}, Org: ${orgError}`);
    }
  };

  return (


    <>

      {
        showECom ? <>

          <div className="register-page">

            
            <div className="register-container">
              <form onSubmit={handleSubmit}>
              <h2>Register</h2>
                <div className="mb-3">
                  <label htmlFor="first_name" className="register-label">First Name:</label>
                  <input
                    type="text"
                    id="first_name"
                    name="first_name"
                    value={userData.first_name}
                    onChange={handleInputChange}
                    className="register-input"
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="last_name" className="register-label">Last Name:</label>
                  <input
                    type="text"
                    id="last_name"
                    name="last_name"
                    value={userData.last_name}
                    onChange={handleInputChange}
                    className="register-input"
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="email" className="register-label">Email:</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={userData.email}
                    onChange={handleInputChange}
                    className="register-input"
                  />
                  {error && error.includes('Email') && <p className="text-danger">{error.split('Email: ')[1].split(', Market:')[0]}</p>}
                </div>

                <div className="mb-3">
                  <label htmlFor="market_place" className="register-label">Market Place:</label>
                  <select
                    id="market_place"
                    name="market_place"
                    value={userData.market_place}
                    onChange={handleInputChange}
                    className="form-select"
                  >
                    <option value="">Select a market place</option>
                    {marketdata.map((item) => (
                      <option key={item.id} value={item.marketplace_name}>
                        {item.marketplace_name}
                      </option>
                    ))}
                  </select>
                  {error && error.includes('Market') && <p className="text-danger">{error.split('Market: ')[1].split(', Org:')[0]}</p>}
                </div>

                <div className="mb-3">
                  <label htmlFor="org" className="register-label">Organization:</label>
                  <select
                    id="org"
                    name="org"
                    value={userData.org}
                    onChange={handleInputChange}
                    className="form-select"
                  >
                    <option value="">Select an organization</option>
                    {organizations.map((org) => (
                      <option key={org.id} value={org.company_name}>
                        {org.company_name}
                      </option>
                    ))}
                  </select>
                  {error && error.includes('Org') && <p className="text-danger">{error.split('Org: ')[1]}</p>}
                </div>

                {/* <div className="mb-3">
 <label htmlFor="password" className="register-label">Password:</label>
 <input
   type="password"
   id="password"
   name="password"
   value={userData.password}
   onChange={handleInputChange}
   className="register-input"
 />
</div> */}


                <div className="mb-3">
                  <label htmlFor="password" className="register-label">
                    Password:
                  </label>
                  <div className="password-input-container">
                    <input
                      type={showPassword ? 'text' : 'password'}
                      id="password"
                      name="password"
                      value={userData.password}
                      onChange={handleInputChange}
                      className="register-input"
                    />
                    <div className="password-toggle-icon" onClick={handleTogglePassword}>
                      {showPassword ? <FaEyeSlash /> : <FaEye />}
                    </div>
                  </div>
                </div>


                <div className="mb-3">
                  <label htmlFor="mobile" className="register-label">Mobile:</label>
                  <input
                    type="number" // You can change the input type to "tel" if you want to enforce numeric input
                    id="mobile"
                    name="mobile"
                    value={userData.mobile}
                    onChange={handleInputChange}
                    className="register-input"
                  />
                </div>

                <div className="mb-3">
                  <button type="submit" className="btn btn-primary">Register</button>
                </div>

                {error && <p className="text-danger">{error}</p>}
              </form>
              <p className="mt-3">Already have an account? <Link to="/login">Sign in</Link></p>
            </div>

          </div>

        </> : <>
          <VerifyOtp email={propEmail} />
        </>


      }

    </>



  );
}

export default RegisterPage;
