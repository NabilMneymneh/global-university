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
            <p className="mb-3 font-semibold md:mb-4">Connect</p>
            <h2 className="heading-h2 mb-5 font-bold md:mb-6">
              Connect with global university leadership
            </h2>
            <p className="text-medium">
              Discover the pathways to engagement with our university's key
              decision-makers and academic leaders.
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
                Executive Communication
              </h3>
              <p>
                Direct channels for inquiries, collaboration, and strategic
                dialogue with university leadership.
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
                Leadership Engagement
              </h3>
              <p>
                Transparent communication channels that bridge academic vision
                with institutional strategy.
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
                Open Dialogue
              </h3>
              <p>
                Fostering meaningful interactions between university leaders and
                our academic community.
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
                Support Resources
              </h3>
              <p>
                Comprehensive support for navigating communication and
                collaboration with university leadership.
              </p>
            </div>
          </div>
        </div>
        <div className="mt-12 flex flex-wrap items-center justify-center gap-4 md:mt-18 lg:mt-20">
          <Button variant="secondary">Contact</Button>
          <Button iconRight={<RxChevronRight />} variant="link" size="link">
            Connect
          </Button>
        </div>
      </div>
    </section>
  );
}
