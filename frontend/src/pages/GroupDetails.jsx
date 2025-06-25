import { useState } from "react";
import { useNavigate, useLoaderData } from "react-router";
import { FaUsers, FaCalendarAlt, FaMapMarkerAlt, FaUser } from "react-icons/fa";
import { FaExclamationTriangle } from "react-icons/fa";
import toast from "react-hot-toast";

const GroupDetails = () => {
    const group = useLoaderData();

    const isValidGroup =
        group && !group.success === false && typeof group === "object";

    const navigate = useNavigate();
    const [isJoining, setIsJoining] = useState(false);

    const isStartDatePassed =
        group && group.startDate
            ? new Date(group.startDate) < new Date()
            : false;

    const handleJoinGroup = () => {
        setIsJoining(true);

        // sample join group
        setTimeout(() => {
            toast.success("Successfully joined the group!");
            setIsJoining(false);
        }, 1000);
    };

    return (
        <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            {isValidGroup ? (
                <>
                    <div className="max-w-lg w-full text-center mx-auto">
                        <div className="flex justify-center">
                            <FaExclamationTriangle className="h-16 w-16 text-indigo-600" />
                        </div>
                        <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
                            Group Not Found
                        </h2>
                        <p className="mt-2 text-lg text-gray-600">
                            The group you're looking for doesn't exist or has
                            been removed.
                        </p>
                        <div className="mt-6">
                            <button
                                onClick={() => navigate("/all-groups")}
                                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 cursor-pointer"
                            >
                                Back to Groups
                            </button>
                        </div>
                    </div>
                </>
            ) : (
                <>
                    <div className="max-w-7xl mx-auto">
                        {/* Group Header */}
                        <div className="bg-white shadow overflow-hidden sm:rounded-lg">
                            <div className="relative h-64 sm:h-96">
                                <img
                                    src={group.image}
                                    alt={group.name}
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                                    <h1 className="text-4xl sm:text-5xl font-bold text-white">
                                        {group.name}
                                    </h1>
                                </div>
                            </div>

                            <div className="px-4 py-5 sm:px-6">
                                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
                                    <div>
                                        <h2 className="text-2xl font-bold text-gray-900">
                                            {group.name}
                                        </h2>
                                        <p className="mt-1 text-lg text-indigo-600">
                                            {group.category}
                                        </p>
                                    </div>
                                    <div>
                                        {isStartDatePassed ? (
                                            <div className="mt-4 sm:mt-0 px-6 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-500 bg-gray-100">
                                                This group is no longer active
                                            </div>
                                        ) : (
                                            <button
                                                onClick={handleJoinGroup}
                                                disabled={isJoining}
                                                className="mt-4 sm:mt-0 inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50 cursor-pointer"
                                            >
                                                {isJoining
                                                    ? "Joining..."
                                                    : "Join Group"}
                                            </button>
                                        )}
                                    </div>
                                </div>
                            </div>

                            <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
                                <dl className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
                                    <div className="sm:col-span-2">
                                        <dt className="text-sm font-medium text-gray-500">
                                            Description
                                        </dt>
                                        <dd className="mt-1 text-sm text-gray-900">
                                            {group.description}
                                        </dd>
                                    </div>

                                    <div>
                                        <dt className="text-sm font-medium text-gray-500">
                                            Location
                                        </dt>
                                        <dd className="mt-1 text-sm text-gray-900 flex items-center">
                                            <FaMapMarkerAlt className="mr-2 text-indigo-600" />
                                            {group.location}
                                        </dd>
                                    </div>

                                    <div>
                                        <dt className="text-sm font-medium text-gray-500">
                                            Start Date
                                        </dt>
                                        <dd className="mt-1 text-sm text-gray-900 flex items-center">
                                            <FaCalendarAlt className="mr-2 text-indigo-600" />
                                            {group.startDate}
                                        </dd>
                                    </div>

                                    <div>
                                        <dt className="text-sm font-medium text-gray-500">
                                            Members
                                        </dt>
                                        <dd className="mt-1 text-sm text-gray-900 flex items-center">
                                            <FaUsers className="mr-2 text-indigo-600" />
                                            {group.maxMembers}
                                        </dd>
                                    </div>

                                    <div>
                                        <dt className="text-sm font-medium text-gray-500">
                                            Created by
                                        </dt>
                                        <dd className="mt-1 text-sm text-gray-900 flex items-center">
                                            <FaUser className="mr-2 text-indigo-600" />
                                            {group.userEmail}
                                        </dd>
                                    </div>
                                </dl>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
};

export default GroupDetails;
