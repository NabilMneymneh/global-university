import { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Programs & Degrees | Global University",
  description: "Explore Global University's comprehensive range of academic programs and degrees.",
  openGraph: {
    title: "Programs & Degrees | Global University",
    description: "Explore our academic programs and degrees.",
  },
};

const programs = [
  {
    category: "Business",
    programs: [
      { name: "Bachelor of Business Administration", level: "Undergraduate" },
      { name: "Master of Business Administration", level: "Graduate" },
      { name: "Accounting", level: "Undergraduate" },
    ],
  },
  {
    category: "Health Sciences",
    programs: [
      { name: "Medicine", level: "Undergraduate" },
      { name: "Nursing", level: "Undergraduate" },
      { name: "Public Health", level: "Graduate" },
    ],
  },
  {
    category: "Engineering",
    programs: [
      { name: "Computer Engineering", level: "Undergraduate" },
      { name: "Civil Engineering", level: "Undergraduate" },
      { name: "Electrical Engineering", level: "Undergraduate" },
    ],
  },
  {
    category: "Arts & Humanities",
    programs: [
      { name: "English Literature", level: "Undergraduate" },
      { name: "History", level: "Undergraduate" },
      { name: "Philosophy", level: "Undergraduate" },
    ],
  },
];

export default function ProgramsPage() {
  return (
    <>
      <Header />
      <main>
        <section className="bg-gradient-to-r from-primary to-primary-dark text-white py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold sm:text-5xl">Programs & Degrees</h1>
            <p className="mt-4 text-lg text-gray-100">
              Discover your path to success
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-4">Our Academic Programs</h2>
              <p className="text-lg text-muted-foreground">
                Global University offers a wide range of undergraduate and graduate programs 
                designed to prepare you for success in your chosen field.
              </p>
            </div>

            <div className="space-y-8">
              {programs.map((category, categoryIndex) => (
                <div key={categoryIndex}>
                  <h3 className="text-2xl font-semibold mb-4">{category.category}</h3>
                  <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                    {category.programs.map((program, programIndex) => (
                      <Card key={programIndex} className="hover:shadow-lg transition-shadow">
                        <CardHeader>
                          <CardTitle className="text-lg">{program.name}</CardTitle>
                          <CardDescription>{program.level}</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <Button asChild variant="outline" size="sm" className="w-full">
                            <Link href={`/programs-&-degrees/${program.name.toLowerCase().replace(/\s+/g, "-")}`}>
                              Learn More
                            </Link>
                          </Button>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <Button asChild size="lg">
                <Link href="/program-search-tool">Search Programs</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

