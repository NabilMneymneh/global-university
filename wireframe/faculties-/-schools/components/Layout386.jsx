"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import React from "react";
import { RxChevronRight } from "react-icons/rx";

export function Layout386() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mx-auto mb-12 w-full max-w-lg text-center md:mb-18 lg:mb-20">
          <p className="mb-3 font-semibold md:mb-4">Heal</p>
          <h1 className="heading-h2 mb-5 font-bold md:mb-6">
            Healthcare innovation frontiers
          </h1>
          <p className="text-medium">
            Prepare for transformative medical research and clinical practice
          </p>
        </div>
        <div className="grid auto-cols-fr grid-cols-1 gap-6 md:gap-8 lg:grid-cols-3">
          <Card className="flex flex-col justify-center p-6 md:p-8">
            <div>
              <div className="mb-5 md:mb-6">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                  className="size-12"
                  alt="Relume logo 1"
                />
              </div>
              <h2 className="heading-h4 mb-3 font-bold md:mb-4">
                Medical research
              </h2>
              <p>Advanced clinical training programs</p>
            </div>
            <div className="mt-5 md:mt-6">
              <Button
                title="Develop cutting-edge medical skills and professional expertise"
                variant="link"
                size="link"
                iconRight={<RxChevronRight />}
              >
                Develop cutting-edge medical skills and professional expertise
              </Button>
            </div>
          </Card>
          <Card className="flex flex-col justify-center p-6 md:p-8">
            <div>
              <div className="mb-5 md:mb-6">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                  className="size-12"
                  alt="Relume logo 2"
                />
              </div>
              <h2 className="heading-h4 mb-3 font-bold md:mb-4">
                Medical research
              </h2>
              <p>Advanced clinical training programs</p>
            </div>
            <div className="mt-5 md:mt-6">
              <Button
                title="Develop cutting-edge medical skills and professional expertise"
                variant="link"
                size="link"
                iconRight={<RxChevronRight />}
              >
                Develop cutting-edge medical skills and professional expertise
              </Button>
            </div>
          </Card>
          <Card className="flex flex-col sm:col-span-2 sm:row-span-2 lg:col-start-2 lg:row-start-1">
            <div className="block flex-1 p-6 sm:flex sm:flex-col sm:justify-center md:p-8 lg:p-12">
              <div>
                <p className="mb-2 font-semibold">Impact</p>
                <h2 className="heading-h3 mb-5 font-bold md:mb-6">
                  Interdisciplinary healthcare solutions
                </h2>
                <p>
                  Integrate technology, research, and compassionate patient care
                  strategies
                </p>
              </div>
              <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
                <Button title="Learn" variant="secondary">
                  Learn
                </Button>
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
            <div className="flex w-full flex-col items-center justify-center self-start">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                alt="Relume placeholder image"
              />
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
