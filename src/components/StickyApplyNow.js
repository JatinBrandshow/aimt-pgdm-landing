"use client";

import React from "react";

const StickyApplyNow = () => {
    const scrollToForm = () => {
        document.getElementById("enquiry-form")?.scrollIntoView({
            behavior: "smooth",
        });
    };

    return (
        <button
            onClick={scrollToForm}
            className="fixed left-0 top-1/2 -translate-y-1/2 z-9999 bg-indigo-950 text-white px-4 py-3 rotate-90 origin-left rounded-lg shadow-lg font-semibold tracking-wide hover:bg-yellow-500 transition-all"
            style={{ writingMode: "vertical-rl", transform: "rotate(270deg)" }}
        >
            Apply Now
        </button>
    );
};

export default StickyApplyNow;
