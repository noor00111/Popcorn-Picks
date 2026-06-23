import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';
import { toast } from 'react-toastify';

const Login = () => {
    const { loginUser, setUser, logInWithGoogle } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const handleLogin = (e) => {
        e.preventDefault();
        const loginForm = e.target;
        const email = loginForm.email.value;
        const password = loginForm.password.value;

        loginUser(email, password)
            .then((result) => {
                setUser(result.user);
                toast.success("Successfully Login!!");
                navigate(location?.state ? location.state : "/");
            })
            .catch((error) => {
                toast.error(error.message);
            });
    };

    const handleLoginWithGoogle = () => {
        logInWithGoogle()
            .then((result) => {
                setUser(result.user);
                navigate("/");
            })
            .catch((error) => {
                toast.error(error.message);
            });
    };

    return (
        <div className="min-h-screen flex items-center justify-center px-4 py-12">
            <div className="relative w-full max-w-md">
                <div className="text-center mb-8">
                    <h1 className="sc-heading font-titleFont text-5xl mb-1 text-[#f5c518]">
                        PopcornPicks
                    </h1>
                    <p className="text-sm text-bodyColor opacity-60">
                        Your cinematic universe awaits
                    </p>
                </div>

                <div className="rounded-2xl shadow-2xl p-8 bg-bgForm">
                    <h2 className="text-2xl font-bold text-center mb-6 text-bodyColor font-paraFont">
                        Welcome Back
                    </h2>

                    <form onSubmit={handleLogin} className="space-y-4">
                        <div>
                            <label className="block text-sm font-semibold mb-1 text-bodyColor">
                                Email
                            </label>
                            <input
                                name="email"
                                type="email"
                                autoComplete="email"
                                required
                                className="w-full px-4 py-3 rounded-xl border-2 transition-colors duration-200 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400/60 focus-visible:ring-offset-1 bg-backgroundColor text-bodyColor border-[#f5c518] focus:border-[#e50914] outline-none"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-semibold mb-1 text-bodyColor">
                                Password
                            </label>
                            <input
                                name="password"
                                type="password"
                                autoComplete="current-password"
                                required
                                className="w-full px-4 py-3 rounded-xl border-2 transition-colors duration-200 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400/60 focus-visible:ring-offset-1 bg-backgroundColor text-bodyColor border-[#f5c518] focus:border-[#e50914] outline-none"
                            />
                            <div className="text-right mt-1">
                                <a
                                    href="#"
                                    className="text-xs font-medium hover:underline text-[#1d4ed8] dark:text-cyan-400">
                                    Forgot password?
                                </a>
                            </div>
                        </div>

                        <button
                            type="submit"
                            className="w-full py-3 rounded-xl font-bold text-sm transition-all duration-200 hover:-translate-y-0.5 mt-2 btn-gold">
                            Login
                        </button>
                    </form>

                    <div className="flex items-center my-5">
                        <div className="flex-1 h-px bg-bodyColor opacity-[0.15]" />
                        <span className="px-3 text-xs font-medium text-bodyColor opacity-50">
                            OR
                        </span>
                        <div className="flex-1 h-px bg-bodyColor opacity-[0.15]" />
                    </div>

                    <button
                        onClick={handleLoginWithGoogle}
                        className="w-full flex items-center justify-center gap-3 py-3 rounded-xl border-2 font-semibold text-sm transition-all duration-200 hover:-translate-y-0.5 border-[#f5c518] text-bodyColor bg-transparent hover:bg-[#f5c518] hover:text-[#0a0a0f]">
                        <img
                            className="w-5 h-5"
                            src="https://img.icons8.com/?size=100&id=KF0a7tvdESBd&format=png&color=000000"
                            alt="Google"
                            width={20}
                            height={20}
                        />
                        Continue with Google
                    </button>

                    <p className="text-center text-sm mt-5 text-bodyColor opacity-75">
                        Don't have an account?{' '}
                        <Link
                            to="/auth/signup"
                            className="font-bold hover:underline text-[#f5c518]">
                            Sign up free
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;
