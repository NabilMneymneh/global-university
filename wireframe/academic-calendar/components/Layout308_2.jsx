"use client";

import { Button } from "@/components/ui/button";
import React from "react";
import { RxChevronRight } from "react-icons/rx";

export function Layout308_2() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mb-12 grid grid-cols-1 gap-5 md:mb-18 md:grid-cols-2 md:gap-x-12 md:gap-y-8 lg:mb-20 lg:gap-x-20">
          <div>
            <p className="mb-3 font-semibold md:mb-4">Summer</p>
            <h2 className="heading-h2 font-bold">
              Summer session academic highlights
            </h2>
          </div>
          <div>
            <p className="text-medium">
              Discover the unique opportunities and academic experiences during
              our intensive summer term. Explore specialized programs and
              accelerated learning paths.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:gap-x-8 md:gap-y-16 lg:grid-cols-4">
          <div>
            <div className="mb-5 md:mb-6">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                className="size-12"
                alt="Relume logo 1"
              />
            </div>
            <h3 className="heading-h5 mb-3 font-bold md:mb-4">
              Summer session start
            </h3>
            <p>
              Summer term begins in early July, offering concentrated academic
              and professional development courses.
            </p>
          </div>
          <div>
            <div className="mb-5 md:mb-6">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                className="size-12"
                alt="Relume logo 1"
              />
            </div>
            <h3 className="heading-h5 mb-3 font-bold md:mb-4">
              Intensive programs
            </h3>
            <p>
              Short-term interdisciplinary courses and research workshops
              provide focused learning experiences for motivated students.
            </p>
          </div>
          <div>
            <div className="mb-5 md:mb-6">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                className="size-12"
                alt="Relume logo 1"
              />
            </div>
            <h3 className="heading-h5 mb-3 font-bold md:mb-4">
              International summer programs
            </h3>
            <p>
              Engage in global learning opportunities with specialized
              international academic and cultural exchange initiatives.
            </p>
          </div>
          <div>
            <div className="mb-5 md:mb-6">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                className="size-12"
                alt="Relume logo 1"
              />
            </div>
            <h3 className="heading-h5 mb-3 font-bold md:mb-4">
              Session conclusion
            </h3>
            <p>
              Summer term concludes in late August, with final projects and
              comprehensive assessments marking the end of the session.
            </p>
          </div>
        </div>
        <div className="mt-12 flex flex-wrap items-center gap-4 md:mt-18 lg:mt-20">
          <Button title="Download" variant="secondary">
            Download
          </Button>
          <Button
            title="Share"
            variant="link"
            size="link"
            iconRight={<RxChevronRight />}
          >
            Share
          </Button>
        </div>
      </div>
    </section>
  );
}
