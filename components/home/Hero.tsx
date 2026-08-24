import Container from "@/components/layout/Container";
import { Button } from "@/components/ui/button";
import Link from "next/link";

import { FadeIn, StaggerContainer } from "@/components/ui/motion";
import TrackedLink from "@/components/analytics/TrackedLink";

export default function Hero() {
  return (
    <section className="hero-section relative overflow-hidden bg-secondary text-white">
      <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-secondary/90" />

      <Container className="relative py-24 sm:py-28 lg:py-32 xl:py-40">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <StaggerContainer className="space-y-8 max-w-2xl">
            <FadeIn delay={0.1}>
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm font-bold uppercase tracking-widest text-primary backdrop-blur-sm">
                <span className="relative flex h-2 w-2">
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
                Excellence Since 1992
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl xl:text-7xl">
                Quality Education <span className="text-primary">Within Reach</span>
              </h1>
            </FadeIn>

            <FadeIn delay={0.3}>
              <p className="text-lg text-gray-300 sm:text-xl lg:text-2xl">
                Accredited undergraduate and graduate programs in Health Sciences, Administrative Sciences, and Literature & Humanities — taught in English and Arabic in the heart of Beirut.
              </p>
            </FadeIn>

            <FadeIn delay={0.4} className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="text-base px-8 py-6 h-auto">
                <TrackedLink
                  href="/admissions"
                  eventName="ViewContent"
                  eventParameters={{ content_name: "homepage_admissions_cta", content_category: "admissions" }}
                >
                  Apply Now
                </TrackedLink>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-base px-8 py-6 h-auto border-white/20 bg-transparent text-white hover:bg-white/10">
                <Link href="/about">Learn More</Link>
              </Button>
            </FadeIn>

            <FadeIn delay={0.5} className="pt-8 border-t border-white/10 grid grid-cols-3 gap-8">
              <div>
                <div className="text-3xl font-bold text-white">30+</div>
                <div className="text-sm text-gray-400">Years of Excellence</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white">5k+</div>
                <div className="text-sm text-gray-400">Alumni Network</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white">100%</div>
                <div className="text-sm text-gray-400">Accredited Programs</div>
              </div>
            </FadeIn>
          </StaggerContainer>

          {/* Hero Image / Visual */}
          <FadeIn delay={0.6} direction="left" className="hidden lg:block relative">
            <div className="relative z-10 aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-primary/20 to-secondary border border-white/10 shadow-2xl flex items-center justify-center">
              {/* Placeholder for 3D Element or High-Quality Image */}
              <div className="text-center p-8">
                <div className="text-6xl mb-4">🎓</div>
                <p className="text-white/50 font-medium">Immersive Experience</p>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-12 -right-12 w-64 h-64 bg-primary/30 rounded-full blur-3xl" />
              <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl" />
            </div>
          </FadeIn>
        </div>
      </Container>
    </section >
  );
}
