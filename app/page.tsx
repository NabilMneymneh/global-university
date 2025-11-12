import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/home/Hero";
import ValuePropositions from "@/components/home/ValuePropositions";
import FeaturedPrograms from "@/components/home/FeaturedPrograms";
import NewsEvents from "@/components/home/NewsEvents";
import AdmissionsCTA from "@/components/home/AdmissionsCTA";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home | Global University",
  description: "Welcome to Global University - A premier institution of higher education in Lebanon offering diverse academic programs and world-class facilities.",
  openGraph: {
    title: "Home | Global University",
    description: "Welcome to Global University - A premier institution of higher education in Lebanon.",
  },
};

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ValuePropositions />
        <FeaturedPrograms />
        <NewsEvents />
        <AdmissionsCTA />
      </main>
      <Footer />
    </>
  );
}

