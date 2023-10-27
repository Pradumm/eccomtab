import React, { useContext } from 'react';
import { UserContext } from './Api/context/AppContext';
import { loadStripe } from '@stripe/stripe-js';
import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import axios from 'axios';

const stripePromise = loadStripe('your_stripe_api_key'); // Replace with your actual Stripe API key

const CardSummary = () => {
    const { cardsubtotal, cardItem } = useContext(UserContext);
    const stripe = useStripe();
    const elements = useElements();

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card: elements.getElement(CardElement),
        });

        if (error) {
            // Handle payment method creation error
        } else {
            // Send paymentMethod.id to your server for further processing
            const response = await axios.post('/your-server-endpoint', {
                paymentMethodId: paymentMethod.id,
                cartItems: cardItem, // Include cart items if needed
            });

            if (response.data.success) {
                // Payment successful, you can redirect the user to a thank you page
            } else {
                // Payment failed, handle the failure accordingly
            }
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
                        <h6 className="font-weight-medium">${cardsubtotal}</h6>
                    </div>
                    <div className="d-flex justify-content-between">
                        <h6 className="font-weight-medium">Shipping</h6>
                        <h6 className="font-weight-medium">${"shippingCost"}</h6>
                    </div>
                </div>
                <div className="card-footer border-secondary bg-transparent">
                    <div className="d-flex justify-content-between mt-2">
                        <h5 className="font-weight-bold">Total</h5>
                        <h5 className="font-weight-bold">${cardsubtotal}</h5>
                    </div>
                    <button className="btn btn-block btn-primary my-3 py-3" onClick={handleSubmit}>
                        Proceed To Checkout
                    </button>
                </div>
            </div>
        </>
    );
};

export default CardSummary;
