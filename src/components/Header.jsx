import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "./Api/context/AppContext";

import logodeafault from "../components/assets/logo-removebg-preview.png";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";

function Header() {
  const { user, handleLogout, cartlen } = useContext(UserContext);
  const [logo, setLogo] = useState(null);

  useEffect(() => {
    const logoUrl = sessionStorage.getItem("logo");
    setLogo(logoUrl || logodeafault);
  }, []);

  return (
    <>
      <div className="container-fluid">
        <div className="row bg-secondary py-2 px-xl-5">
          <div className="col-lg-6 d-none d-lg-block">
            <div className="d-inline-flex align-items-center">
              <Link className="text-dark" to="">
                FAQs
              </Link>
              <span className="text-muted px-2">|</span>
              <Link className="text-dark" to="">
                Help
              </Link>
              <span className="text-muted px-2">|</span>
              <Link className="text-dark" to="">
                Support
              </Link>
            </div>
          </div>
          <div className="col-lg-6 text-center text-lg-right">
            <div className="d-inline-flex align-items-center">
              <Link className="text-dark px-2" to="">
                <i className="fab fa-facebook-f"></i>
              </Link>
              <Link className="text-dark px-2" to="">
                <i className="fab fa-linkedin-in"></i>
              </Link>
              <Link className="text-dark px-2" to="">
                <i className="fab fa-instagram"></i>
              </Link>
            </div>
          </div>
        </div>
        <div className="row align-items-center py-3 px-xl-5 justify-content-between">
          <div className="col-lg-3 d-none d-lg-block">
            <Link to="/home" className="text-decoration-none">
              <h1 className="m-0 display-5 font-weight-semi-bold">
                <img className="logo_head" src={logo} alt="" />
              </h1>
            </Link>
          </div>
          <div className="col-lg-3 col-12 text-right">
            <div className="d-flex icon_logout">
              <Link to="/home/orderhistory" className="btn border">
                <span className="badge">Account</span>
              </Link>
              <Link to="/home" className="btn border">
                <i className="fas fa-heart text-primary"></i>
                <span className="badge">0</span>
              </Link>
              <Link to="/home/cart" className="btn border">
                <i className="fas fa-shopping-cart text-primary"></i>
                {!!cartlen && <span className="badge">{cartlen}</span>}
              </Link>

              {user ? (
                <span
                  onClick={handleLogout}
                  className="nav-item nav-link user_icon border"
                >
                  {/* <FontAwesomeIcon
                    icon={faRightFromBracket}
                    style={{ color: "#D19C97 " }}
                  /> */}
                </span>
              ) : (
                <Link to="/" className="nav-item nav-link">
                  Login
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid dev_head">
        <div className="row border-top px-xl-5">
          <div className="col-lg-9">
            <nav className="navbar navbar-expand-lg bg-light navbar-light py-3 py-lg-0 px-0 logo_css_mob">
              <Link
                to="/home"
                className="text-decoration-none d-block d-lg-none"
              >
                <h1 className="m-0 display-5 font-weight-semi-bold">
                  <img className="logo_head" src={logo} alt="" />
                </h1>
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
