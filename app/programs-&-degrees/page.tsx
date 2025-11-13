import { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Container from "@/components/layout/Container";
import PageHero from "@/components/layout/PageHero";
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
        <PageHero
          title="Programs & Degrees"
          description="Discover your path to success"
          eyebrow="Academic Pathways"
          actions={
            <Button asChild variant="secondary">
              <Link href="/program-search-tool">Search Programs</Link>
            </Button>
          }
        />

        <section className="py-16">
          <Container>
            <div className="mb-12 space-y-4 text-center md:text-left">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">
                Academic Programs
              </p>
              <h2 className="text-3xl font-bold">Our Academic Programs</h2>
              <p className="text-lg text-muted-foreground max-w-2xl">
                Global University offers a wide range of undergraduate and graduate programs 
                designed to prepare you for success in your chosen field.
              </p>
            </div>

            <div className="space-y-10">
              {programs.map((category, categoryIndex) => (
                <div key={categoryIndex} className="space-y-5">
                  <h3 className="text-2xl font-semibold text-foreground">{category.category}</h3>
                  <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                    {category.programs.map((program, programIndex) => (
                      <Card
                        key={programIndex}
                        className="rounded-2xl border border-border bg-background shadow-sm transition hover:-translate-y-1 hover:border-primary hover:shadow-2xl"
                      >
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
              <Button asChild size="lg" className="px-8">
                <Link href="/program-search-tool">Search Programs</Link>
              </Button>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}

