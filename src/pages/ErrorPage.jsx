import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className="h-screen flex flex-col items-center justify-center bg-gray-100 text-gray-700">
            <img
                src="https://i.ibb.co.com/7J1NLHy/rb-7899.png"
                alt="404 Not Found"
                className="w-96 mb-6"
            />
            <p className="text-5xl mb-6 font-titleFont">Oops! The page you're looking for doesn't exist.</p>
            <Link
                to="/"
                className="bg-gradient-to-r from-gray-200 via-gray-300 to-gray-400 font-titleFont border-3 border-blue-800 font-semibold text-2xl px-6 py-3 rounded-lg shadow-md hover:bg-blue-600">
                Go Back to Home
            </Link>
        </div>
    );
};


export default ErrorPage;