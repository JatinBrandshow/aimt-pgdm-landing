"use client";

import {
  BarChart3,
  Building2,
  DollarSign,
  Globe,
  TrendingUp,
  Truck,
  Users,
} from "lucide-react";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

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
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { 
    once: false, 
    margin: "-100px",
    amount: 0.3
  });

  return (
    <>
      <section ref={sectionRef} className="py-12 relative overflow-hidden">
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
          {/* --- Header --- */}
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Tailwind Badge Replacement */}
            <motion.span 
              className="inline-block mb-4 px-4 py-1 text-sm font-medium rounded-full bg-blue-100 text-blue-700"
              initial={{ scale: 0 }}
              animate={isInView ? { scale: 1 } : { scale: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Specialisations
            </motion.span>

            <motion.h2 
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Choose Your Path of Expertise
            </motion.h2>
            <motion.p 
              className="text-gray-600 max-w-2xl mx-auto text-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              Select from future-ready specialisations designed to match global
              business needs.
            </motion.p>
          </motion.div>

          {/* --- Specialisations Grid --- */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {specialisationsData.map((spec, index) => {
              const Icon = spec.icon;
              return (
                <motion.div
                  key={index}
                  className="group relative bg-white rounded-xl p-8 shadow-sm hover:shadow-2xl transition-all duration-300 border border-gray-100 overflow-hidden cursor-pointer"
                  initial={{ opacity: 0, y: 50 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                  transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                  whileHover={{ 
                    y: -8,
                    transition: { duration: 0.3 }
                  }}
                >
                  {/* Gradient Background Hover Overlay */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${spec.color}`}
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 0.05 }}
                    transition={{ duration: 0.3 }}
                  />

                  <div className="relative z-10">
                    <motion.div
                      className={`w-14 h-14 bg-gradient-to-br ${spec.color} rounded-xl flex items-center justify-center mb-4 shadow-lg`}
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Icon className="w-7 h-7 text-white" />
                    </motion.div>
                    <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                      {spec.title}
                    </h3>
                  </div>

                  {/* Hover Arrow Icon */}
                  <motion.div 
                    className="absolute bottom-4 right-4 w-8 h-8 bg-gray-100 group-hover:bg-blue-600 rounded-full flex items-center justify-center"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileHover={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3 }}
                  >
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
                  </motion.div>
                </motion.div>
              );
            })}
          </div>

          {/* --- Note --- */}
          <motion.div 
            className="mt-12 text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 1.5 }}
          >
            <p className="text-gray-600">
              💡 Students can choose <strong>dual specialisations</strong> to
              broaden their career opportunities.
            </p>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Specialisations;
