import { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "History & Mission | Global University",
  description: "Learn about Global University's history, mission, and vision for higher education in Lebanon.",
  openGraph: {
    title: "History & Mission | Global University",
    description: "Discover our history and mission.",
  },
};

export default function HistoryMissionPage() {
  return (
    <>
      <Header />
      <main>
        <section className="bg-gradient-to-r from-primary to-primary-dark text-white py-16">
          <div className="container-shell">
            <h1 className="text-4xl font-bold sm:text-5xl">History & Mission</h1>
            <p className="mt-4 text-lg text-gray-100">
              Our story and commitment
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="container-shell">
            <div className="prose prose-lg max-w-none">
              <h2>Our History</h2>
              <p>
                Global University was founded with a vision to provide accessible, high-quality higher 
                education in Lebanon. Since our establishment, we have grown into a leading institution 
                recognized for academic excellence and innovation.
              </p>

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
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

