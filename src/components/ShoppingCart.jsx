import React, { useContext, useState, useEffect } from "react";
import axios from "axios";
import { useQueryClient } from "react-query";
import Footer from "./Footer";
import { UserContext } from "./Api/context/AppContext";
import CardSummery from "./CardSummery";
import { Link, useNavigate } from "react-router-dom";
import OrderForm from "./orders/OrderForm";
import BasicModal from "./BasicModal";
const ShoppingCart = () => {
  const { data, removeFromCard, user, showForm } = useContext(UserContext);

  const [orderCreated, setOrderCreated] = useState();

  const [open, setOpen] = React.useState(false);
  const [modalmsg, setmodalmsg] = useState();

  const [usedetails, setuserdetails] = useState([]);
  // const [uniqueValues, setUniqueValues] = useState({});

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    billing_company_name: "",
    billing_pincode: "",
    billing_gst_no: "",
    shipping_company_name: "",
    shipping_pincode: "",
    name: "",
    mobile: "",
    email: "",
    marketplace: "",
    user: user,
    billing_address: "", //billing.id,
    billing_country: "", // billing.country_id,
    shipping_address: "", //shipping.id,
    shipping_country: "", // shipping.country_id
  });

  // const [errors, setErrors] = useState({
  //   billing_company_name: "",
  //   billing_pincode: "",
  //   billing_gst_no: "",
  //   shipping_company_name: "",
  //   shipping_pincode: "",
  //   name: "",
  //   mobile: "",
  //   email: "",
  //   isBillingAddressValid :"",
  //   isShippingAddressValid :""

  // });


  const [errors, setErrors] = useState({
    billing_company_name: "",
    billing_pincode: "",
    billing_gst_no: "",
    shipping_company_name: "",
    shipping_pincode: "",
    name: "",
    mobile: "",
    email: "",
    isBillingAddressValid: "",
    isShippingAddressValid: ""
  });

  useEffect(() => {
    // Fetch user details from the API and set the form data
    const fetchUserDetails = async () => {
      const marketplace_nameId = localStorage.getItem("marketplace_nameId");
      try {
        const orgUuid = localStorage.getItem("orgid");
        const response = await axios.get(
          `http://143.244.142.0/api/v1/org/fetch/org/address/?org=${orgUuid}`
        );
        console.log(response.data.results, "response.data form data order ");

        const productsInfo = response.data.results;

        setuserdetails(productsInfo);
        const uniqueValuesSet = new Set();
        productsInfo.forEach((item) => {
          const { org, gst_no, country, pincode } = item;

          const { company_name, contact_person } = org;

          if (
            pincode &&
            pincode.pin_code &&
            country.id &&
            gst_no &&
            company_name &&
            contact_person.first_name &&
            contact_person.email &&
            contact_person.mobile
          ) {
            const key = `${contact_person.first_name},${contact_person.email},${contact_person.mobile},${pincode.pin_code},${country.id},${gst_no},${company_name}`;

            if (!uniqueValuesSet.has(key)) {
              uniqueValuesSet.add(key);
            }
          }
        });

        const [firstUniqueValue] = Array.from(uniqueValuesSet);

        if (firstUniqueValue) {
          const [
            first_name,
            email,
            mobile,
            pin_code,
            country_id,
            gst_no,
            company_name,
          ] = firstUniqueValue.split(",");
          setFormData((prevFormData) => ({
            ...prevFormData,
            billing_company_name: company_name || "", // Set your value based on your logic
            billing_pincode: pin_code || "", // Set your value based on your logic
            billing_gst_no: gst_no || "", // Set your value based on your logic
            shipping_company_name: company_name || "", // Set your value based on your logic
            shipping_pincode: pin_code || "", // Set your value based on your logic
            name: first_name,
            mobile: mobile,
            email: email,
            marketplace: marketplace_nameId,
            user: user,
            billing_address: "",
            billing_country: country_id,
            shipping_address: "",
            shipping_country: country_id,
            // Set other formData properties based on your logic
          }));
        }
      } catch (error) {
        console.error("Error fetching user details:", error);
      }
    };

    fetchUserDetails();
  }, []);



  const handleInputChange = (field, value) => {
    setFormData({
      ...formData,
      [field]: value,
    });

    setErrors({
      ...errors,
      [field]: "",
    });
  };
  const queryClient = useQueryClient();

  const getPrice = (product) => {
    if (product.part_number.prices.length > 0) {
      const selectedPrice = product.part_number.prices.find(
        (price) =>
          (product.qty || 1) >= price.min_quantity &&
          (product.qty || 1) <= price.max_quantity
      );

      return selectedPrice ? selectedPrice.price : 0;
    } else {
      return product.part_number.mrp || 0;
    }
  };

  const totalCartPrice = data
    ? data.reduce(
      (total, product) => total + getPrice(product) * (product.qty || 1),
      0
    )
    : 0;

  const handleQuantity = async (action, productId, product) => {
    try {
      const response = await axios.put(
        `http://143.244.142.0/api/v1/marketplace/update/cart/${productId}/`,
        {
          qty:
            action === "inc"
              ? (product.qty || 1) + 1
              : Math.max((product.qty || 1) - 1, 1),
        }
      );

      console.log("Item quantity updated:", response.data);

<<<<<<< HEAD
      queryClient.invalidateQueries(["userList-data"]);
    } catch (error) {
      console.error("Error updating item quantity:", error);
    }
  };
