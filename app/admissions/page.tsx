import { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Container from "@/components/layout/Container";
import PageHero from "@/components/layout/PageHero";
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
        <PageHero
          title="Admissions"
          description="Start your journey at Global University"
          eyebrow="Join Global"
          actions={
            <Button asChild variant="secondary">
              <Link href="/admissions/apply">Apply Now</Link>
            </Button>
          }
        />

        <section className="py-16">
          <Container>
            <div className="mb-12 space-y-4 text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">
                Application Process
              </p>
              <h2 className="text-3xl font-bold">Application Process</h2>
              <p className="text-lg text-muted-foreground">
                Follow these simple steps to apply to Global University
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 mb-16">
              {steps.map((step) => (
                <Card
                  key={step.step}
                  className="text-center rounded-2xl border border-border bg-background shadow-sm transition hover:-translate-y-1 hover:border-primary hover:shadow-2xl"
                >
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
              <Card className="rounded-2xl border border-border bg-background shadow-sm transition hover:-translate-y-1 hover:border-primary hover:shadow-2xl">
                <CardHeader>
                  <CardTitle>Admission Requirements</CardTitle>
                  <CardDescription>What you need to apply</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-foreground/80">
                    {requirements.map((req, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                        <span>{req}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card className="rounded-2xl border border-border bg-background shadow-sm transition hover:-translate-y-1 hover:border-primary hover:shadow-2xl">
                <CardHeader>
                  <CardTitle>Financial Aid</CardTitle>
                  <CardDescription>Scholarships and financial assistance</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-foreground/80">
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
              <Button
                asChild
                size="lg"
                className="bg-primary px-8 py-6 text-lg text-white shadow-lg transition hover:bg-primary/90 hover:shadow-xl"
              >
                <Link href="/admissions/apply">Start Your Application</Link>
              </Button>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}

