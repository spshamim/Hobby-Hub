import React from "react";
import { FaUsers, FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";
import { Link } from "react-router";

export default function FeatureGroupCard({ group }) {
    return (
        <div
            key={group._id}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transition-colors duration-200 hover:shadow-xl"
        >
            <img
                src={group.image}
                alt={group.name}
                className="w-full h-48 object-cover"
            />
            <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    {group.name}
                </h3>
                <p className="text-indigo-600 dark:text-indigo-400 font-medium mb-4">
                    {group.category}
                </p>
                <div className="space-y-2 text-gray-600 dark:text-gray-300">
                    <div className="flex items-center">
                        <FaUsers className="mr-2 text-indigo-600 dark:text-indigo-400" />
                        <span>{group.maxMembers} Members</span>
                    </div>
                    <div className="flex items-center">
                        <FaMapMarkerAlt className="mr-2 text-indigo-600 dark:text-indigo-400" />
                        <span>{group.location}</span>
                    </div>
                    <div className="flex items-center">
                        <FaCalendarAlt className="mr-2 text-indigo-600 dark:text-indigo-400" />
                        <span>Starts {group.startDate}</span>
                    </div>
                </div>
                <Link
                    to={`/group/${group._id}`}
                    className="mt-4 block text-center bg-indigo-600 dark:bg-indigo-500 text-white px-4 py-2 rounded-md hover:bg-indigo-700 dark:hover:bg-indigo-600 transition-colors duration-200"
                >
                    View Details
                </Link>
            </div>
        </div>
    );
}
