"use client";

import React from "react";
import { Quote, Play } from "lucide-react";
import Image from "next/image";

const testimonials = [
    {
        quote: "Accurate gave me the confidence and skills to lead teams at Deloitte. The industry exposure and practical learning approach made all the difference.",
        name: "Shivani Gupta",
        designation: "Analyst – Deloitte",
        batch: "PGDM 2021-23",
        image: "https://images.unsplash.com/photo-1762341118954-d0ce391674d2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    },
    {
        quote: "From classroom to corporate — Accurate prepared me for every challenge. The global study tour and live projects gave me real-world experience that employers value.",
        name: "Amit Singh",
        designation: "Relationship Manager – HDFC Bank",
        batch: "PGDM 2020-22",
        image: "https://images.unsplash.com/photo-1762341118954-d0ce391674d2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    },
    {
        quote: "The dual specialization option and industry certifications helped me stand out. I'm grateful for the holistic development that Accurate provided.",
        name: "Priya Sharma",
        designation: "Business Analyst – Amazon",
        batch: "PGDM 2019-21",
        image: "https://images.unsplash.com/photo-1762341118954-d0ce391674d2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    },
];

const AlumniTestimonials = () => {
    return (
        <>
            <section className="py-12 bg-linear-to-b from-white to-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Section Header */}
                    <div className="text-center mb-16">
                        <div className="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-full mb-4 font-medium">
                            💼 Success Stories
                        </div>
                        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Our Alumni, Our Pride</h2>
                        <p className="text-gray-600 max-w-3xl mx-auto text-lg">
                            Hear from our successful graduates who are making their mark across industries worldwide.
                        </p>
                    </div>

                    {/* Testimonials Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                        {testimonials.map((testimonial, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 relative group hover:-translate-y-2"
                            >
                                {/* Quote Icon */}
                                <div className="absolute -top-4 left-8 w-12 h-12 bg-linear-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg">
                                    <Quote className="w-6 h-6 text-white" />
                                </div>

                                {/* Content */}
                                <div className="pt-6 space-y-6">
                                    <p className="text-gray-600 italic leading-relaxed">"{testimonial.quote}"</p>

                                    {/* Profile */}
                                    <div className="flex items-center gap-4 pt-4 border-t border-gray-100">
                                        <div className="w-14 h-14 rounded-full overflow-hidden shrink-0 shadow-md">
                                            <Image
                                                src={testimonial.image}
                                                alt={testimonial.name}
                                                width={56}
                                                height={56}
                                                className="object-cover w-full h-full"
                                            />
                                        </div>
                                        <div>
                                            <div className="text-gray-900 font-semibold">{testimonial.name}</div>
                                            <div className="text-sm text-gray-600">{testimonial.designation}</div>
                                            <div className="text-xs text-gray-500">{testimonial.batch}</div>
                                        </div>
                                    </div>
                                </div>

                                {/* Hover Accent */}
                                <div className="absolute bottom-0 left-0 w-full h-1 bg-linear-to-r from-blue-500 to-indigo-600 rounded-b-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            </div>
                        ))}
                    </div>

                    {/* Video CTA */}
                    <div className="text-center">
                        <button className="inline-flex items-center gap-3 bg-linear-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group">
                            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                <Play className="w-5 h-5 text-blue-600 ml-0.5" />
                            </div>
                            <span className="font-medium">Watch Alumni Success Stories</span>
                        </button>
                    </div>

                    {/* Stats */}
                    <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6">
                        <div className="text-center p-6 bg-linear-to-br from-blue-50 to-indigo-50 rounded-xl border border-blue-100">
                            <div className="text-4xl text-blue-600 font-bold mb-2">5000+</div>
                            <div className="text-gray-600">Global Alumni Network</div>
                        </div>
                        <div className="text-center p-6 bg-linear-to-br from-blue-50 to-indigo-50 rounded-xl border border-blue-100">
                            <div className="text-4xl text-blue-600 font-bold mb-2">50+</div>
                            <div className="text-gray-600">Countries Worldwide</div>
                        </div>
                        <div className="text-center p-6 bg-linear-to-br from-blue-50 to-indigo-50 rounded-xl border border-blue-100">
                            <div className="text-4xl text-blue-600 font-bold mb-2">Top 100</div>
                            <div className="text-gray-600">Fortune Companies</div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default AlumniTestimonials;
