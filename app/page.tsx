import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/home/Hero";
import ValuePropositions from "@/components/home/ValuePropositions";
import Faculties from "@/components/home/Faculties";
import QuickActions from "@/components/home/QuickActions";
import FeaturedPrograms from "@/components/home/FeaturedPrograms";
import StudentLife from "@/components/home/StudentLife";
import Scholarship from "@/components/home/Scholarship";
import NewsEvents from "@/components/home/NewsEvents";
import Campuses from "@/components/home/Campuses";
import SuccessStories from "@/components/home/SuccessStories";
import AdmissionsCTA from "@/components/home/AdmissionsCTA";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home | Global University - Quality Education Within Reach",
  description: "Global University is a high quality educational institution established in 1992 to provide students with superior education and a chance at becoming leaders in today's global market at a reasonable cost.",
  openGraph: {
    title: "Home | Global University - Quality Education Within Reach",
    description: "Global University - Quality education within reach since 1992.",
  },
};

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ValuePropositions />
        <QuickActions />
        <Faculties />
        <FeaturedPrograms />
        <Scholarship />
        <StudentLife />
        <NewsEvents />
        <Campuses />
        <SuccessStories />
        <AdmissionsCTA />
      </main>
      <Footer />
    </>
  );
}

