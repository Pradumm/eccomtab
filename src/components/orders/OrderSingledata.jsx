import React from 'react';

const OrderSingledata = ({ data }) => {
    if (!data) {
        // Handle the case when data is not available
        return null;
    }

    return (
        <>
            {/* <!-- Payment --> */}
            <div className="card mb-4">
                <div className="card-body">
                    <div className="row">
                        <div className="col-lg-6">
                        <h3 className="h6">Order  {data.order_id}</h3>
                            <h3 className="h6">Shipping Information</h3>
                            <address>
                                <strong>Shipping Company Name: {data.shipping_company_name}</strong><br />
                                <strong>First Name: {data.user.first_name}</strong><br />
                                <strong>Last Name: {data.user.last_name}</strong><br />
                                <strong>Email: {data.user.email}</strong><br />
                                <strong>Address: {data.shipping_address.address}</strong><br />
                                <strong>Address Type: {data.shipping_address.address_type}</strong><br />
                                <strong>Pin : {data.shipping_pincode}</strong><br />
     
                            </address>
                            <div>
                            <span>GST NO: {data.shipping_address.created}</span><br />
                            <span>Date: {data.shipping_address.gst_no}</span><br />
                                <span>Country: {data.shipping_address.country.name}</span><br />
                                <span>Shipping Pincode: {data.shipping_address.pincode.pin_code}</span><br />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <h3 className="h6">Billing address</h3>
                            <address>
                                <strong>Billing Company Name: {data.billing_company_name}</strong><br />
                                <strong>First Name: {data.name}</strong><br />
                                <strong>Email: {data.email}</strong><br />
                                <strong>Mobile: {data.mobile}</strong><br />
                                 <strong>date :{data.billing_address.created}</strong> <br/>
                                <strong>Address: {data.billing_address.address}</strong><br />
                                <strong>Address Type: {data.billing_address.address_type}</strong><br />
                                <span>Pincode: {data.billing_pincode}</span>
                            </address>
                            <div>
                                <span>Billing Country: {data.billing_country.name}</span><br />
                                <span>GST no: {data.billing_gst_no}</span><br />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default OrderSingledata;
