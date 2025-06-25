export default function WhyJoin() {
    return (
        <div className="bg-gray-50 dark:bg-gray-800 py-16 transition-colors duration-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">
                    Why Join HobbyHub?
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="text-center">
                        <div className="bg-indigo-100 dark:bg-indigo-900/50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 transition-colors duration-200">
                            <svg
                                className="w-8 h-8 text-indigo-600 dark:text-indigo-400"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                                />
                            </svg>
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                            Connect with Like-minded People
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300">
                            Find and join groups of people who share your
                            interests and passions.
                        </p>
                    </div>
                    <div className="text-center">
                        <div className="bg-indigo-100 dark:bg-indigo-900/50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 transition-colors duration-200">
                            <svg
                                className="w-8 h-8 text-indigo-600 dark:text-indigo-400"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                                />
                            </svg>
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                            Learn New Skills
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300">
                            Discover new hobbies and learn from experienced
                            group members.
                        </p>
                    </div>
                    <div className="text-center">
                        <div className="bg-indigo-100 dark:bg-indigo-900/50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 transition-colors duration-200">
                            <svg
                                className="w-8 h-8 text-indigo-600 dark:text-indigo-400"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                />
                            </svg>
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                            Build Your Community
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300">
                            Create lasting friendships and build a supportive
                            community around your interests.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
