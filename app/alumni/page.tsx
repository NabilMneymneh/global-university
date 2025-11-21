import { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Container from "@/components/layout/Container";
import PageHero from "@/components/layout/PageHero";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FadeIn, StaggerContainer, ScaleIn } from "@/components/ui/motion";

export const metadata: Metadata = {
  title: "Alumni | Global University",
  description: "Connect with Global University alumni network and stay engaged with your alma mater.",
  openGraph: {
    title: "Alumni | Global University",
    description: "Join our vibrant alumni community.",
  },
};

export default function AlumniPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          title="Alumni"
          description="Stay connected with your alma mater"
          eyebrow="Community"
        />

        <section className="py-16">
          <Container>
            <FadeIn className="mb-12">
              <h2 className="text-3xl font-bold mb-4">Alumni Network</h2>
              <p className="text-lg text-muted-foreground">
                The Global University Alumni Association is dedicated to maintaining a lifelong connection
                between the university and its graduates. We are here to support you in your professional
                journey and spiritual walk.
              </p>
            </FadeIn>

            <StaggerContainer className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mb-12">
              <ScaleIn delay={0.1}>
                <Card className="h-full hover:shadow-xl transition-shadow border-2">
                  <CardHeader>
                    <CardTitle>Alumni Events</CardTitle>
                    <CardDescription>Join us for networking and social events</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm mb-4">
                      Attend annual reunions, networking events, and professional development workshops designed for alumni.
                    </p>
                    <Button variant="outline" className="w-full">
                      View Events
                    </Button>
                  </CardContent>
                </Card>
              </ScaleIn>

              <ScaleIn delay={0.2}>
                <Card className="h-full hover:shadow-xl transition-shadow border-2">
                  <CardHeader>
                    <CardTitle>Continuing Education</CardTitle>
                    <CardDescription>Lifelong learning opportunities</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm mb-4">
                      Alumni receive special discounts on continuing education courses, seminars, and
                      advanced degree programs at Global University.
                    </p>
                    <Button variant="outline" className="w-full">
                      Learn More
                    </Button>
                  </CardContent>
                </Card>
              </ScaleIn>

              <ScaleIn delay={0.3}>
                <Card className="h-full hover:shadow-xl transition-shadow border-2">
                  <CardHeader>
                    <CardTitle>Stay Connected</CardTitle>
                    <CardDescription>Update your information</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm mb-4">
                      Keep your contact information up to date to receive news, event invitations, and alumni communications.
                    </p>
                    <Button variant="outline" className="w-full">
                      Update Profile
                    </Button>
                  </CardContent>
                </Card>
              </ScaleIn>
            </StaggerContainer>

            <FadeIn delay={0.4}>
              <div className="bg-gradient-to-br from-primary/10 to-primary-dark/10 p-8 rounded-lg border-2 border-primary/20">
                <h3 className="text-2xl font-bold mb-4">Share Your Success Story</h3>
                <p className="text-muted-foreground mb-6">
                  We love hearing from our alumni! Share your achievements, career milestones, or how Global University
                  has impacted your life.
                </p>
                <Button asChild>
                  <Link href="/contact">Contact Us</Link>
                </Button>
              </div>
            </FadeIn>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}

