"use client";

import { FileCheck, Gamepad2, Lightbulb, MessageSquare, Presentation, Trophy } from "lucide-react";
import React from "react";

const features = [
    {
        icon: Presentation,
        title: "Live Industry Projects & Guest Lectures",
        description: "Engage with real business challenges and learn from industry leaders",
    },
    {
        icon: Trophy,
        title: "Capstone Projects in Final Year",
        description: "Demonstrate your expertise through comprehensive strategic projects",
    },
    {
        icon: Lightbulb,
        title: "Workshops on Leadership & Entrepreneurship",
        description: "Develop essential skills for future business leaders and innovators",
    },
    {
        icon: Gamepad2,
        title: "Business Simulation Games",
        description: "Practice decision-making in risk-free virtual business environments",
    },
    {
        icon: MessageSquare,
        title: "Soft Skills & Communication Training",
        description: "Master presentation, negotiation, and interpersonal skills",
    },
    {
        icon: FileCheck,
        title: "Certification Modules",
        description: "Digital Marketing, Excel, Analytics Tools, and more",
    },
];

const ProgrammeFeatures = () => {
    return (
        <>
            <section className="py-12 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* --- Section Header --- */}
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Learn Beyond Classrooms</h2>
                        <p className="text-gray-600 max-w-3xl mx-auto text-lg">
                            Our PGDM curriculum focuses on holistic learning through experiential methods — case
                            studies, simulation labs, internships, and corporate mentoring.
                        </p>
                    </div>

                    {/* --- Features Grid --- */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {features.map((feature, index) => {
                            const Icon = feature.icon;
                            return (
                                <div key={index} className="relative group">
                                    {/* Card */}
                                    <div className="bg-linear-to-br from-gray-50 to-white rounded-xl p-6 h-full border border-gray-200 group-hover:border-blue-300 transition-all duration-300 group-hover:shadow-lg">
                                        <div className="flex items-start gap-4">
                                            <div className="w-12 h-12 bg-linear-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform shadow-md">
                                                <Icon className="w-6 h-6 text-white" />
                                            </div>
                                            <div className="flex-1">
                                                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                                                    {feature.title}
                                                </h3>
                                                <p className="text-gray-600 text-sm leading-relaxed">
                                                    {feature.description}
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Animated Accent Line */}
                                    <div className="absolute bottom-0 left-0 w-0 h-1 bg-linear-to-r from-blue-500 to-indigo-600 group-hover:w-full transition-all duration-500 rounded-b-xl"></div>
                                </div>
                            );
                        })}
                    </div>

                    {/* --- Bottom CTA --- */}
                    <div className="mt-12 text-center">
                        <div className="inline-block bg-linear-to-r from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-100">
                            <p className="text-gray-700">
                                <strong>Experiential Learning:</strong> 60% of curriculum is hands-on and project-based
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ProgrammeFeatures;
