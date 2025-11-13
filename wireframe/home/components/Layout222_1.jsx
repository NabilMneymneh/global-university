"use client";

import { Button } from "@/components/ui/button";
import React from "react";
import { RxChevronRight } from "react-icons/rx";

export function Layout222_1() {
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
            <div className="grid grid-cols-1 gap-x-6 gap-y-8 py-2 sm:grid-cols-2">
              <div>
                <div className="mb-3 md:mb-4">
                  <img
                    src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                    className="size-12"
                    alt="Relume logo"
                  />
                </div>
                <h3 className="heading-h5 mb-3 font-bold md:mb-4">
                  Student portal
                </h3>
                <p>
                  Access your academic records, course materials, and personal
                  information.
                </p>
                <div className="mt-6 flex items-center gap-4 md:mt-8">
                  <Button
                    iconRight={<RxChevronRight />}
                    variant="link"
                    size="link"
                  >
                    Login
                  </Button>
                </div>
              </div>
              <div>
                <div className="mb-3 md:mb-4">
                  <img
                    src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                    className="size-12"
                    alt="Relume logo"
                  />
                </div>
                <h3 className="heading-h5 mb-3 font-bold md:mb-4">E-library</h3>
                <p>
                  Explore thousands of digital resources and research materials.
                </p>
                <div className="mt-6 flex items-center gap-4 md:mt-8">
                  <Button
                    iconRight={<RxChevronRight />}
                    variant="link"
                    size="link"
                  >
                    Access library
                  </Button>
                </div>
              </div>
              <div>
                <div className="mb-3 md:mb-4">
                  <img
                    src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                    className="size-12"
                    alt="Relume logo"
                  />
                </div>
                <h3 className="heading-h5 mb-3 font-bold md:mb-4">Webmail</h3>
                <p>
                  Stay connected with university communications and
                  announcements.
                </p>
                <div className="mt-6 flex items-center gap-4 md:mt-8">
                  <Button
                    iconRight={<RxChevronRight />}
                    variant="link"
                    size="link"
                  >
                    Check email
                  </Button>
                </div>
              </div>
              <div>
                <div className="mb-3 md:mb-4">
                  <img
                    src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                    className="size-12"
                    alt="Relume logo"
                  />
                </div>
                <h3 className="heading-h5 mb-3 font-bold md:mb-4">
                  Learning management
                </h3>
                <p>
                  Engage with online courses, assignments, and collaborative
                  tools.
                </p>
                <div className="mt-6 flex items-center gap-4 md:mt-8">
                  <Button
                    iconRight={<RxChevronRight />}
                    variant="link"
                    size="link"
                  >
                    Enter LMS
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
