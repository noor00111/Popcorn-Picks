import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Shared/Navbar';
import '../styles/auth.css';

const AuthLayout = () => {
    return (
        <div className="bg-backgroundColor text-bodyColor min-h-screen transition-colors duration-300">
             <Navbar></Navbar>
             <Outlet></Outlet>
        </div>
    );
};

export default AuthLayout;