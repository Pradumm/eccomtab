

import React, { useContext } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
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

import { UserContext } from './components/Api/context/AppContext';


import YourComponent from './components/Org/Orgdetails';
import Shopproduct from './components/product/Shopproduct';


function App() {



  return (
    <>


      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/categories/:id' element={<Shop />} />
        <Route path='/singleproduct/:id' element={<SingleProduct />} />

        <Route path='/shoppingCart' element={<ShoppingCart />} />
        <Route path='/login' element={<LoginPage />} />

        <Route path='/contact' element={<Contact />} />
        <Route path='/checkout' element={<Checkout />} />
        <Route path='/Register' element={<Register />} />
        <Route path='/product' element={<Shopproduct />} />

        <Route path='/org-address' element={<YourComponent />} />
      </Routes>
      {/* <Footer /> */}



    </>
  );

}



export default App;
