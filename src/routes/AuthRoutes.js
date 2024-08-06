import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import UserDashboard from '../layout/Dashboard';

const AuthRoutes = createBrowserRouter([
  {
    path: '/',
    element: <UserDashboard />,
    children: [
      { path: 'dashboard', element: <UserDashboard /> },
    ],
  },
]);

export default AuthRoutes;
