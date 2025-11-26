"use client";

import React, { useEffect, useRef } from "react";
import { Award, BarChart, BookOpen, Briefcase, Globe, GraduationCap, Laptop, Users } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const highlights = [
    { icon: GraduationCap, title: "Industry Oriented Certifications", description: "Choose two complementary areas to enhance your expertise" },
    { icon: Globe, title: "International Study Tour for Global Learning", description: "Experience global business practices firsthand" },
    { icon: GraduationCap, title: "Dual Specialisation Options", description: "Choose two complementary areas to enhance your expertise" },
    { icon: BookOpen, title: "Industry-Linked Curriculum", description: "Stay ahead with market-relevant course content" },
    { icon: Briefcase, title: "100% Placement", description: "Dedicated support until you land your dream job" },
    { icon: Users, title: "Global Faculty & Mentorship", description: "Learn from industry veterans and academic experts" },
    { icon: BarChart, title: "Live Projects & Case Studies", description: "Apply theory to real-world business challenges" },
    { icon: Laptop, title: "Laptop for Every Student", description: "Personal laptop provided to ensure seamless learning" },
];

const WhyChooseUs = () => {
    const sectionRef = useRef(null);
    const cardsRef = useRef([]);

    useEffect(() => {
        const section = sectionRef.current;
        const cards = cardsRef.current;
        gsap.set(section, { opacity: 0, y: 80, scale: 0.93 });
        gsap.to(section, {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
                trigger: section,
                start: "top 80%",
                once: true,
            }
        });

        gsap.set(cards, { opacity: 0, y: 40 });
        gsap.to(cards, {
            opacity: 1,
            y: 0,
            duration: 0.9,
            stagger: 0.12,
            ease: "power2.out",
            scrollTrigger: {
                trigger: section,
                start: "top 85%",
                once: true,
            }
        });
    }, []);

    return (
        <section ref={sectionRef} className="relative py-12 bg-white max-md:py-10 max-sm:py-8 overflow-hidden">
            {/* Background vector SVG */}
            <div
                aria-hidden="true"
                className="absolute inset-0 pointer-events-none z-0"
                style={{}}
            >
                {/* Example vector: Soft geometric wave for blue theme */}
                <svg width="100%" height="100%" viewBox="0 0 1920 420" fill="none" xmlns="http://www.w3.org/2000/svg"
                    className="absolute left-0 top-0 w-full h-full">
                    <path d="M0 330L150 320C300 310 600 290 900 340C1200 390 1440 370 1620 350L1920 320V420H0V330Z"
                        fill="#EFF6FF" />
                    <ellipse cx="75%" cy="28" rx="440" ry="70" fill="#DBEAFE" fillOpacity="5" />
                    <ellipse cx="22%" cy="90" rx="280" ry="40" fill="#3B82F6" fillOpacity="0.2" />
                </svg>
            </div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-12 max-lg:mb-10 max-md:mb-8 max-sm:mb-6">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4 max-lg:text-3xl max-md:text-2xl max-sm:text-xl">
                        Why Students Choose Accurate for Their PGDM Journey
                    </h2>
                    <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed max-sm:text-base">
                        At Accurate Institute of Management & Technology, we believe in nurturing leaders who can make a global impact. Our industry-driven curriculum, international exposure, and dynamic learning environment prepare you for tomorrow&apos;s business challenges.
                    </p>
                </div>
                <div className="grid grid-cols-4 max-md:grid-cols-2 max-sm:grid-cols-1 gap-4">
                    {highlights.map((highlight, index) => {
                        const Icon = highlight.icon;
                        return (
                            <div
                                key={index}
                                ref={el => cardsRef.current[index] = el}
                                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-200 hover:-translate-y-1 group max-sm:p-4 relative z-10"
                            >
                                <div className="w-12 h-12 bg-linear-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-md">
                                    <Icon className="w-6 h-6 text-white" />
                                </div>
                                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                                    {highlight.title}
                                </h3>
                                <p className="text-gray-600 text-sm leading-relaxed">{highlight.description}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;