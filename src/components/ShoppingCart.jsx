import React, { useContext } from 'react';
import Footer from './Footer'
import { UserContext } from './Api/context/AppContext';

const ShoppingCart = () => {
    // Define your product data and cart summary here

    const { cardItem, removeFromCard, handleQuantity ,cardsubtotal } = useContext(UserContext)

    console.log(cardItem)




    // const products = [
    //     {
    //         name: "Colorful Stylish Shirt",
    //         image: "img/product-1.jpg",
    //         price: 150,
    //         quantity: 1,
    //     },
    //     {
    //         name: "Colorful Stylish Shirt",
    //         image: "img/product-1.jpg",
    //         price: 150,
    //         quantity: 1,
    //     },
    //     {
    //         name: "Colorful Stylish Shirt",
    //         image: "img/product-1.jpg",
    //         price: 150,
    //         quantity: 1,
    //     },
    //     // Add more products as needed
    // ];

    // const subtotal = products.reduce((acc, product) => acc + product.price * product.quantity, 0);
    // const shippingCost = 10;
    // const total = subtotal + shippingCost;

    return (
        <>
            <div>
                {/* Page Header Start */}
                <div className="container-fluid bg-secondary mb-5">
                    <div className="d-flex flex-column align-items-center justify-content-center" style={{ minHeight: '300px' }}>
                        <h1 className="font-weight-semi-bold text-uppercase mb-3">Shopping Cart</h1>
                        <div className="d-inline-flex">
                            <p className="m-0"><a href="">Home</a></p>
                            <p className="m-0 px-2">-</p>
                            <p className="m-0">Shopping Cart</p>
                        </div>
                    </div>
                </div>
                {/* Page Header End */}

                {/* Cart Start */}


                {
                    !cardItem?.length && (
                        <div className='container'>
                            <p>No Product in the cart.</p>
                            <button className='btn btn-primary'>Return to Shop</button>
                        </div>

                    )
                }

                {
                    !!cardItem?.length && (
                        <div className="container-fluid pt-5">
                            <div className="row px-xl-5">


                                <div className="col-lg-8 table-responsive mb-5">
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

                                                (

                                                    <tr key={index}>
                                                        <td className="align-middle">
                                                            <img src="" alt="" style={{ width: '50px' }} />
                                                        </td>
                                                        <td className="align-middle">${product.mrp}</td>
                                                        <td className="align-middle">
                                                            <div className="input-group quantity mx-auto" style={{ width: '100px' }}>
                                                                {/* You can add quantity input and logic here */}

                                                                <button className="btn btn-primary btn-minus" onClick={() => handleQuantity("dec", product)}>
                                                                    <i className="fa fa-minus"></i>
                                                                </button>

                                                                <span className='' style={{ width: "15px", }}>  {product.quantity}</span>
                                                                <button className="btn btn-primary btn-plus" onClick={() => handleQuantity("inc", product)}>
                                                                    <i className="fa fa-plus"></i>
                                                                </button>
                                                            </div>
                                                        </td>
                                                        <td className="align-middle">{(product.mrp) * (product.quantity)}</td>
                                                        <td className="align-middle">
                                                            <button className="btn btn-sm btn-primary" onClick={() => removeFromCard(product.id)}><i className="fa fa-times"></i></button>
                                                        </td>
                                                    </tr>
                                                ))
                                            }

                                        </tbody>
                                    </table>
                                </div>


                                <div className="col-lg-4">
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
                                            <button className="btn btn-block btn-primary my-3 py-3">Proceed To Checkout</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                }

                {/* Cart End */}
            </div>
            <Footer />
        </>
    );
};

export default ShoppingCart;
