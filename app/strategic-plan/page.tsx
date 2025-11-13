import { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Strategic Plan | Global University",
  description: "Learn about Global University's strategic plan and future vision.",
  openGraph: {
    title: "Strategic Plan | Global University",
    description: "Our strategic plan and future vision.",
  },
};

export default function StrategicPlanPage() {
  return (
    <>
      <Header />
      <main>
        <section className="bg-gradient-to-r from-primary to-primary-dark text-white py-16">
          <div className="container-shell">
            <h1 className="text-4xl font-bold sm:text-5xl">Strategic Plan</h1>
            <p className="mt-4 text-lg text-gray-100">
              Our vision for the future
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="container-shell">
            <div className="prose prose-lg max-w-none">
              <h2>Strategic Goals</h2>
              <ul>
                <li>Enhance academic excellence and program quality</li>
                <li>Expand research and innovation capabilities</li>
                <li>Strengthen community engagement and partnerships</li>
                <li>Improve student success and support services</li>
                <li>Advance sustainability and social responsibility</li>
              </ul>

              <h2>Implementation</h2>
              <p>
                Our strategic plan is implemented through annual action plans, regular assessment, 
                and continuous improvement processes.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

