"use client";

import {
  FileCheck,
  Gamepad2,
  Lightbulb,
  MessageSquare,
  Presentation,
  Trophy,
} from "lucide-react";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const features = [
  {
    icon: Presentation,
    title: "Live Industry Projects & Guest Lectures",
    description:
      "Engage with real business challenges and learn from industry leaders",
  },
  {
    icon: Trophy,
    title: "Capstone Projects in Final Year",
    description:
      "Demonstrate your expertise through comprehensive strategic projects",
  },
  {
    icon: Lightbulb,
    title: "Workshops on Leadership & Entrepreneurship",
    description:
      "Develop essential skills for future business leaders and innovators",
  },
  {
    icon: Gamepad2,
    title: "Business Simulation Games",
    description:
      "Practice decision-making in risk-free virtual business environments",
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
          {/* --- Section Header --- */}
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.h2 
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Learn Beyond Classrooms
            </motion.h2>
            <motion.p 
              className="text-gray-600 max-w-3xl mx-auto text-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Our PGDM curriculum focuses on holistic learning through
              experiential methods — case studies, simulation labs, internships,
              and corporate mentoring.
            </motion.p>
          </motion.div>

          {/* --- Features Grid --- */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div 
                  key={index} 
                  className="relative group"
                  initial={{ opacity: 0, y: 50 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <motion.div
                    animate={{ y: [0, -3, 0] }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: index * 0.2,
                    }}
                  >
                    {/* Card */}
                    <div className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 h-full border border-gray-200 group-hover:border-blue-300 transition-all duration-300 group-hover:shadow-lg">
                      <div className="flex items-start gap-4">
                        <motion.div 
                          className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center shrink-0 shadow-md"
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          transition={{ duration: 0.3 }}
                        >
                          <Icon className="w-6 h-6 text-white" />
                        </motion.div>
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
                    <motion.div 
                      className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-b-xl"
                      initial={{ width: 0 }}
                      whileHover={{ width: "100%" }}
                      transition={{ duration: 0.5 }}
                    />
                  </motion.div>
                </motion.div>
              );
            })}
          </div>

          {/* --- Bottom CTA --- */}
          <motion.div 
            className="mt-12 text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 1.2 }}
          >
            <motion.div 
              className="inline-block bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-100"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <p className="text-gray-700">
                <strong>Experiential Learning:</strong> 60% of curriculum is
                hands-on and project-based
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default ProgrammeFeatures;
