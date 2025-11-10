"use client";

import { Award, BarChart, BookOpen, Briefcase, Globe, GraduationCap, Laptop, Users } from "lucide-react";
import React from "react";

const highlights = [
    {
        icon: GraduationCap,
        title: "Industry Oriented Certifications",
        description: "Choose two complementary areas to enhance your expertise",
    },
    {
        icon: Globe,
        title: "International Study Tour for Global Learning",
        description: "Experience global business practices firsthand",
    },
    {
        icon: GraduationCap,
        title: "Dual Specialisation Options",
        description: "Choose two complementary areas to enhance your expertise",
    },
    {
        icon: BookOpen,
        title: "Industry-Linked Curriculum",
        description: "Stay ahead with market-relevant course content",
    },
    {
        icon: Briefcase,
        title: "100% Placement",
        description: "Dedicated support until you land your dream job",
    },
    {
        icon: Users,
        title: "Global Faculty & Mentorship",
        description: "Learn from industry veterans and academic experts",
    },
    {
        icon: BarChart,
        title: "Live Projects & Case Studies",
        description: "Apply theory to real-world business challenges",
    },
    {
        icon: Laptop,
        title: "Laptop for Every Student",
        description: "Personal laptop provided to ensure seamless learning",
    },
    // {
    //     icon: Award,
    //     title: "Value-Added Certifications",
    //     description: "R, Python, Digital Marketing, SAP, Excel & more",
    // },
];

const WhyChooseUs = () => {
    return (
        <>
            <section className="py-12 bg-linear-to-b from-gray-50 to-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* --- Header --- */}
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Why Students Choose Accurate for Their PGDM Journey
                        </h2>
                        <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
                            At Accurate Institute of Management & Technology, we believe in nurturing leaders who can
                            make a global impact. Our industry-driven curriculum, international exposure, and dynamic
                            learning environment prepare you for tomorrow&apos;s business challenges.
                        </p>
                    </div>

                    {/* --- Highlights Grid --- */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {highlights.map((highlight, index) => {
                            const Icon = highlight.icon;
                            return (
                                <div
                                    key={index}
                                    className="bg-white rounded-xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-200 hover:-translate-y-1 group"
                                >
                                    <div className="w-12 h-12 bg-linear-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-md">
                                        <Icon className="w-6 h-6 text-white" />
                                    </div>
                                    <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                                        {highlight.title}
                                    </h3>
                                    <p className="text-gray-600 text-sm leading-relaxed">{highlight.description}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>
        </>
    );
};

export default WhyChooseUs;
