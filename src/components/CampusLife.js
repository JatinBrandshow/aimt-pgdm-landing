"use client";

import React from "react";
import Image from "next/image";
import { Wifi, Building, Home, BookOpen, Dumbbell, Award, BedDouble } from "lucide-react";

const facilities = [
    {
        icon: Wifi,
        title: "24×7 Wi-Fi Campus",
        description: "Stay connected with high-speed internet",
    },
    {
        icon: Building,
        title: "Modern Classrooms",
        description: "Smart classrooms with latest technology",
    },
    {
        icon: Home,
        title: "In-Campus Hostel",
        description: "Comfortable accommodation with amenities",
    },
    {
        icon: BedDouble,
        title: "Hostel Accommodation",
        description: "Secure, homely, and warm environment for students to stay and study comfortably.",
    },
    {
        icon: BookOpen,
        title: "Library with 15,000+ Titles",
        description: "Digital & physical resources",
    },
    {
        icon: Dumbbell,
        title: "Sports Facilities",
        description: "Indoor & outdoor sports complex",
    },
];
const CampusLife = () => {
    return (
        <>
            <section className="py-12 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Section Header */}
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center bg-green-100 text-green-700 px-4 py-1.5 rounded-full text-sm font-medium mb-4">
                            <Award className="w-4 h-4 mr-2" />
                            Life @ Accurate (Campus & Infrastructure)
                        </div>

                        <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-4">
                            A Green Campus Designed for Growth
                        </h2>
                        <p className="text-gray-600 max-w-3xl mx-auto text-lg">
                            Spread over 16+ acres, the Accurate campus fosters innovation and collaboration.
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
                        {/* Image Section */}
                        <div className="order-2 lg:order-1">
                            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                                <Image
                                    src="/image/campus/campus-life.webp"
                                    alt="Green Campus"
                                    width={1080}
                                    height={600}
                                    className="w-full h-[500px] object-cover"
                                />
                                <div className="absolute inset-0 bg-linear-to-t from-green-900/30 to-transparent"></div>

                                {/* Campus Size Badge */}
                                <div className="absolute bottom-6 left-6 bg-white rounded-xl shadow-xl p-4">
                                    <div className="text-3xl text-green-600 font-semibold mb-1">16+ Acres</div>
                                    <div className="text-sm text-gray-600">Lush Green Campus</div>
                                </div>
                            </div>
                        </div>

                        {/* Facilities Section */}
                        <div className="order-1 lg:order-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {facilities.map((facility, index) => {
                                const Icon = facility.icon;
                                return (
                                    <div
                                        key={index}
                                        className="bg-linear-to-br from-gray-50 to-white rounded-xl p-6 border border-gray-200 hover:border-green-300 hover:shadow-lg transition-all duration-300 group"
                                    >
                                        <div className="w-12 h-12 bg-linear-to-br from-green-500 to-emerald-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-md">
                                            <Icon className="w-6 h-6 text-white" />
                                        </div>
                                        <h4 className="text-gray-900 font-semibold mb-2">{facility.title}</h4>
                                        <p className="text-gray-600 text-sm">{facility.description}</p>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    {/* Virtual Tour Section */}
                    <div className="text-center bg-linear-to-r from-green-50 to-emerald-50 rounded-2xl p-8 border border-green-100">
                        <h3 className="text-2xl font-semibold text-gray-900 mb-3">Experience Our Campus Virtually</h3>
                        <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                            Take a 360° virtual tour of our state-of-the-art facilities and see where your future
                            begins.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors shadow-md">
                                📹 Start Virtual Tour
                            </button>
                            <button className="px-6 py-3 bg-white hover:bg-gray-50 text-gray-900 rounded-lg transition-colors border border-gray-200 shadow-sm">
                                📸 View Photo Gallery
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default CampusLife;
