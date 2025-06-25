import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router";
import router from "./routes/Router";
import AuthProvider from "./hooks/AuthProvider";
import { Toaster } from "react-hot-toast";

createRoot(document.getElementById("root")).render(
    <>
        <AuthProvider>
            <RouterProvider router={router} />
        </AuthProvider>
        <Toaster position="top-right" />
    </>
);
