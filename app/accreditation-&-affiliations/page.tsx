import { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Accreditation & Affiliations | Global University",
  description: "Learn about Global University's accreditations, affiliations, and memberships.",
  openGraph: {
    title: "Accreditation & Affiliations | Global University",
    description: "Our accreditations and affiliations.",
  },
};

export default function AccreditationPage() {
  return (
    <>
      <Header />
      <main>
        <section className="bg-gradient-to-r from-primary to-primary-dark text-white py-16">
          <div className="container-shell">
            <h1 className="text-4xl font-bold sm:text-5xl">Accreditation & Affiliations</h1>
            <p className="mt-4 text-lg text-gray-100">
              Recognized excellence
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="container-shell">
            <div className="prose prose-lg max-w-none mb-12">
              <p>
                Global University is accredited by recognized educational bodies and maintains 
                affiliations with leading academic and professional organizations.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Accreditations</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li>• Ministry of Education and Higher Education, Lebanon</li>
                    <li>• International Accreditation Board</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Affiliations</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li>• Association of Arab Universities</li>
                    <li>• International Association of Universities</li>
                  </ul>
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

