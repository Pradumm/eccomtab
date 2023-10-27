import React from 'react';
import { Navigate, Route } from 'react-router-dom';

const ProtectedRoute = ({ element, ...rest }) => {

    
    // Implement your authentication logic here
    // For example, you can check if the user is logged in or has a valid token.
    const isAuthenticated =   true/* Your authentication logic here */

    return isAuthenticated ? (
        // User is authenticated, render the route
        element
    ) : (
        // User is not authenticated, redirect to the login page
        <Navigate to="/login" />
    );
};

export default ProtectedRoute;
