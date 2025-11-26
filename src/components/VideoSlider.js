"use client";

import React, { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Play } from "lucide-react";

const videos = [
    {
        id: 1,
        thumbnail:
            "https://images.unsplash.com/photo-1693608231470-25e1b16a23b9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xsZWdlJTIwY2FtcHVzJTIwc3R1ZGVudHN8ZW58MXx8fHwxNzYzNDM5MzQxfDA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
        id: 2,
        thumbnail:
            "https://images.unsplash.com/photo-1606761568499-6d2451b23c66?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bml2ZXJzaXR5JTIwbGVjdHVyZSUyMGhhbGx8ZW58MXx8fHwxNzYzNTA5NDQ2fDA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
        id: 3,
        thumbnail:
            "https://images.unsplash.com/photo-1623461487986-9400110de28e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmFkdWF0aW9uJTIwY2VyZW1vbnl8ZW58MXx8fHwxNzYzNTE5NTYzfDA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
        id: 4,
        thumbnail:
            "https://images.unsplash.com/photo-1722248540590-ba8b7af1d7b2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xsZWdlJTIwbGlicmFyeSUyMHN0dWR5aW5nfGVufDF8fHx8MTc2MzQzNjM4OXww&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
        id: 5,
        thumbnail:
            "https://images.unsplash.com/photo-1562506265-8de78e8c8f70?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bml2ZXJzaXR5JTIwc3BvcnRzJTIwc3RhZGl1bXxlbnwxfHx8fDE3NjM0ODAzODl8MA&ixlib=rb-4.1.0&q=80&w=1080",
    },
];

const VideoSlider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [slidesToShow, setSlidesToShow] = useState(3);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 768) setSlidesToShow(1);
            else if (window.innerWidth < 1280) setSlidesToShow(2);
            else setSlidesToShow(3);
        };

        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            handleNext();
        }, 4000);

        return () => clearInterval(interval);
    }, [currentIndex, slidesToShow]);

    const handleNext = () => {
        setCurrentIndex((prev) => {
            const maxIndex = videos.length - slidesToShow;
            return prev >= maxIndex ? 0 : prev + 1;
        });
    };

    const handlePrev = () => {
        setCurrentIndex((prev) => {
            const maxIndex = videos.length - slidesToShow;
            return prev <= 0 ? maxIndex : prev - 1;
        });
    };

    const goToSlide = (index) => {
        setCurrentIndex(index);
    };

    const maxDots = videos.length - slidesToShow + 1;
    return (
        <>
            <section className="max-w-[1500px] mx-auto py-6">
                <div className="relative w-full flex items-center">
                    {/* Previous Arrow */}
                    <button onClick={handlePrev} className="absolute left-0 top-1/2 -translate-y-1/2 z-10 group -mt-6">
                        <div className="relative">
                            <div className="absolute inset-0 rounded-full bg-blue-500/50 blur-xl scale-150 group-hover:scale-[2] transition-all"></div>
                            <div className="relative backdrop-blur-xl bg-white/20 rounded-full p-2 border border-white/40 shadow-2xl group-hover:bg-white/30 group-hover:scale-110">
                                <ChevronLeft className="w-5 h-5 text-white" />
                            </div>
                        </div>
                    </button>

                    {/* Next Arrow */}
                    <button onClick={handleNext} className="absolute right-0 top-1/2 -translate-y-1/2 z-10 group -mt-6">
                        <div className="relative">
                            <div className="absolute inset-0 rounded-full bg-blue-500/50 blur-xl scale-150 group-hover:scale-[2] transition-all"></div>
                            <div className="relative backdrop-blur-xl bg-white/20 rounded-full p-2 border border-white/40 shadow-2xl group-hover:bg-white/30 group-hover:scale-110">
                                <ChevronRight className="w-5 h-5 text-white" />
                            </div>
                        </div>
                    </button>

                    {/* Slider Content */}
                    <div className="overflow-hidden">
                        <div
                            className="flex transition-transform duration-700 ease-out"
                            style={{
                                transform: `translateX(-${currentIndex * (100 / slidesToShow)}%)`,
                            }}
                        >
                            {videos.map((video) => (
                                <div
                                    key={video.id}
                                    className="shrink-0 px-3"
                                    style={{ width: `${100 / slidesToShow}%` }}
                                >
                                    {/* --- DIRECT VIDEO THUMBNAIL CARD (NO VideoCard Needed) --- */}
                                    <div className="relative overflow-hidden rounded-3xl backdrop-blur-xl bg-white/20 border border-white/30 shadow-xl hover:shadow-[0_0_35px_rgba(59,130,246,0.5)] transition-all duration-500 hover:scale-105">
                                        <div className="relative aspect-video">
                                            <img
                                                src={video.thumbnail}
                                                alt=""
                                                className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                                            />

                                            {/* Gradient Overlay */}
                                            <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent"></div>

                                            {/* Play Button */}
                                            <div className="absolute inset-0 flex items-center justify-center">
                                                <div className="relative">
                                                    <div className="absolute inset-0 rounded-full bg-blue-400/60 blur-2xl scale-150"></div>
                                                    <div className="relative backdrop-blur-md bg-white/25 rounded-full p-4 border border-white/40 shadow-xl hover:scale-110 transition-all">
                                                        <Play className="w-7 h-7 text-white fill-white" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Accent Bar */}
                                        <div className="h-2 bg-linear-to-r from-blue-400/50 to-indigo-400/50 opacity-70"></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default VideoSlider;
