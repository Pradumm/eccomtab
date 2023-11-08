

import React, { useContext, useEffect, useState } from 'react'
import ReletedProduct from './ReletedProduct'
import Footer from './Footer'
import { Link, useParams } from 'react-router-dom'
// import Carousel from 'react-grid-carousel'
import carousel from "../components/carousel-1.jpg"
import { UserContext } from './Api/context/AppContext'
import { useFetchApi } from './Api/uesFatchapi'
import axios from 'axios'
import "../components/Singleproduct.css"
import { Item } from 'react-grid-carousel'
const SingleProduct = () => {

    const { id } = useParams()
    const [describe, setdescribe] = useState({
        longDescri: "",
        short: ""
    })

    const { data, loading } = useFetchApi(`http://143.244.142.0/api/v1/parts/fetch/parts/?part_number=${id}`);

    console.log(data, "___________data ")
    // const { data, loading } = useFetchApi(`http://143.244.142.0/api/v1/parts/fetch/parts/?short_description=${id}`);

    const descri = data && data.length > 0 ? data[0].short_description : null;

    const getDescribe = async () => {
        try {
            if (data && data[0] && data[0].short_description) {
                const response = await axios.get(`http://143.244.142.0/api/v1/parts/fetch/parts/?short_description=${descri}`);
                // Handle the successful response here
                // console.log(response.data.results[0].short_description, "________--descril");
                // console.log(response.data.results[0].long_description, "________--long_description");

                setdescribe({
                    longDescri: response.data.results[0].long_description,
                    short: response.data.results[0].short_description
                })
            }
        } catch (error) {
            // Handle any errors here
            console.error("Error fetching data:", error);
        }
    }


    useEffect(() => {
        getDescribe()
    }, [descri])


    const imagesimgl = !loading && data && data.length > 0 && data[0].default && data[0].default.attachment
        ? data[0].default.attachment
        : null;

    const attachment1 = !loading && data && data.length > 0 && data[0].documents[0] && data[0].documents[0].attachment
        ? data[0].documents[0].attachment.attachment
        : null;

    const finalImage = attachment1 || imagesimgl;



    // console.log(finalImage, "_____-fiattachment1")


    const { addToCard } = useContext(UserContext)

    const [quantity, setQuantity] = useState(1);

    const incQty = () => {
        setQuantity((prevQty) => prevQty + 1);
    }

    const decQty = () => {
        setQuantity((prevQty) => {
            if (prevQty > 1) {
                return prevQty - 1;
            }
            return prevQty; // Quantity shouldn't go below 1
        });
    }



    if (loading) {
        // Display a loading message
        return (
            <div className="container">
                <div>Loading...</div>
            </div>
        );
    }

    if (!data || data.length === 0) {
        // Data not found message
        return (
            <div className="container">
                <div>Data not found</div>
            </div>
        );
    }















    return (
        <>
            <div className="container-fluid bg-secondary mb-2">
                <div className="d-flex flex-column align-items-center justify-content-center" style={{ "min-height": "255px" }}>
                    <h1 className="font-weight-semi-bold text-uppercase mb-3">Product Catalog</h1>
                    <div className="d-inline-flex">
                        <p className="m-0"><Link to="/home">Home</Link></p>
                        <p className="m-0 px-2">-</p>
                        <p className="m-0">Product Catalog</p>
                    </div>
                </div>
            </div>
            {/* <!-- Page Header End --> */}


            {/* <!-- Shop Detail Start --> */}
            <div className="container-fluid py-5">
                <div className="row px-xl-5">
                    <div className="col-lg-5 pb-5">
                        <div id="product-carousel" className="carousel slide" >
                            <div className="border">

                                <img className="w-100 h-100" src={finalImage} alt="Image" />
                            </div>

                        </div>
                    </div>

                    <div className="col-lg-7 pb-5">
                        <h3 className="font-weight-semi-bold">{data[0].short_description}</h3>
                        {/* <div className="d-flex mb-3">
                            <div className="text-primary mr-2">
                                <small className="fas fa-star"></small>
                                <small className="fas fa-star"></small>
                                <small className="fas fa-star"></small>
                                <small className="fas fa-star-half-alt"></small>
                                <small className="far fa-star"></small>
                            </div>
                            <small className="pt-1">(50 Reviews)</small>
                        </div> */}
                        <h3 className="font-weight-semi-bold mb-4">{new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' }).format(data[0].mrp)}</h3>
                        <p className="mb-4"> {data[0].short_description}</p>
                        <p className="pb-4">{data[0]?.sub_category?.name}</p>

                        <div className="d-flex align-items-center mb-4 pt-2">
                            <div className="input-group  quantity mr-3" style={{ "width": "130px;" }}>
                                <div className="input-group-btn">
                                    <button className="btn btn-primary btn-minus" onClick={decQty}>
                                        <i className="fa fa-minus"></i>
                                    </button>
                                </div>
                                <input type="text" className=" bg-secondary text-center add_bor"  value={quantity} />
                                <div className="input-group-btn">
                                    <button className="btn btn-primary btn-plus" onClick={incQty}>
                                        <i className="fa fa-plus"></i>
                                    </button>
                                </div>

                                <button className="btn btn-primary px-3 ml-2 " onClick={() => addToCard(data[0], quantity)}>
                                    <i className="fa fa-shopping-cart mr-1"></i > Add To Cart</button>

                            </div>

                        </div>
                       
                        {/* <div className="d-flex pt-2">
                            <p className="text-dark font-weight-medium mb-0 mr-2">Share on:</p>
                            <div className="d-inline-flex">
                                <a className="text-dark px-2" href="">
                                    <i className="fab fa-facebook-f"></i>
                                </a>
                                <a className="text-dark px-2" href="">
                                    <i className="fab fa-twitter"></i>
                                </a>
                                <a className="text-dark px-2" href="">
                                    <i className="fab fa-linkedin-in"></i>
                                </a>
                                <a className="text-dark px-2" href="">
                                    <i className="fab fa-pinterest"></i>
                                </a>
                            </div>
                        </div> */}
                    </div>
                </div>
                <div className="row px-xl-5">
                    <div className="col">
                        <div className="nav nav-tabs justify-content-center border-secondary mb-4">
                            <a className="nav-item nav-link active" data-toggle="tab" href="#tab-pane-1">Description</a>
                            <a className="nav-item nav-link" data-toggle="tab" href="#tab-pane-2">Information</a>

                        </div>
                        <div className="tab-content">
                            <div className="tab-pane fade show active" id="tab-pane-1">
                                <h4 className="mb-3">Product Description</h4>
                                <p>{describe.short}</p>
                                <p>{describe.longDescri}</p>


                            </div>

                           

                            <div className="tab-pane fade" id="tab-pane-2">
                                <h4 className="mb-3">Additional Information</h4>

                            <div className='info'>
                                <div className="row">
                                <div className="col-6">
                                 
                                            <ul>
                                            <li>Part-Number</li>
                                            <li>{data[0].part_number}</li>
                                            </ul>
                                            <ul>
                                            <li>height</li>
                                            <li>{data[0].height}</li>
                                            </ul>
                                            <ul>
                                            <li>length</li>
                                            <li>{data[0].length}</li>
                                            </ul>
                                            <ul>
                                            <li>weight</li>
                                            <li>{data[0].weight}</li>
                                            </ul>
                                            <ul>
                                            <li>warranty-period</li>
                                            <li>{data[0].warranty_period}</li>
                                            </ul>
                                            <ul>
                                            <li>warranty-terms</li>
                                            <li>{data[0].warranty_terms}</li>
                                            </ul>
                                        
                                  
                                    
                                </div>
                            </div>
                            </div>
                                
                                
                                
                                
                               



                               
                               
                            </div>

                           
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Shop Detail End --> */}

            {/* <ReletedProduct carousel={carousel} /> */}

            <Footer />
        </>
    )
}

export default SingleProduct