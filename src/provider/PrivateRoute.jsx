import React, { use } from 'react';
import { AuthContext } from './AuthProvider';
import { Navigate } from 'react-router';
import Loading from '../layouts/pages/Loading';

const PrivateRoute = ({ children }) => {
    const { user, loading } = use(AuthContext);
    // console.log(user);

    if (loading) {
        return <Loading></Loading>
    }

    //if->user thake then return children
    if (user && user?.email) {
        return children;
    }
    //navigate --> Login
    return <Navigate to="/auth/login"></Navigate>



};

export default PrivateRoute;