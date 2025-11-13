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
          <p className="mb-3 font-semibold md:mb-4">Demographics</p>
          <h1 className="heading-h2 mb-5 font-bold md:mb-6">
            Student population at a glance
          </h1>
          <p className="text-medium">
            Diverse and dynamic student community representing global
            perspectives.
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
                <p className="mb-2 font-semibold">Breakdown</p>
                <h2 className="heading-h4 mb-3 font-bold md:mb-4">
                  Students from across Lebanon and beyond
                </h2>
                <p>
                  3,000 students across undergraduate and graduate programs.
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
                <p className="mb-2 font-semibold">Diversity</p>
                <h2 className="heading-h4 mb-3 font-bold md:mb-4">
                  International representation and cultural exchange
                </h2>
                <p>
                  Students from 25 countries with 40% international enrollment.
                </p>
              </div>
              <div className="mt-5 md:mt-6">
                <Button
                  title="Profile"
                  variant="link"
                  size="link"
                  iconRight={<RxChevronRight />}
                >
                  Profile
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
                <p className="mb-2 font-semibold">Gender</p>
                <h2 className="heading-h4 mb-3 font-bold md:mb-4">
                  Balanced representation across academic programs
                </h2>
                <p>52% female and 48% male student population.</p>
              </div>
              <div className="mt-5 md:mt-6">
                <Button
                  title="Details"
                  variant="link"
                  size="link"
                  iconRight={<RxChevronRight />}
                >
                  Details
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
