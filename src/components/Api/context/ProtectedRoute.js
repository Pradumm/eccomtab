


// ProtectedRoute.js
import React, { useContext, useEffect, useState } from 'react';
import { Outlet, Navigate, Route } from 'react-router-dom';
import { UserContext } from './AppContext';

const ProtectedRoute = ({ element, ...rest }) => {
  
    const { autho, token } = useContext(UserContext); // Replace with your authentication logic.
    console.log(token)

    return token ? (
        <Outlet />
    ) : (
        <Navigate to="/login" />
    );
};

export default ProtectedRoute;
