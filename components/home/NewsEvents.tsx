import Container from "@/components/layout/Container";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

type NewsItem = {
  title: string;
  description: string;
  cta: string;
  href: string;
  category: "Workshop" | "News";
};

const newsItems: NewsItem[] = [
  {
    title: "Breast Cancer Awareness Lecture",
    description:
      "Global University hosted a lecture focused on education and prevention as part of our commitment to community wellbeing.",
    cta: "Read More",
    href: "https://www.gu.edu.lb/global-university-hosts-breast-cancer-awareness-lecture/",
    category: "Workshop",
  },
  {
    title: "Food Poisoning Awareness Day",
    description:
      "In collaboration with Rafic Hariri University Hospital, GU students participated in a workshop on food safety best practices.",
    cta: "Read More",
    href: "https://www.gu.edu.lb/global-university-collaborates-with-rhuh-for-a-food-poisoning-awareness-day/",
    category: "Workshop",
  },
  {
    title: "7th Annual Scientific Conference",
    description:
      "Faculty and students gathered to present research and celebrate academic excellence during our annual scientific conference.",
    cta: "Discover Insights",
    href: "https://www.gu.edu.lb/the-7th-annual-scientific-conference/",
    category: "News",
  },
  {
    title: "Honoring Our Graduates",
    description:
      "Global University celebrated graduates in a ceremony filled with pride and achievement, highlighting their dedication.",
    cta: "Celebrate With Us",
    href: "https://www.gu.edu.lb/%d8%a7%d9%84%d8%ac%d8%a7%d9%85%d8%b9%d8%a9-%d8%a7%d9%84%d8%b9%d8%a7%d9%84%d9%85%d9%8a%d8%a9-%d8%aa%d8%ad%d8%aa%d9%81%d9%8a-%d8%a8%d8%ae%d8%b1%d9%8a%d8%ac%d9%8a%d9%87%d8%a7-%d9%81%d9%8a-%d8%ad%d9%81/",
    category: "News",
  },
];

export default function NewsEvents() {
  return (
    <section className="py-16 bg-background">
      <Container>
        <div className="mb-12 space-y-4 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">
            Latest Updates
          </p>
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
            News & Events
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Stay updated with the latest workshops, conferences, and campus highlights.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {newsItems.map((item) => (
            <Card
              key={item.title}
              className="rounded-2xl border border-border bg-background shadow-sm transition hover:-translate-y-1 hover:border-primary hover:shadow-2xl"
            >
              <CardHeader>
                <span className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">
                  {item.category}
                </span>
                <CardTitle className="text-xl">{item.title}</CardTitle>
                <CardDescription className="text-base leading-relaxed">
                  {item.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button asChild variant="outline" className="w-full">
                  <Link href={item.href} target="_blank" rel="noopener noreferrer">
                    {item.cta}
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}

