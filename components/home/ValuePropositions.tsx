import Container from "@/components/layout/Container";
import { Globe, Award, Users, BookOpen } from "lucide-react";
import { FadeIn, StaggerContainer, ScaleIn } from "@/components/ui/motion";

const values = [
  {
    title: "Global Perspective",
    description: "Our curriculum is designed to provide students with a broad understanding of global issues and trends.",
    icon: Globe,
  },
  {
    title: "Academic Excellence",
    description: "We maintain high academic standards and provide rigorous training to ensure student success.",
    icon: Award,
  },
  {
    title: "Student-Centered",
    description: "We prioritize student needs and provide a supportive learning environment for personal growth.",
    icon: Users,
  },
  {
    title: "Innovation & Research",
    description: "We foster a culture of innovation and encourage research that addresses real-world challenges.",
    icon: BookOpen,
  },
];

export default function ValuePropositions() {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
      </div>

      <Container className="relative z-10">
        <FadeIn className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1 text-xs font-bold uppercase tracking-widest text-primary">
            Why Choose Global
          </div>
          <h2 className="text-4xl font-bold text-foreground sm:text-5xl tracking-tight">
            Why Choose <span className="text-primary">Global University?</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Discover what makes us a leading institution of higher education and a hub for future leaders.
          </p>
        </FadeIn>

        <StaggerContainer className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <ScaleIn key={index} delay={index * 0.1}>
                <div
                  className="feature-card group h-full rounded-2xl border border-border bg-white p-8 text-center shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:border-primary/20"
                >
                  <div className="mb-6 flex justify-center">
                    <div className="rounded-2xl bg-primary/10 p-4 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-white group-hover:scale-110 shadow-sm">
                      <Icon className="h-8 w-8" />
                    </div>
                  </div>
                  <h3 className="mb-3 text-xl font-bold text-foreground">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </ScaleIn>
            );
          })}
        </StaggerContainer>
      </Container>
    </section>
  );
}
