import { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Academics | Global University",
  description: "Explore Global University's academic programs, faculties, and educational opportunities.",
  openGraph: {
    title: "Academics | Global University",
    description: "Explore our academic programs and faculties.",
  },
};

const faculties = [
  {
    name: "Faculty of Business Administration",
    description: "Comprehensive business education with a focus on leadership and innovation.",
    href: "/faculties-&-schools#business",
  },
  {
    name: "Faculty of Health Sciences",
    description: "Cutting-edge programs in medicine, nursing, and allied health.",
    href: "/faculties-&-schools#health",
  },
  {
    name: "Faculty of Engineering",
    description: "Innovative engineering programs with state-of-the-art facilities.",
    href: "/faculties-&-schools#engineering",
  },
  {
    name: "Faculty of Arts & Humanities",
    description: "Rich programs in literature, languages, and cultural studies.",
    href: "/faculties-&-schools#arts",
  },
];

export default function AcademicsPage() {
  return (
    <>
      <Header />
      <main>
        <section className="bg-gradient-to-r from-primary to-primary-dark text-white py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold sm:text-5xl">Academics</h1>
            <p className="mt-4 text-lg text-gray-100">
              Excellence in education, innovation in research
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-4">Our Faculties</h2>
              <p className="text-lg text-muted-foreground">
                Global University offers a diverse range of academic programs across multiple faculties, 
                each committed to excellence in teaching and research.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {faculties.map((faculty, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-2xl">{faculty.name}</CardTitle>
                    <CardDescription>{faculty.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button asChild variant="outline">
                      <Link href={faculty.href}>Explore Faculty</Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
              <Card>
                <CardHeader>
                  <CardTitle>Academic Calendar</CardTitle>
                  <CardDescription>Important dates and deadlines</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button asChild variant="outline" className="w-full">
                    <Link href="/academic-calendar">View Calendar</Link>
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Academic Catalogue</CardTitle>
                  <CardDescription>Comprehensive program guide</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button asChild variant="outline" className="w-full">
                    <Link href="/academic-catalogue">View Catalogue</Link>
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Program Search</CardTitle>
                  <CardDescription>Find the right program for you</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button asChild variant="outline" className="w-full">
                    <Link href="/program-search-tool">Search Programs</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

