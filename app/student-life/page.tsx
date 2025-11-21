import { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Container from "@/components/layout/Container";
import PageHero from "@/components/layout/PageHero";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, BookOpen, Music, Camera, Heart } from "lucide-react";
import { FadeIn, StaggerContainer, ScaleIn } from "@/components/ui/motion";

export const metadata: Metadata = {
  title: "Student Life | Global University",
  description: "Discover student life at Global University - clubs, activities, services, and campus community.",
  openGraph: {
    title: "Student Life | Global University",
    description: "Experience vibrant student life at Global University.",
  },
};

const clubs = [
  {
    icon: Users,
    name: "Student Government",
    description: "Represent student interests and organize campus events.",
  },
  {
    icon: BookOpen,
    name: "Literary Society",
    description: "For students passionate about reading and writing.",
  },
  {
    icon: Music,
    name: "Music Club",
    description: "Join fellow musicians for performances and jam sessions.",
  },
  {
    icon: Camera,
    name: "Photography Club",
    description: "Capture campus life and explore your creative side.",
  },
  {
    icon: Heart,
    name: "Community Service",
    description: "Give back to the community through volunteer work.",
  },
];

export default function StudentLifePage() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          title="Student Life"
          description="A vibrant campus community awaits you"
          eyebrow="Campus Life"
        />

        <section className="py-16">
          <Container>
            <FadeIn className="mb-12 space-y-4 text-center md:text-left">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">
                Activities
              </p>
              <h2 className="text-3xl font-bold">Campus Activities</h2>
              <p className="text-lg text-muted-foreground max-w-2xl">
                At Global University, student life extends beyond the classroom. Join clubs,
                participate in events, and build lasting friendships.
              </p>
            </FadeIn>

            <StaggerContainer className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mb-12">
              {clubs.map((club, index) => {
                const Icon = club.icon;
                return (
                  <ScaleIn
                    key={index}
                    delay={index * 0.1}
                  >
                    <Card className="h-full rounded-2xl border border-border bg-background shadow-sm transition hover:-translate-y-1 hover:border-primary hover:shadow-2xl">
                      <CardHeader>
                        <div className="mb-4 inline-flex rounded-full bg-primary/10 p-3 text-primary">
                          <Icon className="h-8 w-8" />
                        </div>
                        <CardTitle>{club.name}</CardTitle>
                        <CardDescription>{club.description}</CardDescription>
                      </CardHeader>
                    </Card>
                  </ScaleIn>
                );
              })}
            </StaggerContainer>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <FadeIn delay={0.2}>
                <Card className="h-full rounded-2xl border border-border bg-background shadow-sm">
                  <CardHeader>
                    <CardTitle>Student Services</CardTitle>
                    <CardDescription>Support for your success</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm text-foreground/80">
                      <li>• Academic advising</li>
                      <li>• Career counseling</li>
                      <li>• Health services</li>
                      <li>• Housing assistance</li>
                      <li>• Disability support</li>
                    </ul>
                  </CardContent>
                </Card>
              </FadeIn>

              <FadeIn delay={0.3}>
                <Card className="h-full rounded-2xl border border-border bg-background shadow-sm">
                  <CardHeader>
                    <CardTitle>Campus Facilities</CardTitle>
                    <CardDescription>Modern amenities for students</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm text-foreground/80">
                      <li>• Library and study spaces</li>
                      <li>• Sports facilities</li>
                      <li>• Dining services</li>
                      <li>• Student lounges</li>
                      <li>• Computer labs</li>
                    </ul>
                  </CardContent>
                </Card>
              </FadeIn>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
