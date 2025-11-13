"use client";

import { Button } from "@/components/ui/button";
import React from "react";
import { RxChevronRight } from "react-icons/rx";

export function Layout245() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="flex flex-col items-start">
          <div className="mb-12 grid grid-cols-1 items-start justify-between gap-5 md:mb-18 md:grid-cols-2 md:gap-x-12 md:gap-y-8 lg:mb-20 lg:gap-x-20">
            <div>
              <p className="mb-3 font-semibold md:mb-4">Opportunity</p>
              <h2 className="heading-h2 font-bold">
                Scholarships and financial aid
              </h2>
            </div>
            <div>
              <p className="text-medium">
                We are committed to making quality education accessible. Our
                comprehensive financial support programs help talented students
                pursue their academic dreams
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 items-start gap-y-12 md:grid-cols-3 md:gap-x-8 md:gap-y-16 lg:gap-x-12">
            <div>
              <div className="mb-5 md:mb-6">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                  alt="Relume logo"
                  className="size-12"
                />
              </div>
              <h3 className="heading-h4 mb-5 font-bold md:mb-6">
                Merit-based scholarships
              </h3>
              <p>
                Awards recognizing exceptional academic and extracurricular
                achievements
              </p>
            </div>
            <div>
              <div className="mb-5 md:mb-6">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                  alt="Relume logo"
                  className="size-12"
                />
              </div>
              <h3 className="heading-h4 mb-5 font-bold md:mb-6">
                Need-based financial aid
              </h3>
              <p>Support for students demonstrating financial need</p>
            </div>
            <div>
              <div className="mb-5 md:mb-6">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                  alt="Relume logo"
                  className="size-12"
                />
              </div>
              <h3 className="heading-h4 mb-5 font-bold md:mb-6">
                International student grants
              </h3>
              <p>Special funding opportunities for international students</p>
            </div>
          </div>
          <div className="mt-10 flex items-center gap-4 md:mt-14 lg:mt-16">
            <Button variant="secondary">Apply now</Button>
            <Button iconRight={<RxChevronRight />} variant="link" size="link">
              Learn more
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
