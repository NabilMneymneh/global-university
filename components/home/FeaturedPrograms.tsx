import Container from "@/components/layout/Container";
import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, HeartPulse, Cog, Palette, ArrowRight } from "lucide-react";
import { FadeIn, StaggerContainer, ScaleIn } from "@/components/ui/motion";

const programs = [
  {
    title: "Business Administration",
    description: "Prepare for leadership roles in the global marketplace with our comprehensive business curriculum.",
    href: "/programs-&-degrees#business",
    icon: BookOpen,
    color: "text-blue-600",
    bg: "bg-blue-50",
  },
  {
    title: "Health Sciences",
    description: "Join the next generation of healthcare professionals with cutting-edge programs in medicine and nursing.",
    href: "/programs-&-degrees#health",
    icon: HeartPulse,
    color: "text-rose-600",
    bg: "bg-rose-50",
  },
  {
    title: "Engineering",
    description: "Innovate and build the future with our state-of-the-art engineering and technology programs.",
    href: "/programs-&-degrees#engineering",
    icon: Cog,
    color: "text-amber-600",
    bg: "bg-amber-50",
  },
  {
    title: "Arts & Humanities",
    description: "Explore human culture and creativity through our rich programs in literature, languages, and arts.",
    href: "/programs-&-degrees#arts",
    icon: Palette,
    color: "text-purple-600",
    bg: "bg-purple-50",
  },
];

export default function FeaturedPrograms() {
  return (
    <section className="py-24 bg-surface">
      <Container>
        <FadeIn className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="space-y-4 max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1 text-xs font-bold uppercase tracking-widest text-primary">
              Academic Highlights
            </div>
            <h2 className="text-4xl font-bold text-foreground sm:text-5xl tracking-tight">
              World-Class <span className="text-primary">Programs</span>
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Explore our diverse range of accredited academic programs designed to launch your career.
            </p>
          </div>
          <Button asChild size="lg" className="hidden md:inline-flex bg-secondary text-white hover:bg-secondary/90">
            <Link href="/programs-&-degrees">View All Programs</Link>
          </Button>
        </FadeIn>

        <StaggerContainer className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {programs.map((program, index) => {
            const Icon = program.icon;
            return (
              <ScaleIn key={index} delay={index * 0.1} className="h-full">
                <Link href={program.href} className="group block h-full">
                  <Card className="h-full overflow-hidden border-border/50 bg-white transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:border-primary/20">
                    <CardHeader className="pb-4">
                      <div className={`w-12 h-12 rounded-xl ${program.bg} ${program.color} flex items-center justify-center mb-4 transition-transform group-hover:scale-110`}>
                        <Icon className="h-6 w-6" />
                      </div>
                      <CardTitle className="text-xl font-bold group-hover:text-primary transition-colors">
                        {program.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-base leading-relaxed mb-6">
                        {program.description}
                      </CardDescription>
                      <div className="flex items-center text-sm font-semibold text-primary opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0">
                        Learn More <ArrowRight className="ml-2 h-4 w-4" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </ScaleIn>
            );
          })}
        </StaggerContainer>

        <FadeIn delay={0.4} className="mt-12 text-center md:hidden">
          <Button asChild size="lg" className="w-full bg-secondary text-white">
            <Link href="/programs-&-degrees">View All Programs</Link>
          </Button>
        </FadeIn>
      </Container>
    </section>
  );
}

