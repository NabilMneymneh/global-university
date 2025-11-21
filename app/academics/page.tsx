import { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Container from "@/components/layout/Container";
import PageHero from "@/components/layout/PageHero";
import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FadeIn, StaggerContainer, ScaleIn } from "@/components/ui/motion";

export const metadata: Metadata = {
  title: "Academics | Global University",
  description: "Explore Global University's academic programs, faculties, and educational opportunities.",
  openGraph: {
    title: "Academics | Global University",
    description: "Explore our academic programs and faculties.",
  },
};

const faculties = [
  {
    name: "Faculty of Business Administration",
    description: "Comprehensive business education with a focus on leadership and innovation.",
    href: "/faculties-&-schools#business",
  },
  {
    name: "Faculty of Health Sciences",
    description: "Cutting-edge programs in medicine, nursing, and allied health.",
    href: "/faculties-&-schools#health",
  },
  {
    name: "Faculty of Engineering",
    description: "Innovative engineering programs with state-of-the-art facilities.",
    href: "/faculties-&-schools#engineering",
  },
  {
    name: "Faculty of Arts & Humanities",
    description: "Rich programs in literature, languages, and cultural studies.",
    href: "/faculties-&-schools#arts",
  },
];

export default function AcademicsPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          title="Academics"
          description="Excellence in education, innovation in research"
          eyebrow="Academic Experience"
        />

        <section className="py-16 bg-muted/30">
          <Container>
            <FadeIn>
              <div className="text-center max-w-3xl mx-auto mb-16">
                <h2 className="text-3xl font-bold mb-4">Our Schools</h2>
                <p className="text-lg text-muted-foreground">
                  Global University is comprised of five distinct schools, each dedicated to equipping students for ministry and service.
                </p>
              </div>
            </FadeIn>

            <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "School for Evangelism and Discipleship",
                  description: "Focuses on evangelism and discipleship training for effective ministry.",
                  icon: "🌍",
                },
                {
                  title: "Berean School of the Bible",
                  description: "Provides adult continuing education for ministerial training and personal enrichment.",
                  icon: "📖",
                },
                {
                  title: "School for Ministry Development",
                  description: "Equips leaders with practical skills for ministry and church leadership.",
                  icon: "⛪",
                },
                {
                  title: "Undergraduate School of Bible and Theology",
                  description: "Offers associate and bachelor degrees in Bible, theology, and ministry.",
                  icon: "🎓",
                },
                {
                  title: "Graduate School of Theology",
                  description: "Provides advanced theological education for ministry leaders and scholars.",
                  icon: "📜",
                },
              ].map((school, index) => (
                <ScaleIn key={school.title} delay={index * 0.1}>
                  <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                    <CardHeader>
                      <div className="text-4xl mb-4">{school.icon}</div>
                      <CardTitle className="text-xl">{school.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{school.description}</p>
                    </CardContent>
                  </Card>
                </ScaleIn>
              ))}
            </StaggerContainer>

            <StaggerContainer className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
              <FadeIn delay={0.2}>
                <Card className="h-full rounded-2xl border border-border bg-background shadow-sm transition hover:-translate-y-1 hover:border-primary hover:shadow-2xl">
                  <CardHeader>
                    <CardTitle>Academic Calendar</CardTitle>
                    <CardDescription>Important dates and deadlines</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button asChild variant="outline" className="w-full">
                      <Link href="/academic-calendar">View Calendar</Link>
                    </Button>
                  </CardContent>
                </Card>
              </FadeIn>

              <FadeIn delay={0.3}>
                <Card className="h-full rounded-2xl border border-border bg-background shadow-sm transition hover:-translate-y-1 hover:border-primary hover:shadow-2xl">
                  <CardHeader>
                    <CardTitle>Academic Catalogue</CardTitle>
                    <CardDescription>Comprehensive program guide</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button asChild variant="outline" className="w-full">
                      <Link href="/academic-catalogue">View Catalogue</Link>
                    </Button>
                  </CardContent>
                </Card>
              </FadeIn>

              <FadeIn delay={0.4}>
                <Card className="h-full rounded-2xl border border-border bg-background shadow-sm transition hover:-translate-y-1 hover:border-primary hover:shadow-2xl">
                  <CardHeader>
                    <CardTitle>Program Search</CardTitle>
                    <CardDescription>Find the right program for you</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button asChild variant="outline" className="w-full">
                      <Link href="/program-search-tool">Search Programs</Link>
                    </Button>
                  </CardContent>
                </Card>
              </FadeIn>
            </StaggerContainer>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}

