import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import OtpInput from "react-otp-input";

const ConfirmPassword = ({ email }) => {
  const [otp, setOtp] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleVerification = async (e) => {
    e.preventDefault();
    setError("");

    const payload = {
      email: email,
      otp: otp,
      new_password: newPassword,
    };

    try {
      const response = await axios.post(
        "http://143.244.142.0/api/v1/users/reset/password/",
        payload
      );

      if (response.data) {
        navigate("/login");
      } else {
        setError("Verification failed. Please check your OTP and email.");
      }
    } catch (error) {
      if (error.response && error.response.data) {
        setError(error.response.data);
        console.error("Verification failed:", error.response.data);
      } else {
        setError("An error occurred while processing your request.");
        console.error("Verification failed:", error);
      }
    }
  };

  return (
    <div
      className="container d-flex justify-content-center align-items-center"
      style={{ height: "100vh" }}
    >
      <div className="card p-4">
        <h2 className="text-center mb-4">Confirm OTP With New Password</h2>
        <form onSubmit={handleVerification}>
          <div className="form-group">
            <label htmlFor="newPassword">New Password</label>
            <input
              type="password"
              className="form-control"
              id="newPassword"
              placeholder="Enter your new password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
            />
            {error.new_password && (
              <p className="text-danger">{error.new_password[0]}</p>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="otp">OTP:</label>
            <OtpInput
              value={otp}
              onChange={setOtp}
              numInputs={4}
              renderSeparator={<span>-</span>}
              renderInput={(props) => <input {...props} />}
              inputStyle={{ width: "2rem" }}
            />
          </div>

          {error.otp && <p className="text-danger">{error.otp[0]}</p>}

          {error.detail && <p className="text-danger">{error.detail}</p>}

          <button type="submit" className="btn btn-primary btn-block">
            Verify
          </button>
        </form>
      </div>
    </div>
  );
};

export default ConfirmPassword;
