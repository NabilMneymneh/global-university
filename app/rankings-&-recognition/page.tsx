import { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Rankings & Recognition | Global University",
  description: "Global University's rankings, awards, and recognition in higher education.",
  openGraph: {
    title: "Rankings & Recognition | Global University",
    description: "Our rankings and recognition.",
  },
};

export default function RankingsPage() {
  return (
    <>
      <Header />
      <main>
        <section className="bg-gradient-to-r from-primary to-primary-dark text-white py-16">
          <div className="container-shell">
            <h1 className="text-4xl font-bold sm:text-5xl">Rankings & Recognition</h1>
            <p className="mt-4 text-lg text-gray-100">
              Excellence recognized
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="container-shell">
            <div className="prose prose-lg max-w-none mb-12">
              <p>
                Global University has been recognized for excellence in teaching, research, and 
                community engagement. Our commitment to quality education has earned us recognition 
                from various educational bodies and ranking organizations.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>University Rankings</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li>• Top 10 Universities in Lebanon</li>
                    <li>• Recognized for Academic Excellence</li>
                    <li>• High Graduate Employment Rate</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Awards & Recognition</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li>• Excellence in Teaching Award</li>
                    <li>• Research Innovation Award</li>
                    <li>• Community Service Recognition</li>
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

