

import React from 'react';
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
// import { Home } from './components/pages/Home';
// import { About } from './components/pages/About';
// import { Services } from './components/pages/Services';
// import { Blog } from './components/pages/Blog';
// import { Contact } from './components/pages/Contact';


import AppContext from './components/Api/context/AppContext';
import YourComponent from './components/Org/Orgdetails';


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
            <Route path='/shoppingCart' element={<ShoppingCart />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/checkout' element={<Checkout />} />
            <Route path='/Register' element={<Register />} />
            <Route path='/login' element={<LoginPage />} />
            <Route path='/org-address' element= {<YourComponent/>}/>
          </Routes>
          {/* <Footer /> */}

          </AppContext>
      </BrowserRouter>

     


    </>
  );

}



export default App;
