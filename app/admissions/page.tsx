import { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Container from "@/components/layout/Container";
import PageHero from "@/components/layout/PageHero";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { CheckCircle } from "lucide-react";
import { FadeIn, StaggerContainer, ScaleIn } from "@/components/ui/motion";
import MetaEvent from "@/components/analytics/MetaEvent";
import TrackedLink from "@/components/analytics/TrackedLink";

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
      <MetaEvent
        eventName="ViewContent"
        parameters={{ content_name: "admissions", content_category: "admissions" }}
      />
      <Header />
      <main>
        <PageHero
          title="Admissions"
          description="Start your journey at Global University"
          eyebrow="Join Global"
          actions={
            <Button asChild variant="secondary">
              <TrackedLink
                href="/admissions/apply"
                eventName="InitiateCheckout"
                eventParameters={{ content_name: "admissions_apply_cta", content_category: "admissions" }}
              >
                Apply Now
              </TrackedLink>
            </Button>
          }
        />

        <section className="py-16">
          <Container>
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20">
              <FadeIn>
                <h2 className="text-3xl font-bold mb-6">Become a Student</h2>
                <div className="space-y-4 text-lg text-muted-foreground">
                  <p>
                    Global University offers accredited undergraduate and graduate programs in Health Sciences, Administrative Sciences, and Literature & Humanities. Programs are taught in English and Arabic, with practical learning and guidance from program selection through application.
                  </p>
                  <p>
                    Our admissions team helps prospective students understand program options, requirements, placement-test preparation, financial-aid pathways, and the next step toward enrollment.
                  </p>
                </div>
                <div className="mt-8">
                  <Button size="lg" className="bg-primary text-white hover:bg-primary/90" asChild>
                    <TrackedLink
                      href="/admissions/apply"
                      eventName="InitiateCheckout"
                      eventParameters={{ content_name: "admissions_apply_cta", content_category: "admissions" }}
                    >
                      Apply Now
                    </TrackedLink>
                  </Button>
                </div>
              </FadeIn>

              <StaggerContainer className="space-y-6">
                <ScaleIn>
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-3">
                        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">1</span>
                        Choose Your Program
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">
                        Explore the faculties, departments, and degree options that match your academic interests and career goals.
                      </p>
                    </CardContent>
                  </Card>
                </ScaleIn>

                <ScaleIn delay={0.1}>
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-3">
                        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">2</span>
                        Review Requirements
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">
                        Review the required documents, eligibility criteria, placement-test topics, and any program-specific requirements before you apply.
                      </p>
                    </CardContent>
                  </Card>
                </ScaleIn>

                <ScaleIn delay={0.2}>
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-3">
                        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">3</span>
                        Submit Application
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">
                        Complete the online application form with accurate personal, academic, and contact information so the admissions team can guide your next step.
                      </p>
                    </CardContent>
                  </Card>
                </ScaleIn>
              </StaggerContainer>
            </div>

            <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-2">
              <FadeIn delay={0.3}>
                <Card className="h-full rounded-2xl border border-border bg-background shadow-sm transition hover:-translate-y-1 hover:border-primary hover:shadow-2xl">
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
              </FadeIn>
            </div>

            <FadeIn delay={0.4} className="mt-12 text-center">
              <Button
                asChild
                size="lg"
                className="bg-primary px-8 py-6 text-lg text-white shadow-lg transition hover:bg-primary/90 hover:shadow-xl"
              >
                <TrackedLink
                  href="/admissions/apply"
                  eventName="InitiateCheckout"
                  eventParameters={{ content_name: "start_application_cta", content_category: "admissions" }}
                >
                  Start Your Application
                </TrackedLink>
              </Button>
            </FadeIn>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}

