import React from "react";
import { Link } from "react-router";

export default function Testomonials() {
    return (
        <div className="bg-white dark:bg-gray-900 py-16 transition-colors duration-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">
                    What Our Members Say
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Testimonial 1 */}
                    <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-8 shadow-sm hover:shadow-md transition-all duration-300">
                        <div className="flex items-center mb-6">
                            <img
                                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=60"
                                alt="Sarah Johnson"
                                className="h-12 w-12 rounded-full object-cover"
                            />
                            <div className="ml-4">
                                <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                                    Sarah Johnson
                                </h4>
                                <p className="text-indigo-600 dark:text-indigo-400">
                                    Photography Club
                                </p>
                            </div>
                        </div>
                        <p className="text-gray-600 dark:text-gray-300 italic">
                            "HobbyHub helped me find my passion for photography.
                            The community is incredibly supportive, and I've
                            learned so much from fellow members. It's amazing
                            how a simple hobby has turned into a meaningful part
                            of my life."
                        </p>
                        <div className="mt-4 flex text-yellow-400">
                            {[...Array(5)].map((_, i) => (
                                <svg
                                    key={i}
                                    className="h-5 w-5 fill-current"
                                    viewBox="0 0 20 20"
                                >
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                            ))}
                        </div>
                    </div>

                    {/* Testimonial 2 */}
                    <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-8 shadow-sm hover:shadow-md transition-all duration-300">
                        <div className="flex items-center mb-6">
                            <img
                                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=60"
                                alt="Michael Chen"
                                className="h-12 w-12 rounded-full object-cover"
                            />
                            <div className="ml-4">
                                <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                                    Michael Chen
                                </h4>
                                <p className="text-indigo-600 dark:text-indigo-400">
                                    Art Enthusiasts
                                </p>
                            </div>
                        </div>
                        <p className="text-gray-600 dark:text-gray-300 italic">
                            "As someone who recently moved to a new city,
                            HobbyHub has been a game-changer. I've not only
                            found a great art community but also made lifelong
                            friends. The platform makes it so easy to connect
                            with like-minded people."
                        </p>
                        <div className="mt-4 flex text-yellow-400">
                            {[...Array(5)].map((_, i) => (
                                <svg
                                    key={i}
                                    className="h-5 w-5 fill-current"
                                    viewBox="0 0 20 20"
                                >
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                            ))}
                        </div>
                    </div>

                    {/* Testimonial 3 */}
                    <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-8 shadow-sm hover:shadow-md transition-all duration-300">
                        <div className="flex items-center mb-6">
                            <img
                                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=60"
                                alt="Emily Rodriguez"
                                className="h-12 w-12 rounded-full object-cover"
                            />
                            <div className="ml-4">
                                <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                                    Emily Rodriguez
                                </h4>
                                <p className="text-indigo-600 dark:text-indigo-400">
                                    Cooking Masters
                                </p>
                            </div>
                        </div>
                        <p className="text-gray-600 dark:text-gray-300 italic">
                            "I've always loved cooking, but HobbyHub helped me
                            take it to the next level. The group meets weekly,
                            and we share recipes, techniques, and create amazing
                            dishes together. It's become the highlight of my
                            week!"
                        </p>
                        <div className="mt-4 flex text-yellow-400">
                            {[...Array(5)].map((_, i) => (
                                <svg
                                    key={i}
                                    className="h-5 w-5 fill-current"
                                    viewBox="0 0 20 20"
                                >
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Action */}
                <div className="mt-16 text-center">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                        Ready to Start Your Journey?
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
                        Join thousands of hobby enthusiasts who have found their
                        community and passion through HobbyHub.
                    </p>
                    <div className="flex justify-center space-x-4">
                        <Link
                            to="/register"
                            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 dark:bg-indigo-500 hover:bg-indigo-700 dark:hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors duration-200"
                        >
                            Join Now
                        </Link>
                        <Link
                            to="/all-groups"
                            className="inline-flex items-center px-6 py-3 border border-gray-300 dark:border-gray-600 text-base font-medium rounded-md text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors duration-200"
                        >
                            Explore Groups
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
