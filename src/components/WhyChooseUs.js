"use client";

import React from "react";
import {
  GraduationCap,
  Globe,
  BookOpen,
  Laptop,
  Users,
  Briefcase,
  TrendingUp,
  Award,
} from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    icon: Award,
    title: "Industry Oriented Certifications",
    description: "Choose two complementary areas to enhance your expertise",
    color: "from-blue-500 to-blue-600",
  },
  {
    icon: Globe,
    title: "International Study Tour for Global Learning",
    description: "Experience global business practices firsthand",
    color: "from-yellow-500 to-yellow-600",
  },
  {
    icon: BookOpen,
    title: "Dual Specialisation Options",
    description: "Choose two complementary areas to enhance your expertise",
    color: "from-blue-600 to-blue-700",
  },
  {
    icon: GraduationCap,
    title: "Industry-Linked Curriculum",
    description: "Stay ahead with market-relevant course content",
    color: "from-yellow-400 to-yellow-500",
  },
  {
    icon: Briefcase,
    title: "100% Placement",
    description: "Dedicated support until you land your dream job",
    color: "from-blue-500 to-blue-700",
  },
  {
    icon: Users,
    title: "Global Faculty & Mentorship",
    description: "Learn from industry veterans and academic experts",
    color: "from-yellow-500 to-yellow-600",
  },
  {
    icon: TrendingUp,
    title: "Live Projects & Case Studies",
    description: "Apply theory to real-world business challenges",
    color: "from-blue-600 to-blue-800",
  },
  {
    icon: Laptop,
    title: "Laptop for Every Student",
    description: "Personal laptop provided to ensure seamless learning",
    color: "from-yellow-400 to-yellow-600",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="relative py-20 px-4 overflow-hidden">
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

      {/* Animated Floating Shapes */}
      <motion.div
        className="absolute top-20 left-10 w-64 h-64 border-2 border-blue-300 rounded-full opacity-20"
        style={{ zIndex: 2 }}
        animate={{
          y: [0, -30, 0],
          x: [0, 20, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute top-40 right-20 w-48 h-48 border-2 border-yellow-300 rounded-lg opacity-20"
        style={{ zIndex: 2 }}
        animate={{
          y: [0, 30, 0],
          x: [0, -20, 0],
          rotate: [0, 90, 180, 270, 360],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute bottom-20 left-1/4 w-32 h-32 border-2 border-blue-400 opacity-25"
        style={{
          clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)",
          zIndex: 2,
        }}
        animate={{
          y: [0, -20, 0],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute top-1/2 right-10 w-40 h-40 border-2 border-yellow-400 rounded-full opacity-15"
        style={{ zIndex: 2 }}
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.15, 0.3, 0.15],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Floating Dots */}
      {[
        { left: 15, top: 20 },
        { left: 85, top: 15 },
        { left: 25, top: 75 },
        { left: 75, top: 85 },
        { left: 45, top: 25 },
        { left: 65, top: 65 },
      ].map((pos, i) => (
        <motion.div
          key={i}
          className={`absolute w-2 h-2 rounded-full opacity-30 ${
            i % 2 === 0 ? "bg-blue-500" : "bg-yellow-500"
          }`}
          style={{
            left: `${pos.left}%`,
            top: `${pos.top}%`,
            zIndex: 2,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 3 + i * 0.5,
            repeat: Infinity,
            delay: i * 0.3,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Content */}
      <div className="relative max-w-7xl mx-auto" style={{ zIndex: 10 }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="mb-6 text-3xl text-blue-900">
            Why Students Choose Accurate for Their PGDM Journey
          </h2>
          <p className="max-w-3xl mx-auto text-gray-700">
            At Accurate Institute of Management & Technology, we believe in
            nurturing leaders who can make a global impact. Our industry-driven
            curriculum, international exposure, and dynamic learning environment
            prepare you for tomorrow's business challenges.
          </p>
        </motion.div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.3 },
              }}
              className="group relative"
            >
              <motion.div
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 3 + index * 0.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: index * 0.2,
                }}
              >
              {/* Card Background with Gradient Border Effect */}
              <motion.div
                className={`absolute inset-0 bg-gradient-to-br ${
                  index % 2 === 0
                    ? "from-blue-400 to-blue-600"
                    : "from-yellow-400 to-yellow-600"
                } rounded-2xl blur-sm`}
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
              />

                <div className="relative bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-200 h-full">
                  {/* Icon Container */}
                  <div
                    className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-4 shadow-lg relative overflow-hidden group-hover:shadow-xl transition-all duration-500`}
                  >
                    <motion.div
                      whileHover={{ scale: 1.2 }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                    >
                      <feature.icon className="w-7 h-7 text-white relative z-10" />
                    </motion.div>

                    {/* Shine effect on hover */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent"
                      initial={{ x: "-100%", opacity: 0 }}
                      whileHover={{ x: "100%", opacity: 0.3 }}
                      transition={{ duration: 0.6, ease: "easeInOut" }}
                    />
                  </div>

                  {/* Content */}
                  <h3 className="mb-3 text-gray-900 group-hover:text-blue-700 transition-colors duration-500">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{feature.description}</p>

                  {/* Decorative Corner Elements */}
                  <motion.div
                    className={`absolute top-3 right-3 w-8 h-8 border-t-2 border-r-2 ${
                      index % 2 === 0 ? "border-blue-400" : "border-yellow-400"
                    }`}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileHover={{ opacity: 1, scale: 1.2 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                  />
                  <motion.div
                    className={`absolute bottom-3 left-3 w-8 h-8 border-b-2 border-l-2 ${
                      index % 2 === 0 ? "border-yellow-400" : "border-blue-400"
                    }`}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileHover={{ opacity: 1, scale: 1.2 }}
                    transition={{ duration: 0.4, ease: "easeOut", delay: 0.1 }}
                  />

                  {/* Pulse Ring on Hover */}
                  <motion.div
                    className={`absolute inset-0 rounded-2xl border-2 ${
                      index % 2 === 0 ? "border-blue-400" : "border-yellow-400"
                    }`}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileHover={{
                      opacity: [0, 0.6, 0],
                      scale: [0.95, 1.05, 1.05],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Decorative Wave */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/80 backdrop-blur-sm rounded-full shadow-lg border border-blue-200">
            <div className="flex -space-x-2">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-blue-700 border-2 border-white" />
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-600 border-2 border-white" />
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-600 to-yellow-500 border-2 border-white" />
            </div>
            <p className="text-sm text-gray-700">
              Join <span className="font-semibold text-blue-600">5000+</span>{" "}
              successful alumni
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;