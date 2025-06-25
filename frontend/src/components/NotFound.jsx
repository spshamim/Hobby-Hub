import React from "react";
import { Link } from "react-router";

const Page404 = () => {
    return (
        <div className="boxShadow px-10 w-full flex items-center flex-col justify-center py-20 rounded-xl h-screen">
            <img
                src="https://i.ibb.co/SVMTKPy/Frame-5.png"
                alt="illustration"
                className="w-full lg:w-[400px]"
            />
            <p className="text-[#73718A] text-[0.9rem] sm:text-[1.2rem] w-full lg:w-[55%] text-center mt-10 lg:mt-4">
                The page cannot be found. The requested URL was not found on
                this server.
            </p>

            <Link
                className="py-3 px-8 rounded-full bg-[#4538FF] text-white mt-8"
                to={"/"}
            >
                Back to home
            </Link>
        </div>
    );
};

export default Page404;
