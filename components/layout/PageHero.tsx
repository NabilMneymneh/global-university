import Container from "@/components/layout/Container";
import { cn } from "@/lib/utils";
import { type ReactNode } from "react";
import { FadeIn } from "@/components/ui/motion";

type PageHeroProps = {
  title: string;
  description?: string;
  eyebrow?: string;
  align?: "left" | "center";
  actions?: ReactNode;
  className?: string;
};

export default function PageHero({
  title,
  description,
  eyebrow,
  align = "left",
  actions,
  className,
}: PageHeroProps) {
  const alignment =
    align === "center" ? "text-center items-center mx-auto" : "text-left";

  return (
    <section
      className={cn(
        "relative overflow-hidden bg-gradient-to-br from-primary via-primary-dark to-primary text-white",
        className,
      )}
    >
      <span className="absolute inset-0 bg-black/10" aria-hidden="true" />
      <Container className="relative py-16 sm:py-20">
        <FadeIn className={cn("max-w-3xl space-y-6", alignment)}>
          {eyebrow ? (
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-white/80">
              {eyebrow}
            </p>
          ) : null}
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            {title}
          </h1>
          {description ? (
            <p className="text-lg leading-relaxed text-white/90">{description}</p>
          ) : null}
          {actions ? <div className="flex flex-wrap gap-3">{actions}</div> : null}
        </FadeIn>
      </Container>
    </section>
  );
}

