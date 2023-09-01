import React, { Suspense, lazy } from 'react';
import PageLoader from '../component/PageLoader';
import { MainLayout } from '../component';
import { Navigate, Route, Routes } from 'react-router-dom';

const Dashboard = lazy(() => import('../pages/dashboard'))
const Client = lazy(() => import('../pages/client'))
const Clients = lazy(() => import('../pages/clients'))
const Employeer = lazy(() => import('../pages/employeer'))
const Students = lazy(() => import('../pages/students'))

export default function AppRouter() {
  return (
    <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path='/' element={<MainLayout />}>
            <Route path='/' element={<Dashboard />} />
            <Route path='/students' element={<Students />} />
            <Route path='/clients' element={<Clients />} />
            <Route path='/profile' element={<Client />} />
            <Route path='/employeer' element={<Employeer />} />
        </Route>   
        <Route path='*' element={<Navigate to='/' />} /> 
        </Routes>
    </Suspense>
  );
}
