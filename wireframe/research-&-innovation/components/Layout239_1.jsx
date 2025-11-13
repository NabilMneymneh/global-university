"use client";

import { Button } from "@/components/ui/button";
import React from "react";
import { RxChevronRight } from "react-icons/rx";

export function Layout239_1() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="flex flex-col items-center">
          <div className="mb-12 text-center md:mb-18 lg:mb-20">
            <div className="w-full max-w-lg">
              <p className="mb-3 font-semibold md:mb-4">Discover</p>
              <h2 className="heading-h2 mb-5 font-bold md:mb-6">
                Research news and events
              </h2>
              <p className="text-medium">
                Stay informed about the latest academic discoveries and research
                milestones
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
                Upcoming research symposiums
              </h3>
              <p>
                Featuring cutting-edge presentations from global researchers
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
                Recent research achievements
              </h3>
              <p>Highlighting breakthrough discoveries by our research teams</p>
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
                Research seminar series
              </h3>
              <p>Engaging discussions on innovative academic work</p>
            </div>
          </div>
          <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
            <Button variant="secondary">Register</Button>
            <Button iconRight={<RxChevronRight />} variant="link" size="link">
              Learn
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
