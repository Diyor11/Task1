import React from 'react';
import { Navigate } from 'react-router-dom';

type Props ={
    component: JSX.Element
}
const PrivateRoute = ({ component: Component }: Props) => {

  return (
        window.localStorage.getItem('isLoggedIn') ? (
            Component
        ) : (
          <Navigate to="/login" />
        )
  )
};

export default PrivateRoute;
