"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import React from "react";
import { RxChevronRight } from "react-icons/rx";

export function Layout389_1() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mx-auto mb-12 w-full max-w-lg text-center md:mb-18 lg:mb-20">
          <p className="mb-3 font-semibold md:mb-4">Innovate</p>
          <h1 className="heading-h2 mb-5 font-bold md:mb-6">
            Business leadership strategies
          </h1>
          <p className="text-medium">
            Transform theoretical knowledge into practical management skills
          </p>
        </div>
        <div className="grid auto-cols-fr gap-6 md:gap-8 lg:grid-cols-3">
          <Card className="grid auto-cols-fr sm:col-span-2 sm:grid-cols-2 lg:row-span-2 lg:row-start-1">
            <div className="flex size-full flex-col items-center justify-center self-start">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-bento-portrait2.svg"
                alt="Relume placeholder image"
                className="size-full object-cover"
              />
            </div>
            <div className="block p-6 sm:flex sm:flex-col sm:justify-center md:p-8">
              <div>
                <p className="mb-2 font-semibold">Programs</p>
                <h2 className="heading-h4 mb-3 font-bold md:mb-4">
                  Strategic management fundamentals
                </h2>
                <p>
                  Build comprehensive leadership capabilities for global
                  enterprises
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
            <div className="flex flex-1 flex-col justify-center p-6 md:p-8">
              <div>
                <div className="mb-5 md:mb-6">
                  <img
                    src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                    className="size-12"
                    alt="Relume logo 1"
                  />
                </div>
                <h2 className="heading-h4 mb-3 font-bold md:mb-4">
                  Public administration
                </h2>
                <p>Develop skills for effective public sector leadership</p>
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
            <div className="flex flex-1 flex-col justify-center p-6 md:p-8">
              <div>
                <div className="mb-5 md:mb-6">
                  <img
                    src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                    className="size-12"
                    alt="Relume logo 2"
                  />
                </div>
                <h2 className="heading-h4 mb-3 font-bold md:mb-4">
                  Public administration
                </h2>
                <p>Develop skills for effective public sector leadership</p>
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
        </div>
      </div>
    </section>
  );
}
