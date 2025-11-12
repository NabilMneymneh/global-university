import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function AdmissionsCTA() {
  return (
    <section className="py-16 bg-primary text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-lg bg-primary-dark p-8 md:p-12">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold sm:text-4xl mb-4">
              Ready to Begin Your Journey?
            </h2>
            <p className="text-lg text-gray-100 mb-8">
              Join Global University and become part of a vibrant community of learners, researchers, and innovators. 
              Start your application today and take the first step toward your future.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Button asChild size="lg" className="bg-white text-primary hover:bg-gray-100">
                <Link href="/admissions">
                  Apply Now
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                <Link href="/admissions#requirements">View Requirements</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

