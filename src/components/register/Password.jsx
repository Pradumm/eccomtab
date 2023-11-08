import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import ConformPassword from './ConformPassword';

const ForgotPassword = () => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [propEmail, setPropEmail] = useState('');

    const [showCom, setshow] = useState(true)

    const handleform=(e)=>{
        setEmail(e.target.value)
        setPropEmail(e.target.value)
    }
    
    // const navigate = useNavigate()
    const handleSubmit = (e) => {
        e.preventDefault();
        setMessage("")
        // Define your API endpoint
        const apiUrl = 'http://143.244.142.0/api/v1/users/forgot/password/';

        // Prepare the data to send in the POST request
        const requestData = { email };

        // Send a POST request using Axios
        axios
            .post(apiUrl, requestData)
            .then((response) => {

            
                if (response.data.detail) {

                  setshow(false)
                }
                console.log(response.data.detail)
                setMessage('Password reset email sent.');
            })
            .catch((error) => {
                // console.log(error?.response?.data?.email[0], "______---respo")
                setMessage(error?.response?.data?.email[0]);
            });
    };

    return (

        <>

            {
                showCom ? <>
                    <div className="container mt-5">
                        <div className="row justify-content-center">
                            <div className="col-md-6">
                                <div className="card">
                                    <div className="card-header">Forgot Password</div>
                                    <div className="card-body">
                                        <form onSubmit={handleSubmit}>
                                            <div className="form-group">
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
                                            </div>
                                            <button type="submit" className="btn btn-primary">
                                                Submit
                                            </button>
                                        </form>
                                        <p className='text-danger'>{message}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                </> : <>  <ConformPassword email={propEmail}/> </>
            }
        </>





    );
};

export default ForgotPassword;
