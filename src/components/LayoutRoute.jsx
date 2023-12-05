import React, { useContext } from "react";
import { Route, Routes, Navigate } from "react-router-dom";

import { useLocation } from "react-router-dom";

import { UserContext } from "./Api/context/AppContext";
import ProtectedRoute from "./Api/context/ProtectedRoute";
import RegisterPage from "./register/Register";
import LoginPage from "./login/Login";
import VerifyOtp from "./register/VerifyOtp";
import ForgotPassword from "./register/Password";
import Header from "../components/Header";
import YourComponent from "../components/Org/Orgdetails";
import Checkout from "../components/Checkout";
import OrderContainer from "./orders/OrderContainer";
import SuccessPage from "./SuccessPage";

const LayoutRoute = () => {
  const { token } = useContext(UserContext);

  const HeaderLogic = () => {
    const location = useLocation();

    const hideHeaderOnPaths = ["/register", "/", "*", "/otp", "/forget-pass"];

    const shouldShowHeader = !hideHeaderOnPaths.includes(location.pathname);

    return shouldShowHeader ? <Header /> : null;
  };

  return (
    <>
      <HeaderLogic />

      <Routes>
        {/* <Route path="*" element={<LoginPage />} /> */}
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/" element={<LoginPage />} />
        <Route path="/otp" element={<VerifyOtp />} />
        <Route path="/forget-pass" element={<ForgotPassword />} />
        <Route path="/org-address" element={<YourComponent />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/order" element={<OrderContainer />} />
        <Route path="/success-order" element={<SuccessPage />} />
        {/* <Route path='/history' element ={<History/>}/> */}
        <Route path="*" element={<Navigate to="/" />} />

        <Route
          path="/home/*"
          element={token ? <ProtectedRoute /> : <Navigate to="/" />}
        />
      </Routes>
    </>
  );
};

export default LayoutRoute;
