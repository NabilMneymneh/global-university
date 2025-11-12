import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-r from-primary to-primary-dark text-white">
      <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
        <div className="max-w-3xl">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            Welcome to Global University
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-100">
            A premier institution of higher education in Lebanon, committed to excellence in teaching, research, and community engagement. Discover your potential with our diverse academic programs and world-class facilities.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Button asChild size="lg" className="bg-white text-primary hover:bg-gray-100">
              <Link href="/admissions">Apply Now</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              <Link href="/about">Learn More</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

