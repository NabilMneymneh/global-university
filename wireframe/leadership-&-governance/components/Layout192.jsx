"use client";

import { Button } from "@/components/ui/button";
import React from "react";
import { RxChevronRight } from "react-icons/rx";

export function Layout192() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
          <div className="order-2 md:order-1">
            <img
              src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
              className="w-full rounded-image object-cover"
              alt="Relume placeholder image"
            />
          </div>
          <div className="order-1 lg:order-2">
            <p className="mb-3 font-semibold md:mb-4">Vision</p>
            <h2 className="heading-h2 mb-5 font-bold md:mb-6">
              Leadership that shapes academic futures
            </h2>
            <p className="text-medium">
              Our leaders bring deep expertise and commitment to educational
              excellence. They guide Global University with strategic insight
              and passion.
            </p>
            <div className="mt-6 flex flex-wrap gap-4 md:mt-8">
              <Button title="Learn more" variant="secondary">
                Learn more
              </Button>
              <Button
                title="Meet"
                variant="link"
                size="link"
                iconRight={<RxChevronRight />}
              >
                Meet
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
