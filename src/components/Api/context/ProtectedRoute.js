


// ProtectedRoute.js
import React, { useContext } from 'react';
import { Outlet, Navigate, Route } from 'react-router-dom';
import { UserContext } from './AppContext';

const ProtectedRoute = ({ element, ...rest }) => {

    const { autho } = useContext(UserContext); // Replace with your authentication logic.

    return autho ? (
        <Outlet />
    ) : (
        <Navigate to="/login" replace={true} />
    );
};

export default ProtectedRoute;
