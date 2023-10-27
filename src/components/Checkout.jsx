import React from 'react'
import OrderSummary from './OrderSummary'
import BillingAddress from './BillingAddress'
import Footer from './Footer'
const Checkout = () => {
    return (
        <>
            {/* <!-- Page Header Start --> */}
            <div class="container-fluid bg-secondary mb-5">
                <div class="d-flex flex-column align-items-center justify-content-center" style={{ "min-height": "300px" }}>
                    <h1 class="font-weight-semi-bold text-uppercase mb-3">Checkout</h1>
                    <div class="d-inline-flex">
                        <p class="m-0"><a href="">Home</a></p>
                        <p class="m-0 px-2">-</p>
                        <p class="m-0">Checkout</p>
                    </div>
                </div>
            </div>
            {/* <!-- Page Header End --> */}

            <div className="container-fluid pt-5">
                <div className="row px-xl-5">
                    <div className="col-lg-8">
                        <BillingAddress />
                    </div>
                    <div className="col-lg-4">
                        <OrderSummary />
                    </div>
                </div>
            </div>

            <Footer />

        </>
    )
}

export default Checkout 