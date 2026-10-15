import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaUser, FaEnvelope, FaImage, FaLock, FaEye, FaEyeSlash, FaFilm } from 'react-icons/fa';
import { AuthContext } from '../provider/AuthProvider';
import { toast } from 'react-toastify';
import GoogleIcon from '../components/Auth/GoogleIcon';

const Signup = () => {
    const { signupUser, setUser, logInWithGoogle, updateProfileUser } = useContext(AuthContext);
    const [successMessage, setSuccessMessage] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();

    const handleSignUp = (e) => {
        e.preventDefault();
        const signupForm = e.target;
        const name = signupForm.name.value;
        const email = signupForm.email.value;
        const photo = signupForm.photo.value;
        const password = signupForm.password.value;
        setSuccessMessage(false);

        if (!/[A-Z]/.test(password)) {
            toast.error('Password must include at least one uppercase letter!');
            return;
        }
        if (!/[a-z]/.test(password)) {
            toast.error('Password must include at least one lowercase letter!');
            return;
        }

        signupUser(email, password)
            .then(result => {
                const newUser = { name, email };
                fetch('https://popcorn-picks-server.vercel.app/users', {
                    method: 'POST',
                    headers: { 'content-type': 'application/json' },
                    body: JSON.stringify(newUser),
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.insertedId) toast.success('Account created!');
                    });

                setUser(result.user);
                setSuccessMessage(true);
                toast.success("Successfully Signed Up!!");
                updateProfileUser({ displayName: name, photoURL: photo })
                    .then(() => navigate("/"))
                    .catch(err => toast.error(err.message));
            })
            .catch(error => {
                toast.error(error.message);
                setSuccessMessage(false);
            });
    };

    const handleLoginWithGoogle = () => {
        logInWithGoogle()
            .then(result => {
                setUser(result.user);
                navigate("/");
            })
            .catch(error => toast.error(error.message));
    };

    return (
        <div className="auth-page">
            <div className="w-full max-w-3xl">
                <div className="text-center mb-7">
                    <h1 className="font-titleFont text-5xl leading-none mb-2 text-[var(--auth-accent-text)]">
                        PopcornPicks Signup Page.
                    </h1>
                    <p className="text-sm text-colorMuted">
                        Join millions of movie lovers.
                    </p>
                </div>

                <div className="auth-card">
                    <h2 className="text-2xl font-bold text-bodyColor font-paraFont">
                        Create Your Account!
                    </h2>
                    <p className="text-sm text-colorMuted mt-1 mb-6">
                        It only takes a minute.
                    </p>

                    <form onSubmit={handleSignUp} className="space-y-4">
                        <div>
                            <label htmlFor="signup-name" className="auth-label">Full name</label>
                            <div className="auth-field">
                                <FaUser className="auth-field-icon" />
                                <input
                                    id="signup-name"
                                    name="name"
                                    type="text"
                                    autoComplete="name"
                                    placeholder="John Doe"
                                    required
                                    className="auth-input"
                                />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="signup-email" className="auth-label">Email</label>
                            <div className="auth-field">
                                <FaEnvelope className="auth-field-icon" />
                                <input
                                    id="signup-email"
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
                            <label htmlFor="signup-photo" className="auth-label">Photo URL</label>
                            <div className="auth-field">
                                <FaImage className="auth-field-icon" />
                                <input
                                    id="signup-photo"
                                    name="photo"
                                    type="url"
                                    autoComplete="photo"
                                    placeholder="https://example.com/photo.jpg"
                                    required
                                    className="auth-input"
                                />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="signup-password" className="auth-label">Password</label>
                            <div className="auth-field">
                                <FaLock className="auth-field-icon" />
                                <input
                                    id="signup-password"
                                    name="password"
                                    type={showPassword ? "text" : "password"}
                                    autoComplete="new-password"
                                    placeholder="••••••••"
                                    aria-describedby="signup-password-hint"
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
                            <p id="signup-password-hint" className="text-xs mt-1.5 text-colorMuted">
                                Must include uppercase and lowercase letters
                            </p>
                        </div>

                        <button
                            type="submit"
                            className="w-full py-3 rounded-xl text-sm mt-2 btn-gold">
                            Create account
                        </button>
                    </form>

                    <div className="auth-divider">OR</div>

                    <button type="button" onClick={handleLoginWithGoogle} className="auth-google">
                        <GoogleIcon />
                        Continue with Google
                    </button>

                    <p className="text-center text-sm mt-6 text-colorMuted">
                        Already have an account?{' '}
                        <Link to="/auth/login" className="auth-link">
                            Log in
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Signup;
