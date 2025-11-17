"use client";

import React from "react";
import { Quote } from "lucide-react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const testimonials = [
    {
        quote: "It was a very nice experience throughout my association with Accurate College as an MBA student. The overall environment and support system truly shaped all the required skills for my successful career journey.",
        name: "Mahesh Kumar",
        designation: "Senior Executive – Corporate Operations",
        batch: "MBA 2016-18",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=1080",
    },
    {
        quote: "Accurate College (AIMT) gave me a platform to develop my professional skills that helped me perform my tasks effectively. My sincere thanks to the management faculty for always supporting me in my professional journey.",
        name: "Anurag Kumar",
        designation: "Assistant Manager – Business Development",
        batch: "MBA 2015-17",
        image: "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?w=1080",
    },
    {
        quote: "It gives me a proud moment to recall my two years at Accurate College. The learning environment and exposure added great value to my journey.",
        name: "Khusbu Singh",
        designation: "HR Executive – Talent Acquisition",
        batch: "MBA 2016-18",
        image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=1080",
    },
    {
        quote: "My learning and self-development during the entire MBA program at Accurate College was fantastic. I initially faced difficulties in soft skills, but the regular support from my mentors changed everything.",
        name: "Sushil Kumar Choubey",
        designation: "Operations Specialist",
        batch: "MBA 2015-17",
        image: "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?w=1080",
    },
    {
        quote: "It is a matter of great pride for me to be an Accuratian. The MBA environment boosted my morale and helped me improve my professional skills with timely guidance from faculty members.",
        name: "Abhinav Pandey",
        designation: "Project Coordinator",
        batch: "MBA 2016-18",
        image: "https://images.unsplash.com/photo-1511367461989-f85a21fda167?w=1080",
    },
    {
        quote: "I still cherish my MBA days at Accurate College. The practical learning experience through guest lectures, industry visits, and skill development sessions added immense value to my professional career.",
        name: "Dolly Rana",
        designation: "Client Servicing Associate",
        batch: "MBA 2017-19",
        image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=1080",
    },
    {
        quote: "I can proudly say that during my MBA journey, the focused approach of Accurate College faculty toward holistic development and making students industry-ready is truly commendable.",
        name: "Manish Kumar Jha",
        designation: "Team Lead – Operations",
        batch: "MBA 2015-17",
        image: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=1080",
    },
    {
        quote: "Accurate College played a significant role in grooming my overall personality and preparing me to take up new challenges in the corporate world.",
        name: "Md. Khalid Hussain",
        designation: "Process Associate",
        batch: "MBA 2016-18",
        image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=1080",
    },
    {
        quote: "I am very happy to share my good experiences during my MBA programme at Accurate College. The industry visits, seminars, and expert workshops helped me realize my true potential.",
        name: "Deepak Mishra",
        designation: "Business Development Executive",
        batch: "MBA 2017-19",
        image: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=1080",
    },
    {
        quote: "I feel overjoyed to recall my Accurate College memories which played an important role in shaping my personality and helping me set my career goals.",
        name: "Akash Kumar Singh",
        designation: "Marketing Coordinator",
        batch: "MBA 2016-18",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=1080",
    },
];

const AlumniTestimonials = () => {
    return (
        <section className="py-12 bg-linear-to-b from-white to-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <div className="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-full mb-4 font-medium">
                        💼 Success Stories
                    </div>
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Our Alumni, Our Pride</h2>
                    <p className="text-gray-600 max-w-3xl mx-auto text-lg">
                        Hear from our successful graduates who are making their mark across industries worldwide.
                    </p>
                </div>

                {/* Slider */}
                <Swiper
                    modules={[Autoplay]}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    spaceBetween={20}
                    slidesPerView={1.2}
                    breakpoints={{
                        640: { slidesPerView: 1.4 },
                        768: { slidesPerView: 2.2 },
                        1024: { slidesPerView: 3 },
                    }}
                    className="pb-10"
                >
                    {testimonials.map((testimonial, index) => (
                        <SwiperSlide key={index} className="h-full">
                            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 relative group h-full flex flex-col">
                                {/* Quote Icon */}
                                <div className="absolute -top-4 left-8 w-12 h-12 bg-linear-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg">
                                    <Quote className="w-6 h-6 text-white" />
                                </div>

                                {/* Content */}
                                <div className="pt-6 space-y-6 grow">
                                    <p className="text-gray-600 italic leading-relaxed">"{testimonial.quote}"</p>

                                    {/* Profile */}
                                    <div className="flex items-center gap-4 pt-4 border-t border-gray-100">
                                        <div className="w-14 h-14 rounded-full overflow-hidden shadow-md shrink-0">
                                            <Image
                                                src={testimonial.image}
                                                alt={testimonial.name}
                                                width={56}
                                                height={56}
                                                className="object-cover w-full h-full"
                                            />
                                        </div>
                                        <div>
                                            <div className="text-gray-900 font-semibold">{testimonial.name}</div>
                                            <div className="text-sm text-gray-600">{testimonial.designation}</div>
                                            <div className="text-xs text-gray-500">{testimonial.batch}</div>
                                        </div>
                                    </div>
                                </div>

                                {/* Hover Accent */}
                                <div className="absolute bottom-0 left-0 w-full h-1 bg-linear-to-r from-blue-500 to-indigo-600 rounded-b-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

                {/* Stats */}
                <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6">
                    <div className="text-center p-6 bg-linear-to-br from-blue-50 to-indigo-50 rounded-xl border border-blue-100">
                        <div className="text-4xl text-blue-600 font-bold mb-2">5000+</div>
                        <div className="text-gray-600">Global Alumni Network</div>
                    </div>

                    <div className="text-center p-6 bg-linear-to-br from-blue-50 to-indigo-50 rounded-xl border border-blue-100">
                        <div className="text-4xl text-blue-600 font-bold mb-2">50+</div>
                        <div className="text-gray-600">Countries Worldwide</div>
                    </div>

                    <div className="text-center p-6 bg-linear-to-br from-blue-50 to-indigo-50 rounded-xl border border-blue-100">
                        <div className="text-4xl text-blue-600 font-bold mb-2">Top 100</div>
                        <div className="text-gray-600">Fortune Companies</div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AlumniTestimonials;
