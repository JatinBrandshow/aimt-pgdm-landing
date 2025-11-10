"use client";

import React from "react";
import { FileText, MessageSquare, CheckCircle, Download } from "lucide-react";

const steps = [
    {
        number: "1",
        icon: FileText,
        title: "Fill Online Application Form",
        description: "Complete your application with academic details and upload required documents",
        color: "from-blue-500 to-cyan-500",
    },
    {
        number: "2",
        icon: MessageSquare,
        title: "Appear for GD-PI",
        description: "Participate in Group Discussion and Personal Interview (Online/Offline)",
        color: "from-purple-500 to-violet-500",
    },
    {
        number: "3",
        icon: CheckCircle,
        title: "Receive Admission Offer",
        description: "Get your offer letter and confirm your seat to begin your journey",
        color: "from-green-500 to-emerald-500",
    },
];

const examScores = ["CAT", "MAT", "XAT", "CMAT", "ATMA", "GMAT"];

const scrollToForm = () => {
    document.getElementById("enquiry-form")?.scrollIntoView({ behavior: "smooth" });
};

const AdmissionProcess = () => {
    return (
        <>
            <section className="py-8 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Section Header */}
                    <div className="text-center mb-16">
                        <span className="inline-block mb-4 px-4 py-1.5 bg-blue-100 text-blue-700 text-sm font-medium rounded-full">
                            Admissions 2025
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Start Your Journey in Just 3 Steps
                        </h2>
                        <p className="text-gray-600 max-w-3xl mx-auto text-lg">
                            Our streamlined admission process makes it easy for you to join Accurate's PGDM programme
                        </p>
                    </div>

                    {/* Steps Section */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 relative">
                        {/* Connecting Line (hidden on mobile) */}
                        <div className="hidden md:block absolute top-16 left-0 right-0 h-0.5 bg-linear-to-r from-blue-200 via-purple-200 to-green-200 -z-10"></div>

                        {steps.map((step, index) => {
                            const Icon = step.icon;
                            return (
                                <div
                                    key={index}
                                    className="relative bg-linear-to-br from-gray-50 to-white rounded-2xl p-8 border border-gray-200 hover:border-blue-300 hover:shadow-xl transition-all duration-300 group"
                                >
                                    {/* Step Number */}
                                    <div
                                        className={`absolute -top-4 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-linear-to-br ${step.color} rounded-full flex items-center justify-center shadow-lg text-white font-semibold z-10`}
                                    >
                                        {step.number}
                                    </div>

                                    {/* Step Card */}
                                    <div className="text-center pt-6">
                                        <div
                                            className={`w-16 h-16 bg-linear-to-br ${step.color} rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform shadow-lg`}
                                        >
                                            <Icon className="w-8 h-8 text-white" />
                                        </div>
                                        <h3 className="text-lg font-semibold text-gray-900 mb-3">{step.title}</h3>
                                        <p className="text-gray-600 text-sm">{step.description}</p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    {/* Eligibility Section */}
                    <div className="bg-linear-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 md:p-12 border border-blue-100 mb-8">
                        <div className="grid md:grid-cols-2 gap-8">
                            {/* Left: Eligibility */}
                            <div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-4">Eligibility Criteria</h3>
                                <ul className="space-y-3">
                                    <li className="flex items-start gap-3">
                                        <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2"></span>
                                        <p className="text-gray-700">
                                            Graduate degree with minimum <strong>50% marks</strong> (45% for reserved
                                            categories)
                                        </p>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2"></span>
                                        <p className="text-gray-700">
                                            Valid score in any of the accepted entrance exams
                                        </p>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2"></span>
                                        <p className="text-gray-700">
                                            Final year students awaiting results can also apply
                                        </p>
                                    </li>
                                </ul>
                            </div>

                            {/* Right: Accepted Scores */}
                            <div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-4">Scores Accepted</h3>
                                <div className="grid grid-cols-3 gap-3">
                                    {examScores.map((exam, index) => (
                                        <div
                                            key={index}
                                            className="bg-white rounded-lg px-4 py-3 text-center shadow-sm border border-blue-100 hover:shadow-md transition-shadow"
                                        >
                                            <span className="text-blue-600 font-medium">{exam}</span>
                                        </div>
                                    ))}
                                </div>
                                <p className="text-sm text-gray-600 mt-4">
                                    Students without entrance exam scores can also apply
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <button
                            onClick={scrollToForm}
                            className="flex items-center gap-2 bg-linear-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-6 py-3 rounded-lg shadow-lg text-sm font-medium transition-all"
                        >
                            <FileText className="w-5 h-5" />
                            Apply Now
                        </button>

                        <button className="flex items-center gap-2 border border-gray-300 px-6 py-3 rounded-lg hover:bg-gray-50 text-gray-700 transition-all">
                            <Download className="w-5 h-5" />
                            Download Fee Structure
                        </button>
                    </div>

                    {/* Important Dates */}
                    <div className="mt-12 text-center">
                        <div className="inline-block bg-yellow-50 border border-yellow-200 rounded-xl p-6">
                            <p className="text-gray-700">
                                <strong>🗓️ Important:</strong> Admissions for Batch 2025-27 are now open. Limited seats
                                available!
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default AdmissionProcess;
