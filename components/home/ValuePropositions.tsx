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
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
            Why Choose Global University?
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Discover what makes us a leading institution of higher education
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <div
                key={index}
                className="text-center p-6 rounded-lg border border-border hover:shadow-lg transition-shadow"
              >
                <div className="flex justify-center mb-4">
                  <div className="rounded-full bg-primary/10 p-3">
                    <Icon className="h-8 w-8 text-primary" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {value.title}
                </h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

