import { use } from "react";
import { AuthContext } from "./AuthProvider";
import { Navigate, useLocation } from "react-router";
import Loader from "../components/Loader";

export default function PrivateRoute({ children }) {
    const { user, loading } = use(AuthContext);
    const location = useLocation();

    if (loading) return <Loader />;
    if (!user || !user?.email)
        return <Navigate to="/login" state={{ from: location }} />;
    return children;
}
