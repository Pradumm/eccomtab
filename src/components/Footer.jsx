import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import logodeafault from "../components/assets/logo-removebg-preview.png";

const Footer = () => {
  const [logo, setLogo] = useState("img/logo-removebg-preview.png");
  useEffect(() => {
    const logoUrl = sessionStorage.getItem("logo");
    setLogo(logoUrl || logodeafault);
  }, []);
  return (
    <>
      <div class="container-fluid bg-secondary text-dark mt-5 pt-5">
        <div class="row px-xl-5 pt-5">
          <div class="col-lg-4 col-md-12 mb-5 pr-3 pr-xl-5">
            <Link to="/home" class="text-decoration-none">
              <img className="logo_head" src={logo} alt="" />
            </Link>
            <p className="pt-2">
              Dolore erat dolor sit lorem vero amet. Sed sit lorem magna, ipsum
              no sit erat lorem et magna ipsum dolore amet erat.
            </p>
          </div>
          <div class="col-lg-8 col-md-12">
            <div class="row">
              <div class="col-md-4 mb-5">
                <h5 class="font-weight-bold text-dark mb-4">Quick Links</h5>
                <div class="d-flex flex-column justify-content-start">
                  <Link class="text-dark mb-2" to="/home">
                    <i class="fa fa-angle-right mr-2"></i>Home
                  </Link>
                  <Link class="text-dark mb-2" to="/home/contact">
                    <i class="fa fa-angle-right mr-2"></i>Contact Us
                  </Link>
                  <Link class="text-dark mb-2" to="/home">
                    <i class="fa fa-angle-right mr-2"></i>Product
                  </Link>
                </div>
              </div>
              <div class="col-md-4 mb-5">
                <h5 class="font-weight-bold text-dark mb-4">Quick Links</h5>
                <div class="d-flex flex-column justify-content-start">
                  <Link class="text-dark mb-2" to="/home">
                    <i class="fa fa-angle-right mr-2"></i>Home
                  </Link>
                  <Link class="text-dark mb-2" to="/home/contact">
                    <i class="fa fa-angle-right mr-2"></i>Contact Us
                  </Link>
                  <Link class="text-dark mb-2" to="/home">
                    <i class="fa fa-angle-right mr-2"></i>Product
                  </Link>
                </div>
              </div>
              <div class="col-md-4 mb-5">
                <h5 class="font-weight-bold text-dark mb-4">Contact</h5>
                <div>
                  <p class="mb-2">
                    <i class="fa fa-map-marker-alt text-primary mr-3"></i>123
                    Street, New York, USA
                  </p>
                  <p class="mb-2">
                    <i class="fa fa-envelope text-primary mr-3"></i>
                    info@example.com
                  </p>
                  <p class="mb-0">
                    <i class="fa fa-phone-alt text-primary mr-3"></i>+012 345
                    67890
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row border-top border-light mx-xl-5 py-4">
          <div class="col-md-6 px-xl-0">
            <p class="mb-md-0 text-center text-md-left text-dark">
              &copy;{" "}
              <a class="text-dark font-weight-semi-bold" href="#">
                Inventab MarketPlace
              </a>
              . All Rights Reserved <br />
              Distributed By{" "}
              <a href="https://themewagon.com" target="_blank">
                Inventab MarketPlace
              </a>
            </p>
          </div>
          <div class="col-md-6 px-xl-0 text-center text-md-right">
            <img class="img-fluid" src="img/payments.png" alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
