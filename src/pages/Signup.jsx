import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';
import { toast } from 'react-toastify';

const Signup = () => {
    const { signupUser, setUser, logInWithGoogle, updateProfileUser } = useContext(AuthContext);
    const [successMessage, setSuccessMessage] = useState(false);
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

    const inputClass = "w-full px-4 py-3 rounded-xl border-2 outline-none transition-all duration-200 text-sm bg-backgroundColor text-bodyColor border-[#f5c518] focus:border-[#e50914]";

    return (
        <div className="min-h-screen flex items-center justify-center px-4 py-12">
            <div className="relative w-full max-w-md">
                <div className="text-center mb-8">
                    <h1 className="text-5xl mb-1 font-titleFont text-[#f5c518]">
                        PopcornPicks
                    </h1>
                    <p className="text-sm text-bodyColor opacity-60">
                        Join millions of movie lovers
                    </p>
                </div>

                <div className="rounded-2xl shadow-2xl p-8 bg-bgForm">
                    <h2 className="text-2xl font-bold text-center mb-6 text-bodyColor font-paraFont">
                        Create Account
                    </h2>

                    <form onSubmit={handleSignUp} className="space-y-4">
                        <div>
                            <label className="block text-sm font-semibold mb-1 text-bodyColor">
                                Full Name
                            </label>
                            <input
                                name="name"
                                type="text"
                                placeholder="John Doe"
                                required
                                className={inputClass}
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-semibold mb-1 text-bodyColor">
                                Email
                            </label>
                            <input
                                name="email"
                                type="email"
                                placeholder="you@example.com"
                                required
                                className={inputClass}
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-semibold mb-1 text-bodyColor">
                                Photo URL
                            </label>
                            <input
                                name="photo"
                                type="url"
                                placeholder="https://example.com/photo.jpg"
                                required
                                className={inputClass}
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-semibold mb-1 text-bodyColor">
                                Password
                            </label>
                            <input
                                name="password"
                                type="password"
                                placeholder="••••••••"
                                required
                                className={inputClass}
                            />
                            <p className="text-xs mt-1 opacity-60 text-bodyColor">
                                Must include uppercase and lowercase letters
                            </p>
                        </div>

                        <button
                            type="submit"
                            className="w-full py-3 rounded-xl text-sm mt-2 btn-gold"
                        >
                            Create Account
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
                        className="w-full flex items-center justify-center gap-3 py-3 rounded-xl border-2 font-semibold text-sm transition-all duration-200 hover:-translate-y-0.5 border-[#f5c518] text-bodyColor bg-transparent hover:bg-[#f5c518] hover:text-[#0a0a0f]"
                    >
                        <img
                            className="w-5 h-5"
                            src="https://img.icons8.com/?size=100&id=KF0a7tvdESBd&format=png&color=000000"
                            alt="Google"
                        />
                        Continue with Google
                    </button>

                    <p className="text-center text-sm mt-5 text-bodyColor opacity-75">
                        Already have an account?{' '}
                        <Link
                            to="/auth/login"
                            className="font-bold hover:underline text-[#f5c518]"
                        >
                            Log in
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Signup;
