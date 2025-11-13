"use client";

import { Button } from "@/components/ui/button";
import React from "react";
import { RxChevronRight } from "react-icons/rx";

export function Layout225() {
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
            <div className="grid grid-cols-1 gap-x-6 gap-y-8 py-2">
              <div className="flex self-start">
                <div className="mr-6 flex-none self-start">
                  <img
                    src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                    className="size-12"
                    alt="Relume logo 1"
                  />
                </div>
                <div>
                  <h3 className="heading-h5 mb-3 font-bold md:mb-4">
                    Community engagement
                  </h3>
                  <p>
                    Empowering local communities through targeted educational
                    and social development programs
                  </p>
                  <div className="mt-5 flex items-center gap-x-4 md:mt-6">
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
              <div className="flex self-start">
                <div className="mr-6 flex-none self-start">
                  <img
                    src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                    className="size-12"
                    alt="Relume logo 1"
                  />
                </div>
                <div>
                  <h3 className="heading-h5 mb-3 font-bold md:mb-4">
                    Environmental sustainability
                  </h3>
                  <p>
                    Implementing comprehensive green initiatives and sustainable
                    campus management strategies
                  </p>
                  <div className="mt-5 flex items-center gap-x-4 md:mt-6">
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
              </div>
              <div className="flex self-start">
                <div className="mr-6 flex-none self-start">
                  <img
                    src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                    className="size-12"
                    alt="Relume logo 1"
                  />
                </div>
                <div>
                  <h3 className="heading-h5 mb-3 font-bold md:mb-4">
                    Social responsibility
                  </h3>
                  <p>
                    Developing programs that address critical social challenges
                    and promote inclusive education
                  </p>
                  <div className="mt-5 flex items-center gap-x-4 md:mt-6">
                    <Button
                      title="Engage"
                      variant="link"
                      size="link"
                      iconRight={<RxChevronRight />}
                    >
                      Engage
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
