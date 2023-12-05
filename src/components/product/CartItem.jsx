import React from 'react'
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from '../Api/context/AppContext';
import user from "../../components/assets/user.png"
import "../product/productdata/proctuct.css"
<<<<<<< HEAD

const CartItem = ({ product, isGridView }) => {
    const { addToCard, checkId } = useContext(UserContext)

    const { mrp, short_description, prices, } = product;






=======

const CartItem = ({ product, isGridView }) => {
    // console.log(product, "__________ caearty prodct ")
    const { addToCard } = useContext(UserContext)

    const { mrp, short_description, prices, } = product;

    const imagefilter = product.documents



    //     const imagesimgl = !loading && data && data.length > 0 && data[0].default && data[0].default.attachment
    //     ? data[0].default.attachment
    //     : null;

    // const attachment1 = !loading && data && data.length > 0 && data[0].documents[0] && data[0].documents[0].attachment
    //     ? data[0].documents[0].attachment
    //     : null;

    // const finalImage = attachment1 || imagesimgl;

>>>>>>> 1fe8341fa44ded06e4e9fd326c581ebdce9bf057


    let currentprice = prices; // Assuming you already have prices as an array
    let extractedPrice;
    let discount;

    if (currentprice.length === 1) {
        extractedPrice = currentprice[0].price;
        discount = currentprice[0].discount;
    } else {
        // Handle the case where prices array has more or fewer elements
        extractedPrice = null;
        discount = null; // or provide a default value or an error message
    }

    return (
        <>
<<<<<<< HEAD

            <div className={`${isGridView === false ? "col-lg-12 dev_list" : "col-lg-4 col-md-6 col-sm-12  cart_contain pb-1"}`}>
                <div className="card product-item border-0 mb-4">
                    <div className={`${isGridView === false ? "d-flex justify-content-around dev_list_alig" : ""}`}>
                        <div className="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
                            <img className=" img-contain"
                                src={user} alt="" />
=======
        
            <div className={`${isGridView === false ? "col-lg-12 dev_list" : "col-lg-4 col-md-6 col-sm-12  cart_contain pb-1"}`}> 
                <div className="card product-item border-0 mb-4">
                    <div className={`${isGridView === false ? "d-flex justify-content-around dev_list_alig" : ""}`}>
                        <div className="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
                            <img className=" img-contain" 
                             src={user} alt="" />
>>>>>>> 1fe8341fa44ded06e4e9fd326c581ebdce9bf057
                        </div>

                        <div>
                            <div className="card-body border-left border-right text-center p-0 pt-4 pb-3">
                                <h6 className=" mb-3 text-wrap-break-word">{short_description}</h6>
                                <div className="d-flex justify-content-center">
                                    {/* <h6> {extractedPrice} </h6>  */}
                                    <h6>{new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' }).format(mrp)}</h6>
                                    {/* <h6 className="text-muted ml-2"><del>{new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' }).format(mrp)}</del></h6> */}
                                    <h6>{discount}</h6>
                                </div>
                            </div>
                            <div className="card-footer d-flex justify-content-between bg-light border">
<<<<<<< HEAD
                                <Link to={`/home/singleproduct/${product.part_number}`} className="btn btn-sm text-dark p-0"><i className="fas fa-eye text-primary mr-1"></i>View Detail</Link>




                                {!checkId.includes(product.id) ? (
                                    <a
                                        onClick={() => addToCard(product, 1)}
                                        className="btn btn-sm text-dark p-0"
                                    >
                                        <i className="fas fa-shopping-cart text-primary mr-1"></i>
                                        Add To Cart
                                    </a>
                                ) : (
                                    <Link to="/home/cart"

                                        className="btn btn-sm text-dark p-0"
                                    >
                                        <i className="fas fa-shopping-cart text-primary mr-1"></i>
                                        Go To Cart
                                    </Link>
                                )}


=======
                                <Link to={`/singleproduct/${product.part_number}`} className="btn btn-sm text-dark p-0"><i className="fas fa-eye text-primary mr-1"></i>View Detail</Link>
                                <a onClick={() => addToCard(product, 1)} className="btn btn-sm text-dark p-0"><i className="fas fa-shopping-cart text-primary mr-1"></i>Add To Cart</a>
>>>>>>> 1fe8341fa44ded06e4e9fd326c581ebdce9bf057
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            


        </>
    )
}

export default CartItem