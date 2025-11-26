"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { Clock, GraduationCap, MapPin } from "lucide-react";
import { motion, useInView } from "framer-motion";

const ProgrammeOverview = () => {
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { 
        once: false, 
        margin: "-100px",
        amount: 0.3
    });

    return (
        <section ref={sectionRef} className="py-16 bg-white relative overflow-hidden">
            {/* Animated Gradient Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-yellow-50">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(37,99,235,0.08),transparent_50%)]" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(234,179,8,0.08),transparent_50%)]" />
            </div>

            {/* Grid Pattern with Layering */}
            <div className="absolute inset-0" style={{ zIndex: 1 }}>
                {/* Primary Grid */}
                <div
                    className="absolute inset-0 opacity-20"
                    style={{
                        backgroundImage: `linear-gradient(rgba(37, 99, 235, 0.15) 1px, transparent 1px),
                                       linear-gradient(90deg, rgba(37, 99, 235, 0.15) 1px, transparent 1px)`,
                        backgroundSize: "60px 60px",
                    }}
                />

                {/* Secondary Grid - Smaller */}
                <div
                    className="absolute inset-0 opacity-10"
                    style={{
                        backgroundImage: `linear-gradient(rgba(234, 179, 8, 0.2) 1px, transparent 1px),
                                       linear-gradient(90deg, rgba(234, 179, 8, 0.2) 1px, transparent 1px)`,
                        backgroundSize: "20px 20px",
                    }}
                />
            </div>

            {/* Subtle Floating Shapes */}
            <motion.div
                className="absolute top-20 left-10 w-32 h-32 border border-blue-300/30 rounded-full opacity-20"
                style={{ zIndex: 2 }}
                animate={{ y: [0, -15, 0] }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />

            <motion.div
                className="absolute top-40 right-20 w-24 h-24 border border-yellow-300/30 rounded-lg opacity-20"
                style={{ zIndex: 2 }}
                animate={{ y: [0, 15, 0] }}
                transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1,
                }}
            />

            <motion.div
                className="absolute bottom-20 left-1/4 w-16 h-16 border border-blue-400/30 opacity-25 rounded-full"
                style={{ zIndex: 2 }}
                animate={{ scale: [1, 1.1, 1] }}
                transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 2,
                }}
            />

            {/* Minimal Floating Dots */}
            {[...Array(6)].map((_, i) => (
                <motion.div
                    key={i}
                    className={`absolute w-1.5 h-1.5 rounded-full opacity-20 ${
                        i % 2 === 0 ? "bg-blue-400" : "bg-yellow-400"
                    }`}
                    style={{
                        left: `${20 + i * 15}%`,
                        top: `${30 + (i % 3) * 20}%`,
                        zIndex: 2,
                    }}
                    animate={{ y: [0, -10, 0] }}
                    transition={{
                        duration: 3 + i * 0.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: i * 0.5,
                    }}
                />
            ))}

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" style={{ zIndex: 10 }}>
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* LEFT CONTENT */}
                    <motion.div 
                        className="space-y-6"
                        initial={{ x: -100, opacity: 0 }}
                        animate={isInView ? { x: 0, opacity: 1 } : { x: -100, opacity: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <motion.h2 
                            className="text-4xl font-bold text-gray-900 max-lg:text-3xl"
                            initial={{ x: -50, opacity: 0 }}
                            animate={isInView ? { x: 0, opacity: 1 } : { x: -50, opacity: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            About the PGDM Programme
                        </motion.h2>

                        <motion.p 
                            className="text-gray-600 text-lg leading-relaxed"
                            initial={{ x: -50, opacity: 0 }}
                            animate={isInView ? { x: 0, opacity: 1 } : { x: -50, opacity: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                        >
                            The <strong>Post Graduate Diploma in Management (PGDM)</strong> is a two-year, full-time
                            program approved by the
                            <strong> AICTE, Ministry of Education, Govt. of India.</strong>
                            Designed with inputs from industry leaders, the programme blends academic rigor with
                            practical corporate exposure.
                        </motion.p>

                        {/* QUICK FACTS */}
                        <div className="grid grid-cols-3 gap-4 pt-6 max-sm:grid-cols-1">
                            {[
                                {
                                    icon: <Clock className="w-5 h-5 text-white" />,
                                    label: "Duration",
                                    value: "2 Years Full Time",
                                },
                                {
                                    icon: <GraduationCap className="w-5 h-5 text-white" />,
                                    label: "Eligibility",
                                    value: "Bachelor's Degree (min. 50%)",
                                },
                                {
                                    icon: <MapPin className="w-5 h-5 text-white" />,
                                    label: "Location",
                                    value: "Greater Noida, UP",
                                },
                            ].map((item, i) => (
                                <motion.div
                                    key={i}
                                    className="backdrop-blur-md bg-white/50 rounded-xl p-6 border border-gray-200 shadow-lg"
                                    initial={{ y: 50, opacity: 0 }}
                                    animate={isInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
                                    transition={{ duration: 0.6, delay: 0.6 + i * 0.1 }}
                                >
                                    <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center mb-3">
                                        {item.icon}
                                    </div>
                                    <div className="text-xs text-gray-500 mb-1">{item.label}</div>
                                    <div className="text-gray-900 font-medium">{item.value}</div>
                                </motion.div>
                            ))}
                        </div>

                        {/* AICTE Badge */}
                        <motion.div 
                            className="flex items-center gap-3 bg-yellow-50 border border-yellow-200 rounded-lg p-4 shadow"
                            initial={{ y: 30, opacity: 0 }}
                            animate={isInView ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }}
                            transition={{ duration: 0.6, delay: 1 }}
                        >
                            <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center shrink-0">
                                <GraduationCap className="w-6 h-6 text-white" />
                            </div>
                            <div>
                                <div className="text-gray-900 font-medium">AICTE Approved Programme</div>
                                <div className="text-sm text-gray-600">
                                    Recognized by Ministry of Education, Government of India
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* RIGHT IMAGE */}
                    <motion.div
                        className="relative"
                        initial={{ x: 100, opacity: 0 }}
                        animate={isInView ? { x: 0, opacity: 1 } : { x: 100, opacity: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <motion.div 
                            className="relative rounded-2xl overflow-hidden shadow-2xl"
                            whileHover={{ scale: 1.02 }}
                            transition={{ duration: 0.3 }}
                        >
                            <Image
                                src="/image/pgdm-girl-1.webp"
                                alt="PGDM Classroom"
                                width={600}
                                height={500}
                                className="w-full h-[500px] object-cover"
                            />
                        </motion.div>

                        {/* Floating counter */}
                        <motion.div
                            className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-6 border border-gray-100"
                            initial={{ y: 50, opacity: 0 }}
                            animate={isInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
                            transition={{ duration: 0.6, delay: 0.8 }}
                        >
                            <motion.div 
                                className="text-4xl font-bold text-blue-600 mb-1"
                                initial={{ scale: 0 }}
                                animate={isInView ? { scale: 1 } : { scale: 0 }}
                                transition={{ duration: 0.5, delay: 1.2 }}
                            >
                                20+
                            </motion.div>
                            <div className="text-sm text-gray-600">Years of Excellence</div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default ProgrammeOverview;
