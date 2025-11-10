"use client";

import { BarChart3, Building2, DollarSign, Globe, TrendingUp, Truck, Users } from "lucide-react";
import React from "react";

const specialisationsData = [
    {
        icon: TrendingUp,
        title: "Marketing Management",
        color: "from-pink-500 to-rose-500",
    },
    {
        icon: DollarSign,
        title: "Finance Management",
        color: "from-green-500 to-emerald-500",
    },
    {
        icon: BarChart3,
        title: "Business Analytics",
        color: "from-blue-500 to-cyan-500",
    },
    {
        icon: Users,
        title: "Human Resource Management",
        color: "from-purple-500 to-violet-500",
    },
    {
        icon: Globe,
        title: "International Business",
        color: "from-orange-500 to-amber-500",
    },
    {
        icon: Truck,
        title: "Operations & Supply Chain Management",
        color: "from-indigo-500 to-blue-500",
    },
    {
        icon: Building2,
        title: "Banking & Financial Services",
        color: "from-teal-500 to-green-500",
    },
];

const Specialisations = () => {
    return (
        <>
            <section className="py-12 bg-linear-to-b from-white to-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* --- Header --- */}
                    <div className="text-center mb-16">
                        {/* Tailwind Badge Replacement */}
                        <span className="inline-block mb-4 px-4 py-1 text-sm font-medium rounded-full bg-blue-100 text-blue-700">
                            Specialisations
                        </span>

                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Choose Your Path of Expertise
                        </h2>
                        <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                            Select from future-ready specialisations designed to match global business needs.
                        </p>
                    </div>

                    {/* --- Specialisations Grid --- */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {specialisationsData.map((spec, index) => {
                            const Icon = spec.icon;
                            return (
                                <div
                                    key={index}
                                    className="group relative bg-white rounded-xl p-8 shadow-sm hover:shadow-2xl transition-all duration-300 border border-gray-100 overflow-hidden cursor-pointer hover:-translate-y-2"
                                >
                                    {/* linear Background Hover Overlay */}
                                    <div
                                        className={`absolute inset-0 bg-linear-to-br ${spec.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
                                    ></div>

                                    <div className="relative z-10">
                                        <div
                                            className={`w-14 h-14 bg-linear-to-br ${spec.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-lg`}
                                        >
                                            <Icon className="w-7 h-7 text-white" />
                                        </div>
                                        <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                                            {spec.title}
                                        </h3>
                                    </div>

                                    {/* Hover Arrow Icon */}
                                    <div className="absolute bottom-4 right-4 w-8 h-8 bg-gray-100 group-hover:bg-blue-600 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                                        <svg
                                            className="w-4 h-4 text-gray-600 group-hover:text-white"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M9 5l7 7-7 7"
                                            />
                                        </svg>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    {/* --- Note --- */}
                    <div className="mt-12 text-center">
                        <p className="text-gray-600">
                            💡 Students can choose <strong>dual specialisations</strong> to broaden their career
                            opportunities.
                        </p>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Specialisations;
