"use client";

import { Button } from "@/components/ui/button";
import React from "react";
import { RxChevronRight } from "react-icons/rx";

export function Layout239() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="flex flex-col items-center">
          <div className="mb-12 text-center md:mb-18 lg:mb-20">
            <div className="w-full max-w-lg">
              <p className="mb-3 font-semibold md:mb-4">Partnerships</p>
              <h2 className="heading-h2 mb-5 font-bold md:mb-6">
                Sustainability collaboration and innovation
              </h2>
              <p className="text-medium">
                We believe in collective action to address environmental
                challenges through strategic partnerships.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 items-start justify-center gap-y-12 md:grid-cols-3 md:gap-x-8 md:gap-y-16 lg:gap-x-12">
            <div className="flex w-full flex-col items-center text-center">
              <div className="mb-6 md:mb-8">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                  alt="Relume placeholder image"
                  className="rounded-image"
                />
              </div>
              <h3 className="heading-h4 mb-5 font-bold md:mb-6">
                Research collaborations
              </h3>
              <p>
                Developing innovative solutions for environmental sustainability
              </p>
            </div>
            <div className="flex w-full flex-col items-center text-center">
              <div className="mb-6 md:mb-8">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                  alt="Relume placeholder image"
                  className="rounded-image"
                />
              </div>
              <h3 className="heading-h4 mb-5 font-bold md:mb-6">
                Technology partnerships
              </h3>
              <p>Leveraging cutting-edge technologies for green initiatives</p>
            </div>
            <div className="flex w-full flex-col items-center text-center">
              <div className="mb-6 md:mb-8">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                  alt="Relume placeholder image"
                  className="rounded-image"
                />
              </div>
              <h3 className="heading-h4 mb-5 font-bold md:mb-6">
                Policy engagement
              </h3>
              <p>Influencing sustainable development policies and practices</p>
            </div>
          </div>
          <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
            <Button variant="secondary">Explore</Button>
            <Button iconRight={<RxChevronRight />} variant="link" size="link">
              Learn more
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
