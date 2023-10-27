import React from 'react'
import cat from "../../components/assets/cat-1.jpg"
import { Link } from 'react-router-dom';


const CartItem = ({ product }) => {
    console.log(product, "__________")

    const { mrp, short_description, prices } = product;

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
            <div className="col-lg-4 col-md-6 col-sm-12 pb-1">
                <div className="card product-item border-0 mb-4">
                    <div className="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
                        <img className="img-fluid w-100" src={cat} alt="" />
                    </div>
                    <div className="card-body border-left border-right text-center p-0 pt-4 pb-3">
                        <h6 className="text-truncate mb-3">{short_description}</h6>
                        <div className="d-flex justify-content-center">
                            <h6> $  {extractedPrice}</h6><h6 className="text-muted ml-2"><del>${mrp}</del></h6>
                            <h6>{discount}</h6>
                        </div>
                    </div>
                    <div className="card-footer d-flex justify-content-between bg-light border">
                        <Link to={`/singleproduct/${product.part_number}`} className="btn btn-sm text-dark p-0"><i className="fas fa-eye text-primary mr-1"></i>View Detail</Link>
                        <Link to="" className="btn btn-sm text-dark p-0"><i className="fas fa-shopping-cart text-primary mr-1"></i>Add To Cart</Link>
                    </div>
                </div>
            </div>

        </>
    )
}

export default CartItem