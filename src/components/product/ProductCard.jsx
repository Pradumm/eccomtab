import React from 'react'
<<<<<<< HEAD
import { useContext, useState } from 'react'
=======
import { useContext , useState } from 'react'
>>>>>>> 1fe8341fa44ded06e4e9fd326c581ebdce9bf057
import { Link } from 'react-router-dom'
import { UserContext } from '../Api/context/AppContext'

const ProductCard = ({ item }) => {

    const [quantity, setQuantity] = useState(1);
<<<<<<< HEAD
   

    const incQty = () => {
        setQuantity((prevQty) => prevQty + 1);
      };
    
      const decQty = () => {
        setQuantity((prevQty) => {
          if (prevQty > 1) {
            return prevQty - 1;
          }
          return prevQty; 
        });
      }
=======


    //    const itemImage = item.documents.map((itemurl)=>{
    //         console.log(itemurl,"_____image")
    //    }) 


    // const attachment = itemImage && itemImage.length > 0 ? itemImage[0].attachment : null;

    // const itemPrice = item.part_no;
>>>>>>> 1fe8341fa44ded06e4e9fd326c581ebdce9bf057


    const itemImage = item.part_no.default;
    const attachment = itemImage && itemImage.attachment ? itemImage.attachment : null;

    const itemImage1 = item.part_no.documents;
    const attachment1 = itemImage1 && itemImage1.length > 0 ? itemImage1[0].attachment.attachment : null;

<<<<<<< HEAD

=======
    // console.log(attachment1, "_______--attachment1");

    // ...
>>>>>>> 1fe8341fa44ded06e4e9fd326c581ebdce9bf057

    const finalImage = attachment1 || attachment;

    // console.log(finalImage, "_______--finalImage");

<<<<<<< HEAD
    const { addToCard, checkId } = useContext(UserContext)


=======
    const { addToCard } = useContext(UserContext)
>>>>>>> 1fe8341fa44ded06e4e9fd326c581ebdce9bf057
    return (
        <div

            className="col-lg-3 col-md-6 col-sm-12 pb-1"
        >
            <div className="card product-item border-0 mb-4">
                <div className="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
                    <img
                        className="img-fluid w-100 img-wrap"
                        src={finalImage}
                        alt=""
                    />
                </div>
<<<<<<< HEAD
                <Link to={`/home/singleproduct/${item.part_no.part_number}`} className="card-body border-left border-right text-center p-0 pt-4 pb-3">
=======
                <Link to={`/singleproduct/${item.part_no.part_number}`} className="card-body border-left border-right text-center p-0 pt-4 pb-3">
>>>>>>> 1fe8341fa44ded06e4e9fd326c581ebdce9bf057
                    <h6 className="text-truncate mb-3">
                        {item.part_no.short_description}
                    </h6>
                    <div className="d-flex justify-content-center">
                        <h6>{new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' }).format(item.part_no.mrp)}</h6>
                        <h6 className="text-muted ml-2">
                            {/* <del>${discountPrice.toFixed(2)}</del> */}
                        </h6>
                    </div>
                </Link>
                <div className="card-footer d-flex justify-content-between bg-light border">
                    <Link
<<<<<<< HEAD
                        to={`/home/singleproduct/${item.part_no.part_number}`} className="btn btn-sm text-dark p-0">
                        <i className="fas fa-eye text-primary mr-1"></i>View
                        Detail
                    </Link>


                    {!checkId.includes(item.part_no.id) ? (
                        <a
                            onClick={() => addToCard(item.part_no, quantity)}
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

                    {/* <a onClick={() => addToCard(item.part_no, quantity)}
=======
                        to={`/singleproduct/${item.part_no.part_number}`} className="btn btn-sm text-dark p-0">
                        <i className="fas fa-eye text-primary mr-1"></i>View
                        Detail
                    </Link>
                    <a onClick={() => addToCard(item.part_no, quantity)}
>>>>>>> 1fe8341fa44ded06e4e9fd326c581ebdce9bf057
                        className="btn btn-sm text-dark p-0">
                        <i className="fas fa-shopping-cart text-primary mr-1"></i>
                        Add To Cart
                    </a>

                    <a onClick={() => addToCard(item.part_no, quantity)}
                        className="btn btn-sm text-dark p-0">
                        <i className="fas fa-shopping-cart text-primary mr-1"></i>
                        Go To Cart
                    </a> */}

                </div>
            </div>
        </div>
    )
}

export default ProductCard