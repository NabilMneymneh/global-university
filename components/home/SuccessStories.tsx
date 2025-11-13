import Container from "@/components/layout/Container";
import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

const stories = [
  {
    quote: "It was a life-changing experience at Global University",
    author: "Hayfaa Jawhar",
    role: "Founder",
  },
  {
    quote: "Thankful for my time at Global, it unlocked huge opportunities for me!",
    author: "Omar Addam",
    role: "CTO",
  },
];

export default function SuccessStories() {
  return (
    <section className="py-16 bg-background">
      <Container>
        <div className="text-center mb-12 space-y-4">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">
            Alumni Voices
          </p>
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
            Success Stories
          </h2>
          <p className="text-lg text-muted-foreground">
            Hear from our alumni about their journey
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {stories.map((story, index) => (
            <Card
              key={index}
              className="testimonial-card relative overflow-hidden rounded-2xl border border-border bg-background shadow-sm"
            >
              <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-b from-primary/10 via-transparent to-primary/10" />
              <CardContent className="relative space-y-6 p-8">
                <Quote className="h-12 w-12 text-primary/20" />
                <p className="text-lg font-medium text-foreground italic leading-relaxed">
                  &quot;{story.quote}&quot;
                </p>
                <div className="border-t border-border pt-4">
                  <p className="font-semibold text-foreground">{story.author}</p>
                  <p className="text-sm text-muted-foreground">{story.role}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}

