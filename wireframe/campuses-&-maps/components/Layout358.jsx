"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import React from "react";
import { RxChevronRight } from "react-icons/rx";

export function Layout358() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mb-12 md:mb-18 lg:mb-20">
          <div className="mx-auto max-w-lg text-center">
            <p className="mb-3 font-semibold md:mb-4">Explore</p>
            <h2 className="heading-h2 mb-5 font-bold md:mb-6">
              Our campus network
            </h2>
            <p className="text-medium">
              Strategic locations designed for innovative learning experiences
            </p>
          </div>
        </div>
        <Card className="grid auto-cols-fr grid-cols-1 md:grid-cols-2">
          <div className="flex flex-col justify-center p-6 md:p-8 lg:p-12">
            <div>
              <p className="text-small mb-2 font-semibold">Lebanon</p>
              <h3 className="heading-h3 mb-5 font-bold md:mb-6">
                Modern facilities supporting academic excellence
              </h3>
              <p>
                Our campuses represent more than buildings. They are living
                spaces where knowledge grows and connections flourish.
              </p>
            </div>
            <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
              <Button title="Learn more" variant="secondary">
                Learn more
              </Button>
              <Button
                title="View"
                variant="link"
                size="link"
                iconRight={<RxChevronRight />}
              >
                View
              </Button>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <img
              src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
              className="size-full object-cover"
              alt="Relume placeholder image"
            />
          </div>
        </Card>
      </div>
    </section>
  );
}
