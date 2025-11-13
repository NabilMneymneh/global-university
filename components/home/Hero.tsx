import Container from "@/components/layout/Container";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="hero-section relative overflow-hidden bg-gradient-to-br from-primary via-primary-dark to-primary text-white">
      <span className="absolute inset-0 bg-black/10" aria-hidden="true" />
      <Container className="relative py-24 sm:py-28 lg:py-32 xl:py-40">
        <div className="max-w-3xl space-y-6">
          <p className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-white/80 backdrop-blur">
            Since 1992
          </p>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            Quality Education Within Reach
          </h1>
          <p className="text-xl leading-8 text-white/90">
            Global University is a high quality educational institution established in 1992 to provide students with superior education and a chance at becoming leaders in today&apos;s global market at a reasonable cost.
          </p>
          <div className="hero-cta flex flex-col gap-4 sm:flex-row">
            <Button asChild size="lg" className="hero-primary-btn px-8 py-6 text-lg">
              <Link href="/admissions/apply">Apply Now</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="hero-secondary-btn px-8 py-6 text-lg"
            >
              <Link href="/about">Learn More</Link>
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}

