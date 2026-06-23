import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Shared/Navbar';

const AuthLayout = () => {
    return (
        <div style={{ backgroundColor: 'var(--body_background)', color: 'var(--body_color)', minHeight: '100vh', transition: 'background-color 0.3s ease, color 0.3s ease' }}>
             <Navbar></Navbar>
             <Outlet></Outlet>
        </div>
    );
};

export default AuthLayout;