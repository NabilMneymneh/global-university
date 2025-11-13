import Container from "@/components/layout/Container";
import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { GraduationCap, Briefcase, Heart } from "lucide-react";

const faculties = [
  {
    name: "Administrative Sciences",
    description: "Comprehensive business education preparing students for leadership roles in the global marketplace.",
    icon: Briefcase,
    href: "/faculties-&-schools#administrative",
    color: "from-primary to-primary-dark",
  },
  {
    name: "Health Sciences",
    description: "Cutting-edge programs in medicine, nursing, and allied health professions.",
    icon: Heart,
    href: "/faculties-&-schools#health",
    color: "from-accent to-primary",
  },
  {
    name: "Literature & Humanities",
    description: "Rich programs in literature, languages, and cultural studies.",
    icon: GraduationCap,
    href: "/faculties-&-schools#literature",
    color: "from-primary-dark to-accent",
  },
];

export default function Faculties() {
  return (
    <section className="py-16 bg-background">
      <Container>
        <div className="text-center mb-12 space-y-4">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">
            Faculties
          </p>
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
            Our Faculties
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            At Global we take pride in our commitment to lifelong learning. Our continuous workshops offer a dynamic platform for students, alumni, and professionals to expand their knowledge and stay ahead in their respective fields.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {faculties.map((faculty, index) => {
            const Icon = faculty.icon;
            return (
              <Card
                key={index}
                className="feature-card group overflow-hidden rounded-2xl border border-border bg-background shadow-sm"
              >
                <div className={`h-2 bg-gradient-to-r ${faculty.color}`} />
                <CardHeader className="pb-4">
                  <div className="mb-4 flex items-center gap-4">
                    <div className={`rounded-lg bg-gradient-to-br ${faculty.color} p-3 text-white`}>
                      <Icon className="h-8 w-8" />
                    </div>
                    <CardTitle className="text-2xl">{faculty.name}</CardTitle>
                  </div>
                  <CardDescription className="text-base leading-relaxed">
                    {faculty.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button
                    asChild
                    variant="outline"
                    className="w-full transition-colors group-hover:bg-primary group-hover:text-white"
                  >
                    <Link href={faculty.href}>Explore Faculty</Link>
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

