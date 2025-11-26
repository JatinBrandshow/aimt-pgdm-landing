"use client";

import { Building2, Target, TrendingUp } from "lucide-react";
import Image from "next/image";
import React, { useState, useEffect, useRef } from "react";

const stats = [
  {
    icon: TrendingUp,
    value: "₹1.3 CR",
    label: "Highest Package (International)",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: Building2,
    value: "₹18 LPA",
    label: "Highest Package (Domestic)",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Target,
    value: "₹7.8 LPA",
    label: "Average Package",
    color: "from-purple-500 to-violet-500",
  },
];

const recruiters = [
  { name: "Deloitte", image: "/image/placement/recruiters/deloitte.webp" },
  { name: "HDFC Bank", image: "/image/placement/recruiters/hdfc-bank.webp" },
  { name: "KPMG", image: "/image/placement/recruiters/kpmg.webp" },
  { name: "ICICI", image: "/image/placement/recruiters/icici.webp" },
  { name: "Amazon", image: "/image/placement/recruiters/amazon.webp" },
  { name: "Airtel", image: "/image/placement/recruiters/airtel.webp" },
  { name: "EY", image: "/image/placement/recruiters/ey.webp" },
  { name: "ITC", image: "/image/placement/recruiters/itc.webp" },
  { name: "Infosys", image: "/image/placement/recruiters/infosys.webp" },
  { name: "TCS", image: "/image/placement/recruiters/tcs.webp" },
  { name: "Wipro", image: "/image/placement/recruiters/wipro.webp" },
  { name: "Accenture", image: "/image/placement/recruiters/accenture.webp" },
  { name: "Cognizant", image: "/image/placement/recruiters/cognizant.webp" },
  { name: "PwC", image: "/image/placement/recruiters/pwc.webp" },
  { name: "Gartner", image: "/image/placement/recruiters/gartner.webp" },
];

const CountingNumber = ({ end, suffix = "", duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    let startTime;
    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    requestAnimationFrame(animate);
  }, [end, duration, isVisible]);

  return <span ref={ref}>{count}{suffix}</span>;
};

const PlacementHighlights = () => {
  return (
    <>
      <section className="py-8 bg-linear-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* --- Header --- */}
          <div className="text-center mb-16">
            {/* Badge Replacement */}
            <span className="inline-block mb-4 px-4 py-1 text-base font-medium rounded-full bg-green-100 text-green-700">
              Placement Cell
            </span>

            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Strong Industry Interface & 100% Placement Track Record.
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              Our dedicated Corporate Resource Centre connects students with
              leading recruiters through internships, workshops, and
              pre-placement programs.
            </p>
          </div>

          {/* --- Stats Grid --- */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div
                  key={index}
                  className="relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 overflow-hidden group"
                >
                  <div
                    className={`absolute inset-0 bg-linear-to-br ${stat.color} opacity-5 group-hover:opacity-10 transition-opacity`}
                  ></div>

                  <div className="relative z-10">
                    <div
                      className={`w-14 h-14 bg-linear-to-br ${stat.color} rounded-xl flex items-center justify-center mb-4 shadow-lg`}
                    >
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <div className="text-4xl font-bold text-gray-900 mb-2">
                      {stat.value}
                    </div>
                    <div className="text-gray-600">{stat.label}</div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* --- Recruiters Section --- */}
          <div className="bg-linear-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 md:p-12 border border-blue-100">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                Our Esteemed Recruiters
              </h3>
              <p className="text-gray-600">
                Leading companies trust Accurate graduates
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 mb-8">
              {recruiters.map((recruiter, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow border border-gray-100 flex items-center justify-center min-h-20 "
                >
                  <Image
                    src={recruiter.image}
                    alt={recruiter.name}
                    width={100}
                    height={100}
                    className="object-contain w-auto h-20 grayscale hover:grayscale-0 transition duration-300"
                  />
                </div>
              ))}
            </div>

            {/* Button Replacement */}
            {/* <div className="text-center">
                            <button className="inline-flex items-center gap-2 px-6 py-2 border border-gray-300 rounded-md bg-white text-gray-800 hover:bg-gray-50 transition">
                                <Building2 className="w-4 h-4" />
                                View Complete Placement Report
                            </button>
                        </div> */}
          </div>

          {/* --- Additional Stats --- */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity"></div>
              <div className="relative bg-white rounded-2xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg">
                    <Building2 className="w-8 h-8 text-white" />
                  </div>
                </div>
                <div className="pt-6 text-center">
                  <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-3">
                    <CountingNumber end={300} suffix="+" />
                  </div>
                  <div className="text-gray-600 font-medium">Recruiters</div>
                </div>
              </div>
            </div>
            
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity"></div>
              <div className="relative bg-white rounded-2xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center shadow-lg">
                    <Target className="w-8 h-8 text-white" />
                  </div>
                </div>
                <div className="pt-6 text-center">
                  <div className="text-4xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent mb-3">
                    <CountingNumber end={500} suffix="+" />
                  </div>
                  <div className="text-gray-600 font-medium">Placement Offers</div>
                </div>
              </div>
            </div>
            
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity"></div>
              <div className="relative bg-white rounded-2xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-full flex items-center justify-center shadow-lg">
                    <TrendingUp className="w-8 h-8 text-white" />
                  </div>
                </div>
                <div className="pt-6 text-center">
                  <div className="text-4xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent mb-3">
                    <CountingNumber end={100} suffix="%" />
                  </div>
                  <div className="text-gray-600 font-medium">Placement Assistance</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PlacementHighlights;
