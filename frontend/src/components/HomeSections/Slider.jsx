import React from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Link } from "react-router";

export default function Slider() {
    return (
        <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={0}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000 }}
            className="h-[500px]"
        >
            <SwiperSlide>
                <div className="relative h-full">
                    <img
                        src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80"
                        alt="Group Activity"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/50 dark:bg-black/60 flex items-center justify-center transition-colors duration-200">
                        <div className="text-center text-white">
                            <h1 className="text-4xl md:text-6xl font-bold mb-4">
                                Discover Your Passion
                            </h1>
                            <p className="text-xl md:text-2xl mb-8">
                                Join local hobby groups and connect with
                                like-minded people
                            </p>
                            <Link
                                to="/all-groups"
                                className="bg-indigo-600 dark:bg-indigo-500 text-white px-8 py-3 rounded-md text-lg font-medium hover:bg-indigo-700 dark:hover:bg-indigo-600 transition-colors duration-200"
                            >
                                Explore Groups
                            </Link>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="relative h-full">
                    <img
                        src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80"
                        alt="Team Collaboration"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/50 dark:bg-black/60 flex items-center justify-center transition-colors duration-200">
                        <div className="text-center text-white">
                            <h1 className="text-4xl md:text-6xl font-bold mb-4">
                                Share Your Interests
                            </h1>
                            <p className="text-xl md:text-2xl mb-8">
                                Create and manage your own hobby groups
                            </p>
                            <Link
                                to="/create-group"
                                className="bg-indigo-600 dark:bg-indigo-500 text-white px-8 py-3 rounded-md text-lg font-medium hover:bg-indigo-700 dark:hover:bg-indigo-600 transition-colors duration-200"
                            >
                                Create Group
                            </Link>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="relative h-full">
                    <img
                        src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80"
                        alt="Community Meeting"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/50 dark:bg-black/60 flex items-center justify-center transition-colors duration-200">
                        <div className="text-center text-white">
                            <h1 className="text-4xl md:text-6xl font-bold mb-4">
                                Connect & Collaborate
                            </h1>
                            <p className="text-xl md:text-2xl mb-8">
                                Find your community and grow together
                            </p>
                            <Link
                                to="/login"
                                className="bg-indigo-600 dark:bg-indigo-500 text-white px-8 py-3 rounded-md text-lg font-medium hover:bg-indigo-700 dark:hover:bg-indigo-600 transition-colors duration-200"
                            >
                                Join Now
                            </Link>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
        </Swiper>
    );
}
