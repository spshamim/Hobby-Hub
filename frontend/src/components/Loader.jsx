import React from "react";

export default function Loader() {
    return (
        <div className="h-screen flex justify-center items-center">
            <div className="w-20 h-20 border-4 border-dashed rounded-full animate-spin dark:border-violet-600"></div>
        </div>
    );
}
