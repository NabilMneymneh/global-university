import { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Academic Catalogue | Global University",
  description: "Comprehensive guide to Global University's academic programs, courses, and requirements.",
  openGraph: {
    title: "Academic Catalogue | Global University",
    description: "Explore our comprehensive academic catalogue.",
  },
};

export default function AcademicCataloguePage() {
  return (
    <>
      <Header />
      <main>
        <section className="bg-gradient-to-r from-primary to-primary-dark text-white py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold sm:text-5xl">Academic Catalogue</h1>
            <p className="mt-4 text-lg text-gray-100">
              Comprehensive program guide
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="prose prose-lg max-w-none">
              <p>
                The Academic Catalogue provides detailed information about all programs, courses, 
                requirements, and policies at Global University. This document is updated annually 
                and serves as the official guide for students and faculty.
              </p>
              <p>
                For the most current version of the catalogue, please contact the Registrar's Office 
                or download the PDF version from the student portal.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