=======
                                <div className="col-lg-8 table-responsivee mb-5">
                                    <table className="table table-bordered text-center mb-0">
                                        <thead className="bg-secondary text-dark">
                                            <tr>
                                                <th>Products</th>
                                                <th>Price</th>
                                                <th>Quantity</th>
                                                <th>Total</th>
                                                <th>Remove</th>
                                            </tr>
                                        </thead>
                                        <tbody className="align-middle">
                                            {
                                                cardItem.map((product, index) =>
>>>>>>> 1fe8341fa44ded06e4e9fd326c581ebdce9bf057

  //  order form summit

<<<<<<< HEAD
  const handleSubmit = async () => {
    const marketplace_nameId = localStorage.getItem("make");
    try {
      const response = await axios.post(
        "http://143.244.142.0/api/v1/marketplace/create-order/",
        formData
      );
      console.log("Success:", response.data);
      const orderId = response.data.id;
=======
                                                    <tr key={index}>
                                                        <td className="align-middle">
                                                            <img src="" alt="" style={{ width: '50px' }} />
                                                        </td>
                                                        <td className="align-middle"> {new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' }).format(product.mrp)}</td>
                                                        <td className="align-middle">
                                                            <div className="input-group quantity mx-auto" style={{ width: '150px' }}>
                                                                {/* You can add quantity input and logic here */}
>>>>>>> 1fe8341fa44ded06e4e9fd326c581ebdce9bf057

      setOrderCreated(orderId);
      await addOrderParts(orderId, response.data.order_id, marketplace_nameId);
    } catch (error) {
      if (error.response && error.response.data) {
        const errorData = error.response.data;
        // console.log(errorData, 'errorData______errorData');
        setErrors({
          billing_gst_no: errorData.billing_gst_no
            ? errorData.billing_gst_no[0]
            : "",
          shipping_company_name: errorData.shipping_company_name
            ? errorData.shipping_company_name[0]
            : "",
          shipping_pincode: errorData.shipping_pincode
            ? errorData.shipping_pincode[0]
            : "",
          name: errorData.name ? errorData.name[0] : "",
          mobile: errorData.mobile ? errorData.mobile[0] : "",
          email: errorData.email ? errorData.email[0] : "",
        });
      }
    }
  };

<<<<<<< HEAD
  const addOrderParts = async (
    orderId,
    response_order_id,
    marketplace_nameId
  ) => {
    try {
      const itemlist = data.map((item) => ({
        order: orderId,
        part_number: item.part_number.id,
        qty: item.qty,
        cgst: null,
        sgst: null,
        igst: null,
        total: Math.ceil(getPrice(item) * item.qty), // Round and then convert to integer
        shipping_cost: null,
        total_payable: Math.ceil(getPrice(item) * item.qty), // Round and then convert to integer
        user: item.user.id,
      }));
=======
                                                                <span className='bg-secondary shop_add' style={{ width: "50px", }}>  {product.quantity}</span>
                                                                <button className="btn btn-primary btn-plus" onClick={() => handleQuantity("inc", product)}>
                                                                    <i className="fa fa-plus"></i>
                                                                </button>
                                                            </div>
                                                        </td>
                                                        <td className="align-middle">        {new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' }).format((product.mrp) * (product.quantity))}</td>
                                                        <td className="align-middle">
                                                            <button className="btn btn-sm btn-primary" onClick={() => removeFromCard(product.id)}><i className="fa fa-times"></i></button>
                                                        </td>
                                                    </tr>
                                                ))
                                            }
>>>>>>> 1fe8341fa44ded06e4e9fd326c581ebdce9bf057

      // console.log(itemlist, '_______ itemlist itemlist');

      const response = await axios.post(
        "http://143.244.142.0/api/v1/marketplace/checkout-order/",
        itemlist
      );

      console.log("Order parts added successfully:", response.data);

      const CartPrice = response.data.order_details
        ? response.data.order_details.reduce((total, product) => {
          // Convert the total and product.total to numbers and add them up
          return total + parseFloat(product.total || 0);
        }, 0)
        : 0;

      const amountprice = response.data.razorpay_response.amount;

      const options = {
        key: process.env.REACT_APP_RAZORPAY_KEY,
        amount: amountprice,
        currency: response.data.razorpay_response.currency,
        name: marketplace_nameId,
        description: "Payment for your order test",
        image: "path/to/your/company/logo.png",
        order_id: response.data.razorpay_response.id,
        handler: async function (response) {
          const { razorpay_order_id, razorpay_payment_id, razorpay_signature } =
            response;
          console.log("Payment successful:", response);
          // navigate("/success-order")
          // Handle payment status here
          await addPaymentDetails(
            orderId,
            CartPrice,
            "Success",
            razorpay_payment_id || "not found",
            razorpay_signature
          );
          DeleteAll_Product(response_order_id);
        },
        prefill: {
          name: formData.name,
          email: formData.email,
          contact: formData.mobile,
        },
        theme: {
          color: "#F37254",
        },
      };

      const razorpay = new window.Razorpay(options);
      razorpay.on("payment.failed", async function (response) {
        console.log("Payment failed:", response);
        const { order_id, payment_id } = response.error.metadata;

        if (payment_id) {
          await addPaymentDetails(
            orderId,
            CartPrice,
            "Failure",
            payment_id || "not found",
            "No Found"
          );
        }
        handleOpen();
        setmodalmsg(response.error.description);
        // Additional alerts for other error details
      });

      razorpay.open();
    } catch (error) {
      console.error("Error adding order parts:", error);
      throw error;
    }
  };

  const addPaymentDetails = async (
    orderId,
    amountprice,
    status,
    paymentId,
    signatureId
  ) => {
    try {
      const paymentDetailsPayload = {
        order: orderId,
        amount: amountprice,
        status: status,
        payment_id: paymentId,
        signature_id: signatureId,
      };

      const response = await axios.post(
        "http://143.244.142.0/api/v1/marketplace/add/payment-details/",
        paymentDetailsPayload
      );
      console.log("Payment details added successfully:", response.data);
    } catch (error) {
      console.error("Error adding payment details:", error);
      throw error;
    }
  };

  const DeleteAll_Product = (orderId) => {
    data.map((item) => {
      removeFromCard(item.id);
      navigate(`/success-order?orderId=${orderId}`);
    });
  };

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <div>
        {/* Page Header Start */}
        <div className="container-fluid bg-secondary mb-3">
          <div
            className="d-flex flex-column align-items-center justify-content-center"
            style={{ minHeight: "200px" }}
          >
            <h1 className="font-weight-semi-bold text-uppercase mb-3">
              Shopping Cart
            </h1>
            <div className="d-inline-flex">
              <p className="m-0">
                <a href="">Home</a>
              </p>
              <p className="m-0 px-2">-</p>
              <p className="m-0">Shopping Cart</p>
            </div>
          </div>
        </div>
        {/* Page Header End */}

        {/* Cart Start */}
        {!data?.length && (
          <div className="container">
            <p>No Product in the cart.</p>
            <Link to="/home" className="btn btn-primary">
              Return to Shop
            </Link>
          </div>
        )}

        {!!data?.length && (
          <div className="container-fluid pt-5">
            <div className="row px-xl-5">
              <div className="col-lg-8 table-responsivee mb-5">
                {showForm ? (
                  <>
                     <OrderForm
                      totalCartPrice={totalCartPrice}
                      formData={formData}
                      handleInputChange={handleInputChange}
                      errors={errors}
                      usedetails={usedetails}
                      setErrors={setErrors} // Pass setErrors to child component
                    />
                  </>
                ) : (
                  <table className="table table-bordered text-center mb-0">
                    <thead className="bg-secondary text-dark">
                      <tr>
                        <th>Products</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Total Price</th>
                        <th>Remove</th>
                      </tr>
                    </thead>
                    <tbody className="align-middle">
                      {data.map((product, index) => (
                        <tr key={index}>
                          <td className="align-middle col_1">
                            <Link
                              to={`/home/detail/${product.part_number.part_number}`}
                            >
                              {product.part_number.short_description}
                            </Link>
                          </td>
                          <td className="align-middle col_2">
                            {/* Display the price based on the selected quantity or default to 1 */}
                            {new Intl.NumberFormat("en-IN", {
                              style: "currency",
                              currency: "INR",
                            }).format(getPrice(product))}
                          </td>

                          <td className="align-middle col_3">
                            <div className="input-group quantity mx-auto">
                              <button
                                className="btn btn-primary btn-minus"
                                onClick={() => {
                                  handleQuantity("dec", product.id, product);
                                }}
                              >
                                <i className="fa fa-minus"></i>
                              </button>

                              <span className="bg-secondary shop_add">
                                {product.qty || 1}
                              </span>

                              <button
                                className="btn btn-primary btn-plus"
                                onClick={() => {
                                  handleQuantity("inc", product.id, product);
                                }}
                              >
                                <i className="fa fa-plus"></i>
                              </button>
                            </div>
                          </td>
                          <td className="align-middle">
                            {/* Display the total price based on the selected quantity */}
                            {new Intl.NumberFormat("en-IN", {
                              style: "currency",
                              currency: "INR",
                            }).format(getPrice(product) * product.qty)}
                          </td>
                          <td className="align-middle">
                            <button
                              className="btn btn-sm btn-primary"
                              onClick={() => removeFromCard(product.id)}
                            >
                              <i className="fa fa-times"></i>
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                )}
              </div>

              <div className="col-lg-4">
                <CardSummery
                  totalCartPrice={totalCartPrice}
                  handleSubmit={handleSubmit}
                  data={data}
                />
              </div>
            </div>
          </div>
        )}

        <BasicModal
          open={open}
          handleOpen={handleOpen}
          handleClose={handleClose}
          modalmsg={modalmsg}
        />
      </div>
      <Footer />
    </>
  );
};

export default ShoppingCart;
