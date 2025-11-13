import { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Container from "@/components/layout/Container";
import PageHero from "@/components/layout/PageHero";

export const metadata: Metadata = {
  title: "About Us | Global University",
  description: "Learn about Global University's history, mission, vision, and commitment to excellence in higher education in Lebanon.",
  openGraph: {
    title: "About Us | Global University",
    description: "Learn about Global University's history, mission, and vision.",
  },
};

export default function AboutPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          title="About Global University"
          description="A premier institution of higher education in Lebanon"
        />

        <section className="py-16">
          <Container>
            <div className="prose prose-lg max-w-none">
              <div className="mb-12 rounded-3xl border border-primary/20 bg-gradient-to-br from-primary/10 to-primary-dark/10 p-8 shadow-sm">
                <h2 className="text-3xl font-bold text-primary mb-4">About Global University</h2>
                <p className="text-lg leading-relaxed text-foreground/80">
                  Global University is a high quality educational institution established in <strong>1992</strong> to provide students with superior education and a chance at becoming leaders in today&apos;s global market at a reasonable cost.
                </p>
              </div>

              <div className="mb-12 grid grid-cols-1 gap-8 md:grid-cols-2">
                <div className="rounded-3xl border border-border bg-background p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
                  <h3 className="text-2xl font-bold text-primary mb-4">Our Mission</h3>
                  <p className="text-foreground/80">
                    Global University is committed to providing high-quality education that prepares students 
                    for success in their chosen fields. We foster a culture of academic excellence, innovation, 
                    and community engagement.
                  </p>
                </div>

                <div className="rounded-3xl border border-border bg-background p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
                  <h3 className="text-2xl font-bold text-primary mb-4">Our Vision</h3>
                  <p className="text-foreground/80">
                    To be a leading institution of higher education in Lebanon and the region, recognized for 
                    academic excellence, research innovation, and positive impact on society.
                  </p>
                </div>
              </div>

              <div className="rounded-3xl border border-border bg-muted/40 p-6">
                <h3 className="text-2xl font-bold mb-4">Our Values</h3>
                <ul className="space-y-2 text-foreground/80">
                  <li className="flex items-center gap-2">
                    <span className="text-primary font-bold">✓</span>
                    <span>Academic Excellence</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-primary font-bold">✓</span>
                    <span>Integrity and Ethics</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-primary font-bold">✓</span>
                    <span>Diversity and Inclusion</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-primary font-bold">✓</span>
                    <span>Innovation and Research</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-primary font-bold">✓</span>
                    <span>Community Engagement</span>
                  </li>
                </ul>
              </div>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}

