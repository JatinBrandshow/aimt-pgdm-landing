"use client";

import React from "react";
import Image from "next/image";
import { Clock, GraduationCap, MapPin } from "lucide-react";

const ProgrammeOverview = () => {
    return (
        <>
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        {/* --- Left Content --- */}
                        <div className="space-y-6">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">About the PGDM Programme</h2>

                            <p className="text-gray-600 text-lg leading-relaxed">
                                The <strong>Post Graduate Diploma in Management (PGDM)</strong> is a two-year, full-time
                                program approved by the <strong>AICTE, Ministry of Education, Govt. of India</strong>.
                                Designed with inputs from industry experts, the programme blends strong academic
                                fundamentals with practical corporate exposure, preparing students for leadership roles
                                across business functions.
                            </p>

                            {/* --- Quick Facts --- */}
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6">
                                <div className="bg-linear-to-br from-blue-50 to-indigo-50 rounded-lg p-6 border border-blue-100">
                                    <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center mb-3">
                                        <Clock className="w-5 h-5 text-white" />
                                    </div>
                                    <div className="text-xs text-gray-500 mb-1">Duration</div>
                                    <div className="text-gray-900 font-medium">2 Years Full Time</div>
                                </div>

                                <div className="bg-linear-to-br from-blue-50 to-indigo-50 rounded-lg p-6 border border-blue-100">
                                    <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center mb-3">
                                        <GraduationCap className="w-5 h-5 text-white" />
                                    </div>
                                    <div className="text-xs text-gray-500 mb-1">Eligibility</div>
                                    <div className="text-gray-900 font-medium">Bachelor's Degree (min. 50%)</div>
                                </div>

                                <div className="bg-linear-to-br from-blue-50 to-indigo-50 rounded-lg p-6 border border-blue-100">
                                    <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center mb-3">
                                        <MapPin className="w-5 h-5 text-white" />
                                    </div>
                                    <div className="text-xs text-gray-500 mb-1">Location</div>
                                    <div className="text-gray-900 font-medium">Greater Noida, UP</div>
                                </div>
                            </div>

                            {/* --- AICTE Approval Badge --- */}
                            <div className="flex items-center gap-3 bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                                <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center shrink-0">
                                    <GraduationCap className="w-6 h-6 text-white" />
                                </div>
                                <div>
                                    <div className="text-gray-900 font-medium">AICTE Approved Programme</div>
                                    <div className="text-sm text-gray-600">
                                        Recognized by Ministry of Education, Government of India
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* --- Right Image --- */}
                        <div className="relative">
                            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                                <Image
                                    src="/image/pgdm-girl.webp"
                                    alt="PGDM Classroom"
                                    width={600}
                                    height={500}
                                    className="w-full h-[500px] object-cover"
                                />
                                <div className="absolute inset-0 bg-linear-to-t from-blue-900/30 to-transparent"></div>
                            </div>

                            {/* Floating Stat */}
                            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-6 border border-gray-100">
                                <div className="text-4xl font-bold text-blue-600 mb-1">25+</div>
                                <div className="text-sm text-gray-600">Years of Excellence</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ProgrammeOverview;
