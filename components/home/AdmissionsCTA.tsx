import Container from "@/components/layout/Container";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import TrackedLink from "@/components/analytics/TrackedLink";

export default function AdmissionsCTA() {
  return (
    <section className="cta-section bg-muted/30 pb-20">
      <Container className="px-5 sm:px-auto">
        <div className="cta-card overflow-hidden rounded-2xl bg-gradient-to-br from-primary via-primary-dark to-primary text-white p-8 shadow-xl sm:p-12 lg:p-14">
          <div className="max-w-3xl space-y-6">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-white/70">
              Start Today
            </p>
            <h2 className="text-3xl font-bold sm:text-4xl">
              Ready to Begin Your Journey?
            </h2>
            <p className="text-lg text-white/90">
              Join Global University and become part of a vibrant community of learners, researchers, and innovators.
              Start your application today and take the first step toward your future.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Button asChild size="lg" className="cta-button px-8 py-6 text-lg">
                <TrackedLink
                  href="/admissions"
                  eventName="ViewContent"
                  eventParameters={{ content_name: "homepage_admissions_banner", content_category: "admissions" }}
                >
                  Apply Now
                  <ArrowRight className="ml-2 h-4 w-4" />
                </TrackedLink>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="cta-button-secondary px-8 py-6 text-lg"
              >
                <Link href="/admissions#requirements">View Requirements</Link>
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

