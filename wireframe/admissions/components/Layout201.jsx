"use client";

import { Button } from "@/components/ui/button";
import React from "react";
import { RxChevronRight } from "react-icons/rx";

export function Layout201() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2 lg:gap-x-20">
          <div className="order-2 md:order-1">
            <img
              src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
              className="w-full rounded-image object-cover"
              alt="Relume placeholder image"
            />
          </div>
          <div className="order-1 md:order-2">
            <p className="mb-3 font-semibold md:mb-4">Potential</p>
            <h2 className="heading-h2 mb-5 font-bold md:mb-6">
              Why choose Global University
            </h2>
            <p className="text-medium mb-6 md:mb-8">
              We believe in education that challenges boundaries and empowers
              students to create meaningful change. Our approach goes beyond
              traditional learning.
            </p>
            <div className="grid grid-cols-1 gap-6 py-2 sm:grid-cols-2">
              <div>
                <div className="mb-3 md:mb-4">
                  <img
                    src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                    className="size-12"
                    alt="Relume logo"
                  />
                </div>
                <h6 className="heading-h6 mb-3 font-bold md:mb-4">
                  Academic excellence
                </h6>
                <p>
                  Rigorous programs designed to prepare students for global
                  challenges and innovative careers
                </p>
              </div>
              <div>
                <div className="mb-3 md:mb-4">
                  <img
                    src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                    className="size-12"
                    alt="Relume logo"
                  />
                </div>
                <h6 className="heading-h6 mb-3 font-bold md:mb-4">
                  Student support
                </h6>
                <p>
                  Personalized guidance and resources to help you succeed from
                  day one
                </p>
              </div>
            </div>
            <div className="mt-6 flex flex-wrap gap-4 md:mt-8">
              <Button title="Learn more" variant="secondary">
                Learn more
              </Button>
              <Button
                title="Watch"
                variant="link"
                size="link"
                iconRight={<RxChevronRight />}
              >
                Watch
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
