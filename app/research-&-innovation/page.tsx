import { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Research & Innovation | Global University",
  description: "Explore Global University's research initiatives, innovation projects, and academic publications.",
  openGraph: {
    title: "Research & Innovation | Global University",
    description: "Discover our research and innovation initiatives.",
  },
};

const researchAreas = [
  {
    title: "Medical Research",
    description: "Advancing healthcare through cutting-edge medical research and clinical studies.",
  },
  {
    title: "Technology Innovation",
    description: "Developing innovative solutions for the digital age.",
  },
  {
    title: "Environmental Studies",
    description: "Addressing global environmental challenges through research.",
  },
  {
    title: "Social Sciences",
    description: "Understanding society and human behavior through rigorous research.",
  },
];

export default function ResearchPage() {
  return (
    <>
      <Header />
      <main>
        <section className="bg-gradient-to-r from-primary to-primary-dark text-white py-16">
          <div className="container-shell">
            <h1 className="text-4xl font-bold sm:text-5xl">Research & Innovation</h1>
            <p className="mt-4 text-lg text-gray-100">
              Advancing knowledge and driving innovation
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="container-shell">
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-4">Research Areas</h2>
              <p className="text-lg text-muted-foreground">
                Global University is committed to advancing knowledge through innovative research 
                across multiple disciplines.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {researchAreas.map((area, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-2xl">{area.title}</CardTitle>
                    <CardDescription>{area.description}</CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

