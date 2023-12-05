import React, { useContext, useState } from 'react';
import { useQueryClient } from 'react-query';
import { UserContext } from './Api/context/AppContext';

<<<<<<< HEAD

const CardSummary = ({ totalCartPrice, data, handleSubmit, }) => {

  const { HandleFormShow, showForm } = useContext(UserContext)
  const queryClient = useQueryClient();

  const handleCheckoutClick = () => {
    const productsInfo = data.map((item) => ({
      user: item.user.id,
      qty: item.qty,
      part_number: item.part_number.id,
    }));


    handleSubmit(totalCartPrice, productsInfo);
  };

  return (
    <>
      <div className="card border-secondary mb-5">
        <div className="card-header bg-secondary border-0">
          <h4 className="font-weight-semi-bold m-0">Cart Summary</h4>
        </div>
        <div className="card-body">
          <div className="d-flex justify-content-between mb-3 pt-1">
            <h6 className="font-weight-medium">Subtotal</h6>
            <h6 className="font-weight-medium">
              {new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' }).format(totalCartPrice)}
            </h6>
          </div>
          <div className="d-flex justify-content-between">{/* Additional information goes here */}</div>
        </div>
        <div className="card-footer border-secondary bg-transparent">
          <div className="d-flex justify-content-between mt-2">
            <h5 className="font-weight-bold">Total</h5>
            <h5 className="font-weight-bold">
              {new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' }).format(totalCartPrice)}
            </h5>
          </div>


          {
            showForm ? <button className="btn btn-block btn-primary my-3 py-3" onClick={handleCheckoutClick}>
              Pay Now
            </button>
              :
              <button className="btn btn-block btn-primary my-3 py-3" onClick={HandleFormShow} >
                Proceed To Checkout
              </button>
          }








        </div>
      </div>
    </>
  );
=======
import axios from 'axios';
import { loadStripe } from '@stripe/stripe-js';



const CardSummary = () => {
    const { cardsubtotal, cardItem } = useContext(UserContext);

    const makePayment = async () => {
        const stripe = await loadStripe("pk_test_51O5kPkSECKkRlAbztJ2mzdPh8XmKTM6mdrkBOe8JWkjem1slZ35RgAKs4GX36vlptOTXqW4W1rZrZRjgN4gCjf0t00YoDtSfiw");

        const body = {
            products: cardItem
        };

        const headers = {
            "Content-Type": "application/json",
        };

        try {
            const response = await axios.post("http://localhost:7000/api/create-checkout-session", body, {
                headers: headers
            });

            const session = response.data;

            const result = await stripe.redirectToCheckout({
                sessionId: session.id
            });

            if (result.error) {
                console.log(result.error);
            }
        } catch (error) {
            console.error("Error making payment:", error);
        }
    };







    return (
        <>
            <form className="mb-5" action="">
                <div className="input-group">
                    <input type="text" className="form-control p-4" placeholder="Coupon Code" />
                    <div className="input-group-append">
                        <button className="btn btn-primary">Apply Coupon</button>
                    </div>
                </div>
            </form>
            <div className="card border-secondary mb-5">
                <div className="card-header bg-secondary border-0">
                    <h4 className="font-weight-semi-bold m-0">Cart Summary</h4>
                </div>
                <div className="card-body">
                    <div className="d-flex justify-content-between mb-3 pt-1">
                        <h6 className="font-weight-medium">Subtotal</h6>
                        <h6 className="font-weight-medium">{new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' }).format(cardsubtotal)}</h6>
                    </div>
                    <div className="d-flex justify-content-between">
                        {/* <h6 className="font-weight-medium">Shipping</h6>
                        <h6 className="font-weight-medium">{new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' }).format("shippingCost")}</h6> */}
                    </div>
                </div>
                <div className="card-footer border-secondary bg-transparent">
                    <div className="d-flex justify-content-between mt-2">
                        <h5 className="font-weight-bold">Total</h5>
                        <h5 className="font-weight-bold">{new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' }).format(cardsubtotal)}</h5>
                    </div>
                    <button className="btn btn-block btn-primary my-3 py-3" onClick={makePayment}>
                        Proceed To Checkout
                    </button>
                </div>
            </div>
        </>
    );
>>>>>>> 1fe8341fa44ded06e4e9fd326c581ebdce9bf057
};

export default CardSummary;
