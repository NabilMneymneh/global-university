"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import React from "react";
import { RxChevronRight } from "react-icons/rx";

export function Layout359() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mb-12 md:mb-18 lg:mb-20">
          <div className="mx-auto max-w-lg text-center">
            <p className="mb-3 font-semibold md:mb-4">Grow</p>
            <h2 className="heading-h2 mb-5 font-bold md:mb-6">
              Lifelong learning pathways
            </h2>
            <p className="text-medium">
              Expand your skills and advance your professional capabilities
            </p>
          </div>
        </div>
        <Card className="grid auto-cols-fr grid-cols-1 md:grid-cols-2">
          <div className="flex items-center justify-center">
            <img
              src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
              className="size-full object-cover"
              alt="Relume placeholder image"
            />
          </div>
          <div className="flex flex-col justify-center p-6 md:p-8 lg:p-12">
            <div>
              <p className="text-small mb-2 font-semibold">Professional</p>
              <h3 className="heading-h3 mb-5 font-bold md:mb-6">
                Continuing education for career transformation
              </h3>
              <p>
                Develop practical skills that bridge academic knowledge and
                real-world expertise. Our programs are designed to meet the
                evolving demands of the global job market.
              </p>
            </div>
            <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
              <Button title="Enroll" variant="secondary">
                Enroll
              </Button>
              <Button
                title="Explore"
                variant="link"
                size="link"
                iconRight={<RxChevronRight />}
              >
                Explore
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}
