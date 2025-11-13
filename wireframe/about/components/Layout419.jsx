"use client";

import { Button } from "@/components/ui/button";
import React from "react";
import { RxChevronRight } from "react-icons/rx";

export function Layout419() {
  return (
    <section className="pt-24 md:pt-0">
      <div className="grid grid-cols-1 gap-y-16 md:grid-cols-2 md:gap-y-0">
        <div>
          <div className="md:sticky md:top-0 md:gap-y-0">
            <div className="flex flex-col items-end md:h-screen md:justify-center">
              <div className="mx-[5%] max-w-md md:mr-12 md:ml-[5vw] lg:mr-20">
                <p className="mb-3 font-semibold md:mb-4">Vision</p>
                <h2 className="heading-h2 mb-5 font-bold md:mb-6">
                  Strategic roadmap for educational innovation
                </h2>
                <p className="text-medium">
                  Our strategic plan charts a bold path of academic
                  transformation and global engagement.
                </p>
                <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
                  <Button title="Discover" variant="secondary">
                    Discover
                  </Button>
                  <Button
                    title="Learn"
                    variant="link"
                    size="link"
                    iconRight={<RxChevronRight />}
                  >
                    Learn
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="sticky top-0 flex h-screen flex-col justify-center border-t border-t-scheme-border bg-scheme-foreground px-[5%] py-10 md:px-10">
            <div className="max-w-md">
              <div className="mb-6 md:mb-8">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                  alt="Relume placeholder image 1"
                  className="size-full rounded-image object-cover"
                />
              </div>
              <h3 className="heading-h5 mb-3 font-bold md:mb-4">
                Academic excellence
              </h3>
              <p>
                Commitment to delivering world-class education through
                innovative curriculum and research.
              </p>
            </div>
          </div>
          <div className="sticky top-0 flex h-screen flex-col justify-center border-t border-t-scheme-border bg-scheme-foreground px-[5%] py-10 md:px-10">
            <div className="max-w-md">
              <div className="mb-6 md:mb-8">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                  alt="Relume placeholder image 2"
                  className="size-full rounded-image object-cover"
                />
              </div>
              <h3 className="heading-h5 mb-3 font-bold md:mb-4">
                Academic excellence
              </h3>
              <p>
                Commitment to delivering world-class education through
                innovative curriculum and research.
              </p>
            </div>
          </div>
          <div className="sticky top-0 flex h-screen flex-col justify-center border-t border-t-scheme-border bg-scheme-foreground px-[5%] py-10 md:px-10">
            <div className="max-w-md">
              <div className="mb-6 md:mb-8">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                  alt="Relume placeholder image 3"
                  className="size-full rounded-image object-cover"
                />
              </div>
              <h3 className="heading-h5 mb-3 font-bold md:mb-4">
                Academic excellence
              </h3>
              <p>
                Commitment to delivering world-class education through
                innovative curriculum and research.
              </p>
            </div>
          </div>
          <div className="sticky top-0 flex h-screen flex-col justify-center border-t border-t-scheme-border bg-scheme-foreground px-[5%] py-10 md:px-10">
            <div className="max-w-md">
              <div className="mb-6 md:mb-8">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                  alt="Relume placeholder image 4"
                  className="size-full rounded-image object-cover"
                />
              </div>
              <h3 className="heading-h5 mb-3 font-bold md:mb-4">
                Academic excellence
              </h3>
              <p>
                Commitment to delivering world-class education through
                innovative curriculum and research.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
