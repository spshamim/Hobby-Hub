import { useState, use } from "react";
import { useNavigate } from "react-router";
import toast from "react-hot-toast";
import { AuthContext } from "../hooks/AuthProvider";
import axios from "axios";

const CreateGroup = () => {
    const { user } = use(AuthContext);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: "",
        category: "",
        description: "",
        location: "",
        maxMembers: "",
        startDate: "",
        image: "",
        userID: user?.uid,
        userEmail: user?.email,
    });

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

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const validateForm = () => {
        if (
            !formData.name ||
            !formData.category ||
            !formData.description ||
            !formData.location ||
            !formData.maxMembers ||
            !formData.startDate ||
            !formData.image
        ) {
            toast.error("Please fill in all required fields");
            return false;
        }
        return true;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validateForm()) return;

        try {
            setLoading(true);
            const response = await axios.post(
                `${import.meta.env.VITE_API_URL}`,
                formData
            );
            if (response.data?.insertedId) {
                navigate("/my-groups", { replace: true });
                toast.success(`Group created successfully: ${formData.name}`);
                e.target.reset();
            } else {
                toast.error("Group creation failed");
            }
        } catch (error) {
            if (!error.response?.data?.success) {
                toast.error(error.response?.data?.error?.message);
            } else {
                toast.error("Group creation failed");
            }
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
                <div className="bg-white shadow sm:rounded-lg">
                    <div className="px-4 py-5 sm:p-6">
                        <h3 className="text-2xl font-bold text-gray-900 mb-6">
                            Create a New Group
                        </h3>

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                                {/* Group Name */}
                                <div className="sm:col-span-2">
                                    <label
                                        htmlFor="name"
                                        className="block text-sm font-medium text-gray-700"
                                    >
                                        Group Name *
                                    </label>
                                    <input
                                        type="text"
                                        name="name"
                                        id="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    />
                                </div>

                                {/* Category */}
                                <div className="sm:col-span-2">
                                    <label
                                        htmlFor="category"
                                        className="block text-sm font-medium text-gray-700"
                                    >
                                        Hobby Category *
                                    </label>
                                    <select
                                        id="category"
                                        name="category"
                                        required
                                        value={formData.category}
                                        onChange={handleChange}
                                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    >
                                        <option value="">
                                            Select a category
                                        </option>
                                        {categories.map((category) => (
                                            <option
                                                key={category}
                                                value={category}
                                            >
                                                {category}
                                            </option>
                                        ))}
                                    </select>
                                </div>

                                {/* Description */}
                                <div className="sm:col-span-2">
                                    <label
                                        htmlFor="description"
                                        className="block text-sm font-medium text-gray-700"
                                    >
                                        Description *
                                    </label>
                                    <textarea
                                        id="description"
                                        name="description"
                                        rows={4}
                                        value={formData.description}
                                        onChange={handleChange}
                                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    />
                                </div>

                                {/* Meeting Location */}
                                <div className="sm:col-span-2">
                                    <label
                                        htmlFor="location"
                                        className="block text-sm font-medium text-gray-700"
                                    >
                                        Location *
                                    </label>
                                    <input
                                        type="text"
                                        name="location"
                                        id="location"
                                        value={formData.location}
                                        onChange={handleChange}
                                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    />
                                </div>

                                {/* Max Members */}
                                <div>
                                    <label
                                        htmlFor="maxMembers"
                                        className="block text-sm font-medium text-gray-700"
                                    >
                                        Maximum Members *
                                    </label>
                                    <input
                                        type="number"
                                        name="maxMembers"
                                        id="maxMembers"
                                        min="2"
                                        value={formData.maxMembers}
                                        onChange={handleChange}
                                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    />
                                </div>

                                {/* Start Date */}
                                <div>
                                    <label
                                        htmlFor="startDate"
                                        className="block text-sm font-medium text-gray-700"
                                    >
                                        Start Date *
                                    </label>
                                    <input
                                        type="date"
                                        name="startDate"
                                        id="startDate"
                                        value={formData.startDate}
                                        onChange={handleChange}
                                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    />
                                </div>

                                {/* Image URL */}
                                <div className="sm:col-span-2">
                                    <label
                                        htmlFor="image"
                                        className="block text-sm font-medium text-gray-700"
                                    >
                                        Group Image *
                                    </label>
                                    <input
                                        type="url"
                                        name="image"
                                        id="image"
                                        value={formData.image}
                                        onChange={handleChange}
                                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    />
                                </div>

                                {/* User Name (Readonly) */}
                                <div>
                                    <label
                                        htmlFor="userID"
                                        className="block text-sm font-medium text-gray-700"
                                    >
                                        Your UID
                                    </label>
                                    <input
                                        type="text"
                                        name="userID"
                                        id="userID"
                                        readOnly
                                        value={formData.userID}
                                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 bg-gray-50 sm:text-sm text-gray-600 cursor-not-allowed"
                                    />
                                </div>

                                {/* User Email (Readonly) */}
                                <div>
                                    <label
                                        htmlFor="userEmail"
                                        className="block text-sm font-medium text-gray-700"
                                    >
                                        Your Email
                                    </label>
                                    <input
                                        type="email"
                                        name="userEmail"
                                        id="userEmail"
                                        readOnly
                                        value={formData.userEmail}
                                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 bg-gray-50 sm:text-sm text-gray-600 cursor-not-allowed"
                                    />
                                </div>
                            </div>

                            <div className="flex justify-end">
                                <button
                                    type="submit"
                                    className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 cursor-pointer"
                                >
                                    {loading ? "Creating..." : "Create Group"}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CreateGroup;
