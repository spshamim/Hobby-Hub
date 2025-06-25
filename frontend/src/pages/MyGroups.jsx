import { useState, use, useEffect } from "react";
import { Link } from "react-router";
import {
    FaUsers,
    FaCalendarAlt,
    FaMapMarkerAlt,
    FaEdit,
    FaTrash,
} from "react-icons/fa";
import toast from "react-hot-toast";
import { AuthContext } from "../hooks/AuthProvider";
import axios from "axios";
import { RxCross1 } from "react-icons/rx";

const MyGroups = () => {
    const [groups, setGroups] = useState([]);
    const { user } = use(AuthContext);
    const [error, setError] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    const [selectedGroup, setSelectedGroup] = useState(null);
    const [loading, setLoading] = useState(false);
    const [deleteLoading, setDeleteLoading] = useState(false);

    const categories = [
        "Drawing & Painting",
        "Photography",
        "Video Gaming",
        "Fishing",
        "Running",
        "Cooking",
        "Reading",
        "Writing",
        "Music",
        "Dancing",
        "Yoga",
        "Chess",
        "Gardening",
        "Hiking",
        "Cycling",
    ];

    useEffect(() => {
        const fetchGroups = async () => {
            try {
                const response = await axios.get(
                    `${import.meta.env.VITE_API_URL}/user/${user.uid}`
                );
                setGroups(response.data);
            } catch (error) {
                setError(
                    error.response?.data?.error?.message ||
                        "An error occurred while fetching groups"
                );
            }
        };
        fetchGroups();
    }, [user]);

    const handleEdit = (group) => {
        setSelectedGroup(group);
        setIsModalOpen(true);
    };

    const handleUpdate = async (e) => {
        e.preventDefault();
        if (!selectedGroup) return;

        try {
            setLoading(true);
            const { _id, ...updateData } = selectedGroup;

            const response = await axios.put(
                `${import.meta.env.VITE_API_URL}/${_id}`,
                updateData
            );

            if (response.data?.modifiedCount > 0) {
                setGroups(
                    groups.map((group) =>
                        group._id === selectedGroup._id ? selectedGroup : group
                    )
                );
                toast.success("Group updated successfully!");
                setIsModalOpen(false);
            } else {
                toast.error("Failed to update group");
            }
        } catch (error) {
            toast.error(
                error.response?.data?.error?.message || "Failed to update group"
            );
        } finally {
            setLoading(false);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setSelectedGroup((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleDelete = (group) => {
        setSelectedGroup(group);
        setIsDeleteModalOpen(true);
    };

    const confirmDelete = async () => {
        if (!selectedGroup) return;

        try {
            setDeleteLoading(true);
            const response = await axios.delete(
                `${import.meta.env.VITE_API_URL}/${selectedGroup._id}`
            );

            if (response.data?.deletedCount > 0) {
                setGroups(
                    groups.filter((group) => group._id !== selectedGroup._id)
                );
                toast.success("Group deleted successfully!");
                setIsDeleteModalOpen(false);
            } else {
                toast.error("Failed to delete group");
            }
        } catch (error) {
            toast.error(
                error.response?.data?.error?.message || "Failed to delete group"
            );
        } finally {
            setDeleteLoading(false);
        }
    };

    return (
        <>
            <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    {/* Header */}
                    <div className="sm:flex sm:items-center sm:justify-between mb-8">
                        <div>
                            <h1 className="text-3xl font-bold text-gray-900">
                                My Groups
                            </h1>
                            <p className="mt-2 text-sm text-gray-700">
                                Manage the groups you've created
                            </p>
                        </div>
                        <div className="mt-4 sm:mt-0">
                            <Link
                                to="/create-group"
                                className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                                Create New Group
                            </Link>
                        </div>
                    </div>

                    {/* Groups Table */}
                    <div className="bg-white shadow overflow-hidden sm:rounded-lg">
                        <div className="overflow-x-auto">
                            <table className="min-w-full divide-y divide-gray-200">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                        >
                                            Group
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                        >
                                            Category
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                        >
                                            Max Members
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                        >
                                            Location
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                        >
                                            Start Date
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider"
                                        >
                                            Actions
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200">
                                    {groups.map((group) => (
                                        <tr key={group._id}>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="flex items-center">
                                                    <div className="h-10 w-10 flex-shrink-0">
                                                        <img
                                                            className="h-10 w-10 rounded-full object-cover"
                                                            src={group.image}
                                                            alt={group.name}
                                                        />
                                                    </div>
                                                    <div className="ml-4">
                                                        <div className="text-sm font-medium text-gray-900">
                                                            {group.name}
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="text-sm text-gray-900">
                                                    {group.category}
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="flex items-center text-sm text-gray-900">
                                                    <FaUsers className="mr-2 text-indigo-600" />
                                                    {group.maxMembers}
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="flex items-center text-sm text-gray-900">
                                                    <FaMapMarkerAlt className="mr-2 text-indigo-600" />
                                                    {group.location}
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="flex items-center text-sm text-gray-900">
                                                    <FaCalendarAlt className="mr-2 text-indigo-600" />
                                                    {new Date(
                                                        group.startDate
                                                    ).toLocaleDateString()}
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                                <div className="flex justify-end space-x-3">
                                                    <button
                                                        onClick={() =>
                                                            handleEdit(group)
                                                        }
                                                        className="text-indigo-600 hover:text-indigo-900 cursor-pointer"
                                                    >
                                                        <FaEdit className="h-5 w-5" />
                                                    </button>
                                                    <button
                                                        onClick={() =>
                                                            handleDelete(group)
                                                        }
                                                        className="text-red-600 hover:text-red-900 cursor-pointer"
                                                    >
                                                        <FaTrash className="h-5 w-5" />
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        {/* No Groups */}
                        {groups.length === 0 && (
                            <div className="text-center py-12">
                                <h3 className="text-lg font-medium text-gray-900">
                                    {error || "No groups found"}
                                </h3>
                                <p className="mt-2 text-gray-500">
                                    You haven't created any groups yet. Get
                                    started by creating your first group!
                                </p>
                                <div className="mt-6">
                                    <Link
                                        to="/create-group"
                                        className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                    >
                                        Create New Group
                                    </Link>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* Edit Modal */}
            <div
                className={`${
                    isModalOpen ? "visible opacity-100" : "invisible opacity-0"
                } w-full h-screen fixed top-0 left-0 z-[200000000] bg-[#0000002a] transition-all duration-300 flex items-center justify-center`}
            >
                <div
                    className={`${
                        isModalOpen
                            ? "scale-100 opacity-100"
                            : "scale-95 opacity-0"
                    } w-[90%] sm:w-[80%] md:w-[35%] bg-[#fff] rounded-lg transition-all duration-300 mx-auto mt-8 max-h-[90vh] overflow-y-auto`}
                >
                    <div className="w-full flex items-end p-4 justify-between border-b border-[#d1d1d1]">
                        <h1 className="text-[1.5rem] font-bold">Edit Group</h1>
                        <RxCross1
                            className="p-2 text-[2.5rem] hover:bg-[#e7e7e7] rounded-full transition-all duration-300 cursor-pointer"
                            onClick={() => setIsModalOpen(false)}
                        />
                    </div>

                    {selectedGroup && (
                        <form
                            onSubmit={handleUpdate}
                            className="flex flex-col gap-5 p-4"
                        >
                            <div>
                                <label className="text-[1rem] font-[500] text-[#464646]">
                                    Group Name
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    value={selectedGroup.name}
                                    onChange={handleChange}
                                    className="py-2 px-3 border border-[#d1d1d1] rounded-md w-full focus:outline-none mt-1 focus:border-[#3B9DF8]"
                                />
                            </div>

                            <div>
                                <label className="text-[1rem] font-[500] text-[#464646]">
                                    Category
                                </label>
                                <select
                                    name="category"
                                    value={selectedGroup.category}
                                    onChange={handleChange}
                                    className="py-2 px-3 border border-[#d1d1d1] rounded-md w-full focus:outline-none mt-1 focus:border-[#3B9DF8]"
                                >
                                    {categories.map((category) => (
                                        <option key={category} value={category}>
                                            {category}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            <div>
                                <label className="text-[1rem] font-[500] text-[#464646]">
                                    Description
                                </label>
                                <textarea
                                    name="description"
                                    value={selectedGroup.description}
                                    onChange={handleChange}
                                    rows={4}
                                    className="py-2 px-3 border border-[#d1d1d1] rounded-md w-full focus:outline-none mt-1 focus:border-[#3B9DF8]"
                                />
                            </div>

                            <div>
                                <label className="text-[1rem] font-[500] text-[#464646]">
                                    Location
                                </label>
                                <input
                                    type="text"
                                    name="location"
                                    value={selectedGroup.location}
                                    onChange={handleChange}
                                    className="py-2 px-3 border border-[#d1d1d1] rounded-md w-full focus:outline-none mt-1 focus:border-[#3B9DF8]"
                                />
                            </div>

                            <div>
                                <label className="text-[1rem] font-[500] text-[#464646]">
                                    Maximum Members
                                </label>
                                <input
                                    type="number"
                                    name="maxMembers"
                                    value={selectedGroup.maxMembers}
                                    onChange={handleChange}
                                    min="2"
                                    className="py-2 px-3 border border-[#d1d1d1] rounded-md w-full focus:outline-none mt-1 focus:border-[#3B9DF8]"
                                />
                            </div>

                            <div>
                                <label className="text-[1rem] font-[500] text-[#464646]">
                                    Start Date
                                </label>
                                <input
                                    type="date"
                                    name="startDate"
                                    value={selectedGroup.startDate}
                                    onChange={handleChange}
                                    className="py-2 px-3 border border-[#d1d1d1] rounded-md w-full focus:outline-none mt-1 focus:border-[#3B9DF8]"
                                />
                            </div>

                            <div>
                                <label className="text-[1rem] font-[500] text-[#464646]">
                                    Image URL
                                </label>
                                <input
                                    type="url"
                                    name="image"
                                    value={selectedGroup.image}
                                    onChange={handleChange}
                                    className="py-2 px-3 border border-[#d1d1d1] rounded-md w-full focus:outline-none mt-1 focus:border-[#3B9DF8]"
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={loading}
                                className="py-2 px-4 w-full bg-[#0776de] text-[#fff] rounded-md hover:bg-[#2d8ce0f3] transition-colors disabled:opacity-50 cursor-pointer"
                            >
                                {loading ? "Updating..." : "Update Group"}
                            </button>
                        </form>
                    )}
                </div>
            </div>

            {/* Delete Confirmation Modal */}
            <div
                className={`${
                    isDeleteModalOpen
                        ? "scale-100 opacity-100"
                        : "scale-0 opacity-0"
                } w-full h-screen fixed top-0 left-0 z-[200000000] bg-[#0000002a] flex items-center justify-center transition-all duration-300`}
            >
                <div className={`w-[90%] md:w-[30%] bg-white rounded-lg p-4`}>
                    <div className="w-full flex justify-between">
                        <div>
                            <h2 className="text-[1.7rem] font-[500] text-[#202020]">
                                Are you sure about it?
                            </h2>
                            <p className="text-[1rem] text-[#525252]">
                                You can't undo this action
                            </p>
                        </div>

                        <RxCross1
                            className="p-2 text-[2.5rem] hover:bg-[#e7e7e7] rounded-full transition-all duration-300 cursor-pointer"
                            onClick={() => setIsDeleteModalOpen(false)}
                        />
                    </div>

                    <div className="flex items-center gap-2 md:gap-3 w-full justify-end mt-6">
                        <button
                            className="px-4 py-2 hover:bg-gray-100 border border-[#a8a8a8] rounded-lg text-[#585858] cursor-pointer"
                            onClick={() => setIsDeleteModalOpen(false)}
                            disabled={deleteLoading}
                        >
                            Cancel
                        </button>
                        <button
                            className="px-4 py-2 bg-red-500 rounded-lg text-[#fff] hover:bg-red-600 transition-colors disabled:opacity-50 cursor-pointer"
                            onClick={confirmDelete}
                            disabled={deleteLoading}
                        >
                            {deleteLoading ? "Deleting..." : "Delete"}
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default MyGroups;
