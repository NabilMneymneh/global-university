"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import React from "react";
import { RxChevronRight } from "react-icons/rx";

export function Layout508() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mx-auto mb-12 w-full max-w-lg text-center md:mb-18 lg:mb-20">
          <p className="mb-3 font-semibold md:mb-4">Testimonials</p>
          <h1 className="heading-h2 mb-5 font-bold md:mb-6">
            What experts say about us
          </h1>
          <p className="text-medium">
            Independent evaluators and academic partners recognize our
            commitment to educational excellence and innovative research.
          </p>
        </div>
        <Card className="relative grid auto-cols-fr grid-cols-1 gap-x-12 lg:gap-x-0">
          <Tabs defaultValue="tab-1" className="grid">
            <TabsList className="order-2 flex-col md:order-1 md:flex-row">
              <TabsTrigger
                value="tab-1"
                className="heading-h6 w-full items-start justify-start gap-4 rounded-none border-0 border-b p-6 font-bold whitespace-normal data-[state=inactive]:border-scheme-border data-[state=inactive]:bg-scheme-background md:items-center md:justify-center md:border-r md:px-8 md:py-6 md:last-of-type:border-r-0"
              >
                Educational councils
              </TabsTrigger>
              <TabsTrigger
                value="tab-2"
                className="heading-h6 w-full items-start justify-start gap-4 rounded-none border-0 border-b p-6 font-bold whitespace-normal data-[state=inactive]:border-scheme-border data-[state=inactive]:bg-scheme-background md:items-center md:justify-center md:border-r md:px-8 md:py-6 md:last-of-type:border-r-0"
              >
                Research networks
              </TabsTrigger>
              <TabsTrigger
                value="tab-3"
                className="heading-h6 w-full items-start justify-start gap-4 rounded-none border-0 border-b p-6 font-bold whitespace-normal data-[state=inactive]:border-scheme-border data-[state=inactive]:bg-scheme-background md:items-center md:justify-center md:border-r md:px-8 md:py-6 md:last-of-type:border-r-0"
              >
                International partners
              </TabsTrigger>
              <TabsTrigger
                value="tab-4"
                className="heading-h6 w-full items-start justify-start gap-4 rounded-none border-0 border-b p-6 font-bold whitespace-normal data-[state=inactive]:border-scheme-border data-[state=inactive]:bg-scheme-background md:items-center md:justify-center md:border-r md:px-8 md:py-6 md:last-of-type:border-r-0"
              >
                Academic boards
              </TabsTrigger>
              <TabsTrigger
                value="tab-5"
                className="heading-h6 w-full items-start justify-start gap-4 rounded-none border-0 border-b p-6 font-bold whitespace-normal data-[state=inactive]:border-scheme-border data-[state=inactive]:bg-scheme-background md:items-center md:justify-center md:border-r md:px-8 md:py-6 md:last-of-type:border-r-0"
              >
                Industry collaborators
              </TabsTrigger>
              <TabsTrigger
                value="tab-6"
                className="heading-h6 w-full items-start justify-start gap-4 rounded-none border-0 border-b p-6 font-bold whitespace-normal data-[state=inactive]:border-scheme-border data-[state=inactive]:bg-scheme-background md:items-center md:justify-center md:border-r md:px-8 md:py-6 md:last-of-type:border-r-0"
              >
                Global associations
              </TabsTrigger>
            </TabsList>
            <TabsContent
              value="tab-1"
              className="order-1 data-[state=active]:animate-tabs md:order-2"
            >
              <div className="grid grid-cols-1 gap-y-12 p-6 md:grid-cols-2 md:items-center md:gap-x-12 md:p-8 lg:gap-x-20 lg:p-12">
                <div>
                  <img
                    src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                    className="w-full rounded-image object-cover"
                    alt="Relume placeholder image"
                  />
                </div>
                <div>
                  <p className="mb-3 font-semibold md:mb-4">Voices</p>
                  <h2 className="heading-h3 mb-5 font-bold md:mb-6">
                    Perspectives from academic leaders
                  </h2>
                  <p>
                    Experts across various fields have acknowledged our
                    university's significant contributions to education and
                    research.
                  </p>
                  <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
                    <Button title="Read more" variant="secondary">
                      Read more
                    </Button>
                    <Button
                      title="Insights"
                      variant="link"
                      size="link"
                      iconRight={<RxChevronRight />}
                    >
                      Insights
                    </Button>
                  </div>
                </div>
              </div>
            </TabsContent>
            <TabsContent
              value="tab-2"
              className="order-1 data-[state=active]:animate-tabs md:order-2"
            >
              <div className="grid grid-cols-1 gap-y-12 p-6 md:grid-cols-2 md:items-center md:gap-x-12 md:p-8 lg:gap-x-20 lg:p-12">
                <div>
                  <img
                    src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                    className="w-full rounded-image object-cover"
                    alt="Relume placeholder image"
                  />
                </div>
                <div>
                  <p className="mb-3 font-semibold md:mb-4">Voices</p>
                  <h2 className="heading-h3 mb-5 font-bold md:mb-6">
                    Perspectives from academic leaders
                  </h2>
                  <p>
                    Experts across various fields have acknowledged our
                    university's significant contributions to education and
                    research.
                  </p>
                  <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
                    <Button title="Read more" variant="secondary">
                      Read more
                    </Button>
                    <Button
                      title="Insights"
                      variant="link"
                      size="link"
                      iconRight={<RxChevronRight />}
                    >
                      Insights
                    </Button>
                  </div>
                </div>
              </div>
            </TabsContent>
            <TabsContent
              value="tab-3"
              className="order-1 data-[state=active]:animate-tabs md:order-2"
            >
              <div className="grid grid-cols-1 gap-y-12 p-6 md:grid-cols-2 md:items-center md:gap-x-12 md:p-8 lg:gap-x-20 lg:p-12">
                <div>
                  <img
                    src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                    className="w-full rounded-image object-cover"
                    alt="Relume placeholder image"
                  />
                </div>
                <div>
                  <p className="mb-3 font-semibold md:mb-4">Voices</p>
                  <h2 className="heading-h3 mb-5 font-bold md:mb-6">
                    Perspectives from academic leaders
                  </h2>
                  <p>
                    Experts across various fields have acknowledged our
                    university's significant contributions to education and
                    research.
                  </p>
                  <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
                    <Button title="Read more" variant="secondary">
                      Read more
                    </Button>
                    <Button
                      title="Insights"
                      variant="link"
                      size="link"
                      iconRight={<RxChevronRight />}
                    >
                      Insights
                    </Button>
                  </div>
                </div>
              </div>
            </TabsContent>
            <TabsContent
              value="tab-4"
              className="order-1 data-[state=active]:animate-tabs md:order-2"
            >
              <div className="grid grid-cols-1 gap-y-12 p-6 md:grid-cols-2 md:items-center md:gap-x-12 md:p-8 lg:gap-x-20 lg:p-12">
                <div>
                  <img
                    src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                    className="w-full rounded-image object-cover"
                    alt="Relume placeholder image"
                  />
                </div>
                <div>
                  <p className="mb-3 font-semibold md:mb-4">Voices</p>
                  <h2 className="heading-h3 mb-5 font-bold md:mb-6">
                    Perspectives from academic leaders
                  </h2>
                  <p>
                    Experts across various fields have acknowledged our
                    university's significant contributions to education and
                    research.
                  </p>
                  <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
                    <Button title="Read more" variant="secondary">
                      Read more
                    </Button>
                    <Button
                      title="Insights"
                      variant="link"
                      size="link"
                      iconRight={<RxChevronRight />}
                    >
                      Insights
                    </Button>
                  </div>
                </div>
              </div>
            </TabsContent>
            <TabsContent
              value="tab-5"
              className="order-1 data-[state=active]:animate-tabs md:order-2"
            >
              <div className="grid grid-cols-1 gap-y-12 p-6 md:grid-cols-2 md:items-center md:gap-x-12 md:p-8 lg:gap-x-20 lg:p-12">
                <div>
                  <img
                    src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                    className="w-full rounded-image object-cover"
                    alt="Relume placeholder image"
                  />
                </div>
                <div>
                  <p className="mb-3 font-semibold md:mb-4">Voices</p>
                  <h2 className="heading-h3 mb-5 font-bold md:mb-6">
                    Perspectives from academic leaders
                  </h2>
                  <p>
                    Experts across various fields have acknowledged our
                    university's significant contributions to education and
                    research.
                  </p>
                  <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
                    <Button title="Read more" variant="secondary">
                      Read more
                    </Button>
                    <Button
                      title="Insights"
                      variant="link"
                      size="link"
                      iconRight={<RxChevronRight />}
                    >
                      Insights
                    </Button>
                  </div>
                </div>
              </div>
            </TabsContent>
            <TabsContent
              value="tab-6"
              className="order-1 data-[state=active]:animate-tabs md:order-2"
            >
              <div className="grid grid-cols-1 gap-y-12 p-6 md:grid-cols-2 md:items-center md:gap-x-12 md:p-8 lg:gap-x-20 lg:p-12">
                <div>
                  <img
                    src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                    className="w-full rounded-image object-cover"
                    alt="Relume placeholder image"
                  />
                </div>
                <div>
                  <p className="mb-3 font-semibold md:mb-4">Voices</p>
                  <h2 className="heading-h3 mb-5 font-bold md:mb-6">
                    Perspectives from academic leaders
                  </h2>
                  <p>
                    Experts across various fields have acknowledged our
                    university's significant contributions to education and
                    research.
                  </p>
                  <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
                    <Button title="Read more" variant="secondary">
                      Read more
                    </Button>
                    <Button
                      title="Insights"
                      variant="link"
                      size="link"
                      iconRight={<RxChevronRight />}
                    >
                      Insights
                    </Button>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </Card>
      </div>
    </section>
  );
}
