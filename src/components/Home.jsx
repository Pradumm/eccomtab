import React, { useEffect, useState } from "react";

import Slider from "./Slider";
import "../components/Home.css";
import axios from "axios";

import Footer from "./Footer";


import Categorieslist from "./Categorieslist";

import ProductContainer from "./product/ProductContainer";

const Home = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [features, setFeatures] = useState([]); // State for features
  const [marketBanner, setMarketBanner] = useState([]); // State for marketBanner

  useEffect(() => {
    // Get the user's name from local storage
    const storedUserName = localStorage.getItem("make");
    const apiUrl = `http://143.244.142.0/api/v1/pipo/get/marketplace/list/?marketplace_name=${storedUserName}`;
    // Make a GET request using Axios
    axios
      .get(apiUrl)
      .then((response) => {
        let result = response.data.results;
        setData(response.data.results);
        const foundFeatures = result[0].marketplace_hotproducts || [];
        setFeatures(foundFeatures);
        const foundMarketBanner = result[0].marketplace_banner || [];
        setMarketBanner(foundMarketBanner);

        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []);

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <Categorieslist />

          <div className="col-lg-9 ">
            <Slider marketbenner={marketBanner} />
          </div>
        </div>
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

        <div className="container-fluid pad">
          {/* <ProductContainer product={features} /> */}
          <h1 className="head_prod">Featured Product</h1>
          <ProductContainer product={features} />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Home;
