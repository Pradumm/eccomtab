import React, { useContext, useState } from 'react';
import { useQueryClient } from 'react-query';
import { UserContext } from './Api/context/AppContext';


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
};

export default CardSummary;
