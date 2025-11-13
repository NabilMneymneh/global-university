"use client";

import { Button } from "@/components/ui/button";
import React from "react";
import { RxChevronRight } from "react-icons/rx";

export function Layout241() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="flex flex-col">
          <div className="mb-12 md:mb-18 lg:mb-20">
            <div className="w-full max-w-lg">
              <p className="mb-3 font-semibold md:mb-4">Pulse</p>
              <h2 className="heading-h2 mb-5 font-bold md:mb-6">
                University moments that matter
              </h2>
              <p className="text-medium">
                Our campus breathes with energy and discovery. Each week brings
                new opportunities for learning, connection, and breakthrough.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 items-start justify-center gap-y-12 md:grid-cols-3 md:gap-x-8 md:gap-y-16 lg:gap-x-12">
            <div className="flex w-full flex-col">
              <div className="mb-5 md:mb-6">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                  className="size-12"
                  alt="Relume logo"
                />
              </div>
              <h3 className="heading-h4 mb-5 font-bold md:mb-6">Latest news</h3>
              <p>Research breakthrough in sustainable agriculture</p>
            </div>
            <div className="flex w-full flex-col">
              <div className="mb-5 md:mb-6">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                  className="size-12"
                  alt="Relume logo"
                />
              </div>
              <h3 className="heading-h4 mb-5 font-bold md:mb-6">
                Upcoming events
              </h3>
              <p>International student conference this summer</p>
            </div>
            <div className="flex w-full flex-col">
              <div className="mb-5 md:mb-6">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                  className="size-12"
                  alt="Relume logo"
                />
              </div>
              <h3 className="heading-h4 mb-5 font-bold md:mb-6">
                Faculty spotlight
              </h3>
              <p>Dr. Sarah Hassan wins national innovation award</p>
            </div>
          </div>
          <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
            <Button variant="secondary">View all news</Button>
            <Button iconRight={<RxChevronRight />} variant="link" size="link">
              Event calendar
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
