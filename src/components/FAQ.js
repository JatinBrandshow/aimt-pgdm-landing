"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";

const faqs = [
  {
    question: "Is the PGDM equivalent to an MBA?",
    answer:
      "Yes, the AICTE-approved PGDM is equivalent to MBA from any Indian university. PGDM programs are often more industry-oriented and flexible in curriculum design compared to traditional MBA programs.",
  },
  {
    question: "Is hostel facility available on campus?",
    answer:
      "Yes, we have separate hostels for boys and girls with all modern amenities including Wi-Fi, mess facility, recreational areas, and 24/7 security.",
  },
  {
    question: "Do you provide placement assistance?",
    answer:
      "Absolutely! We provide 100% placement support through our Corporate Resource Centre with training, mock interviews, internships, and direct recruiter interaction.",
  },
  {
    question: "What is the admission process?",
    answer:
      "The process involves: 1) Fill online form, 2) GD/PI round, 3) Receive offer & confirm your seat.",
  },
  {
    question: "Which entrance exam scores are accepted?",
    answer:
      "We accept CAT, MAT, XAT, CMAT, ATMA, GMAT. Students without scores can apply via internal assessment.",
  },
  {
    question: "What is the fee structure?",
    answer:
      "The fee varies based on program & scholarships. Contact the admission office for detailed fee info.",
  },
  {
    question: "Are laptops provided to students?",
    answer:
      "Yes, every PGDM student receives a personal laptop for digital learning & project work.",
  },
  {
    question: "What specializations are offered?",
    answer:
      "Marketing, Finance, Business Analytics, HRM, International Business, Operations, BFSI. Dual specialization available.",
  },
  {
    question: "Is there an international study tour?",
    answer:
      "Yes, global immersion tours include Singapore, Dubai, Malaysia for international exposure.",
  },
  {
    question: "What is the duration of the program?",
    answer:
      "The PGDM is a 2-year full-time program with 4 semesters, internships & a capstone project.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.3 });

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const filteredFaqs = faqs.filter(
    (faq) =>
      faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <section ref={sectionRef} className="py-20 relative overflow-hidden">
        {/* ============== Background Layer ============== */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-yellow-50" />
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_30%_20%,rgba(37,99,235,0.1),transparent_60%)]" />

        {/* Floating Shapes */}
        <motion.div
          className="absolute top-20 left-10 w-32 h-32 border border-blue-300/30 rounded-full opacity-20"
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
        />

        {/* ============== Header ============== */}
        <motion.div
          className="text-center mb-20 relative z-10"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-flex items-center gap-2 mb-6 px-6 py-3 bg-yellow-100 border border-yellow-200 rounded-full"
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
            <span className="text-blue-700 text-sm font-medium">
              Live Support Available
            </span>
          </motion.div>

          <motion.h2
            className="text-5xl sm:text-7xl font-black text-blue-900 mb-6"
            initial={{ x: -50, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            FAQ<span className="text-yellow-500">s</span>
          </motion.h2>

          <motion.p
            className="text-gray-600 text-xl max-w-2xl mx-auto"
            initial={{ x: -50, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            Everything you need to know about our PGDM program
          </motion.p>
        </motion.div>

        {/* ============== Search Bar ============== */}
        <motion.div
          className="relative mb-16 max-w-lg mx-auto"
          initial={{ y: 30, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <input
            type="text"
            placeholder="Search questions..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-6 py-4 text-black bg-white border border-blue-200 rounded-2xl shadow-sm"
          />
          <div className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500">
            🔍
          </div>
        </motion.div>

        {/* ============== FAQ LIST ============== */}
        <div className="max-w-4xl mx-auto relative z-10">
          {filteredFaqs.length === 0 ? (
            <div className="w-full text-center py-20">
              <p className="text-gray-600 text-lg">
                No questions found. Try a different search term.
              </p>
            </div>
          ) : (
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 1 }}
            >
              {filteredFaqs.map((faq, index) => {
                const isOpen = openIndex === index;

                return (
                  <motion.div
                    key={index}
                    className="bg-white border border-blue-100 rounded-2xl hover:shadow-lg transition-all"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.4, delay: 1.1 + index * 0.1 }}
                  >
                    <button
                      onClick={() => toggleFAQ(index)}
                      className="w-full p-6 flex justify-between items-start"
                    >
                      <span className="text-blue-900 font-semibold text-lg">
                        {index + 1}. {faq.question}
                      </span>

                      <motion.span
                        animate={{ rotate: isOpen ? 45 : 0 }}
                        transition={{ duration: 0.3 }}
                        className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center"
                      >
                        +
                      </motion.span>
                    </button>

                    <motion.div
                      initial={false}
                      animate={{
                        height: isOpen ? "auto" : 0,
                        opacity: isOpen ? 1 : 0,
                      }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 pt-2 text-gray-700">
                        {faq.answer}
                      </div>
                    </motion.div>
                  </motion.div>
                );
              })}
            </motion.div>
          )}
        </div>

        {/* ============== CONTACT ============== */}
        <motion.div
          className="mt-20 text-center"
          initial={{ x: 100, opacity: 0 }}
          animate={isInView ? { x: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 1.5 }}
        >
          <div className="bg-white border border-blue-200 p-12 rounded-3xl shadow-lg">
            <h3 className="text-3xl font-bold text-blue-900 mb-4">
              Need More <span className="text-yellow-500">Help?</span>
            </h3>
            <p className="text-gray-600 mb-8 text-lg">
              Our admission experts are standing by to guide you.
            </p>

            <a
              href="tel:+91-9899569090"
              className="px-8 py-4 bg-blue-500 text-white rounded-2xl shadow-md hover:bg-blue-600"
            >
              📞 Call Now
            </a>
          </div>
        </motion.div>
      </section>
    </>
  );
};

export default FAQ;
