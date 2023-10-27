import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';

import axios from 'axios';
import { UserContext } from './Api/context/AppContext';
import { useFetchApi } from './Api/uesFatchapi';
import CategoLink from './categories/CategoLink';

function Header() {
    const { tokenvalue, setTokenvalue, cardCount } = useContext(UserContext);
    const [token, setToken] = useState(null);

    const { data, loading } = useFetchApi("http://143.244.142.0/api/v1/parts/categories/");



    useEffect(() => {
        const storedToken = localStorage.getItem('token');
        setToken(storedToken);
    }, [tokenvalue]);

    const handleLogout = () => {
        axios
            .post('http://143.244.142.0/api/v1/accounts/logout', null, {
                headers: {
                    Authorization: `JWT ${token}`,
                },
            })
            .then((response) => {
                console.log(response.data, "___________response");
                localStorage.removeItem('token');
                setTokenvalue(true);
            })
            .catch((error) => {
                // Handle error, e.g., display an error message
                console.error('Logout failed', error.response.data);
            });
    };

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
                                <i className="fab fa-twitter"></i>
                            </Link>
                            <Link className="text-dark px-2" to="">
                                <i className="fab fa-linkedin-in"></i>
                            </Link>
                            <Link className="text-dark px-2" to="">
                                <i className="fab fa-instagram"></i>
                            </Link>
                            <Link className="text-dark pl-2" to="">
                                <i className="fab fa-youtube"></i>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="row align-items-center py-3 px-xl-5">
                    <div className="col-lg-3 d-none d-lg-block">
                        <Link to="" className="text-decoration-none">
                            <h1 className="m-0 display-5 font-weight-semi-bold">
                                <img className='logo_head' src="img/logo-removebg-preview.png" alt="" />
                            </h1>
                        </Link>
                    </div>
                    <div className="col-lg-6 col-6 text-left">
                        <form action="">
                            <div className="input-group">
                                <input type="text" className="form-control" placeholder="Search for products" />
                                <div className="input-group-append">
                                    <span className="input-group-text bg-transparent text-primary">
                                        <i className="fa fa-search"></i>
                                    </span>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="col-lg-3 col-6 text-right">
                        <Link to="/" className="btn border">
                            <i className="fas fa-heart text-primary"></i>
                            <span className="badge">0</span>
                        </Link>
                        <Link to="/shoppingCart" className="btn border">
                            <i className="fas fa-shopping-cart text-primary"></i>
                            {!!cardCount && (<span className="badge">{cardCount}</span>)}
                        </Link>
                    </div>
                </div>
            </div>
            <div className="container-fluid mb-5">
                <div className="row border-top px-xl-5">
                    <div className="col-lg-3 d-none d-lg-block">
                        <a
                            className="btn shadow-none d-flex align-items-center justify-content-between bg-primary text-white w-100"
                            data-toggle="collapse"
                            href="#navbar-vertical"
                            style={{ height: "65px", marginTop: "-1px", padding: "0 30px" }}
                        >
                            <h6 className="m-0">Categories</h6>
                            <i className="fa fa-angle-down text-dark"></i>
                        </a>
                        {/* <nav
                            className="collapse show navbar navbar-vertical navbar-light align-items-start p-0 border border-top-0 border-bottom-0 fixed-nav-category"
                            id="navbar-vertical"
                        >
                            <div className="navbar-nav w-100 overflow-scroll" style={{ height: "410px" }}>
                                <div className="nav-item dropdown">
                                    {data?.results.map((item, index) => (
                                        <div className="dropdown" key={index}>
                                            <a to className="nav-link" type="button" data-toggle="dropdown" aria-expanded="false">
                                                {item.name} <i className="fa fa-angle-down float-right mt-1"></i>
                                            </a>
                                            <div className="dropdown-menu" style={{ maxHeight: "200px", overflowY: "auto" }}>
                                                {item.subcat.map((subcategory, subIndex) => (
                                                    <Link to="" className="dropdown-item" key={subIndex}>
                                                        {subcategory.name}
                                                    </Link>
                                                ))}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                        </nav> */}


                        <CategoLink data={data} />
                    </div>
                    <div className="col-lg-9">
                        <nav className="navbar navbar-expand-lg bg-light navbar-light py-3 py-lg-0 px-0">
                            <a className="text-decoration-none d-block d-lg-none">
                                <h1 className="m-0 display-5 font-weight-semi-bold">
                                    <img className='logo_head' src="img/logo-removebg-preview.png" alt="" />
                                </h1>
                            </a>
                            <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse justify-content-between" id="navbarCollapse">
                                <div className="navbar-nav mr-auto py-0">
                                    <Link to="/" className="nav-item nav-link active">Home</Link>
                                    <Link to="/product" className="nav-item nav-link">Product</Link>
                                    <Link to="/singleproduct" className="nav-item nav-link">Shop Detail</Link>
                                </div>
                                <div className="navbar-nav ml-auto py-0">
                                    <Link to="/contact" className="nav-item nav-link">Contact</Link>
                                    <Link to="/Register" className="nav-item nav-link">Register</Link>
                                    {tokenvalue ? (
                                        <Link to="/login" className="nav-item nav-link">Login</Link>
                                    ) : (
                                        <span onClick={handleLogout} className="nav-item nav-link">Logout</span>
                                    )}
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Header;
