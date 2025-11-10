import AdmissionProcess from "@/components/AdmissionProcess";
import AlumniTestimonials from "@/components/AlumniTestimonials";
import CampusLife from "@/components/CampusLife";
import ContactUs from "@/components/ContactUs";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import GlobalExposure from "@/components/GlobalExposure";
import Header from "@/components/Header";
import MainSection from "@/components/MainSection";
import PlacementHighlights from "@/components/PlacementHighlights";
import ProgrammeFeatures from "@/components/ProgrammeFeatures";
import ProgrammeOverview from "@/components/ProgrammeOverview";
import Scholarships from "@/components/Scholarships";
import Specialisations from "@/components/Specialisations";
import WhyChooseUs from "@/components/WhyChooseUs";
import React from "react";

export const HomePage = () => {
    return (
        <>
            <Header />
            <MainSection />
            <WhyChooseUs />
            <ProgrammeOverview />
            <Specialisations />
            <ProgrammeFeatures />
            <GlobalExposure />
            <PlacementHighlights />
            <CampusLife />
            <Scholarships />
            <AlumniTestimonials />
            <AdmissionProcess />
            <FAQ />
            <ContactUs />
            <Footer />
        </>
    );
};
