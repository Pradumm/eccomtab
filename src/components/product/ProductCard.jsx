import React from 'react'
import { useContext , useState } from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from '../Api/context/AppContext'

const ProductCard = ({ item }) => {

    const [quantity, setQuantity] = useState(1);


    //    const itemImage = item.documents.map((itemurl)=>{
    //         console.log(itemurl,"_____image")
    //    }) 


    // const attachment = itemImage && itemImage.length > 0 ? itemImage[0].attachment : null;

    // const itemPrice = item.part_no;


    const itemImage = item.part_no.default;
    const attachment = itemImage && itemImage.attachment ? itemImage.attachment : null;

    const itemImage1 = item.part_no.documents;
    const attachment1 = itemImage1 && itemImage1.length > 0 ? itemImage1[0].attachment.attachment : null;

    // console.log(attachment1, "_______--attachment1");

    // ...

    const finalImage = attachment1 || attachment;

    // console.log(finalImage, "_______--finalImage");

    const { addToCard } = useContext(UserContext)
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
                <Link to={`/singleproduct/${item.part_no.part_number}`} className="card-body border-left border-right text-center p-0 pt-4 pb-3">
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
                        to={`/singleproduct/${item.part_no.part_number}`} className="btn btn-sm text-dark p-0">
                        <i className="fas fa-eye text-primary mr-1"></i>View
                        Detail
                    </Link>
                    <a onClick={() => addToCard(item.part_no, quantity)}
                        className="btn btn-sm text-dark p-0">
                        <i className="fas fa-shopping-cart text-primary mr-1"></i>
                        Add To Cart
                    </a>
                </div>
            </div>
        </div>
    )
}

export default ProductCard