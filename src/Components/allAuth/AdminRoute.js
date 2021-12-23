import React, { useContext } from 'react';
import { useLocation, Navigate } from 'react-router-dom';
import { UserContext } from '../../App';
import { useAuth } from '../../Hooks/useAuth/useAuth';


const AdminRoute = ({ children, ...rest }) => {
    const { user } = useAuth();
    const { admin } = useContext(UserContext)
    const location = useLocation()
    if (user && admin) {
        return children
    }
    return <Navigate to='/login' state={{ path: location }} />
};

export default AdminRoute;