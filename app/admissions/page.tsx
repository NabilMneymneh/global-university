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
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20">
              <FadeIn>
                <h2 className="text-3xl font-bold mb-6">Become a Student</h2>
                <div className="space-y-4 text-lg text-muted-foreground">
                  <p>
                    Global University provides advanced, in-depth, specialized study of the Bible, Christian education, and church ministry.
                    You develop skills to become a lifelong learner and church leader, both in individual research and practical applications.
                  </p>
                  <p>
                    We are dedicated to advancing the education of our students and the strength of their faith, through learning, teaching, ministry, and biblical study.
                  </p>
                </div>
                <div className="mt-8">
                  <Button size="lg" className="bg-primary text-white hover:bg-primary/90">
                    Apply Now
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
                        View our graduate and undergraduate catalogs to see precisely the courses, tracks, and credits you need to earn your degree.
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
                        Check the specific admission requirements for your chosen school: School for Evangelism and Discipleship, Berean School of the Bible, Undergraduate, or Graduate School.
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
                        Complete the online application form and submit necessary documents. Tuition per credit does not include the cost of required course materials.
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
                <Link href="/admissions/apply">Start Your Application</Link>
              </Button>
            </FadeIn>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}

