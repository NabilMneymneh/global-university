import { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Campuses & Maps | Global University",
  description: "Find Global University campus locations and maps.",
  openGraph: {
    title: "Campuses & Maps | Global University",
    description: "Campus locations and maps.",
  },
};

export default function CampusesPage() {
  return (
    <>
      <Header />
      <main>
        <section className="bg-gradient-to-r from-primary to-primary-dark text-white py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold sm:text-5xl">Campuses & Maps</h1>
            <p className="mt-4 text-lg text-gray-100">
              Find our locations
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <Card>
              <CardHeader>
                <CardTitle>Main Campus</CardTitle>
                <CardDescription>Beirut, Lebanon</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm mb-4">
                  Our main campus is located in the heart of Beirut, providing easy access to 
                  students from across the city and surrounding areas.
                </p>
                <p className="text-sm text-muted-foreground">
                  Address: [Campus Address]<br />
                  Phone: [Phone Number]<br />
                  Email: info@gu.edu.lb
                </p>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

