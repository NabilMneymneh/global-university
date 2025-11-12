import { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Academic Calendar | Global University",
  description: "View important academic dates, deadlines, and events at Global University.",
  openGraph: {
    title: "Academic Calendar | Global University",
    description: "View important academic dates and deadlines.",
  },
};

export default function AcademicCalendarPage() {
  return (
    <>
      <Header />
      <main>
        <section className="bg-gradient-to-r from-primary to-primary-dark text-white py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold sm:text-5xl">Academic Calendar</h1>
            <p className="mt-4 text-lg text-gray-100">
              Important dates and deadlines
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <Card>
              <CardHeader>
                <CardTitle>Fall Semester 2024</CardTitle>
                <CardDescription>Key dates for the fall semester</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold">Registration Period</h3>
                    <p className="text-sm text-muted-foreground">August 1 - August 15, 2024</p>
                  </div>
                  <div>
                    <h3 className="font-semibold">Classes Begin</h3>
                    <p className="text-sm text-muted-foreground">September 1, 2024</p>
                  </div>
                  <div>
                    <h3 className="font-semibold">Midterm Exams</h3>
                    <p className="text-sm text-muted-foreground">October 15 - October 20, 2024</p>
                  </div>
                  <div>
                    <h3 className="font-semibold">Final Exams</h3>
                    <p className="text-sm text-muted-foreground">December 15 - December 20, 2024</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

