"use client";

import { Button } from "@/components/ui/button";
import React from "react";
import { RxChevronRight } from "react-icons/rx";

export function Layout109() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mb-12 grid grid-cols-1 items-start justify-between gap-x-12 gap-y-5 md:mb-18 md:grid-cols-2 md:gap-x-12 md:gap-y-8 lg:mb-20 lg:gap-x-20">
          <div>
            <p className="mb-3 font-semibold md:mb-4">Vision</p>
            <h3 className="heading-h2 font-bold">
              Empowering minds through global perspectives
            </h3>
          </div>
          <div>
            <p className="text-medium mb-5 md:mb-6">
              We believe in education as a powerful catalyst for change. Our
              mission is to cultivate critical thinking, cultural understanding,
              and innovative leadership.
            </p>
            <ul className="my-4 list-disc pl-5">
              <li className="my-1 self-start pl-2">
                <p>Intellectual curiosity</p>
              </li>
              <li className="my-1 self-start pl-2">
                <p>Cultural engagement</p>
              </li>
              <li className="my-1 self-start pl-2">
                <p>Global citizenship</p>
              </li>
            </ul>
            <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
              <Button title="Discover" variant="secondary">
                Discover
              </Button>
              <Button
                title="Connect"
                variant="link"
                size="link"
                iconRight={<RxChevronRight />}
              >
                Connect
              </Button>
            </div>
          </div>
        </div>
        <img
          src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
          className="w-full rounded-image object-cover"
          alt="Relume placeholder image"
        />
      </div>
    </section>
  );
}
