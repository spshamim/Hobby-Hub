import { createBrowserRouter } from "react-router";
import Page404 from "../components/NotFound";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import MyGroups from "../pages/MyGroups";
import CreateGroup from "../pages/CreateGroup";
import GroupDetails from "../pages/GroupDetails";
import AllGroups from "../pages/AllGroups";
import axios from "axios";
import ForgotPassword from "../pages/ForgotPassword";
import PrivateRoute from "../hooks/PrivateRoute";
import PrivacyPolicy from "../pages/PrivacyPolicy";
import TermsAndConditions from "../pages/TermsAndConditions";
import FAQ from "../pages/FAQ";

const router = createBrowserRouter([
    {
        path: "/",
        Component: MainLayout,
        ErrorBoundary: Page404,
        children: [
            {
                index: true,
                loader: async () => {
                    try {
                        const response = await axios.get(
                            `${import.meta.env.VITE_API_URL}`
                        );
                        return response.data;
                    } catch (error) {
                        return error.response?.data || "Something went wrong";
                    }
                },
                Component: Home,
            },
            {
                path: "/login",
                Component: Login,
            },
            {
                path: "/register",
                Component: Register,
            },
            {
                path: "/my-groups",
                element: (
                    <PrivateRoute>
                        <MyGroups />
                    </PrivateRoute>
                ),
            },
            {
                path: "/create-group",
                element: (
                    <PrivateRoute>
                        <CreateGroup />
                    </PrivateRoute>
                ),
            },
            {
                path: "/group/:id",
                loader: async ({ params }) => {
                    try {
                        const response = await axios.get(
                            `${import.meta.env.VITE_API_URL}/${params.id}`
                        );
                        return response.data;
                    } catch (error) {
                        return error.response?.data || "Something went wrong";
                    }
                },
                element: (
                    <PrivateRoute>
                        <GroupDetails />
                    </PrivateRoute>
                ),
            },
            {
                path: "/all-groups",
                loader: async () => {
                    try {
                        const response = await axios.get(
                            `${import.meta.env.VITE_API_URL}`
                        );
                        return response.data;
                    } catch (error) {
                        return error.response?.data || "Something went wrong";
                    }
                },
                Component: AllGroups,
            },
            {
                path: "/forgot-password",
                Component: ForgotPassword,
            },
            {
                path: "/privacy-policy",
                Component: PrivacyPolicy,
            },
            {
                path: "/terms",
                Component: TermsAndConditions,
            },
            {
                path: "/faq",
                Component: FAQ,
            },
        ],
    },
]);

export default router;
