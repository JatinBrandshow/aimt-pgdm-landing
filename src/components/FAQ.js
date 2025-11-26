"use client";

import React, { useState, useRef, useEffect } from "react";

const faqs = [
  {
    question: "Is the PGDM equivalent to an MBA?",
    answer:
      "Yes, the AICTE-approved PGDM is equivalent to MBA from any Indian university. PGDM programs are often more industry-oriented and flexible in curriculum design compared to traditional MBA programs.",
  },
  {
    question: "Is hostel facility available on campus?",
    answer:
      "Yes, we have separate hostels for boys and girls with all modern amenities including Wi-Fi, mess facility, recreational areas, and 24/7 security. The hostels are located within the campus for convenience.",
  },
  {
    question: "Do you provide placement assistance?",
    answer:
      "Absolutely! We provide 100% placement support through our Corporate Resource Centre. This includes pre-placement training, resume building, mock interviews, internship opportunities, and direct interaction with recruiters.",
  },
  {
    question: "What is the admission process?",
    answer:
      "The admission process involves three simple steps: 1) Fill the online application form, 2) Appear for Group Discussion and Personal Interview (GD-PI), and 3) Receive admission offer and confirm your seat.",
  },
  {
    question: "Which entrance exam scores are accepted?",
    answer:
      "We accept scores from CAT, MAT, XAT, CMAT, ATMA, and GMAT. Students without entrance exam scores can also apply and will be evaluated through our internal assessment process.",
  },
  {
    question: "What is the fee structure?",
    answer:
      "The fee structure varies based on the program and scholarships awarded. We offer various merit-based and need-based scholarships that can reduce your fee significantly. Please download our brochure or contact the admission office for detailed fee information.",
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
  const [visibleItems, setVisibleItems] = useState([]);
  const itemRefs = useRef([]);

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
      <section className="py-20 bg-slate-50 relative overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-30"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-yellow-100 rounded-full blur-3xl opacity-30"></div>
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Header */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 mb-6 px-6 py-3 bg-yellow-100 border border-yellow-200 rounded-full">
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
              <span className="text-blue-700 text-sm font-medium">
                Live Support Available
              </span>
            </div>
            <h2 className="text-5xl sm:text-7xl font-black text-blue-900 mb-6 tracking-tight">
              FAQ<span className="text-yellow-500">s</span>
            </h2>
            <p className="text-gray-600 text-xl max-w-2xl mx-auto">
              Everything you need to know about our PGDM program
            </p>
          </div>

          {/* Search Bar */}
          <div className="relative mb-16 max-w-lg mx-auto">
            <input
              type="text"
              placeholder="Search questions..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-6 py-4 bg-white border border-blue-200 rounded-2xl text-gray-900 placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all duration-300 shadow-sm"
            />
            <div className="absolute right-4 top-1/2 -translate-y-1/2">
              <svg
                className="w-5 h-5 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
          </div>

          {/* FAQ Grid */}
          <div className="flex flex-col md:flex-row gap-6">
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
              <>
                <div className="flex-1 space-y-6">
                  {filteredFaqs.filter((_, index) => index % 2 === 0).map((faq, originalIndex) => {
                    const index = originalIndex * 2;
                    const isOpen = openIndex === index;
                    const isVisible = visibleItems.includes(index);
                    return (
                      <div
                        key={index}
                        ref={(el) => (itemRefs.current[index] = el)}
                        data-index={index}
                        className={`group cursor-pointer transform transition-all duration-700 ${
                          isVisible
                            ? "translate-y-0 opacity-100"
                            : "translate-y-8 opacity-0"
                        }`}
                        style={{ transitionDelay: `${index * 100}ms` }}
                      >
                        <div className="bg-white border border-blue-100 rounded-2xl overflow-hidden hover:border-blue-300 hover:shadow-lg transition-all duration-300">
                          <button
                            onClick={() => toggleFAQ(index)}
                            className="w-full text-left p-6 flex justify-between items-start gap-4 hover:bg-blue-50 transition-all duration-300"
                          >
                            <div className="flex-1">
                              <div className="flex items-center gap-3 mb-2">
                                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                                  {index + 1}
                                </div>
                                <span className="text-blue-900 font-semibold text-lg">
                                  {faq.question}
                                </span>
                              </div>
                            </div>
                            <div
                              className={`w-8 h-8 flex items-center justify-center rounded-full bg-yellow-100 transition-all duration-500 ${
                                isOpen ? "rotate-45 bg-yellow-200" : "rotate-0"
                              }`}
                            >
                              <svg
                                className="w-4 h-4 text-yellow-600"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                                />
                              </svg>
                            </div>
                          </button>
                          <div
                            className={`overflow-hidden transition-all duration-500 ease-out ${
                              isOpen
                                ? "max-h-96 opacity-100"
                                : "max-h-0 opacity-0"
                            }`}
                          >
                            <div className="px-6 pb-6">
                              <div className="w-full h-px bg-blue-100 mb-4"></div>
                              <p className="text-gray-700 leading-relaxed text-base">
                                {faq.answer}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
                <div className="flex-1 space-y-6">
                  {filteredFaqs.filter((_, index) => index % 2 === 1).map((faq, originalIndex) => {
                    const index = originalIndex * 2 + 1;
                    const isOpen = openIndex === index;
                    const isVisible = visibleItems.includes(index);
                    return (
                      <div
                        key={index}
                        ref={(el) => (itemRefs.current[index] = el)}
                        data-index={index}
                        className={`group cursor-pointer transform transition-all duration-700 ${
                          isVisible
                            ? "translate-y-0 opacity-100"
                            : "translate-y-8 opacity-0"
                        }`}
                        style={{ transitionDelay: `${index * 100}ms` }}
                      >
                        <div className="bg-white border border-blue-100 rounded-2xl overflow-hidden hover:border-blue-300 hover:shadow-lg transition-all duration-300">
                          <button
                            onClick={() => toggleFAQ(index)}
                            className="w-full text-left p-6 flex justify-between items-start gap-4 hover:bg-blue-50 transition-all duration-300"
                          >
                            <div className="flex-1">
                              <div className="flex items-center gap-3 mb-2">
                                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                                  {index + 1}
                                </div>
                                <span className="text-blue-900 font-semibold text-lg">
                                  {faq.question}
                                </span>
                              </div>
                            </div>
                            <div
                              className={`w-8 h-8 flex items-center justify-center rounded-full bg-yellow-100 transition-all duration-500 ${
                                isOpen ? "rotate-45 bg-yellow-200" : "rotate-0"
                              }`}
                            >
                              <svg
                                className="w-4 h-4 text-yellow-600"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                                />
                              </svg>
                            </div>
                          </button>
                          <div
                            className={`overflow-hidden transition-all duration-500 ease-out ${
                              isOpen
                                ? "max-h-96 opacity-100"
                                : "max-h-0 opacity-0"
                            }`}
                          >
                            <div className="px-6 pb-6">
                              <div className="w-full h-px bg-blue-100 mb-4"></div>
                              <p className="text-gray-700 leading-relaxed text-base">
                                {faq.answer}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </>
            )}
          </div>

          {/* Contact Section */}
          <div className="mt-20 text-center">
            <div className="bg-white border border-blue-200 rounded-3xl p-12 shadow-lg">
              <h3 className="text-3xl font-bold text-blue-900 mb-4">
                Need More <span className="text-yellow-500">Help?</span>
              </h3>
              <p className="text-gray-600 mb-8 text-lg max-w-2xl mx-auto">
                Our admission experts are standing by to guide you through
                your journey
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+91-98995 69090"
                  className="inline-flex items-center justify-center px-8 py-4 bg-blue-500 hover:bg-blue-600 text-white rounded-2xl font-semibold transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  <span className="flex items-center gap-2">
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                    Call Now
                  </span>
                </a>
                <a
                  href="mailto:admissions@accurate.in"
                  className="inline-flex items-center justify-center px-8 py-4 bg-yellow-400 hover:bg-yellow-500 text-blue-900 rounded-2xl font-semibold transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  <span className="flex items-center gap-2">
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                    Send Email
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FAQ;