import { useState, use } from "react";
import { Link, useNavigate } from "react-router";
import { FaGoogle } from "react-icons/fa";
import toast from "react-hot-toast";
import { AuthContext } from "../hooks/AuthProvider";

const Register = () => {
    const { handleCreateUser, handleGoogleSignIn, loading } = use(AuthContext);

    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        displayName: "",
        email: "",
        photoURL: "",
        password: "",
    });

    const validateForm = () => {
        if (
            !formData.email ||
            !formData.password ||
            !formData.displayName ||
            !formData.photoURL
        ) {
            toast.error("Please fill in all fields.");
            return false;
        }
        if (!/^(?=.*[a-z])(?=.*[A-Z]).{6,}$/.test(formData.password)) {
            toast.error(
                "Password must contain at least one uppercase and one lowercase letter and be at least 6 characters long."
            );
            return false;
        }
        if (!/\S+@\S+\.\S+/.test(formData.email)) {
            toast.error(
                "Please enter a valid email address. (i.e. user@example.com)"
            );
            return false;
        }
        return true;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validateForm()) return;

        try {
            await handleCreateUser(formData);
            navigate("/", { replace: true });
            toast.success("Registration successful!");
        } catch (error) {
            toast.error(error.message || "Registration failed");
        }
    };

    const handleProviderSignIn = async (providerFunc) => {
        try {
            await providerFunc();
            navigate("/", { replace: true });
            toast.success("Registration successful!");
        } catch (err) {
            toast.error(err.message || "Registration failed");
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-md">
                <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                    Create your account
                </h2>
                <p className="mt-2 text-center text-sm text-gray-600">
                    Already have an account?{" "}
                    <Link
                        to="/login"
                        className="font-medium text-indigo-600 hover:text-indigo-500"
                    >
                        Sign in
                    </Link>
                </p>
            </div>

            <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
                    <form className="space-y-6" onSubmit={handleSubmit}>
                        <div>
                            <label
                                htmlFor="displayName"
                                className="block text-sm font-medium text-gray-700"
                            >
                                Full Name
                            </label>
                            <div className="mt-1">
                                <input
                                    id="displayName"
                                    name="displayName"
                                    type="text"
                                    value={formData.displayName}
                                    onChange={handleChange}
                                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                />
                            </div>
                        </div>

                        <div>
                            <label
                                htmlFor="email"
                                className="block text-sm font-medium text-gray-700"
                            >
                                Email address
                            </label>
                            <div className="mt-1">
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                />
                            </div>
                        </div>

                        <div>
                            <label
                                htmlFor="photoURL"
                                className="block text-sm font-medium text-gray-700"
                            >
                                Photo URL
                            </label>
                            <div className="mt-1">
                                <input
                                    id="photoURL"
                                    name="photoURL"
                                    type="url"
                                    value={formData.photoURL}
                                    onChange={handleChange}
                                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                />
                            </div>
                        </div>

                        <div>
                            <label
                                htmlFor="password"
                                className="block text-sm font-medium text-gray-700"
                            >
                                Password
                            </label>
                            <div className="mt-1">
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    value={formData.password}
                                    onChange={handleChange}
                                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                />
                            </div>
                        </div>
                        <div>
                            <button
                                type="submit"
                                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 cursor-pointer"
                            >
                                {loading ? "Registering..." : "Register"}
                            </button>
                        </div>
                    </form>

                    <div className="mt-6">
                        <div className="relative">
                            <div className="absolute inset-0 flex items-center">
                                <div className="w-full border-t border-gray-300" />
                            </div>
                            <div className="relative flex justify-center text-sm">
                                <span className="px-2 bg-white text-gray-500">
                                    Or continue with
                                </span>
                            </div>
                        </div>

                        <div className="mt-6 flex justify-center items-center">
                            <button
                                onClick={() =>
                                    handleProviderSignIn(handleGoogleSignIn)
                                }
                                className="w-1/2 inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 cursor-pointer"
                            >
                                <FaGoogle className="h-5 w-5 text-red-500" />
                                <span className="ml-2">Google</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;
