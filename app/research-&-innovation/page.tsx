import { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Container from "@/components/layout/Container";
import PageHero from "@/components/layout/PageHero";
import { FadeIn } from "@/components/ui/motion";

export const metadata: Metadata = {
  title: "Research & Innovation | Global University",
  description: "Explore Global University's research initiatives, innovation projects, and academic publications.",
  openGraph: {
    title: "Research & Innovation | Global University",
    description: "Discover our research and innovation initiatives.",
  },
};

export default function ResearchPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          title="Research & Innovation"
          description="Advancing knowledge for a better world"
          eyebrow="Discovery"
        />

        <section className="py-16">
          <Container>
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
              <FadeIn>
                <h2 className="text-3xl font-bold mb-6">Our Research Mission</h2>
                <div className="space-y-4 text-lg text-muted-foreground">
                  <p>
                    At Global University, we believe that research is a vital part of our academic mission.
                    We encourage our faculty and students to engage in research that contributes to the advancement of knowledge and the betterment of society.
                  </p>
                  <p>
                    Our research initiatives focus on biblical studies, theology, ministry, and education,
                    aiming to provide practical solutions to real-world challenges faced by the church and the community.
                  </p>
                </div>
              </FadeIn>

              <div className="relative overflow-hidden rounded-3xl bg-muted/50 p-8">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent" />
                <h3 className="relative text-2xl font-bold mb-6">Research Areas</h3>
                <ul className="relative space-y-4">
                  {[
                    "Biblical Archaeology and History",
                    "Theological Ethics in Modern Society",
                    "Cross-Cultural Ministry Strategies",
                    "Educational Technology in Theology",
                    "Mental Health and Pastoral Care"
                  ].map((area, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary text-sm font-bold">
                        {index + 1}
                      </span>
                      <span className="font-medium">{area}</span>
                    </li>
                  ))}
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
