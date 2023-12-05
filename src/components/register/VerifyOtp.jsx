<<<<<<< HEAD
import React, { useState } from "react";
import OtpInput from "react-otp-input";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const VerifyOtp = ({ email }) => {
  const [otp, setOtp] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleVerification = async (e) => {
    e.preventDefault();
    const payload = {
      email: email,
      otp: otp,
    };
    try {
      // Send the payload to your server using Axios
      const response = await axios.post(
        "http://143.244.142.0/api/v1/users/confirm-registration-otp/",
        payload
      );

      // Handle the response from the server as needed
      if (response.data.success) {
        // Verification was successful, you can navigate to a success page or perform other actions
        console.log("Verification Successful", response.data);
        navigate("/login");
      } else {
        setError("Verification failed. Please check your OTP and email.");
      }
    } catch (error) {
      setError(error.response.data.message);
      console.error("Verification failed:", error.response.data.message);
    }
  };

  return (
    <div
      className="container d-flex justify-content-center align-items-center"
      style={{ height: "100vh" }}
    >
      <div className="card p-4">
        <h2 className="text-center mb-4">Confirm Registration OTP</h2>
        <form onSubmit={handleVerification}>

          <div className="form-group">
            <label htmlFor="otp">OTP:</label>
            <OtpInput
              value={otp}
              onChange={setOtp} // This should handle the value change correctly
              numInputs={4}
              renderSeparator={<span>-</span>}
              renderInput={(props) => <input {...props} />}
              inputStyle={{ width: "2rem" }}
            />
          </div>

          <button type="submit" className="btn btn-primary btn-block">
            Verify
          </button>
          {error && <p className="text-danger">{error}</p>}
        </form>
      </div>
    </div>
  );
=======
import React, { useState } from 'react';
import OtpInput from 'react-otp-input';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const VerifyOtp = ({email}) => {
    console.log(email,"______--email")
    const [otp, setOtp] = useState('');
    // const [email, setEmail] = useState('');
    const [error, setError] = useState('');

 

     const navigate = useNavigate()

    const handleVerification = async (e) => {
        e.preventDefault();

        //  const email = localStorage.getItem("Email",)
        //  console.log(email,"________--email")

        // Create a payload to send to the server
        const payload = {
            email:email,
            otp: otp,
        };
        try {
            // Send the payload to your server using Axios
            const response = await axios.post("http://143.244.142.0/api/v1/users/confirm-registration-otp/", payload);

            // Handle the response from the server as needed
            if (response.data.success) {
                // Verification was successful, you can navigate to a success page or perform other actions
                console.log('Verification Successful',response.data);
                navigate("/login")
                
            } else {
                setError('Verification failed. Please check your OTP and email.');
            }
        } catch (error) {
            setError(error.response.data.message);
            console.error('Verification failed:', error.response.data.message);
        }
    };

 

    return (
        <div className="container d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
            <div className="card p-4">
                <h2 className="text-center mb-4">Confirm Registration OTP</h2>
                <form onSubmit={handleVerification}>
                    {/* <div className="form-group">
                        <label htmlFor="email">Email:</label>
                        <input
                            type="email"
                            className="form-control"
                            id="email"
                            placeholder="Enter your email"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div> */}

                    <div className="form-group">
                        <label htmlFor="otp">OTP:</label>
                        <OtpInput
                            value={otp}
                            onChange={setOtp} // This should handle the value change correctly
                            numInputs={4}
                            renderSeparator={<span>-</span>}
                            renderInput={(props) => <input {...props} />}
                            inputStyle={{ width: '2rem' }}
                        />
                    </div>

                    <button type="submit" className="btn btn-primary btn-block">Verify</button>
                    {error && <p className="text-danger">{error}</p>}
                </form>
            </div>
        </div>
    );
>>>>>>> 1fe8341fa44ded06e4e9fd326c581ebdce9bf057
};

export default VerifyOtp;
