import Container from "@/components/layout/Container";
import { GraduationCap, Users, Award, Globe } from "lucide-react";

const values = [
  {
    icon: GraduationCap,
    title: "Academic Excellence",
    description: "World-class faculty and rigorous academic programs designed to prepare students for success.",
  },
  {
    icon: Users,
    title: "Diverse Community",
    description: "A vibrant, inclusive community of students and faculty from around the world.",
  },
  {
    icon: Award,
    title: "Accredited Programs",
    description: "Recognized and accredited programs that meet international standards of quality.",
  },
  {
    icon: Globe,
    title: "Global Opportunities",
    description: "International partnerships and exchange programs that expand horizons.",
  },
];

export default function ValuePropositions() {
  return (
    <section className="py-16 bg-background">
      <Container>
        <div className="text-center mb-12 space-y-4">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">
            Why Choose Global
          </p>
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
            Why Choose Global University?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover what makes us a leading institution of higher education
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <div
                key={index}
                className="feature-card group rounded-2xl border border-border bg-background p-8 text-center shadow-sm"
              >
                <div className="mb-6 flex justify-center">
                  <div className="rounded-full bg-gradient-to-br from-primary to-primary-dark p-4 text-white transition-transform group-hover:scale-110">
                    <Icon className="h-8 w-8" />
                  </div>
                </div>
                <h3 className="mb-3 text-xl font-semibold text-foreground">
                  {value.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">{value.description}</p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

