import React, { useContext } from 'react';
import Footer from './Footer'
import { UserContext } from './Api/context/AppContext';
import CardSummery from './CardSummery';





const ShoppingCart = () => {
    // Define your product data and cart summary here

    const { cardItem, removeFromCard, handleQuantity, cardsubtotal } = useContext(UserContext)



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

                                                (

                                                    <tr key={index}>
                                                        <td className="align-middle">
                                                            <img src="" alt="" style={{ width: '50px' }} />
                                                        </td>
                                                        <td className="align-middle"> {new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' }).format(product.mrp)}</td>
                                                        <td className="align-middle">
                                                            <div className="input-group quantity mx-auto" style={{ width: '150px' }}>
                                                                {/* You can add quantity input and logic here */}

                                                                <button className="btn btn-primary btn-minus" onClick={() => handleQuantity("dec", product)}>
                                                                    <i className="fa fa-minus"></i>
                                                                </button>

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

                                        </tbody>
                                    </table>
                                </div>


                                <div className="col-lg-4">
                                    <CardSummery />
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
