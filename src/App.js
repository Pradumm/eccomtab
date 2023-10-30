
import React, { useState, useContext, useEffect } from 'react';
import {  Route, Routes, useNavigate } from 'react-router-dom';
import './App.css';
// import Navbar from './components/Navbar';
import Shop from './components/Shop';
import SingleProduct from './components/SingleProduct';
import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';
import ShoppingCart from './components/ShoppingCart';
import Contact from './components/Contact';
import Checkout from './components/Checkout';
import Register from './components/register/Register';
import LoginPage from './components/login/Login';


import ProtectedRoute from './components/Api/context/ProtectedRoute';

import YourComponent from './components/Org/Orgdetails';
import Shopproduct from './components/product/Shopproduct';

import AppContext from './components/Api/context/AppContext';
import OrderContainer from './components/orders/OrderContainer';

// import OrderSingledata from './components/orders/OrderSingledata';


function App() {
  const navigate = useNavigate();

  // useEffect(() => {
  //   // Check if the user has visited before
  //   const hasVisitedBefore = !!localStorage.getItem('token');

  //   if (!hasVisitedBefore) {
  //     // Redirect the user to the registration page
  //     navigate('/register');
  //   }
  // }, [navigate]);


  return (
    <>

        <AppContext>
          <Header />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/categories/:id' element={<Shop />} />
            <Route path='/singleproduct/:id' element={<SingleProduct />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/checkout' element={<Checkout />} />

            <Route path='/product' element={<Shopproduct />} />

            <Route path='/org-address' element={<YourComponent />} />


            {/* <Route path="/cart" element={<ShoppingCart />} /> */}

            {/* <ProtectedRoute path="/cart" element={<ShoppingCart />} /> */}
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/user" element={<ProtectedRoute />}>
              <Route path="cart" element={<ShoppingCart />} />
              {/* Add more routes for user-related pages like "profile" here */}
            </Route>
            <Route path='/order' element={<OrderContainer />} />
          </Routes>
          {/* <Footer /> */}
        </AppContext>
      

    </>
  );

}



export default App;
