import { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Admissions | Global University",
  description: "Apply to Global University. Learn about admission requirements, application process, and important deadlines.",
  openGraph: {
    title: "Admissions | Global University",
    description: "Apply to Global University and start your academic journey.",
  },
};

const steps = [
  {
    step: 1,
    title: "Submit Application",
    description: "Complete and submit your online application form with required documents.",
  },
  {
    step: 2,
    title: "Take Placement Test",
    description: "Schedule and complete the required placement test for your program.",
  },
  {
    step: 3,
    title: "Interview",
    description: "Attend an interview with the admissions committee (if required).",
  },
  {
    step: 4,
    title: "Receive Decision",
    description: "Receive your admission decision and enrollment information.",
  },
];

const requirements = [
  "High school diploma or equivalent",
  "Official transcripts",
  "English proficiency test scores (if applicable)",
  "Personal statement",
  "Letters of recommendation",
  "Application fee",
];

export default function AdmissionsPage() {
  return (
    <>
      <Header />
      <main>
        <section className="bg-gradient-to-r from-primary to-primary-dark text-white py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold sm:text-5xl">Admissions</h1>
            <p className="mt-4 text-lg text-gray-100">
              Start your journey at Global University
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Application Process</h2>
              <p className="text-lg text-muted-foreground">
                Follow these simple steps to apply to Global University
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 mb-16">
              {steps.map((step) => (
                <Card key={step.step} className="text-center">
                  <CardHeader>
                    <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white text-xl font-bold">
                      {step.step}
                    </div>
                    <CardTitle>{step.title}</CardTitle>
                    <CardDescription>{step.description}</CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>

            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Admission Requirements</CardTitle>
                  <CardDescription>What you need to apply</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {requirements.map((req, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <span>{req}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Financial Aid</CardTitle>
                  <CardDescription>Scholarships and financial assistance</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">
                    Global University offers various financial aid options including scholarships, 
                    grants, and student loans to help make your education affordable.
                  </p>
                  <Button asChild variant="outline" className="w-full">
                    <Link href="/admissions#financial-aid">Learn More</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>

            <div className="mt-12 text-center">
              <Button asChild size="lg">
                <Link href="/admissions/apply">Start Your Application</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

