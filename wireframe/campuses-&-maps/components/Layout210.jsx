"use client";

import { Button } from "@/components/ui/button";
import React from "react";
import { RxChevronRight } from "react-icons/rx";

export function Layout210() {
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
            <p className="mb-3 font-semibold md:mb-4">Tripoli</p>
            <h2 className="heading-h2 mb-5 font-bold md:mb-6">
              Expanding educational opportunities in northern Lebanon
            </h2>
            <p className="text-medium mb-5 md:mb-6">
              Our Tripoli campus serves as a critical hub for regional learning
              and community engagement. We provide accessible education for
              students across northern regions.
            </p>
            <ul className="my-4 list-disc pl-5">
              <li className="my-1 self-start pl-2">
                <p>Research facilities supporting local industries</p>
              </li>
              <li className="my-1 self-start pl-2">
                <p>Technology-enhanced learning environments</p>
              </li>
              <li className="my-1 self-start pl-2">
                <p>Community outreach and partnership programs</p>
              </li>
            </ul>
            <div className="mt-6 flex flex-wrap gap-4 md:mt-8">
              <Button title="Explore" variant="secondary">
                Explore
              </Button>
              <Button
                title="Details"
                variant="link"
                size="link"
                iconRight={<RxChevronRight />}
              >
                Details
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
