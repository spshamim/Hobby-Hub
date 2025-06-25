import React, { useState, useEffect } from "react";
import { useLoaderData } from "react-router";
import Slider from "../components/HomeSections/Slider";
import WhyJoin from "../components/HomeSections/WhyJoin";
import Testomonials from "../components/HomeSections/Testomonials";
import FeatureGroupCard from "../components/HomeSections/FeatureGroupCard";
import { FaExclamationTriangle } from "react-icons/fa";
import { FaSun, FaMoon } from "react-icons/fa";

const Home = () => {
    const data = useLoaderData();
    const safeData = Array.isArray(data) ? data : [];
    const [featuredGroups, setFeaturedGroups] = useState(safeData);
    const [darkMode, setDarkMode] = useState(() => {
        return localStorage.getItem("darkMode") === "true";
    });

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
        localStorage.setItem("darkMode", darkMode);
    }, [darkMode]);

    useEffect(() => {
        const currentDate = new Date();
        const ongoingGroups = featuredGroups.filter(
            (group) => new Date(group.startDate) >= currentDate
        );
        const featuredGroupsFiltered = ongoingGroups.slice(0, 6);
        setFeaturedGroups(featuredGroupsFiltered);
    }, [data]);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };

    return (
        <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-200">
            <div className="fixed top-4 right-4 z-50">
                <button
                    onClick={toggleDarkMode}
                    className="p-2 rounded-lg bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-200"
                    aria-label="Toggle dark mode"
                >
                    {darkMode ? (
                        <FaSun className="h-6 w-6 text-yellow-500" />
                    ) : (
                        <FaMoon className="h-6 w-6 text-gray-700" />
                    )}
                </button>
            </div>
            <Slider />
            {/* Featured Groups Section */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
                    Featured Groups
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {featuredGroups.length === 0 ? (
                        <>
                            <div className="max-w-lg text-center mx-auto col-span-full">
                                <div className="flex justify-center">
                                    <FaExclamationTriangle className="h-16 w-16 text-indigo-600 dark:text-indigo-400" />
                                </div>
                                <h2 className="mt-6 text-3xl font-extrabold text-gray-900 dark:text-white">
                                    Group Not Found
                                </h2>
                                <p className="mt-2 text-lg text-gray-600 dark:text-gray-400">
                                    The group you're looking for doesn't exist
                                    or has been removed.
                                </p>
                            </div>
                        </>
                    ) : (
                        <>
                            {featuredGroups.map((group) => (
                                <FeatureGroupCard
                                    key={group._id}
                                    group={group}
                                />
                            ))}
                        </>
                    )}
                </div>
            </div>
            <WhyJoin />
            <Testomonials />
        </div>
    );
};

export default Home;
