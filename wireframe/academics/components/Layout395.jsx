"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import React from "react";
import { RxChevronRight } from "react-icons/rx";

export function Layout395() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mx-auto mb-12 w-full max-w-lg text-center md:mb-18 lg:mb-20">
          <p className="mb-3 font-semibold md:mb-4">Programs</p>
          <h1 className="heading-h2 mb-5 font-bold md:mb-6">
            Degrees that transform
          </h1>
          <p className="text-medium">
            Comprehensive academic programs designed to meet global educational
            standards
          </p>
        </div>
        <div className="grid auto-cols-fr grid-cols-1 gap-6 md:gap-8 lg:grid-cols-3">
          <Card className="flex flex-col">
            <div className="flex w-full flex-col items-center justify-center self-start">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                alt="Relume placeholder image 1"
              />
            </div>
            <div className="flex flex-1 flex-col justify-center p-6 md:p-8">
              <div>
                <p className="mb-2 font-semibold">Undergraduate</p>
                <h2 className="heading-h4 mb-3 font-bold md:mb-4">
                  Diverse undergraduate majors
                </h2>
                <p>Build foundational knowledge across multiple disciplines</p>
              </div>
              <div className="mt-5 md:mt-6">
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
          <Card className="flex flex-col">
            <div className="flex w-full flex-col items-center justify-center self-start">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                alt="Relume placeholder image 1"
              />
            </div>
            <div className="flex flex-1 flex-col justify-center p-6 md:p-8">
              <div>
                <p className="mb-2 font-semibold">Graduate</p>
                <h2 className="heading-h4 mb-3 font-bold md:mb-4">
                  Master's in education tracks
                </h2>
                <p>Advanced learning for educational professionals</p>
              </div>
              <div className="mt-5 md:mt-6">
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
          </Card>
          <Card className="flex flex-col">
            <div className="flex w-full flex-col items-center justify-center self-start">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                alt="Relume placeholder image 1"
              />
            </div>
            <div className="flex flex-1 flex-col justify-center p-6 md:p-8">
              <div>
                <p className="mb-2 font-semibold">Specializations</p>
                <h2 className="heading-h4 mb-3 font-bold md:mb-4">
                  Focused minors and interdisciplinary programs
                </h2>
                <p>
                  Customize your academic experience with targeted study paths
                </p>
              </div>
              <div className="mt-5 md:mt-6">
                <Button
                  title="Discover"
                  variant="link"
                  size="link"
                  iconRight={<RxChevronRight />}
                >
                  Discover
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
