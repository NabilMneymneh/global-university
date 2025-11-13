"use client";

import { Button } from "@/components/ui/button";
import React from "react";
import { RxChevronRight } from "react-icons/rx";

export function Layout308() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mb-12 grid grid-cols-1 gap-5 md:mb-18 md:grid-cols-2 md:gap-x-12 md:gap-y-8 lg:mb-20 lg:gap-x-20">
          <div>
            <p className="mb-3 font-semibold md:mb-4">Fall</p>
            <h2 className="heading-h2 font-bold">
              Fall semester key academic dates
            </h2>
          </div>
          <div>
            <p className="text-medium">
              Navigate the fall semester with our detailed timeline of important
              academic events and milestones.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:gap-x-8 md:gap-y-16 lg:grid-cols-4">
          <div>
            <div className="mb-5 md:mb-6">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                className="size-12"
                alt="Relume logo 1"
              />
            </div>
            <h3 className="heading-h5 mb-3 font-bold md:mb-4">
              Semester start date
            </h3>
            <p>
              Fall semester officially begins on the first Monday of September
              with orientation week for new students.
            </p>
          </div>
          <div>
            <div className="mb-5 md:mb-6">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                className="size-12"
                alt="Relume logo 1"
              />
            </div>
            <h3 className="heading-h5 mb-3 font-bold md:mb-4">
              Mid-semester break
            </h3>
            <p>
              A one-week break is scheduled midway through the semester to
              support student wellness and academic recovery.
            </p>
          </div>
          <div>
            <div className="mb-5 md:mb-6">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                className="size-12"
                alt="Relume logo 1"
              />
            </div>
            <h3 className="heading-h5 mb-3 font-bold md:mb-4">Exam period</h3>
            <p>
              Final examinations are conducted during the last two weeks of the
              semester, with specific dates varying by course.
            </p>
          </div>
          <div>
            <div className="mb-5 md:mb-6">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                className="size-12"
                alt="Relume logo 1"
              />
            </div>
            <h3 className="heading-h5 mb-3 font-bold md:mb-4">
              Semester conclusion
            </h3>
            <p>
              The fall semester concludes with final grade submissions and a
              brief winter break before spring semester begins.
            </p>
          </div>
        </div>
        <div className="mt-12 flex flex-wrap items-center gap-4 md:mt-18 lg:mt-20">
          <Button title="Download" variant="secondary">
            Download
          </Button>
          <Button
            title="Share"
            variant="link"
            size="link"
            iconRight={<RxChevronRight />}
          >
            Share
          </Button>
        </div>
      </div>
    </section>
  );
}
