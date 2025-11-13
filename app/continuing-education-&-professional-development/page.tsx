import { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Continuing Education & Professional Development | Global University",
  description: "Explore continuing education and professional development programs at Global University.",
  openGraph: {
    title: "Continuing Education & Professional Development | Global University",
    description: "Lifelong learning opportunities.",
  },
};

export default function ContinuingEducationPage() {
  return (
    <>
      <Header />
      <main>
        <section className="bg-gradient-to-r from-primary to-primary-dark text-white py-16">
          <div className="container-shell">
            <h1 className="text-4xl font-bold sm:text-5xl">Continuing Education & Professional Development</h1>
            <p className="mt-4 text-lg text-gray-100">
              Lifelong learning opportunities
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="container-shell">
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-4">Professional Development Programs</h2>
              <p className="text-lg text-muted-foreground">
                Global University offers a variety of continuing education and professional development 
                programs designed to help professionals advance their careers and stay current in their fields.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Certificate Programs</CardTitle>
                  <CardDescription>Short-term professional certificates</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm">
                    Enhance your skills with our certificate programs in business, technology, 
                    healthcare, and more.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Workshops & Seminars</CardTitle>
                  <CardDescription>Professional development workshops</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm">
                    Attend workshops and seminars led by industry experts and academic professionals.
                  </p>
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

