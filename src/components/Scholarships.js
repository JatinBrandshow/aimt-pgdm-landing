"use client";

import React from "react";
import { GraduationCap, TrendingUp, Award, Users } from "lucide-react";

const scholarshipTypes = [
    {
        icon: TrendingUp,
        title: "Merit-Based Scholarships",
        description: "For students with exceptional academic performance",
        eligibility: "Based on 10th, 12th & Graduation marks",
    },
    {
        icon: Award,
        title: "Entrance Exam Scholarships",
        description: "Rewards for high scores in CAT, MAT, XAT, CMAT",
        eligibility: "Percentile-based scholarships up to 100%",
    },
    {
        icon: Users,
        title: "Special Category Scholarships",
        description: "For girl child, sports quota, and defense personnel",
        eligibility: "As per institutional norms",
    },
    {
        icon: GraduationCap,
        title: "Early Bird Scholarships",
        description: "Apply early and get additional benefits",
        eligibility: "Valid for early applicants",
    },
];

const Scholarships = () => {
    return (
        <>
            <section className="py-12 bg-linear-to-br from-yellow-50 via-orange-50 to-yellow-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Section Header */}
                    <div className="text-center mb-16">
                        <div className="inline-block bg-yellow-500 text-gray-900 px-4 py-2 rounded-full mb-4 font-medium">
                            💰 Financial Aid Available
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Scholarships for Meritorious Students
                        </h2>
                        <p className="text-gray-600 max-w-3xl mx-auto text-lg">
                            Accurate believes in rewarding excellence. Scholarships are available based on academic
                            merit, entrance exam scores, and special categories.
                        </p>
                    </div>

                    {/* Scholarship Types */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                        {scholarshipTypes.map((scholarship, index) => {
                            const Icon = scholarship.icon;
                            return (
                                <div
                                    key={index}
                                    className="bg-white rounded-xl p-6 shadow-md hover:shadow-2xl transition-all duration-300 border border-yellow-200 hover:-translate-y-2 group"
                                >
                                    <div className="w-14 h-14 bg-linear-to-br from-yellow-500 to-orange-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-lg">
                                        <Icon className="w-7 h-7 text-white" />
                                    </div>
                                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{scholarship.title}</h3>
                                    <p className="text-gray-600 text-sm mb-3">{scholarship.description}</p>
                                    <div className="pt-3 border-t border-gray-100">
                                        <p className="text-xs text-gray-500">
                                            <strong>Eligibility:</strong> {scholarship.eligibility}
                                        </p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    {/* Scholarship Calculator CTA */}
                    {/* <div className="bg-linear-to-r from-yellow-500 to-orange-500 rounded-2xl p-8 md:p-12 shadow-2xl">
                        <div className="grid md:grid-cols-2 gap-8 items-center">
                            <div className="text-white">
                                <h3 className="text-2xl md:text-3xl font-bold mb-4">
                                    Check Your Scholarship Eligibility
                                </h3>
                                <p className="text-yellow-50 mb-6">
                                    Use our scholarship calculator to find out how much you can save on your PGDM
                                    education. Scholarships up to 100% tuition fee waiver available!
                                </p>
                                <ul className="space-y-2 text-yellow-50 text-sm">
                                    <li className="flex items-center gap-2">
                                        <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                                        Instant scholarship amount calculation
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                                        No obligation to apply
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                                        Get personalized advice
                                    </li>
                                </ul>
                            </div>

                            <div className="bg-white rounded-xl p-8 shadow-xl">
                                <div className="space-y-4">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-600 mb-2">
                                            Academic Percentage
                                        </label>
                                        <input
                                            type="number"
                                            placeholder="e.g., 75"
                                            className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-600 mb-2">
                                            Entrance Exam Percentile
                                        </label>
                                        <input
                                            type="number"
                                            placeholder="e.g., 85"
                                            className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                                        />
                                    </div>

                                    <button className="w-full bg-linear-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white font-semibold py-3 rounded-lg shadow-md transition-all">
                                        🎓 Calculate My Scholarship
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div> */}
                </div>
            </section>
        </>
    );
};

export default Scholarships;
