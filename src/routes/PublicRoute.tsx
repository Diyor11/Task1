import React from 'react';
import { Navigate } from 'react-router-dom';

type Props = {
    component: React.FC
}
const PublicRoute = ({ component: Component }: Props) => {
  return (
    window.localStorage.getItem('isLoggedIn') === 'true' ? (
      <Navigate to="/" />
    ) : (
        <Component />
    )
  );
};

export default PublicRoute;
