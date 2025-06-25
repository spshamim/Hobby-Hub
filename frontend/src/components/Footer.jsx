import { Link } from "react-router";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* About Section */}
                    <div className="space-y-4">
                        <h3 className="text-xl font-bold">HobbyHub</h3>
                        <p className="text-gray-400">
                            Connect with like-minded individuals and discover
                            new hobbies in your local community.
                        </p>
                        <div className="flex space-x-4">
                            <a
                                href="https://www.facebook.com"
                                target="_blank"
                                className="text-gray-400 hover:text-white"
                            >
                                <FaFacebook className="h-6 w-6" />
                            </a>
                            <a
                                href="https://www.x.com"
                                target="_blank"
                                className="text-gray-400 hover:text-white"
                            >
                                <FaTwitter className="h-6 w-6" />
                            </a>
                            <a
                                href="https://www.instagram.com"
                                target="_blank"
                                className="text-gray-400 hover:text-white"
                            >
                                <FaInstagram className="h-6 w-6" />
                            </a>
                            <a
                                href="https://www.linkedin.com"
                                target="_blank"
                                className="text-gray-400 hover:text-white"
                            >
                                <FaLinkedin className="h-6 w-6" />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">
                            Quick Links
                        </h3>
                        <ul className="space-y-2">
                            <li>
                                <Link
                                    to="/"
                                    className="text-gray-400 hover:text-white"
                                >
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/all-groups"
                                    className="text-gray-400 hover:text-white"
                                >
                                    All Groups
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/create-group"
                                    className="text-gray-400 hover:text-white"
                                >
                                    Create Group
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/my-groups"
                                    className="text-gray-400 hover:text-white"
                                >
                                    My Groups
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Popular Categories */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">
                            Popular Categories
                        </h3>
                        <ul className="space-y-2">
                            <li>
                                <Link
                                    to="/all-groups"
                                    className="text-gray-400 hover:text-white"
                                >
                                    Drawing & Painting
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/all-groups"
                                    className="text-gray-400 hover:text-white"
                                >
                                    Photography
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/all-groups"
                                    className="text-gray-400 hover:text-white"
                                >
                                    Video Gaming
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/all-groups"
                                    className="text-gray-400 hover:text-white"
                                >
                                    Cooking
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">
                            Contact Us
                        </h3>
                        <ul className="space-y-2 text-gray-400">
                            <li>Email: info@hobbyhub.com</li>
                            <li>Phone: +1 (555) 123-4567</li>
                            <li>Address: 123 Hobby Street</li>
                            <li>City, State 12345</li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-gray-800 mt-12 pt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <p className="text-gray-400 text-sm">
                            © {new Date().getFullYear()} HobbyHub. All rights
                            reserved.
                        </p>
                        <div className="flex space-x-6 mt-4 md:mt-0">
                            <Link
                                to="/privacy-policy"
                                className="text-gray-400 hover:text-white text-sm"
                            >
                                Privacy Policy
                            </Link>
                            <Link
                                to="/terms"
                                className="text-gray-400 hover:text-white text-sm"
                            >
                                Terms of Service
                            </Link>
                            <Link
                                to="/faq"
                                className="text-gray-400 hover:text-white text-sm"
                            >
                                FAQ
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
