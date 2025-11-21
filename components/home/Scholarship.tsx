import Container from "@/components/layout/Container";
import { FadeIn } from "@/components/ui/motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { GraduationCap } from "lucide-react";

export default function Scholarship() {
    return (
        <section className="py-24 bg-primary text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10" />
            <Container className="relative z-10">
                <FadeIn className="text-center max-w-3xl mx-auto space-y-8">
                    <div className="inline-flex items-center justify-center p-3 rounded-full bg-white/10 mb-4">
                        <GraduationCap className="h-8 w-8 text-white" />
                    </div>
                    <h2 className="text-4xl font-bold sm:text-5xl tracking-tight">
                        Scholarships & Financial Aid
                    </h2>
                    <p className="text-xl text-white/90 leading-relaxed">
                        Our competitive tuition rates, coupled with a variety of scholarships and financial aid options, help students pursue their academic dreams without excessive financial burden.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                        <Button asChild size="lg" variant="secondary" className="text-primary font-bold">
                            <Link href="/admissions">Learn More</Link>
                        </Button>
                    </div>
                </FadeIn>
            </Container>
        </section>
    );
}
