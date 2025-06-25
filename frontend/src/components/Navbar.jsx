import { useState, use } from "react";
import { Link } from "react-router";
import { FaUserCircle } from "react-icons/fa";
import { Tooltip } from "react-tooltip";
import { AuthContext } from "../hooks/AuthProvider";
import { Typewriter } from "react-simple-typewriter";

const Navbar = () => {
    const { user, handleSignOut } = use(AuthContext);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className="bg-white shadow-lg">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    <div className="flex items-center">
                        <Link
                            to="/"
                            className="flex-shrink-0 flex items-center"
                        >
                            <span className="text-2xl font-bold text-indigo-600">
                                <Typewriter
                                    words={["HobbyHub", "HobbyHub", "HobbyHub"]}
                                    loop={true}
                                    cursor
                                    cursorStyle="|"
                                    typeSpeed={90}
                                />
                            </span>
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-4">
                        <Link
                            to="/"
                            className="text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium"
                        >
                            Home
                        </Link>
                        <Link
                            to="/all-groups"
                            className="text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium"
                        >
                            All Groups
                        </Link>
                        <Link
                            to="/create-group"
                            className="text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium"
                        >
                            Create Group
                        </Link>
                        <Link
                            to="/my-groups"
                            className="text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium"
                        >
                            My Groups
                        </Link>

                        {user ? (
                            <button
                                onClick={handleSignOut}
                                className="text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium cursor-pointer"
                            >
                                Logout
                            </button>
                        ) : (
                            <>
                                <Link
                                    to="/login"
                                    className="text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium"
                                >
                                    Login
                                </Link>
                                <Link
                                    to="/register"
                                    className="text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium"
                                >
                                    Register
                                </Link>
                            </>
                        )}

                        {/* if hover on image show tooltip */}

                        {user && (
                            <div className="relative group">
                                <button className="flex items-center space-x-2">
                                    <img
                                        src={user.photoURL}
                                        alt="Profile"
                                        className="h-8 w-8 rounded-full cursor-pointer"
                                        data-tooltip-id="profile-tooltip"
                                        data-tooltip-content={user.displayName}
                                        data-tooltip-place="left"
                                        data-tooltip-offset={10}
                                    />
                                </button>
                            </div>
                        )}
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                        >
                            <span className="sr-only">Open main menu</span>
                            <svg
                                className={`${
                                    isMenuOpen ? "hidden" : "block"
                                } h-6 w-6`}
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            </svg>
                            <svg
                                className={`${
                                    isMenuOpen ? "block" : "hidden"
                                } h-6 w-6`}
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            <div className={`${isMenuOpen ? "block" : "hidden"} md:hidden`}>
                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                    <Link
                        to="/"
                        className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-gray-50"
                    >
                        Home
                    </Link>
                    <Link
                        to="/all-groups"
                        className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-gray-50"
                    >
                        All Groups
                    </Link>
                    <Link
                        to="/create-group"
                        className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-gray-50"
                    >
                        Create Group
                    </Link>
                    <Link
                        to="/my-groups"
                        className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-gray-50"
                    >
                        My Groups
                    </Link>
                    {user ? (
                        <>
                            <div className="px-3 py-2 text-base font-medium text-gray-700">
                                {user.displayName}
                            </div>
                            <button className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-gray-50" onClick={handleSignOut}>
                                Logout
                            </button>
                        </>
                    ) : (
                        <Link
                            to="/login"
                            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-gray-50"
                        >
                            Login
                        </Link>
                    )}
                </div>
            </div>
            <Tooltip id="profile-tooltip" />
        </nav>
    );
};

export default Navbar;
