import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { UserContext } from "./Api/context/AppContext";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import logodeafault from "../components/assets/logo-removebg-preview.png"

function Header() {
  const { user, cardCount, handleLogout } = useContext(UserContext);
  const [logo, setLogo] = useState(logodeafault); 

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const userNameAmit = localStorage.getItem("emailData");
    const UserPassword = localStorage.getItem("PasswordAmit");

    console.log("user", userNameAmit);
    console.log("password", UserPassword);

    if (user) {
      axios
        .post("http://143.244.142.0/api/v1/accounts/login", {
          username: userNameAmit,
          password: UserPassword,
        })
        .then((response) => {
          const { data } = response;
          if (data && data.success) {
            const organization = data.data.org;
            if (organization && organization.logo) {
              setLogo(`http://143.244.142.0${organization.logo}`); // Set the logo URL dynamically after successful login
            }
          }
        })
        .catch((error) => {
          console.error("Error fetching login data:", error);
        });
    }

   
  }, [user]);

  
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
              {/* <Link className="text-dark px-2" to="">
                <i className="fab fa-twitter"></i>
              </Link> */}
              <Link className="text-dark px-2" to="">
                <i className="fab fa-linkedin-in"></i>
              </Link>
              <Link className="text-dark px-2" to="">
                <i className="fab fa-instagram"></i>
              </Link>
              {/* <Link className="text-dark pl-2" to="">
                <i className="fab fa-youtube"></i>
              </Link> */}
            </div>
          </div>
        </div>
        <div className="row align-items-center py-3 px-xl-5 justify-content-between">
          <div className="col-lg-3 d-none d-lg-block">
            <Link to="/home/main" className="text-decoration-none">
              <h1 className="m-0 display-5 font-weight-semi-bold">
                {/* {/ <img className="logo_head" src={logo} alt="dasdghmj" /> /} */}

                <img className="logo_head" src={logo} alt="No Img" />
              </h1>
            </Link>
          </div>
          {/* <div className="col-lg-6 col-6 text-left">
            <form action="">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search for products"
                />
                <div className="input-group-append">
                  <span className="input-group-text bg-transparent text-primary">
                    <i className="fa fa-search"></i>
                  </span>
                </div>
              </div>
            </form>
          </div> */}
          <div className="col-lg-3 col-12 text-right">
          <div className="d-flex icon_logout">
            <Link to="/home" className="btn border">
              <i className="fas fa-heart text-primary"></i>
              <span className="badge">0</span>
            </Link>
            <Link to="/cart" className="btn border">
              <i className="fas fa-shopping-cart text-primary"></i>
              {!!cardCount && <span className="badge">{cardCount}</span>}
            </Link>
        

          
          {user ? (
                    <span onClick={handleLogout} className="nav-item nav-link user_icon border">
                      {/* <img className="user_icon" src="img/user.png" alt="" /> */}
                      <FontAwesomeIcon icon={faRightFromBracket} style={{ color: '#D19C97 ' }} />
                    </span>
                  ) : (
                    <Link to="/login" className="nav-item nav-link">
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
              <Link to="/home/main" className="text-decoration-none d-block d-lg-none" >
                <h1 className="m-0 display-5 font-weight-semi-bold">
                  <img className="logo_head" src={logo} alt="" />
                </h1>
              </Link>

              {/* <button
                type="button"
                className="navbar-toggler"
                data-toggle="collapse"
                data-target="#navbarCollapse"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div
                className="collapse navbar-collapse justify-content-between"
                id="navbarCollapse"
              >
                <div className="navbar-nav mr-auto py-0">
                  <Link to="/home" className="nav-item nav-link active">
                    Home
                  </Link>
                  <Link to="/product" className="nav-item nav-link">
                    Product
                  </Link>
                  

                  <Link to="/contact" className="nav-item nav-link">
                    Contact
                  </Link>
                  <Link to="/" className="nav-item nav-link">
                    Register
                  </Link>
                  {user ? (
                    <span onClick={handleLogout} className="nav-item nav-link">
                      Logout
                    </span>
                  ) : (
                    <Link to="/login" className="nav-item nav-link">
                      Login
                    </Link>
                  )}
                </div>
              </div> */}
            </nav>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
