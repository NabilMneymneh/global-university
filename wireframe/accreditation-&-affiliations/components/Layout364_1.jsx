"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import React from "react";
import { RxChevronRight } from "react-icons/rx";

export function Layout364_1() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mb-12 md:mb-18 lg:mb-20">
          <div className="mx-auto max-w-lg text-center">
            <p className="mb-3 font-semibold md:mb-4">Partnerships</p>
            <h2 className="heading-h2 mb-5 font-bold md:mb-6">
              Global academic connections
            </h2>
            <p className="text-medium">
              Strategic partnerships expanding educational opportunities
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 items-start gap-6 md:grid-cols-2 md:gap-8">
          <Card className="p-6 md:p-8 lg:p-12">
            <div>
              <div className="mb-5 md:mb-6">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                  alt="Relume logo"
                  className="size-12"
                />
              </div>
              <h3 className="heading-h3 mb-5 font-bold md:mb-6">
                International University Collaborations
              </h3>
              <p>
                Active research and exchange programs with universities across
                Europe, North America, and the Middle East
              </p>
            </div>
            <div className="mt-6 flex flex-wrap gap-4 md:mt-8">
              <Button variant="secondary">View</Button>
              <Button iconRight={<RxChevronRight />} variant="link" size="link">
                Details
              </Button>
            </div>
          </Card>
          <Card className="p-6 md:p-8 lg:p-12">
            <div>
              <div className="mb-5 md:mb-6">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                  alt="Relume logo"
                  className="size-12"
                />
              </div>
              <h3 className="heading-h3 mb-5 font-bold md:mb-6">
                Industry Partnerships
              </h3>
              <p>
                Direct connections with leading organizations providing
                real-world learning experiences
              </p>
            </div>
            <div className="mt-6 flex flex-wrap gap-4 md:mt-8">
              <Button variant="secondary">Explore</Button>
              <Button iconRight={<RxChevronRight />} variant="link" size="link">
                Connect
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
