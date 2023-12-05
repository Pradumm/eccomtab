import React from "react";
import "./SuccessPage.css";
import { Link, useLocation } from "react-router-dom";
const SuccessPage = () => {
  const location = useLocation();
  const orderId = new URLSearchParams(location.search).get("orderId");
  return (
    <div class="container mt-5">
      <div class="row">
        <div class="col-md-6 offset-md-3 text-center">
          <img
            src="path/to/success-icon.png"
            alt="Success Icon"
            class="img-fluid success-icon"
          />
          <h2 class="mt-3">Order Placed Successfully!</h2>
          <p>Your order has been confirmed. Thank you for shopping with us.</p>
          <p>Order Id : {orderId} </p>
          <Link to="/home" class="btn btn-primary">
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SuccessPage;
