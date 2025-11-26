"use client";

import React, { useState, useRef } from "react";
import { Phone, Mail, MessageSquare, Send, CheckCircle } from "lucide-react";
import { toast } from "sonner";
import { motion, useInView } from "framer-motion";

const specialisations = [
    "Marketing Management",
    "Finance Management",
    "Business Analytics",
    "Human Resource Management",
    "International Business",
    "Operations & Supply Chain Management",
    "Banking & Financial Services",
];

const ContactUs = () => {
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { 
        once: false, 
        margin: "-100px",
        amount: 0.3
    });

    const [formData, setFormData] = useState({
        fullName: "",
        mobile: "",
        email: "",
        program: "",
    });

    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!formData.fullName || !formData.mobile || !formData.email || !formData.program) {
            toast.error("Please fill in all required fields");
            return;
        }

        try {
            const res = await fetch("/api/submit-lead", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    name: formData.fullName,
                    mobile: formData.mobile,
                    email: formData.email,
                    course: formData.program,
                    utm_medium: "",
                    utm_campaign: "",
                }),
            });

            const data = await res.json();

            if (data.status === "success") {
                toast.success("Enquiry submitted successfully! Our team will contact you soon.");
                setIsSubmitted(true);

                setTimeout(() => {
                    setIsSubmitted(false);
                    setFormData({
                        fullName: "",
                        mobile: "",
                        email: "",
                        program: "",
                    });
                }, 3000);
            } else {
                toast.error(data.error || "Something went wrong");
            }
        } catch (error) {
            toast.error("Failed to submit enquiry");
            console.error(error);
        }
    };

    const handleChange = (field, value) => {
        setFormData((prev) => ({ ...prev, [field]: value }));
    };

    return (
        <>
            <section
                ref={sectionRef}
                id="enquiry-form"
                className="py-20 bg-gradient-to-br from-blue-900 via-indigo-900 to-blue-900 relative overflow-hidden"
            >
                {/* Animated Gradient Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-indigo-900 to-blue-900">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.08),transparent_50%)]" />
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(234,179,8,0.08),transparent_50%)]" />
                </div>

                {/* Grid Pattern with Layering */}
                <div className="absolute inset-0" style={{ zIndex: 1 }}>
                    <div
                        className="absolute inset-0 opacity-10"
                        style={{
                            backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.15) 1px, transparent 1px),
                                           linear-gradient(90deg, rgba(255, 255, 255, 0.15) 1px, transparent 1px)`,
                            backgroundSize: "60px 60px",
                        }}
                    />
                    <div
                        className="absolute inset-0 opacity-5"
                        style={{
                            backgroundImage: `linear-gradient(rgba(234, 179, 8, 0.2) 1px, transparent 1px),
                                           linear-gradient(90deg, rgba(234, 179, 8, 0.2) 1px, transparent 1px)`,
                            backgroundSize: "20px 20px",
                        }}
                    />
                </div>

                {/* Subtle Floating Shapes */}
                <motion.div
                    className="absolute top-20 left-10 w-32 h-32 border border-white/20 rounded-full opacity-20"
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
                    className="absolute bottom-20 left-1/4 w-16 h-16 border border-white/30 opacity-25 rounded-full"
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
                            i % 2 === 0 ? "bg-white" : "bg-yellow-400"
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
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        {/* Left Section */}
                        <motion.div 
                            className="text-white space-y-8"
                            initial={{ x: -100, opacity: 0 }}
                            animate={isInView ? { x: 0, opacity: 1 } : { x: -100, opacity: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                        >
                            <div>
                                <motion.span 
                                    className="inline-block mb-4 px-4 py-1 text-sm font-medium rounded-full bg-yellow-500 text-gray-900"
                                    initial={{ scale: 0 }}
                                    animate={isInView ? { scale: 1 } : { scale: 0 }}
                                    transition={{ duration: 0.5, delay: 0.2 }}
                                >
                                    🎓 Take the First Step
                                </motion.span>

                                <motion.h2 
                                    className="text-white mb-4 text-3xl font-semibold"
                                    initial={{ x: -50, opacity: 0 }}
                                    animate={isInView ? { x: 0, opacity: 1 } : { x: -50, opacity: 0 }}
                                    transition={{ duration: 0.6, delay: 0.4 }}
                                >
                                    Ready to Take the Next Step?
                                </motion.h2>

                                <motion.p 
                                    className="text-blue-100 text-lg"
                                    initial={{ x: -50, opacity: 0 }}
                                    animate={isInView ? { x: 0, opacity: 1 } : { x: -50, opacity: 0 }}
                                    transition={{ duration: 0.6, delay: 0.6 }}
                                >
                                    Fill out the enquiry form and our admission counselors will get in touch with you to
                                    guide you through the admission process.
                                </motion.p>
                            </div>

                            {/* Contact Info */}
                            <motion.div 
                                className="space-y-4"
                                initial={{ y: 30, opacity: 0 }}
                                animate={isInView ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }}
                                transition={{ duration: 0.6, delay: 0.8 }}
                            >
                                <motion.div 
                                    className="flex items-center gap-4 bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20"
                                    initial={{ y: 50, opacity: 0 }}
                                    animate={isInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
                                    transition={{ duration: 0.6, delay: 1.0 }}
                                    whileHover={{ scale: 1.02 }}
                                >
                                    <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center shrink-0">
                                        <Phone className="w-6 h-6 text-white" />
                                    </div>
                                    <div>
                                        <div className="text-sm text-blue-200">Helpline</div>
                                        <a
                                            href="tel:+919899569090"
                                            className="text-white hover:text-yellow-400 transition-colors"
                                        >
                                            +91-98995 69090
                                        </a>
                                    </div>
                                </motion.div>

                                <motion.div 
                                    className="flex items-center gap-4 bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20"
                                    initial={{ y: 50, opacity: 0 }}
                                    animate={isInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
                                    transition={{ duration: 0.6, delay: 1.1 }}
                                    whileHover={{ scale: 1.02 }}
                                >
                                    <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center shrink-0">
                                        <MessageSquare className="w-6 h-6 text-white" />
                                    </div>
                                    <div>
                                        <div className="text-sm text-blue-200">WhatsApp</div>
                                        <a
                                            href="https://wa.me/919220508941"
                                            className="text-white hover:text-yellow-400 transition-colors"
                                        >
                                            +91-92205 08941
                                        </a>
                                    </div>
                                </motion.div>

                                <motion.div 
                                    className="flex items-center gap-4 bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20"
                                    initial={{ y: 50, opacity: 0 }}
                                    animate={isInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
                                    transition={{ duration: 0.6, delay: 1.2 }}
                                    whileHover={{ scale: 1.02 }}
                                >
                                    <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center shrink-0">
                                        <Mail className="w-6 h-6 text-white" />
                                    </div>
                                    <div>
                                        <div className="text-sm text-blue-200">Email</div>
                                        <a
                                            href="mailto:admissions@accurate.in"
                                            className="text-white hover:text-yellow-400 transition-colors"
                                        >
                                            admissions@accurate.in
                                        </a>
                                    </div>
                                </motion.div>
                            </motion.div>
                        </motion.div>

                        {/* Right Section (Form) */}
                        <motion.div 
                            className="bg-white rounded-2xl p-8 shadow-2xl"
                            initial={{ x: 100, opacity: 0 }}
                            animate={isInView ? { x: 0, opacity: 1 } : { x: 100, opacity: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                        >
                            {!isSubmitted ? (
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div>
                                        <h3 className="text-gray-900 text-2xl font-semibold mb-2">Enquire Now</h3>
                                        <p className="text-gray-600 text-sm">
                                            Fill in your details and we'll get back to you within 24 hours.
                                        </p>
                                    </div>

                                    <div className="space-y-4">
                                        {/* Full Name */}
                                        <div>
                                            <label
                                                htmlFor="fullName"
                                                className="block text-sm font-medium text-gray-700"
                                            >
                                                Full Name *
                                            </label>
                                            <input
                                                id="fullName"
                                                type="text"
                                                placeholder="Enter your full name"
                                                value={formData.fullName}
                                                onChange={(e) => handleChange("fullName", e.target.value)}
                                                required
                                                className="mt-1 w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                                            />
                                        </div>

                                        {/* Mobile */}
                                        <div>
                                            <label htmlFor="mobile" className="block text-sm font-medium text-gray-700">
                                                Mobile Number *
                                            </label>
                                            <input
                                                id="mobile"
                                                type="tel"
                                                placeholder="Enter your mobile number"
                                                value={formData.mobile}
                                                onChange={(e) => handleChange("mobile", e.target.value)}
                                                required
                                                className="mt-1 w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                                            />
                                        </div>

                                        {/* Email */}
                                        <div>
                                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                                Email ID *
                                            </label>
                                            <input
                                                id="email"
                                                type="email"
                                                placeholder="Enter your email"
                                                value={formData.email}
                                                onChange={(e) => handleChange("email", e.target.value)}
                                                required
                                                className="mt-1 w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                                            />
                                        </div>

                                        {/* Program Select */}
                                        <div>
                                            <label
                                                htmlFor="program"
                                                className="block text-sm font-medium text-gray-700"
                                            >
                                                Program Interested *
                                            </label>
                                            <select
                                                id="program"
                                                value={formData.program}
                                                onChange={(e) => handleChange("program", e.target.value)}
                                                required
                                                className="mt-1 w-full border border-gray-300 rounded-md px-3 py-2 bg-white focus:ring-2 focus:ring-blue-500 focus:outline-none"
                                            >
                                                <option value="">Select Program</option>
                                                <option value="MBA">MBA</option>
                                                <option value="PGDM">PGDM</option>
                                            </select>
                                        </div>
                                    </div>

                                    {/* Submit */}
                                    <button
                                        type="submit"
                                        className="w-full flex items-center justify-center gap-2 bg-linear-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold py-3 rounded-md shadow-lg transition"
                                    >
                                        <Send className="w-5 h-5" />
                                        Submit Enquiry
                                    </button>

                                    <p className="text-xs text-gray-500 text-center">
                                        By submitting this form, you agree to our terms and privacy policy.
                                    </p>
                                </form>
                            ) : (
                                <div className="py-12 text-center space-y-4">
                                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                                        <CheckCircle className="w-10 h-10 text-green-600" />
                                    </div>
                                    <h3 className="text-gray-900 text-2xl font-semibold">Thank You!</h3>
                                    <p className="text-gray-600">
                                        Your enquiry has been submitted successfully. Our team will contact you shortly.
                                    </p>
                                </div>
                            )}
                        </motion.div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ContactUs;