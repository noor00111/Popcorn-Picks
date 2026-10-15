import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaEnvelope, FaLock, FaEye, FaEyeSlash, FaFilm } from 'react-icons/fa';
import { AuthContext } from '../provider/AuthProvider';
import { toast } from 'react-toastify';
import GoogleIcon from '../components/Auth/GoogleIcon';

const Login = () => {
    const { loginUser, setUser, logInWithGoogle } = useContext(AuthContext);
    const [showPassword, setShowPassword] = useState(false);
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
        <div className="auth-page">
            <div className="w-full max-w-lg">
                <div className="text-center mb-7">
                    <h1 className="font-titleFont text-5xl leading-none mb-2 text-[var(--auth-accent-text)]">
                        PopcornPicks Login Page.
                    </h1>
                </div>

                <div className="auth-card">
                    <h2 className="text-2xl font-bold text-bodyColor font-paraFont">
                        Welcome Back!
                    </h2>
                    <p className="text-sm text-colorMuted mt-1 mb-6">
                        Log in to manage your favourite movies.
                    </p>

                    <form onSubmit={handleLogin} className="space-y-4">
                        <div>
                            <label htmlFor="login-email" className="auth-label">Email</label>
                            <div className="auth-field">
                                <FaEnvelope className="auth-field-icon" />
                                <input
                                    id="login-email"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    placeholder="you@example.com"
                                    required
                                    className="auth-input"
                                />
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center justify-between mb-[0.4rem]">
                                <label htmlFor="login-password" className="auth-label !mb-0">Password</label>
                                <a href="#" className="auth-link text-xs !font-semibold">
                                    Forgot password?
                                </a>
                            </div>
                            <div className="auth-field">
                                <FaLock className="auth-field-icon" />
                                <input
                                    id="login-password"
                                    name="password"
                                    type={showPassword ? "text" : "password"}
                                    autoComplete="current-password"
                                    placeholder="••••••••"
                                    required
                                    className="auth-input has-toggle"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword((s) => !s)}
                                    aria-label={showPassword ? "Hide password" : "Show password"}
                                    className="auth-toggle">
                                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                                </button>
                            </div>
                        </div>

                        <button
                            type="submit"
                            className="w-full py-3 rounded-xl text-sm mt-2 btn-gold">
                            Log in
                        </button>
                    </form>

                    <div className="auth-divider">OR</div>

                    <button type="button" onClick={handleLoginWithGoogle} className="auth-google">
                        <GoogleIcon />
                        Continue with Google
                    </button>

                    <p className="text-center text-sm mt-6 text-colorMuted">
                        Don't have an account?{' '}
                        <Link to="/auth/signup" className="auth-link">
                            Sign up free
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;
