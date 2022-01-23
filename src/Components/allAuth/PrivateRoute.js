import React, { useContext } from 'react';
import { useLocation, Navigate } from 'react-router-dom';
import { UserContext } from '../../App';
// import { useAuth } from '../../Hooks/useAuth/useAuth';
const PrivateRoute = ({ children }) => {
    // const { user:{uid}} = useAuth();
    const { user:{email}} = useContext(UserContext);
    const location = useLocation()
    // if (user.uid) {
    //     return children
    // }
    // console.log(user);
    return (
        email ? children :
            <Navigate to='/login' state={{ path: location }} />
    )



};

export default PrivateRoute;