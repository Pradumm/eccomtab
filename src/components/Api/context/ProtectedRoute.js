

// ProtectedRoute.js
import React, { useContext } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from '../../Home';
import OrderContainer from '../../orders/OrderContainer';
import SingleProduct from '../../SingleProduct';
import Testshop from '../../Testshop';
import ShoppingCart from '../../ShoppingCart';
import { UserContext } from './AppContext';
import RecheckCard from '../../RecheckCard';
import TabComponent from '../../TabComponent';
import Contact from "../../Contact"

const ProtectedRoute = () => {

    const { token } = useContext(UserContext);

    if (!token) {
        return <Navigate to="/" />;
    }
    return (
        <Routes>
            <Route index element={<Home />} />
            <Route path="order" element={<OrderContainer />} />
            <Route path='contact' element={<Contact />} />
            <Route path="singleproduct/:id" element={<SingleProduct />} />
            <Route path="orderhistory" element={<TabComponent />} />
            <Route
                path="categories/:partCategoryName/:subCategoryName/:subCategoryId"
                element={<Testshop />}
            />
            <Route path="cart" element={<ShoppingCart />} />
            <Route path="detail/:id" element={<RecheckCard />} />

        </Routes>
    )
};

export default ProtectedRoute;
