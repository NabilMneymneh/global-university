import Container from "@/components/layout/Container";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

type QuickAction = {
  name: string;
  description: string;
  href: string;
};

const actions: QuickAction[] = [
  {
    name: "Portal",
    description: "Access student services, grades, and course schedules.",
    href: "https://www.gu.edu.lb/portal",
  },
  {
    name: "Calendar",
    description: "Stay updated with academic dates and campus events.",
    href: "/academic-calendar",
  },
  {
    name: "Email",
    description: "Check your Global University email inbox.",
    href: "https://mail.gu.edu.lb",
  },
  {
    name: "Staff",
    description: "Connect with faculty and administrative departments.",
    href: "/leadership-&-governance",
  },
];

export default function QuickActions() {
  return (
    <section className="py-16 bg-muted/40">
      <Container>
        <div className="mb-12 space-y-4 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">
            Quick Access
          </p>
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
            Essential Resources
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Access the tools you need to thrive at Global University.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {actions.map((action) => (
            <Card
              key={action.name}
              className="feature-card rounded-2xl border border-border bg-background shadow-sm"
            >
              <Link href={action.href} className="flex h-full flex-col">
                <CardHeader>
                  <CardTitle className="text-xl text-primary">{action.name}</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground leading-relaxed">
                  {action.description}
                </CardContent>
              </Link>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}

