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
            <p className="mb-3 font-semibold md:mb-4">Advance</p>
            <h2 className="heading-h2 mb-5 font-bold md:mb-6">
              Graduate programs for professional growth
            </h2>
            <p className="text-medium mb-6 md:mb-8">
              Our graduate tracks provide specialized knowledge and advanced
              skills for career transformation.
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
                  Teaching diploma
                </h6>
                <p>
                  Comprehensive training for educators seeking professional
                  certification.
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
                  MA in education
                </h6>
                <p>
                  Advanced research and leadership preparation for educational
                  professionals.
                </p>
              </div>
            </div>
            <div className="mt-6 flex flex-wrap gap-4 md:mt-8">
              <Button title="Explore" variant="secondary">
                Explore
              </Button>
              <Button
                title="Learn more"
                variant="link"
                size="link"
                iconRight={<RxChevronRight />}
              >
                Learn more
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
