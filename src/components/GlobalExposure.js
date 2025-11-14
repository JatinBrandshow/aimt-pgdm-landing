"use client";

import React from "react";
import Image from "next/image";
import { Globe, Plane, Users, TrendingUp } from "lucide-react";

const destinations = [
    { name: "Singapore", image: "/image/global-exposure/flag/singapore.webp" },
    { name: "New Zealand", image: "/image/global-exposure/flag/new-zealand.webp" },
    { name: "Malaysia", image: "/image/global-exposure/flag/malaysia.webp" },
    // { name: "Thailand", image: "/image/global-exposure/flag/thailand.webp" },
];

const benefits = [
    {
        icon: Globe,
        title: "Cross-Cultural Understanding",
        description: "Develop a global mindset through international exposure",
    },
    {
        icon: Users,
        title: "Network with Global Leaders",
        description: "Connect with industry professionals worldwide",
    },
    {
        icon: TrendingUp,
        title: "Learn Best Practices",
        description: "Understand global business strategies and operations",
    },
];

const GlobalExposure = () => {
    return (
        <>
            <section className="py-16 bg-linear-to-br from-blue-900 via-indigo-900 to-blue-900 text-white relative overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                    <div
                        className="absolute inset-0"
                        style={{
                            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                        }}
                    ></div>
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-6 items-center">
                        {/* --- Left Content --- */}
                        <div className="space-y-8">
                            <div>
                                {/* Badge Replacement */}
                                <span className="inline-block mb-4 px-4 py-1 text-sm font-medium rounded-full bg-yellow-500 text-gray-900">
                                    Global Immersion Programme
                                </span>

                                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                                    Experience the World of Global Business
                                </h2>

                                <p className="text-blue-100 text-lg">
                                    Gain international exposure through our{" "}
                                    <strong className="text-yellow-400">Global Immersion Study Tour</strong> to
                                    destinations such as Singapore, Malaysia or New Zealand. Students interact with
                                    global faculty and industry professionals, broadening their cross-cultural
                                    understanding.
                                </p>
                            </div>

                            {/* Destinations */}
                            <div>
                                <div className="text-sm text-blue-200 mb-3">Study Tour Destinations</div>
                                <div className="flex flex-wrap gap-3">
                                    {destinations.map((dest, index) => (
                                        <div
                                            key={index}
                                            className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2 border border-white/20 flex items-center gap-3 hover:bg-white/20 transition-colors"
                                        >
                                            <Image
                                                src={dest.image}
                                                alt={`${dest.name} flag`}
                                                width={28}
                                                height={20}
                                                className="rounded-sm object-contain"
                                            />
                                            <span className="text-white text-sm">{dest.name}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Benefits */}
                            <div className="space-y-4">
                                {benefits.map((benefit, index) => {
                                    const Icon = benefit.icon;
                                    return (
                                        <div
                                            key={index}
                                            className="flex items-start gap-4 bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10"
                                        >
                                            <div className="w-10 h-10 bg-yellow-500 rounded-lg flex items-center justify-center shrink-0">
                                                <Icon className="w-5 h-5 text-gray-900" />
                                            </div>
                                            <div>
                                                <h4 className="text-white font-semibold mb-1">{benefit.title}</h4>
                                                <p className="text-blue-200 text-sm">{benefit.description}</p>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>

                        {/* --- Right Image Section --- */}
                        <div className="relative">
                            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white/20">
                                <Image
                                    src="/image/global-exposure/global-immersion-program-2025.webp"
                                    alt="Global Business Experience"
                                    width={600}
                                    height={500}
                                    className="w-full h-[500px] object-cover"
                                />
                            </div>

                            {/* Floating Icon */}
                            <div className="absolute -top-6 -right-6 w-20 h-20 bg-yellow-500 rounded-full flex items-center justify-center shadow-xl animate-bounce">
                                <Plane className="w-10 h-10 text-gray-900" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default GlobalExposure;
