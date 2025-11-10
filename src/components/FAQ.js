"use client";

import React, { useState } from "react";

const faqs = [
    {
        question: "Is the PGDM equivalent to an MBA?",
        answer: "Yes, the AICTE-approved PGDM is equivalent to MBA from any Indian university. PGDM programs are often more industry-oriented and flexible in curriculum design compared to traditional MBA programs.",
    },
    {
        question: "Is hostel facility available on campus?",
        answer: "Yes, we have separate hostels for boys and girls with all modern amenities including Wi-Fi, mess facility, recreational areas, and 24/7 security. The hostels are located within the campus for convenience.",
    },
    {
        question: "Do you provide placement assistance?",
        answer: "Absolutely! We provide 100% placement support through our Corporate Resource Centre. This includes pre-placement training, resume building, mock interviews, internship opportunities, and direct interaction with recruiters.",
    },
    {
        question: "What is the admission process?",
        answer: "The admission process involves three simple steps: 1) Fill the online application form, 2) Appear for Group Discussion and Personal Interview (GD-PI), and 3) Receive admission offer and confirm your seat.",
    },
    {
        question: "Which entrance exam scores are accepted?",
        answer: "We accept scores from CAT, MAT, XAT, CMAT, ATMA, and GMAT. Students without entrance exam scores can also apply and will be evaluated through our internal assessment process.",
    },
    {
        question: "What is the fee structure?",
        answer: "The fee structure varies based on the program and scholarships awarded. We offer various merit-based and need-based scholarships that can reduce your fee significantly. Please download our brochure or contact the admission office for detailed fee information.",
    },
    {
        question: "Are laptops provided to students?",
        answer: "Yes, every PGDM student receives a personal laptop as part of the program to ensure seamless digital learning and project work throughout the course.",
    },
    {
        question: "What specializations are offered?",
        answer: "We offer seven specializations: Marketing Management, Finance Management, Business Analytics, Human Resource Management, International Business, Operations & Supply Chain Management, and Banking & Financial Services. Students can choose dual specializations.",
    },
    {
        question: "Is there an international study tour?",
        answer: "Yes, our Global Immersion Study Tour is a highlight of the PGDM program. Students visit international destinations like Singapore, Dubai, or Malaysia to gain exposure to global business practices and interact with industry leaders.",
    },
    {
        question: "What is the duration of the program?",
        answer: "The PGDM is a 2-year full-time program divided into four semesters. The program includes classroom learning, internships, live projects, and a capstone project in the final year.",
    },
];

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };
    return (
        <>
            <section className="py-20 bg-linear-to-b from-gray-50 to-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Header */}
                    <div className="text-center mb-16">
                        <span className="inline-block mb-4 px-4 py-1.5 text-sm font-medium bg-purple-100 text-purple-700 rounded-full">
                            Got Questions?
                        </span>
                        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                            Frequently Asked Questions
                        </h2>
                        <p className="text-gray-600 text-lg">
                            Find answers to common questions about our PGDM programme
                        </p>
                    </div>

                    {/* FAQ Accordion */}
                    <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden divide-y divide-gray-100">
                        {faqs.map((faq, index) => (
                            <div key={index}>
                                <button
                                    onClick={() => toggleFAQ(index)}
                                    className="w-full text-left px-6 py-4 hover:bg-gray-50 flex justify-between items-center transition-colors"
                                >
                                    <span className="text-gray-900 font-medium pr-4">{faq.question}</span>
                                    <span className="text-gray-500 text-xl">{openIndex === index ? "−" : "+"}</span>
                                </button>
                                {openIndex === index && (
                                    <div className="px-6 pb-4 text-gray-600 transition-all duration-300">
                                        {faq.answer}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>

                    {/* Still Have Questions */}
                    <div className="mt-12 text-center bg-linear-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-100">
                        <h3 className="text-2xl font-semibold text-gray-900 mb-3">Still Have Questions?</h3>
                        <p className="text-gray-600 mb-6">
                            Our admission counselors are here to help you make an informed decision
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a
                                href="tel:+919999999999"
                                className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-all duration-300"
                            >
                                📞 Call Us Now
                            </a>
                            <a
                                href="mailto:admissions@accurate.in"
                                className="inline-flex items-center justify-center px-6 py-3 bg-white hover:bg-gray-50 text-gray-900 rounded-lg border border-gray-200 transition-all duration-300"
                            >
                                ✉️ Email Us
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default FAQ;
