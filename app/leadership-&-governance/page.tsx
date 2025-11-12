import { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Leadership & Governance | Global University",
  description: "Meet Global University's leadership team and learn about our governance structure.",
  openGraph: {
    title: "Leadership & Governance | Global University",
    description: "Meet our leadership team.",
  },
};

const leaders = [
  {
    name: "Dr. John Smith",
    title: "President",
    description: "Leading Global University with vision and dedication.",
  },
  {
    name: "Dr. Jane Doe",
    title: "Vice President for Academic Affairs",
    description: "Overseeing academic programs and faculty development.",
  },
  {
    name: "Dr. Robert Johnson",
    title: "Vice President for Research",
    description: "Promoting research excellence and innovation.",
  },
];

export default function LeadershipPage() {
  return (
    <>
      <Header />
      <main>
        <section className="bg-gradient-to-r from-primary to-primary-dark text-white py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold sm:text-5xl">Leadership & Governance</h1>
            <p className="mt-4 text-lg text-gray-100">
              Meet our leadership team
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-4">University Leadership</h2>
              <p className="text-lg text-muted-foreground">
                Our leadership team is committed to advancing Global University's mission and vision.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {leaders.map((leader, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle>{leader.name}</CardTitle>
                    <CardDescription>{leader.title}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm">{leader.description}</p>
                  </CardContent>
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

