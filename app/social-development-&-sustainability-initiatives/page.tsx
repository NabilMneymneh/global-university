import { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Social Development & Sustainability Initiatives | Global University",
  description: "Learn about Global University's commitment to social development and sustainability.",
  openGraph: {
    title: "Social Development & Sustainability | Global University",
    description: "Our commitment to social development and sustainability.",
  },
};

export default function SocialDevelopmentPage() {
  return (
    <>
      <Header />
      <main>
        <section className="bg-gradient-to-r from-primary to-primary-dark text-white py-16">
          <div className="container-shell">
            <h1 className="text-4xl font-bold sm:text-5xl">Social Development & Sustainability</h1>
            <p className="mt-4 text-lg text-gray-100">
              Making a positive impact
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="container-shell">
            <div className="prose prose-lg max-w-none mb-12">
              <p>
                Global University is committed to social development and environmental sustainability. 
                Through various initiatives and programs, we work to create positive change in our 
                community and beyond.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Community Outreach</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm">
                    Engaging with local communities through volunteer programs, educational initiatives, 
                    and partnerships.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Sustainability Initiatives</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm">
                    Implementing green practices and sustainability programs across campus operations.
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

