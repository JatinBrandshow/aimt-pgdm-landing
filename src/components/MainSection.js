"use client";

import React from "react";
import Image from "next/image";
import { GraduationCap, Globe, Briefcase, Award, Download, ArrowRight } from "lucide-react";

const MainSection = () => {
    const scrollToForm = () => {
        document.getElementById("enquiry-form")?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <>
            <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
                {/* --- Background Image --- */}
                <div className="absolute inset-0 z-0 overflow-hidden">
                    {/* Background Video */}
                    <video autoPlay loop muted playsInline className="w-full h-full object-cover">
                        <source src="/video/accurate-video.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-linear-to-r from-black-65 via-blue-800/60 to-black-70"></div>
                </div>

                {/* --- Content --- */}
                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
                    <div className="space-y-8">
                        {/* Headline */}
                        <div className="space-y-4">
                            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white max-w-4xl mx-auto leading-tight">
                                Transform Your Future with a Top-Ranked{" "}
                                <span className="text-yellow-400">PGDM Programme</span>
                            </h1>
                            <p className="text-blue-100 max-w-3xl mx-auto text-lg sm:text-xl">
                                2-Year Full-Time | AICTE Approved | 100% Placement | Dual Specialisation | International
                                Exposure | Value Added Industry Focused Cirtifications
                            </p>
                        </div>

                        {/* CTA Buttons */}
                        <div className="flex gap-4 justify-center items-center">
                            <button
                                onClick={scrollToForm}
                                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-semibold rounded-lg shadow-md transition duration-300 max-sm:px-4 max-sm:py-2.5 max-sm:text-base"
                            >
                                <GraduationCap className="w-5 h-5" />
                                Apply Now
                                <ArrowRight className="w-5 h-5" />
                            </button>

                            <button className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-lg border border-white/30 backdrop-blur-sm transition duration-300 max-sm:px-4 max-sm:py-2.5 max-sm:text-base">
                                <Download className="w-5 h-5" />
                                Download Brochure
                            </button>
                        </div>

                        {/* Micro Highlights */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto pt-8">
                            <div className="flex items-center justify-center gap-3 text-white bg-white/10 backdrop-blur-sm rounded-lg p-3 border border-white/20">
                                <Award className="w-6 h-6 text-yellow-400 shrink-0" />
                                <span className="text-sm sm:text-base font-medium">Award-Winning Institution</span>
                            </div>
                            <div className="flex items-center justify-center gap-3 text-white bg-white/10 backdrop-blur-sm rounded-lg p-3 border border-white/20">
                                <Globe className="w-6 h-6 text-yellow-400 shrink-0" />
                                <span className="text-sm sm:text-base font-medium">Global Learning Exposure</span>
                            </div>
                            <div className="flex items-center justify-center gap-3 text-white bg-white/10 backdrop-blur-sm rounded-lg p-3 border border-white/20">
                                <Briefcase className="w-6 h-6 text-yellow-400 shrink-0" />
                                <span className="text-sm sm:text-base font-medium">100% Placement Track Record</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* --- Scroll Indicator --- */}
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
                    <div className="animate-bounce">
                        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
                            <div className="w-1 h-3 bg-white/70 rounded-full"></div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default MainSection;
