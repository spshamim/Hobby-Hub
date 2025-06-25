import { useState } from "react";
import { Link, useLoaderData } from "react-router";
import { FaUsers, FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";

const AllGroups = () => {
    const data = useLoaderData();
    const safeData = Array.isArray(data) ? data : [];
    const [groups, setGroups] = useState(safeData);
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("");

    const categories = [
        "All Categories",
        "Drawing & Painting",
        "Photography",
        "Video Gaming",
        "Fishing",
        "Running",
        "Cooking",
        "Reading",
        "Writing",
    ];

    const filteredGroups = groups.filter((group) => {
        const matchesSearch =
            group.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            group.description?.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCategory =
            selectedCategory === "All Categories" ||
            !selectedCategory ||
            group.category === selectedCategory;
        return matchesSearch && matchesCategory;
    });

    return (
        <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-12">
                    <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">
                        Discover Hobby Groups
                    </h1>
                    <p className="mt-3 text-xl text-gray-500">
                        Find and join groups that match your interests
                    </p>
                </div>

                {/* Search and Filter */}
                <div className="mb-8 flex flex-col sm:flex-row gap-4">
                    <div className="flex-1">
                        <input
                            type="text"
                            placeholder="Search groups..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                        />
                    </div>
                    <div className="w-full sm:w-64">
                        <select
                            value={selectedCategory}
                            onChange={(e) =>
                                setSelectedCategory(e.target.value)
                            }
                            className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                        >
                            {categories.map((category) => (
                                <option key={category} value={category}>
                                    {category}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>

                {/* Groups Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredGroups.map((group) => (
                        <div
                            key={group._id}
                            className="bg-white rounded-lg shadow-lg overflow-hidden"
                        >
                            <img
                                src={group.image}
                                alt={group.name}
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-6">
                                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                                    {group.name}
                                </h3>
                                <p className="text-indigo-600 font-medium mb-4">
                                    {group.category}
                                </p>
                                <div className="space-y-2 text-gray-600">
                                    <div className="flex items-center">
                                        <FaUsers className="mr-2" />
                                        <span>{group.maxMembers} Members</span>
                                    </div>
                                    <div className="flex items-center">
                                        <FaMapMarkerAlt className="mr-2" />
                                        <span>{group.location}</span>
                                    </div>
                                    <div className="flex items-center">
                                        <FaCalendarAlt className="mr-2" />
                                        <span>
                                            Starts{" "}
                                            {new Date(
                                                group.startDate
                                            ).toLocaleDateString()}
                                        </span>
                                    </div>
                                </div>
                                <Link
                                    to={`/group/${group._id}`}
                                    className="mt-4 block text-center bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700"
                                >
                                    View Details
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>

                {/* No Results */}
                {filteredGroups.length === 0 && (
                    <div className="text-center py-12">
                        <h3 className="text-lg font-medium text-gray-900">
                            No groups found
                        </h3>
                        <p className="mt-2 text-gray-500">
                            Try adjusting your search or filter criteria
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default AllGroups;
