"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { Clock, GraduationCap, MapPin } from "lucide-react";
import gsap from "gsap";

const ProgrammeOverview = () => {
    const countRef = useRef(null);
    const leftRef = useRef(null);
    const rightRef = useRef(null);
    const factRefs = useRef([]);
    const floatRef = useRef(null);
    const imgRef = useRef(null);

    useEffect(() => {
        const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

        // Slide in left content
        tl.from(leftRef.current, {
            x: -80,
            opacity: 0,
            duration: 1.2,
        });

        // Slide in right content
        tl.from(
            rightRef.current,
            {
                x: 80,
                opacity: 0,
                duration: 1.2,
            },
            "-=0.8"
        );

        // Start counter AFTER slides
        tl.add(() => {
            let obj = { val: 0 };
            gsap.to(obj, {
                val: 20,
                duration: 2,
                ease: "power3.out",
                onUpdate: () => {
                    if (countRef.current) {
                        countRef.current.innerText = Math.floor(obj.val);
                    }
                },
                onComplete: () => {
                    // Floating left-right movement AFTER counter completes
                    gsap.to(floatRef.current, {
                        x: 20,
                        duration: 2,
                        yoyo: true,
                        repeat: -1,
                        ease: "power1.inOut",
                    });
                },
            });
        });

        // Fact cards scale in
        factRefs.current.forEach((el, i) => {
            tl.from(
                el,
                {
                    scale: 0.8,
                    opacity: 0,
                    duration: 0.6,
                },
                "-=1.4"
            );
        });
    }, []);

    // Parallax image hover
    const handleMouseMove = (e) => {
        const rect = imgRef.current.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;

        gsap.to(imgRef.current, {
            rotateY: x * 6,
            rotateX: -y * 6,
            duration: 0.4,
        });
    };

    const handleMouseLeave = () => {
        gsap.to(imgRef.current, {
            rotateX: 0,
            rotateY: 0,
            duration: 0.4,
        });
    };

    return (
        <section className="py-16 bg-white relative overflow-hidden">
            {/* Gradient blob behind image */}
            <div className="absolute right-0 top-10 w-[350px] h-[350px] bg-blue-500/20 blur-[120px] rounded-full"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* LEFT CONTENT */}
                    <div ref={leftRef} className="space-y-6">
                        <h2 className="text-4xl font-bold text-gray-900 max-lg:text-3xl">About the PGDM Programme</h2>

                        <p className="text-gray-600 text-lg leading-relaxed">
                            The <strong>Post Graduate Diploma in Management (PGDM)</strong> is a two-year, full-time
                            program approved by the
                            <strong> AICTE, Ministry of Education, Govt. of India.</strong>
                            Designed with inputs from industry leaders, the programme blends academic rigor with
                            practical corporate exposure.
                        </p>

                        {/* QUICK FACTS */}
                        <div className="grid grid-cols-3 gap-4 pt-6 max-sm:grid-cols-1">
                            {[
                                {
                                    icon: <Clock className="w-5 h-5 text-white" />,
                                    label: "Duration",
                                    value: "2 Years Full Time",
                                },
                                {
                                    icon: <GraduationCap className="w-5 h-5 text-white" />,
                                    label: "Eligibility",
                                    value: "Bachelor's Degree (min. 50%)",
                                },
                                {
                                    icon: <MapPin className="w-5 h-5 text-white" />,
                                    label: "Location",
                                    value: "Greater Noida, UP",
                                },
                            ].map((item, i) => (
                                <div
                                    key={i}
                                    ref={(el) => (factRefs.current[i] = el)}
                                    className="backdrop-blur-md bg-white/50 rounded-xl p-6 border border-gray-200 shadow-lg"
                                >
                                    <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center mb-3">
                                        {item.icon}
                                    </div>
                                    <div className="text-xs text-gray-500 mb-1">{item.label}</div>
                                    <div className="text-gray-900 font-medium">{item.value}</div>
                                </div>
                            ))}
                        </div>

                        {/* AICTE Badge */}
                        <div className="flex items-center gap-3 bg-yellow-50 border border-yellow-200 rounded-lg p-4 shadow">
                            <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center shrink-0">
                                <GraduationCap className="w-6 h-6 text-white" />
                            </div>
                            <div>
                                <div className="text-gray-900 font-medium">AICTE Approved Programme</div>
                                <div className="text-sm text-gray-600">
                                    Recognized by Ministry of Education, Government of India
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT IMAGE */}
                    <div
                        ref={rightRef}
                        className="relative"
                        onMouseMove={handleMouseMove}
                        onMouseLeave={handleMouseLeave}
                    >
                        <div ref={imgRef} className="relative rounded-2xl overflow-hidden shadow-2xl transform-gpu">
                            <Image
                                src="/image/pgdm-girl-1.webp"
                                alt="PGDM Classroom"
                                width={600}
                                height={500}
                                className="w-full h-[500px] object-cover"
                            />
                        </div>

                        {/* Floating counter */}
                        <div
                            ref={floatRef}
                            className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-6 border border-gray-100"
                        >
                            <div ref={countRef} className="text-4xl font-bold text-blue-600 mb-1">
                                0+
                            </div>
                            <div className="text-sm text-gray-600">Years of Excellence</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProgrammeOverview;
