import React from 'react';
import { useLocation, Navigate } from 'react-router-dom';
import { useAuth } from '../../Hooks/useAuth/useAuth';

const PrivateRoute = ({ children, ...rest }) => {
    const { user } = useAuth();
    const location = useLocation()

    if (user) {
        return children
    }
    return <Navigate to='/login' state={{ path: location }} />



    // );
};

export default PrivateRoute;