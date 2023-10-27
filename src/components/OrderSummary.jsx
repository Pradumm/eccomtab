

import React from 'react'

const OrderSummary = () => {
    return (
        <>
            <div className="card border-secondary mb-5">
                <div className="card-header bg-secondary border-0">
                    <h4 className="font-weight-semi-bold m-0">Order Total</h4>
                </div>
                <div className="card-body">
                    <h5 className="font-weight-medium mb-3">Products</h5>
                    <div className="d-flex justify-content-between">
                        <p>Colorful Stylish Shirt 1</p>
                        <p>$150</p>
                    </div>
                    <div className="d-flex justify-content-between">
                        <p>Colorful Stylish Shirt 2</p>
                        <p>$150</p>
                    </div>
                    <div className="d-flex justify-content-between">
                        <p>Colorful Stylish Shirt 3</p>
                        <p>$150</p>
                    </div>
                    <hr className="mt-0" />
                    <div className="d-flex justify-content-between mb-3 pt-1">
                        <h6 className="font-weight-medium">Subtotal</h6>
                        <h6 className="font-weight-medium">$150</h6>
                    </div>
                    <div className="d-flex justify-content-between">
                        <h6 className="font-weight-medium">Shipping</h6>
                        <h6 className="font-weight-medium">$10</h6>
                    </div>
                </div>
                <div className="card-footer border-secondary bg-transparent">
                    <div className="d-flex justify-content-between mt-2">
                        <h5 className="font-weight-bold">Total</h5>
                        <h5 className="font-weight-bold">$160</h5>
                    </div>
                </div>
            </div>
            <div className="card border-secondary mb-5">
                <div className="card-header bg-secondary border-0">
                    <h4 className="font-weight-semi-bold m-0">Payment</h4>
                </div>
                <div className="card-body">
                    <div className="form-group">
                        <div className="custom-control custom-radio">
                            <input type="radio" className="custom-control-input" name="payment" id="paypal" />
                            <label className="custom-control-label" for="paypal">Paypal</label>
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="custom-control custom-radio">
                            <input type="radio" className="custom-control-input" name="payment" id="directcheck" />
                            <label className="custom-control-label" for="directcheck">Direct Check</label>
                        </div>
                    </div>
                    <div className="">
                        <div className="custom-control custom-radio">
                            <input type="radio" className="custom-control-input" name="payment" id="banktransfer" />
                            <label className="custom-control-label" for="banktransfer">Bank Transfer</label>
                        </div>
                    </div>
                </div>
                <div className="card-footer border-secondary bg-transparent">
                    <button className="btn btn-lg btn-block btn-primary font-weight-bold my-3 py-3">Place Order</button>
                </div>
            </div>
        </>
    )
}

export default OrderSummary 