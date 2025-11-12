import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const programs = [
  {
    title: "Business Administration",
    description: "Comprehensive business education preparing students for leadership roles in the global marketplace.",
    href: "/programs-&-degrees#business",
  },
  {
    title: "Health Sciences",
    description: "Cutting-edge programs in medicine, nursing, and allied health professions.",
    href: "/programs-&-degrees#health",
  },
  {
    title: "Engineering",
    description: "Innovative engineering programs with state-of-the-art laboratories and facilities.",
    href: "/programs-&-degrees#engineering",
  },
  {
    title: "Arts & Humanities",
    description: "Rich programs in literature, languages, and cultural studies.",
    href: "/programs-&-degrees#arts",
  },
];

export default function FeaturedPrograms() {
  return (
    <section className="py-16 bg-muted/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
            Featured Programs
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Explore our diverse range of academic programs
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {programs.map((program, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl">{program.title}</CardTitle>
                <CardDescription>{program.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <Button asChild variant="outline" className="w-full">
                  <Link href={program.href}>Learn More</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button asChild size="lg">
            <Link href="/programs-&-degrees">View All Programs</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

