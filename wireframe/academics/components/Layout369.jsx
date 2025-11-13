"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import React from "react";
import { RxChevronRight } from "react-icons/rx";

export function Layout369() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mb-12 md:mb-18 lg:mb-20">
          <div className="mx-auto max-w-lg text-center">
            <p className="mb-3 font-semibold md:mb-4">Discover</p>
            <h2 className="heading-h2 mb-5 font-bold md:mb-6">
              Our academic faculties
            </h2>
            <p className="text-medium">
              Explore diverse disciplines that challenge and inspire
              intellectual growth
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-6 md:gap-8">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:gap-8 lg:grid-cols-4">
            <Card className="grid grid-cols-1 sm:col-span-2 sm:row-span-1 sm:grid-cols-2">
              <div className="flex flex-1 flex-col justify-center p-6">
                <div>
                  <p className="text-small mb-2 font-semibold">Humanities</p>
                  <h3 className="heading-h5 mb-2 font-bold">
                    Literature and cultural studies
                  </h3>
                  <p>Engage with critical thinking and global perspectives</p>
                </div>
                <div className="mt-5 flex flex-wrap items-center gap-4 md:mt-6">
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
              <div className="flex items-center justify-center">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-portrait.svg"
                  alt="Relume placeholder image 3"
                  className="size-full object-cover"
                />
              </div>
            </Card>
            <Card className="flex flex-col">
              <div className="flex flex-col justify-center p-6">
                <div>
                  <p className="text-small mb-2 font-semibold">Sciences</p>
                  <h3 className="heading-h5 mb-2 font-bold">
                    Administrative studies
                  </h3>
                  <p>
                    Develop strategic skills for modern business environments
                  </p>
                </div>
                <div className="mt-5 flex items-center gap-4 md:mt-6">
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
              <div className="flex items-center justify-center">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                  alt="Relume placeholder image 1"
                  className="w-full object-cover"
                />
              </div>
            </Card>
            <Card className="flex flex-col">
              <div className="flex flex-col justify-center p-6">
                <div>
                  <p className="text-small mb-2 font-semibold">Sciences</p>
                  <h3 className="heading-h5 mb-2 font-bold">
                    Administrative studies
                  </h3>
                  <p>
                    Develop strategic skills for modern business environments
                  </p>
                </div>
                <div className="mt-5 flex items-center gap-4 md:mt-6">
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
              <div className="flex items-center justify-center">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                  alt="Relume placeholder image 2"
                  className="w-full object-cover"
                />
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
