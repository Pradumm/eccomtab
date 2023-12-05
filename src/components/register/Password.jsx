import React, { useState } from "react";
import axios from "axios";
import ConformPassword from "./ConformPassword";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [propEmail, setPropEmail] = useState("");
  const [showCom, setshow] = useState(true);

  const handleform = (e) => {
    setEmail(e.target.value);
    setPropEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage("");
    const apiUrl = "http://143.244.142.0/api/v1/users/forgot/password/";
    const requestData = { email };
    axios
      .post(apiUrl, requestData)
      .then((response) => {
        if (response.data.detail) {
          setshow(false);
        }
        setMessage("Password reset email sent.");
      })
      .catch((error) => {
        setMessage(error?.response?.data?.email[0]);
      });
  };

  return (
    <>
      {showCom ? (
       <div className="dev_div">
                        
       <form className="forg_form" onSubmit={handleSubmit}>
        <p className="for_text">Forget Password</p>
           {/* <div className="form-group"> */}
               <label htmlFor="email">Email</label>
               <input
                   type="email"
                   className="form-control"
                   id="email"
                   name="email"
                   placeholder="Enter your email"

                   value={email}
                   onChange={handleform}
               />
           
           <button type="submit" className="btn btn-primary mt-3">
               Submit
           </button>
           {/* </div> */}
       </form>
       <p className='text-danger'>{message}</p>
   </div>
      ) : (
        <ConformPassword email={propEmail} />
      )}
    </>
  );
};

export default ForgotPassword;
