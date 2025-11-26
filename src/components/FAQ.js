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
      "The fee varies based on program & scholarships. Download our brochure or contact the admission office for detailed fee information.",
  },
  {
    question: "Are laptops provided to students?",
    answer:
      "Yes, every PGDM student receives a personal laptop as part of the program to ensure seamless digital learning and project work throughout the course.",
  },
  {
    question: "What specializations are offered?",
    answer:
      "We offer seven specializations: Marketing Management, Finance Management, Business Analytics, Human Resource Management, International Business, Operations & Supply Chain Management, and Banking & Financial Services. Students can choose dual specializations.",
  },
  {
    question: "Is there an international study tour?",
    answer:
      "Yes, our Global Immersion Study Tour is a highlight of the PGDM program. Students visit international destinations like Singapore, Dubai, or Malaysia to gain exposure to global business practices and interact with industry leaders.",
  },
  {
    question: "What is the duration of the program?",
    answer:
      "The PGDM is a 2-year full-time program divided into four semesters. The program includes classroom learning, internships, live projects, and a capstone project in the final year.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [visibleItems, setVisibleItems] = useState(faqs.map((_, i) => i));
  const itemRefs = useRef([]);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { 
    once: false, 
    margin: "-100px",
    amount: 0.3
  });

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const filteredFaqs = faqs.filter(
    (faq) =>
      faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
  );

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.dataset.index);
            setVisibleItems((prev) => [...new Set([...prev, index])]);
          }
        });
      },
      { threshold: 0.1 }
    );

    itemRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, [filteredFaqs]);

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
            className="w-full px-6 py-4 bg-white border border-blue-200 rounded-2xl shadow-sm"
          />
          <div className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500">
            🔍
          </div>
        </motion.div>

        {/* FAQ List */}
        <div className="max-w-4xl mx-auto">
          {filteredFaqs.length === 0 ? (
            <div className="w-full text-center py-20">
              <div className="w-16 h-16 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center">
                <svg
                  className="w-8 h-8 text-blue-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.29-1.009-5.824-2.562M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                  />
                </svg>
              </div>
              <p className="text-gray-600 text-lg">
                No questions found. Try a different search term.
              </p>
            </div>
          ) : (
            <motion.div 
              className="space-y-4"
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              {filteredFaqs.map((faq, index) => {
                const isOpen = openIndex === index;
                return (
                  <motion.div
                    key={index}
                    ref={(el) => (itemRefs.current[index] = el)}
                    data-index={index}
                    className="backdrop-blur-md bg-white/80 border border-blue-200/50 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
                    initial={{ x: -50, opacity: 0 }}
                    animate={isInView ? { x: 0, opacity: 1 } : { x: -50, opacity: 0 }}
                    transition={{ duration: 0.6, delay: 1.2 + index * 0.1 }}
                    whileHover={{ y: -2 }}
                  >
                    <motion.button
                      onClick={() => toggleFAQ(index)}
                      className="w-full p-6 text-left flex justify-between items-start gap-4 hover:bg-blue-50/50 transition-colors"
                      whileHover={{ backgroundColor: "rgba(59, 130, 246, 0.05)" }}
                    >
                      <motion.span 
                        className="text-blue-900 font-semibold text-lg flex-1"
                        initial={{ x: -20, opacity: 0 }}
                        animate={isInView ? { x: 0, opacity: 1 } : { x: -20, opacity: 0 }}
                        transition={{ duration: 0.5, delay: 1.4 + index * 0.1 }}
                      >
                        {faq.question}
                      </motion.span>
                      <motion.div
                        className="w-8 h-8 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-full flex items-center justify-center text-white font-bold shadow-md flex-shrink-0"
                        animate={{ rotate: isOpen ? 45 : 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        whileHover={{ scale: 1.1 }}
                      >
                        +
                      </motion.div>
                    </motion.button>
                    
                    <motion.div
                      initial={false}
                      animate={{
                        height: isOpen ? "auto" : 0,
                        opacity: isOpen ? 1 : 0,
                      }}
                      transition={{ duration: 0.4, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <motion.div 
                        className="px-6 pb-6 text-gray-700 leading-relaxed border-t border-blue-100/50"
                        initial={{ y: -10, opacity: 0 }}
                        animate={isOpen ? { y: 0, opacity: 1 } : { y: -10, opacity: 0 }}
                        transition={{ duration: 0.3, delay: isOpen ? 0.1 : 0 }}
                      >
                        <div className="pt-4">{faq.answer}</div>
                      </motion.div>
                    </motion.div>
                  </motion.div>
                );
              })}
            </motion.div>
          )}
        </div>

        {/* Contact Section */}
        <motion.div
          className="mt-20 text-center"
          initial={{ y: 50, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
          transition={{ duration: 0.8, delay: 2 }}
        >
          <motion.div 
            className="backdrop-blur-md bg-white/90 border border-blue-200/50 p-12 rounded-3xl shadow-2xl"
            whileHover={{ y: -5 }}
            transition={{ duration: 0.3 }}
          >
            <motion.h3 
              className="text-3xl font-bold text-blue-900 mb-4"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.6, delay: 2.2 }}
            >
              Need More <span className="text-yellow-500">Help?</span>
            </motion.h3>
            <motion.p 
              className="text-gray-600 mb-8 text-lg"
              initial={{ y: 20, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
              transition={{ duration: 0.6, delay: 2.4 }}
            >
              Our admission experts are standing by to guide you through the process.
            </motion.p>
            <motion.a
              href="tel:+91-9899569090"
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-2xl shadow-lg hover:from-blue-600 hover:to-blue-700 transition-all font-medium"
              initial={{ scale: 0 }}
              animate={isInView ? { scale: 1 } : { scale: 0 }}
              transition={{ duration: 0.5, delay: 2.6 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="text-xl">📞</span>
              Call Now: +91-9899569090
            </motion.a>
          </motion.div>
        </motion.div>
      </section>
    </>
  );
};

export default FAQ;
