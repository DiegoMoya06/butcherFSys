import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';
import { Login } from '../components/auth/Login';
import { DashboardRoutes } from './DashboardRoutes';

export const AppRouter = () => {
  return (
    <Router>

        <Routes>
            <Route path="/login" element={
                <PublicRoute>
                    <Login />
                </PublicRoute>
            }/>

            <Route path="/*" element={ 
                <PrivateRoute>
                    <DashboardRoutes />
                </PrivateRoute>
            }/>
        </Routes>
    </Router>
  )
}
