<<<<<<< HEAD
import React from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import AppContext from "./components/Api/context/AppContext";
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import LayoutRoute from "./components/LayoutRoute";
function App() {
  const queryClient = new QueryClient()
  return (
    <>
      <BrowserRouter>
        <QueryClientProvider client={queryClient}>
          <AppContext>
            <LayoutRoute />
          </AppContext>
          <ReactQueryDevtools initialIsOpen={false} />
          <ToastContainer />
        </QueryClientProvider>
      </BrowserRouter>
=======
import React, { useState, useContext, useEffect } from "react";
import {
  BrowserRouter,
  Route,
  Routes,
  Navigate,
  useNavigate,
  useLocation,
} from "react-router-dom";
import "./App.css";
// import Navbar from './components/Navbar';
// import Shop from "./components/Shop";
import SingleProduct from "./components/SingleProduct";
import Header from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/Footer";
import ShoppingCart from "./components/ShoppingCart";
import Contact from "./components/Contact";
import Checkout from "./components/Checkout";
import Register from "./components/register/Register";
import LoginPage from "./components/login/Login";

import ProtectedRoute from "./components/Api/context/ProtectedRoute";

import YourComponent from "./components/Org/Orgdetails";
import Shopproduct from "./components/product/Shopproduct";

import AppContext from "./components/Api/context/AppContext";
import OrderContainer from "./components/orders/OrderContainer";

import DataContainer from "./components/product/productdata/DataContainer";
import Testshop from "./components/Testshop";
import VerifyOtp from "./components/register/VerifyOtp";
import ForgotPassword from "./components/register/Password";

function App() {
  const HeaderLogic = () => {
    const location = useLocation();
    const hideHeaderOnPaths = ["/login", "/", "/otp"];

    const shouldShowHeader = !hideHeaderOnPaths.includes(location.pathname);

    return shouldShowHeader ? <Header /> : null;
  };

  return (
    <>
      <BrowserRouter>
        <AppContext>
          <HeaderLogic />
          <Routes>
            {/* <Rout e path='/categories/:id' element={<Shop />} /> */}
            <Route path="/singleproduct/:id" element={<SingleProduct />} />
            <Route path="/contact" element={<Contact />} />
            {/* <Route path="/checkout" element={<Checkout />} /> */}
            {/* <Route path='/product' element={<Shopproduct />} /> */}
            <Route path="/org-address" element={<YourComponent />} />
            <Route path="/cart" element={<ShoppingCart />} />

            {/* <ProtectedRoute path="/cart" element={<ShoppingCart />} /> */}
            <Route path="/" element={<Register />} />
            <Route path="/otp" element={<VerifyOtp />} />
            <Route path="/forget-pass" element={<ForgotPassword />} />
            <Route path="/login" element={<LoginPage />} />

            {/* <Route path="/user" element={<ProtectedRoute />}>
              <Route path="cart" element={<ShoppingCart />} />
           
              <Route path="home" element={<Home />} />
            </Route> */}

            <Route path="/home" element={<ProtectedRoute />}>
              <Route path="/home/main" element={<Home />} />
            </Route>
            <Route path="/order" element={<OrderContainer />} />

            {/* <Route path="/product" element={<DataContainer />} /> */}
            <Route
              path="/categories/:partCategoryName/:subCategoryName/:subCategoryId"
              element={<Testshop />}
            />
          </Routes>
          {/* <Footer /> */}
>>>>>>> 1fe8341fa44ded06e4e9fd326c581ebdce9bf057

          {/* <Testing/> */}
        </AppContext>
      </BrowserRouter>
    </>
  );
}

export default App;


















































