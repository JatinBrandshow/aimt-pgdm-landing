"use client";

import React from "react";

const StickyApplyNow = () => {
    const scrollToForm = () => {
        document.getElementById("enquiry-form")?.scrollIntoView({
            behavior: "smooth",
        });
    };

    return (
        <div>
            {/* Desktop / Tablet (sm and above) */}
            <button
                onClick={scrollToForm}
                className="
                    hidden sm:flex
                    fixed left-0 top-1/2 -translate-y-1/2 
                    z-50 bg-indigo-950 text-white px-4 py-3
                    rotate-90 origin-left rounded-lg shadow-lg 
                    font-semibold tracking-wide 
                    hover:bg-yellow-500 transition-all
                "
                style={{
                    writingMode: "vertical-rl",
                    transform: "rotate(270deg)",
                }}
            >
                Apply Now
            </button>

            {/* Mobile (max-sm) */}
            <button
                onClick={scrollToForm}
                className="
                    sm:hidden
                    fixed bottom-0 left-0 w-full
                    z-50 bg-indigo-950 text-white py-3
                    text-center font-semibold tracking-wide shadow-lg
                    hover:bg-yellow-500 transition-all
                "
            >
                Apply Now
            </button>
        </div>
    );
};

export default StickyApplyNow;
