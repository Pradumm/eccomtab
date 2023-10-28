
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


import ProtectedRoute from './components/Api/context/ProtectedRoute';

import YourComponent from './components/Org/Orgdetails';
import Shopproduct from './components/product/Shopproduct';

import AppContext from './components/Api/context/AppContext';
import OrderContainer from './components/orders/OrderContainer';
// import OrderSingledata from './components/orders/OrderSingledata';
function App() {


  return (
    <>
      <BrowserRouter>
        <AppContext>
          <Header />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/categories/:id' element={<Shop />} />
            <Route path='/singleproduct/:id' element={<SingleProduct />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/checkout' element={<Checkout />} />
            <Route path='/Register' element={<Register />} />
            <Route path='/product' element={<Shopproduct />} />

            <Route path='/org-address' element={<YourComponent />} />

            <Route path='/login' element={<LoginPage />} />
            <Route path="/cart" element={<ShoppingCart />} />

            {/* <ProtectedRoute path="/cart" element={<ShoppingCart />} /> */}

            <Route path="/cart" element={<ProtectedRoute />}>
              <Route index element={<ShoppingCart />} />
            </Route>

            <Route path='/order' element ={<OrderContainer/>}/>
          </Routes>
          {/* <Footer /> */}
        </AppContext>
      </BrowserRouter>

    </>
  );

}



export default App;
