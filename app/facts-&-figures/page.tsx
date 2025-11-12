import { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Facts & Figures | Global University",
  description: "Key statistics and facts about Global University.",
  openGraph: {
    title: "Facts & Figures | Global University",
    description: "Key statistics about Global University.",
  },
};

const stats = [
  { label: "Total Students", value: "5,000+" },
  { label: "Faculty Members", value: "300+" },
  { label: "Academic Programs", value: "50+" },
  { label: "Research Projects", value: "100+" },
];

export default function FactsFiguresPage() {
  return (
    <>
      <Header />
      <main>
        <section className="bg-gradient-to-r from-primary to-primary-dark text-white py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold sm:text-5xl">Facts & Figures</h1>
            <p className="mt-4 text-lg text-gray-100">
              By the numbers
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 mb-12">
              {stats.map((stat, index) => (
                <Card key={index} className="text-center">
                  <CardHeader>
                    <CardTitle className="text-4xl font-bold text-primary">{stat.value}</CardTitle>
                    <CardDescription className="text-base">{stat.label}</CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>

            <div className="prose prose-lg max-w-none">
              <h2>About Global University</h2>
              <p>
                Global University is a leading institution of higher education in Lebanon, 
                committed to providing quality education and fostering innovation.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

