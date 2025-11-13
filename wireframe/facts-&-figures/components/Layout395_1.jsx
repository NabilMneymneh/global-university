"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import React from "react";
import { RxChevronRight } from "react-icons/rx";

export function Layout395_1() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mx-auto mb-12 w-full max-w-lg text-center md:mb-18 lg:mb-20">
          <p className="mb-3 font-semibold md:mb-4">Infrastructure</p>
          <h1 className="heading-h2 mb-5 font-bold md:mb-6">
            Campus facilities and resources
          </h1>
          <p className="text-medium">
            State-of-the-art facilities supporting comprehensive learning
            experiences.
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
                <p className="mb-2 font-semibold">Resources</p>
                <h2 className="heading-h4 mb-3 font-bold md:mb-4">
                  Library and learning spaces
                </h2>
                <p>
                  100,000 volumes and digital resources available to students.
                </p>
              </div>
              <div className="mt-5 md:mt-6">
                <Button
                  title="Browse"
                  variant="link"
                  size="link"
                  iconRight={<RxChevronRight />}
                >
                  Browse
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
                <p className="mb-2 font-semibold">Technology</p>
                <h2 className="heading-h4 mb-3 font-bold md:mb-4">
                  Research and computer laboratories
                </h2>
                <p>
                  20 specialized laboratories equipped with advanced
                  technological infrastructure.
                </p>
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
                <p className="mb-2 font-semibold">Housing</p>
                <h2 className="heading-h4 mb-3 font-bold md:mb-4">
                  Student accommodation and living spaces
                </h2>
                <p>
                  500 on-campus housing units with modern amenities and support
                  services.
                </p>
              </div>
              <div className="mt-5 md:mt-6">
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
          </Card>
        </div>
      </div>
    </section>
  );
}
