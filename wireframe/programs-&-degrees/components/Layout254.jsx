"use client";

import { Button } from "@/components/ui/button";
import React from "react";
import { RxChevronRight } from "react-icons/rx";

export function Layout254() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mb-12 md:mb-18 lg:mb-20">
          <div className="mx-auto max-w-lg text-center">
            <p className="mb-3 font-semibold md:mb-4">Explore</p>
            <h2 className="heading-h2 mb-5 font-bold md:mb-6">
              Comprehensive academic catalogue for your reference
            </h2>
            <p className="text-medium">
              Dive deep into our academic offerings with our detailed catalogue.
              Every program, course, and opportunity mapped for your academic
              planning.
            </p>
          </div>
        </div>
        <div className="grid place-items-center gap-x-8 gap-y-12 sm:grid-cols-2 md:gap-y-16 lg:grid-cols-[1fr_1.5fr_1fr] lg:gap-x-12">
          <div className="grid w-full grid-cols-1 gap-x-20 gap-y-12 md:gap-y-16">
            <div className="flex flex-col items-center text-center">
              <div className="mb-5 md:mb-6">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                  className="size-12"
                  alt="Relume logo"
                />
              </div>
              <h3 className="heading-h5 mb-3 font-bold md:mb-4">
                Undergraduate programs
              </h3>
              <p>
                Detailed descriptions of majors, course structures, and learning
                outcomes across faculties.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="mb-5 md:mb-6">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                  className="size-12"
                  alt="Relume logo"
                />
              </div>
              <h3 className="heading-h5 mb-3 font-bold md:mb-4">
                Graduate tracks
              </h3>
              <p>
                In-depth insights into specialized master's programs and
                professional development pathways.
              </p>
            </div>
          </div>
          <div className="relative order-last w-full sm:col-span-2 lg:order-none lg:col-span-1">
            <img
              src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
              alt="Relume placeholder image"
              className="h-auto w-full rounded-image object-cover"
            />
          </div>
          <div className="grid w-full grid-cols-1 gap-x-20 gap-y-12 md:gap-y-16">
            <div className="flex flex-col items-center text-center">
              <div className="mb-5 md:mb-6">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                  className="size-12"
                  alt="Relume logo"
                />
              </div>
              <h3 className="heading-h5 mb-3 font-bold md:mb-4">
                Elective courses
              </h3>
              <p>
                Comprehensive list of interdisciplinary and skill-enhancing
                course offerings.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="mb-5 md:mb-6">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                  className="size-12"
                  alt="Relume logo"
                />
              </div>
              <h3 className="heading-h5 mb-3 font-bold md:mb-4">
                Research opportunities
              </h3>
              <p>
                Explore potential research projects, funding, and collaborative
                academic initiatives.
              </p>
            </div>
          </div>
        </div>
        <div className="mt-12 flex flex-wrap items-center justify-center gap-4 md:mt-18 lg:mt-20">
          <Button variant="secondary">Download</Button>
          <Button iconRight={<RxChevronRight />} variant="link" size="link">
            Learn more
          </Button>
        </div>
      </div>
    </section>
  );
}
