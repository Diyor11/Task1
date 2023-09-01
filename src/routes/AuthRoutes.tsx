// import {Client, Clients, Dashboard, Employeer, Login, NotFound, Signup, Students} from '../pages'

import React, { lazy, Suspense } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import PublicRoute from './PublicRoute';
import PageLoader from '../component/PageLoader';

const Login = lazy(() => import('../pages/auth/Login'));
const Signup = lazy(() => import('../pages/auth/Signup'));
// import { Login, Signup, NotFound } from '../pages';
const NotFound = lazy(() => import(/*webpackChunkName:'NotFoundPage'*/ '../pages/NotFound'));

export default function AuthRouter() {
  return (
    <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path='/login' element={
            <PublicRoute component={Login} />
          } />
          <Route path='/signup' element={
            <PublicRoute component={Signup} />
          } />
          
          <Route path="*" element={<Navigate to='/login' />} />
        </Routes>
    </Suspense>
  );
}
