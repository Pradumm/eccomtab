import React from 'react';

const OrderSingledata = ({ OrderSigledata }) => {
    if (!OrderSigledata) {
  
        return null;
    }
    return (
        <>
            {/* <!-- Payment --> */}
            <div className="card mb-4">
                <div className="card-body">
                    <div className="row">
                        <div className="col-lg-6">
                            <h3 className="h6">Order  {OrderSigledata.order_id}</h3>
                            <h3 className="h6">Shipping Information</h3>
                            <address>
                                <strong>Shipping Company Name: {OrderSigledata.shipping_company_name}</strong><br />
                                <strong>First Name: {OrderSigledata.user.first_name}</strong><br />
                                <strong>Last Name: {OrderSigledata.user.last_name}</strong><br />
                                <strong>Email: {OrderSigledata.user.email}</strong><br />
                                <strong>Address: {OrderSigledata.shipping_address.address}</strong><br />
                                <strong>Address Type: {OrderSigledata.shipping_address.address_type}</strong><br />
                                <strong>Pin : {OrderSigledata?.shipping_pincode||""}</strong><br />

                            </address>
                            <div>
                                <span> Date: {OrderSigledata.shipping_address.created}</span><br />
                                <span> GST NO: {OrderSigledata.shipping_address.gst_no}</span><br />
                                <span>Country: {OrderSigledata.shipping_address.country.name}</span><br />
                                <span>Shipping Pincode: {OrderSigledata?.shipping_address?.pincode?.pin_code || ""}</span><br />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <h3 className="h6">Billing address</h3>
                            <address>
                                <strong>Billing Company Name: {OrderSigledata.billing_company_name}</strong><br />
                                <strong>First Name: {OrderSigledata.name}</strong><br />
                                <strong>Email: {OrderSigledata.email}</strong><br />
                                <strong>Mobile: {OrderSigledata.mobile}</strong><br />
                                <strong>date :{OrderSigledata.billing_address.created}</strong> <br />
                                <strong>Address: {OrderSigledata.billing_address.address}</strong><br />
                                <strong>Address Type: {OrderSigledata.billing_address.address_type}</strong><br />
                                <span>Pincode: {OrderSigledata.billing_pincode}</span>
                            </address>
                            <div>
                                <span>Billing Country: {OrderSigledata.billing_country.name}</span><br />
                                <span>GST no: {OrderSigledata.billing_gst_no}</span><br />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default OrderSingledata;
