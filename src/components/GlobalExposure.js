"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { Globe, Plane, Users, TrendingUp } from "lucide-react";
import { motion, useInView } from "framer-motion";

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
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { 
        once: false, 
        margin: "-100px",
        amount: 0.3
    });

    return (
        <>
            <section ref={sectionRef} className="py-16 bg-gradient-to-br from-blue-900 via-indigo-900 to-blue-900 text-white relative overflow-hidden">
                {/* Animated Gradient Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-indigo-900 to-blue-900">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.08),transparent_50%)]" />
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(234,179,8,0.08),transparent_50%)]" />
                </div>

                {/* Grid Pattern with Layering */}
                <div className="absolute inset-0" style={{ zIndex: 1 }}>
                    {/* Primary Grid */}
                    <div
                        className="absolute inset-0 opacity-10"
                        style={{
                            backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.15) 1px, transparent 1px),
                                           linear-gradient(90deg, rgba(255, 255, 255, 0.15) 1px, transparent 1px)`,
                            backgroundSize: "60px 60px",
                        }}
                    />

                    {/* Secondary Grid - Smaller */}
                    <div
                        className="absolute inset-0 opacity-5"
                        style={{
                            backgroundImage: `linear-gradient(rgba(234, 179, 8, 0.2) 1px, transparent 1px),
                                           linear-gradient(90deg, rgba(234, 179, 8, 0.2) 1px, transparent 1px)`,
                            backgroundSize: "20px 20px",
                        }}
                    />
                </div>

                {/* Subtle Floating Shapes */}
                <motion.div
                    className="absolute top-20 left-10 w-32 h-32 border border-white/20 rounded-full opacity-20"
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
                    className="absolute bottom-20 left-1/4 w-16 h-16 border border-white/30 opacity-25 rounded-full"
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
                            i % 2 === 0 ? "bg-white" : "bg-yellow-400"
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
                    <div className="grid lg:grid-cols-2 gap-8 items-center">
                        {/* --- Left Content --- */}
                        <motion.div 
                            className="space-y-8"
                            initial={{ x: -100, opacity: 0 }}
                            animate={isInView ? { x: 0, opacity: 1 } : { x: -100, opacity: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                        >
                            <div>
                                {/* Badge Replacement */}
                                <motion.span 
                                    className="inline-block mb-4 px-4 py-1 text-sm font-medium rounded-full bg-yellow-500 text-gray-900"
                                    initial={{ scale: 0 }}
                                    animate={isInView ? { scale: 1 } : { scale: 0 }}
                                    transition={{ duration: 0.5, delay: 0.2 }}
                                >
                                    Global Immersion Programme
                                </motion.span>

                                <motion.h2 
                                    className="text-3xl md:text-4xl font-bold mb-4"
                                    initial={{ x: -50, opacity: 0 }}
                                    animate={isInView ? { x: 0, opacity: 1 } : { x: -50, opacity: 0 }}
                                    transition={{ duration: 0.6, delay: 0.4 }}
                                >
                                    Experience the World of Global Business
                                </motion.h2>

                                <motion.p 
                                    className="text-blue-100 text-lg"
                                    initial={{ x: -50, opacity: 0 }}
                                    animate={isInView ? { x: 0, opacity: 1 } : { x: -50, opacity: 0 }}
                                    transition={{ duration: 0.6, delay: 0.6 }}
                                >
                                    Gain international exposure through our{" "}
                                    <strong className="text-yellow-400">Global Immersion Study Tour</strong> to
                                    destinations such as Singapore, Malaysia or New Zealand. Students interact with
                                    global faculty and industry professionals, broadening their cross-cultural
                                    understanding.
                                </motion.p>
                            </div>

                            {/* Destinations */}
                            <motion.div
                                initial={{ y: 30, opacity: 0 }}
                                animate={isInView ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }}
                                transition={{ duration: 0.6, delay: 0.8 }}
                            >
                                <div className="text-sm text-blue-200 mb-3">Study Tour Destinations</div>
                                <div className="flex flex-wrap gap-3">
                                    {destinations.map((dest, index) => (
                                        <motion.div
                                            key={index}
                                            className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2 border border-white/20 flex items-center gap-3 hover:bg-white/20 transition-colors"
                                            initial={{ scale: 0 }}
                                            animate={isInView ? { scale: 1 } : { scale: 0 }}
                                            transition={{ duration: 0.4, delay: 1 + index * 0.1 }}
                                            whileHover={{ scale: 1.05 }}
                                        >
                                            <Image
                                                src={dest.image}
                                                alt={`${dest.name} flag`}
                                                width={28}
                                                height={20}
                                                className="rounded-sm object-contain"
                                            />
                                            <span className="text-white text-sm">{dest.name}</span>
                                        </motion.div>
                                    ))}
                                </div>
                            </motion.div>

                            {/* Benefits */}
                            <div className="space-y-4">
                                {benefits.map((benefit, index) => {
                                    const Icon = benefit.icon;
                                    return (
                                        <motion.div
                                            key={index}
                                            className="flex items-start gap-4 bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10"
                                            initial={{ y: 50, opacity: 0 }}
                                            animate={isInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
                                            transition={{ duration: 0.6, delay: 1.2 + index * 0.1 }}
                                            whileHover={{ scale: 1.02 }}
                                        >
                                            <div className="w-10 h-10 bg-yellow-500 rounded-lg flex items-center justify-center shrink-0">
                                                <Icon className="w-5 h-5 text-gray-900" />
                                            </div>
                                            <div>
                                                <h4 className="text-white font-semibold mb-1">{benefit.title}</h4>
                                                <p className="text-blue-200 text-sm">{benefit.description}</p>
                                            </div>
                                        </motion.div>
                                    );
                                })}
                            </div>
                        </motion.div>

                        {/* --- Right Image Section --- */}
                        <motion.div
                            className="relative"
                            initial={{ x: 100, opacity: 0 }}
                            animate={isInView ? { x: 0, opacity: 1 } : { x: 100, opacity: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                        >
                            <motion.div 
                                className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white/20"
                                whileHover={{ scale: 1.02 }}
                                transition={{ duration: 0.3 }}
                            >
                                <Image
                                    src="/image/global-exposure/global-immersion-program-2025.webp"
                                    alt="Global Business Experience"
                                    width={600}
                                    height={500}
                                    className="w-full object-cover"
                                />
                            </motion.div>

                            {/* Floating Icon */}
                            <motion.div 
                                className="absolute -top-6 -right-6 w-20 h-20 bg-yellow-500 rounded-full flex items-center justify-center shadow-xl"
                                initial={{ y: 50, opacity: 0 }}
                                animate={isInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
                                transition={{ duration: 0.6, delay: 0.8 }}
                            >
                                <motion.div
                                    animate={{ y: [0, -10, 0] }}
                                    transition={{
                                        duration: 2,
                                        repeat: Infinity,
                                        ease: "easeInOut",
                                    }}
                                >
                                    <Plane className="w-10 h-10 text-gray-900" />
                                </motion.div>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default GlobalExposure;
