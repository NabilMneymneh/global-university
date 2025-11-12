import { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "About Us | Global University",
  description: "Learn about Global University's history, mission, vision, and commitment to excellence in higher education in Lebanon.",
  openGraph: {
    title: "About Us | Global University",
    description: "Learn about Global University's history, mission, and vision.",
  },
};

export default function AboutPage() {
  return (
    <>
      <Header />
      <main>
        <section className="bg-gradient-to-r from-primary to-primary-dark text-white py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold sm:text-5xl">About Global University</h1>
            <p className="mt-4 text-lg text-gray-100">
              A premier institution of higher education in Lebanon
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="prose prose-lg max-w-none">
              <h2>Our Mission</h2>
              <p>
                Global University is committed to providing high-quality education that prepares students 
                for success in their chosen fields. We foster a culture of academic excellence, innovation, 
                and community engagement.
              </p>

              <h2>Our Vision</h2>
              <p>
                To be a leading institution of higher education in Lebanon and the region, recognized for 
                academic excellence, research innovation, and positive impact on society.
              </p>

              <h2>Our Values</h2>
              <ul>
                <li>Academic Excellence</li>
                <li>Integrity and Ethics</li>
                <li>Diversity and Inclusion</li>
                <li>Innovation and Research</li>
                <li>Community Engagement</li>
              </ul>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

