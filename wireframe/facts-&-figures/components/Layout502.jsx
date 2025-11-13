"use client";

import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import React from "react";
import { RxChevronRight } from "react-icons/rx";

export function Layout502() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mx-auto mb-12 w-full max-w-lg text-center md:mb-18 md:w-auto lg:mb-20">
          <p className="mb-3 font-semibold md:mb-4">Performance</p>
          <h1 className="heading-h2 mb-5 font-bold md:mb-6">
            Academic excellence metrics
          </h1>
          <p className="text-medium">
            Our commitment to educational quality drives continuous improvement
            and student success.
          </p>
          <div className="mt-6 flex items-center justify-center gap-x-4 md:mt-8">
            <Button title="Explore" variant="secondary">
              Explore
            </Button>
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
        <Tabs defaultValue="tab-one">
          <TabsList className="mb-12 items-center gap-6 md:mb-16 md:justify-center">
            <TabsTrigger
              value="tab-one"
              className="rounded-none border-0 border-b bg-transparent px-0 py-2 data-[state=active]:bg-transparent data-[state=inactive]:border-transparent"
            >
              Academic
            </TabsTrigger>
            <TabsTrigger
              value="tab-two"
              className="rounded-none border-0 border-b bg-transparent px-0 py-2 data-[state=active]:bg-transparent data-[state=inactive]:border-transparent"
            >
              Research
            </TabsTrigger>
            <TabsTrigger
              value="tab-three"
              className="rounded-none border-0 border-b bg-transparent px-0 py-2 data-[state=active]:bg-transparent data-[state=inactive]:border-transparent"
            >
              Achievements
            </TabsTrigger>
          </TabsList>
          <TabsContent
            value="tab-one"
            className="data-[state=active]:animate-tabs"
          >
            <div className="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
              <div>
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                  className="w-full rounded-image object-cover"
                  alt="Relume placeholder image 1"
                />
              </div>
              <div>
                <p className="mb-3 font-semibold md:mb-4">Scholarly</p>
                <h2 className="heading-h3 mb-5 font-bold md:mb-6">
                  Average student GPA across programs
                </h2>
                <p>
                  3.5 GPA demonstrates strong academic performance and rigorous
                  standards.
                </p>
                <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
                  <Button title="Review" variant="secondary">
                    Review
                  </Button>
                  <Button
                    title="Research"
                    variant="link"
                    size="link"
                    iconRight={<RxChevronRight />}
                  >
                    Research
                  </Button>
                </div>
              </div>
            </div>
          </TabsContent>
          <TabsContent
            value="tab-two"
            className="data-[state=active]:animate-tabs"
          >
            <div className="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
              <div>
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                  className="w-full rounded-image object-cover"
                  alt="Relume placeholder image 2"
                />
              </div>
              <div>
                <p className="mb-3 font-semibold md:mb-4">Scholarly</p>
                <h2 className="heading-h3 mb-5 font-bold md:mb-6">
                  Average student GPA across programs
                </h2>
                <p>
                  3.5 GPA demonstrates strong academic performance and rigorous
                  standards.
                </p>
                <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
                  <Button title="Review" variant="secondary">
                    Review
                  </Button>
                  <Button
                    title="Research"
                    variant="link"
                    size="link"
                    iconRight={<RxChevronRight />}
                  >
                    Research
                  </Button>
                </div>
              </div>
            </div>
          </TabsContent>
          <TabsContent
            value="tab-three"
            className="data-[state=active]:animate-tabs"
          >
            <div className="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
              <div>
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                  className="w-full rounded-image object-cover"
                  alt="Relume placeholder image 3"
                />
              </div>
              <div>
                <p className="mb-3 font-semibold md:mb-4">Scholarly</p>
                <h2 className="heading-h3 mb-5 font-bold md:mb-6">
                  Average student GPA across programs
                </h2>
                <p>
                  3.5 GPA demonstrates strong academic performance and rigorous
                  standards.
                </p>
                <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
                  <Button title="Review" variant="secondary">
                    Review
                  </Button>
                  <Button
                    title="Research"
                    variant="link"
                    size="link"
                    iconRight={<RxChevronRight />}
                  >
                    Research
                  </Button>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
