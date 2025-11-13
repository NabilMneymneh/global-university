"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import React from "react";
import { RxChevronRight } from "react-icons/rx";

export function Layout389() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mx-auto mb-12 w-full max-w-lg text-center md:mb-18 lg:mb-20">
          <p className="mb-3 font-semibold md:mb-4">Navigate</p>
          <h1 className="heading-h2 mb-5 font-bold md:mb-6">
            Program search tool
          </h1>
          <p className="text-medium">
            Find the perfect academic path with our comprehensive program
            directory
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
                <p className="mb-2 font-semibold">Search</p>
                <h2 className="heading-h4 mb-3 font-bold md:mb-4">
                  Filter by interest
                </h2>
                <p>Customize your search across faculties and degree types</p>
              </div>
              <div className="mt-5 md:mt-6">
                <Button
                  title="Start"
                  variant="link"
                  size="link"
                  iconRight={<RxChevronRight />}
                >
                  Start
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
                  Detailed profiles
                </h2>
                <p>In-depth program information at your fingertips</p>
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
                  Detailed profiles
                </h2>
                <p>In-depth program information at your fingertips</p>
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
