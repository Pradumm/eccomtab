import React, { useEffect, useState, useContext } from "react";

import Owlslider from "./Owlslider";
import Slider from "./Slider";
import "../components/Home.css";
import axios from "axios";
import { Link } from "react-router-dom";
import Footer from "./Footer";
// import ProductCard from "../components/product/ProductCard";
import { UserContext } from "./Api/context/AppContext";

import ProductContainer from "./product/ProductContainer";
const Home = () => {

  const { cardItem, setCardItem, product, setProduct } = useContext(UserContext)

  
  return (
    <>
      <div className="col-lg-9 dev_slider">
        <Slider />
      </div>

      <div className="home_content">
        <section className="first_sec">
          <div className="container-fluid pt-5 ">
            <div className="row px-xl-5 pb-3">
              <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
                <div
                  className="d-flex align-items-center border mb-4"
                  style={{ padding: "30px" }}
                >
                  <h1 className="fa fa-check text-primary m-0 mr-3"></h1>
                  <h5 className="font-weight-semi-bold m-0">Quality Product</h5>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
                <div
                  className="d-flex align-items-center border mb-4"
                  style={{ padding: "30px" }}
                >
                  <h1 className="fa fa-shipping-fast text-primary m-0 mr-2"></h1>
                  <h5 className="font-weight-semi-bold m-0">Free Shipping</h5>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
                <div
                  className="d-flex align-items-center border mb-4"
                  style={{ padding: "30px" }}
                >
                  <h1 className="fas fa-exchange-alt text-primary m-0 mr-3"></h1>
                  <h5 className="font-weight-semi-bold m-0">14-Day Return</h5>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
                <div
                  className="d-flex align-items-center border mb-4"
                  style={{ padding: "30px" }}
                >
                  <h1 className="fa fa-phone-volume text-primary m-0 mr-3"></h1>
                  <h5 className="font-weight-semi-bold m-0">24/7 Support</h5>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* <section className="second_sec">
          <div className="container-fluid pt-5">
            <div className="row px-xl-5 pb-3">
              <div className="col-lg-4 col-md-6 pb-1">
                <div
                  className="cat-item d-flex flex-column border mb-4"
                  style={{ padding: "30px" }}
                >
                  <p className="text-right">15 Products</p>
                  <a
                    href=""
                    className="cat-img position-relative overflow-hidden mb-3"
                  >
                    <img className="img-fluid" src="img/cat-1.jpg" alt="dev" />
                  </a>
                  <h5 className="font-weight-semi-bold m-0">Men's dresses</h5>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 pb-1">
                <div
                  className="cat-item d-flex flex-column border mb-4"
                  style={{ padding: "30px" }}
                >
                  <p className="text-right">15 Products</p>
                  <a
                    href=""
                    className="cat-img position-relative overflow-hidden mb-3"
                  >
                    <img className="img-fluid" src="img/cat-2.jpg" alt="" />
                  </a>
                  <h5 className="font-weight-semi-bold m-0">Women's dresses</h5>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 pb-1">
                <div
                  className="cat-item d-flex flex-column border mb-4"
                  style={{ padding: "30px" }}
                >
                  <p className="text-right">15 Products</p>
                  <a
                    href=""
                    className="cat-img position-relative overflow-hidden mb-3"
                  >
                    <img className="img-fluid" src="img/cat-3.jpg" alt="" />
                  </a>
                  <h5 className="font-weight-semi-bold m-0">Baby's dresses</h5>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 pb-1">
                <div
                  className="cat-item d-flex flex-column border mb-4"
                  style={{ padding: "30px" }}
                >
                  <p className="text-right">15 Products</p>
                  <a
                    href=""
                    className="cat-img position-relative overflow-hidden mb-3"
                  >
                    <img className="img-fluid" src="img/cat-4.jpg" alt="" />
                  </a>
                  <h5 className="font-weight-semi-bold m-0">Accerssories</h5>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 pb-1">
                <div
                  className="cat-item d-flex flex-column border mb-4"
                  style={{ padding: "30px" }}
                >
                  <p className="text-right">15 Products</p>
                  <a
                    href=""
                    className="cat-img position-relative overflow-hidden mb-3"
                  >
                    <img className="img-fluid" src="img/cat-5.jpg" alt="" />
                  </a>
                  <h5 className="font-weight-semi-bold m-0">Bags</h5>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 pb-1">
                <div
                  className="cat-item d-flex flex-column border mb-4"
                  style={{ padding: "30px" }}
                >
                  <p className="text-right">15 Products</p>
                  <a
                    href=""
                    className="cat-img position-relative overflow-hidden mb-3"
                  >
                    <img className="img-fluid" src="img/cat-6.jpg" alt="" />
                  </a>
                  <h5 className="font-weight-semi-bold m-0">Shoes</h5>
                </div>
              </div>
            </div>
          </div>
        </section> */}


        <ProductContainer heading="Popular Product" product={product} />


        <section className="third_sec">
          <div className="container-fluid offer pt-5">
            <div className="row px-xl-5">
              <div className="col-md-6 pb-4">
                <div className="position-relative  bg-primary text-center text-md-right text-white mb-2 py-5 px-5">
                  <img src="img/offer-1.png" alt="" />
                  <div className="position-relative" style={{ "z-index": 1 }}>
                    <h5 className="text-uppercase text-secondary mb-3">
                      20% off the all order
                    </h5>
                    <h1 className="mb-4 font-weight-semi-bold">
                      Spring Collection
                    </h1>
                    <a
                      href=""
                      className="btn btn-outline-secondary py-md-2 px-md-3"
                    >
                      Shop Now
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-6 pb-4">
                <div className="position-relative bg-primary text-center text-md-left text-white mb-2 py-5 px-5">
                  <img src="img/offer-2.png" alt="" />
                  <div className="position-relative" style={{ "z-index": 1 }}>
                    <h5 className="text-uppercase text-secondary mb-3">
                      20% off the all order
                    </h5>
                    <h1 className="mb-4 font-weight-semi-bold">
                      Winter Collection
                    </h1>
                    <a
                      href=""
                      className="btn btn-outline-secondary py-md-2 px-md-3"
                    >
                      Shop Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>





        <section className="fourth_sec">
          <div className="container-fluid bg-secondary my-5">
            <div className="row justify-content-md-center py-5 px-xl-5">
              <div className="col-md-6 col-12 py-5">
                <div className="text-center mb-2 pb-2">
                  <h2 className="section-title px-5 mb-3">
                    <span className="bg-secondary px-2">Stay Updated</span>
                  </h2>
                  <p>
                    Amet lorem at rebum amet dolores. Elitr lorem dolor sed amet
                    diam labore at justo ipsum eirmod duo labore labore.
                  </p>
                </div>
                <form action="">
                  <div className="input-group">
                    <input
                      type="text"
                      className="form-control border-white p-4"
                      placeholder="Email Goes Here"
                    />
                    <div className="input-group-append">
                      <button className=" mybtn px-4">Subscribe</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* <ProductCard  itemProctitem={productlist} /> */}


        <Owlslider />

        <Footer />
      </div>
    </>
  );
};

export default Home;