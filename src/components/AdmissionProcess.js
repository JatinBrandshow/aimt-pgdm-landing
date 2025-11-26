"use client";

import React, { useRef } from "react";
import { FileText, MessageSquare, CheckCircle, Download } from "lucide-react";
import { motion, useInView } from "framer-motion";

const steps = [
  {
    number: "1",
    icon: FileText,
    title: "Fill Online Application Form",
    description:
      "Complete your application with academic details and upload required documents",
    color: "from-blue-500 to-cyan-500",
  },
  {
    number: "2",
    icon: MessageSquare,
    title: "Appear for GD-PI",
    description:
      "Participate in Group Discussion and Personal Interview (Online/Offline)",
    color: "from-purple-500 to-violet-500",
  },
  {
    number: "3",
    icon: CheckCircle,
    title: "Receive Admission Offer",
    description:
      "Get your offer letter and confirm your seat to begin your journey",
    color: "from-green-500 to-emerald-500",
  },
];

const examScores = ["CAT", "MAT", "XAT", "CMAT", "ATMA", "GMAT"];

const scrollToForm = () => {
  document
    .getElementById("enquiry-form")
    ?.scrollIntoView({ behavior: "smooth" });
};

const AdmissionProcess = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { 
    once: false, 
    margin: "-100px",
    amount: 0.3
  });

  return (
    <>
      <section ref={sectionRef} className="py-8 relative overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-yellow-50">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(37,99,235,0.08),transparent_50%)]" />
        </div>

        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-20" style={{ zIndex: 1 }}>
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `linear-gradient(rgba(37, 99, 235, 0.15) 1px, transparent 1px),
                             linear-gradient(90deg, rgba(37, 99, 235, 0.15) 1px, transparent 1px)`,
              backgroundSize: "60px 60px",
            }}
          />
        </div>

        {/* Floating Shapes */}
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

        {[...Array(4)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute w-1.5 h-1.5 rounded-full opacity-20 ${
              i % 2 === 0 ? "bg-blue-400" : "bg-yellow-400"
            }`}
            style={{
              left: `${20 + i * 20}%`,
              top: `${30 + (i % 2) * 30}%`,
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
          {/* Section Header */}
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.span 
              className="inline-block mb-4 px-4 py-1.5 bg-blue-100 text-blue-700 text-sm font-medium rounded-full"
              initial={{ scale: 0 }}
              animate={isInView ? { scale: 1 } : { scale: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Admissions 2026
            </motion.span>
            <motion.h2 
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
              initial={{ x: -50, opacity: 0 }}
              animate={isInView ? { x: 0, opacity: 1 } : { x: -50, opacity: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Start Your Journey in Just 3 Steps
            </motion.h2>
            <motion.p 
              className="text-gray-600 max-w-3xl mx-auto text-lg"
              initial={{ x: -50, opacity: 0 }}
              animate={isInView ? { x: 0, opacity: 1 } : { x: -50, opacity: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              Our streamlined admission process makes it easy for you to join
              Accurate's PGDM programme
            </motion.p>
          </motion.div>

          {/* Steps Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 relative">
            {/* Connecting Line (hidden on mobile) */}
            <div className="hidden md:block absolute top-16 left-0 right-0 h-0.5 bg-linear-to-r from-blue-200 via-purple-200 to-green-200 -z-10"></div>

            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={index}
                  className="relative bg-linear-to-br from-gray-50 to-white rounded-2xl p-8 border border-gray-200 hover:border-blue-300 hover:shadow-xl transition-all duration-300 group"
                  initial={{ y: 50, opacity: 0 }}
                  animate={isInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
                  transition={{ duration: 0.6, delay: 1 + index * 0.2 }}
                  whileHover={{ y: -5 }}
                >
                  {/* Step Number */}
                  <motion.div
                    className={`absolute -top-4 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-linear-to-br ${step.color} rounded-full flex items-center justify-center shadow-lg text-white font-semibold z-10`}
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : { scale: 0 }}
                    transition={{ duration: 0.5, delay: 1.2 + index * 0.2 }}
                  >
                    {step.number}
                  </motion.div>

                  {/* Step Card */}
                  <div className="text-center pt-6">
                    <motion.div
                      className={`w-16 h-16 bg-linear-to-br ${step.color} rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform shadow-lg`}
                      initial={{ scale: 0, rotate: -180 }}
                      animate={isInView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -180 }}
                      transition={{ duration: 0.6, delay: 1.4 + index * 0.2 }}
                    >
                      <Icon className="w-8 h-8 text-white" />
                    </motion.div>
                    <motion.h3 
                      className="text-lg font-semibold text-gray-900 mb-3"
                      initial={{ x: -30, opacity: 0 }}
                      animate={isInView ? { x: 0, opacity: 1 } : { x: -30, opacity: 0 }}
                      transition={{ duration: 0.5, delay: 1.6 + index * 0.2 }}
                    >
                      {step.title}
                    </motion.h3>
                    <motion.p 
                      className="text-gray-600 text-sm"
                      initial={{ x: -30, opacity: 0 }}
                      animate={isInView ? { x: 0, opacity: 1 } : { x: -30, opacity: 0 }}
                      transition={{ duration: 0.5, delay: 1.8 + index * 0.2 }}
                    >
                      {step.description}
                    </motion.p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Eligibility Section */}
          <motion.div 
            className="bg-linear-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 md:p-12 border border-blue-100 mb-8"
            initial={{ y: 50, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
            transition={{ duration: 0.8, delay: 2.5 }}
          >
            <div className="grid md:grid-cols-2 gap-8">
              {/* Left: Eligibility */}
              <motion.div
                initial={{ x: -50, opacity: 0 }}
                animate={isInView ? { x: 0, opacity: 1 } : { x: -50, opacity: 0 }}
                transition={{ duration: 0.6, delay: 2.7 }}
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Eligibility Criteria
                </h3>
                <ul className="space-y-3">
                  {[
                    "Graduate degree with minimum 50% marks (45% for reserved categories)",
                    "Valid score in any of the accepted entrance exams",
                    "Final year students awaiting results can also apply"
                  ].map((item, index) => (
                    <motion.li 
                      key={index}
                      className="flex items-start gap-3"
                      initial={{ x: -30, opacity: 0 }}
                      animate={isInView ? { x: 0, opacity: 1 } : { x: -30, opacity: 0 }}
                      transition={{ duration: 0.5, delay: 2.9 + index * 0.1 }}
                    >
                      <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2"></span>
                      <p className="text-gray-700" dangerouslySetInnerHTML={{ __html: item.replace(/50% marks/, '<strong>50% marks</strong>') }}></p>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>

              {/* Right: Accepted Scores */}
              <motion.div
                initial={{ x: 50, opacity: 0 }}
                animate={isInView ? { x: 0, opacity: 1 } : { x: 50, opacity: 0 }}
                transition={{ duration: 0.6, delay: 2.7 }}
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Scores Accepted
                </h3>
                <div className="grid grid-cols-3 gap-3">
                  {examScores.map((exam, index) => (
                    <motion.div
                      key={index}
                      className="bg-white rounded-lg px-4 py-3 text-center shadow-sm border border-blue-100 hover:shadow-md transition-shadow"
                      initial={{ scale: 0, opacity: 0 }}
                      animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
                      transition={{ duration: 0.4, delay: 3.1 + index * 0.1 }}
                      whileHover={{ scale: 1.05 }}
                    >
                      <span className="text-blue-600 font-medium">{exam}</span>
                    </motion.div>
                  ))}
                </div>
                <motion.p 
                  className="text-sm text-gray-600 mt-4"
                  initial={{ y: 20, opacity: 0 }}
                  animate={isInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
                  transition={{ duration: 0.5, delay: 3.7 }}
                >
                  Students without entrance exam scores can also apply
                </motion.p>
              </motion.div>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ y: 30, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }}
            transition={{ duration: 0.6, delay: 3.8 }}
          >
            <motion.button
              onClick={scrollToForm}
              className="flex items-center gap-2 bg-linear-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-6 py-3 rounded-lg shadow-lg text-sm font-medium transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FileText className="w-5 h-5" />
              Apply Now
            </motion.button>
          </motion.div>

          {/* Important Dates */}
          <motion.div 
            className="mt-12 text-center"
            initial={{ y: 30, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }}
            transition={{ duration: 0.6, delay: 4 }}
          >
            <motion.div 
              className="inline-block bg-yellow-50 border border-yellow-200 rounded-xl p-6"
              whileHover={{ scale: 1.02 }}
            >
              <p className="text-gray-700">
                <strong>🗓️ Important:</strong> Admissions for Batch 2026-28 are
                now open. Limited seats available!
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default AdmissionProcess;
