"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import React from "react";
import { RxChevronRight } from "react-icons/rx";

export function Layout506() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mx-auto mb-12 w-full max-w-lg text-center md:mb-18 lg:mb-20">
          <p className="mb-3 font-semibold md:mb-4">Strategy</p>
          <h1 className="heading-h2 mb-5 font-bold md:mb-6">
            Core objectives of excellence
          </h1>
          <p className="text-medium">
            Our strategic plan focuses on comprehensive growth and meaningful
            impact across academic, research, and community domains.
          </p>
        </div>
        <Card>
          <Tabs
            defaultValue="tab-1"
            orientation="vertical"
            className="relative grid auto-cols-fr grid-cols-1 md:grid-cols-[1.5fr_1fr]"
          >
            <TabsContent
              value="tab-1"
              className="data-[state=active]:animate-tabs"
            >
              <div className="flex h-full flex-col justify-center p-6 md:p-8 lg:p-16">
                <div className="mb-5 md:mb-6">
                  <img
                    src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                    className="size-12"
                    alt="Relume logo 1"
                  />
                </div>
                <h2 className="heading-h3 mb-5 font-bold md:mb-6">
                  Academic innovation roadmap
                </h2>
                <p>
                  Developing cutting-edge curriculum that prepares students for
                  emerging global challenges and technological transformations.
                </p>
                <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
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
            </TabsContent>
            <TabsContent
              value="tab-2"
              className="data-[state=active]:animate-tabs"
            >
              <div className="flex h-full flex-col justify-center p-6 md:p-8 lg:p-16">
                <div className="mb-5 md:mb-6">
                  <img
                    src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                    className="size-12"
                    alt="Relume logo 2"
                  />
                </div>
                <h2 className="heading-h3 mb-5 font-bold md:mb-6">
                  Academic innovation roadmap
                </h2>
                <p>
                  Developing cutting-edge curriculum that prepares students for
                  emerging global challenges and technological transformations.
                </p>
                <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
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
            </TabsContent>
            <TabsContent
              value="tab-3"
              className="data-[state=active]:animate-tabs"
            >
              <div className="flex h-full flex-col justify-center p-6 md:p-8 lg:p-16">
                <div className="mb-5 md:mb-6">
                  <img
                    src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                    className="size-12"
                    alt="Relume logo 3"
                  />
                </div>
                <h2 className="heading-h3 mb-5 font-bold md:mb-6">
                  Academic innovation roadmap
                </h2>
                <p>
                  Developing cutting-edge curriculum that prepares students for
                  emerging global challenges and technological transformations.
                </p>
                <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
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
            </TabsContent>
            <TabsContent
              value="tab-4"
              className="data-[state=active]:animate-tabs"
            >
              <div className="flex h-full flex-col justify-center p-6 md:p-8 lg:p-16">
                <div className="mb-5 md:mb-6">
                  <img
                    src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                    className="size-12"
                    alt="Relume logo 4"
                  />
                </div>
                <h2 className="heading-h3 mb-5 font-bold md:mb-6">
                  Academic innovation roadmap
                </h2>
                <p>
                  Developing cutting-edge curriculum that prepares students for
                  emerging global challenges and technological transformations.
                </p>
                <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
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
            </TabsContent>
            <TabsContent
              value="tab-5"
              className="data-[state=active]:animate-tabs"
            >
              <div className="flex h-full flex-col justify-center p-6 md:p-8 lg:p-16">
                <div className="mb-5 md:mb-6">
                  <img
                    src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                    className="size-12"
                    alt="Relume logo 5"
                  />
                </div>
                <h2 className="heading-h3 mb-5 font-bold md:mb-6">
                  Academic innovation roadmap
                </h2>
                <p>
                  Developing cutting-edge curriculum that prepares students for
                  emerging global challenges and technological transformations.
                </p>
                <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
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
            </TabsContent>
            <TabsContent
              value="tab-6"
              className="data-[state=active]:animate-tabs"
            >
              <div className="flex h-full flex-col justify-center p-6 md:p-8 lg:p-16">
                <div className="mb-5 md:mb-6">
                  <img
                    src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                    className="size-12"
                    alt="Relume logo 6"
                  />
                </div>
                <h2 className="heading-h3 mb-5 font-bold md:mb-6">
                  Academic innovation roadmap
                </h2>
                <p>
                  Developing cutting-edge curriculum that prepares students for
                  emerging global challenges and technological transformations.
                </p>
                <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
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
            </TabsContent>
            <TabsList className="relative grid h-full auto-cols-fr grid-cols-1 border-t border-scheme-border md:border-t-0 md:border-l">
              <TabsTrigger
                value="tab-1"
                className="heading-h5 items-start justify-start rounded-none border-0 border-b p-6 font-bold last-of-type:border-0 data-[state=inactive]:border-scheme-border data-[state=inactive]:bg-scheme-background md:px-8"
              >
                Academic innovation
              </TabsTrigger>
              <TabsTrigger
                value="tab-2"
                className="heading-h5 items-start justify-start rounded-none border-0 border-b p-6 font-bold last-of-type:border-0 data-[state=inactive]:border-scheme-border data-[state=inactive]:bg-scheme-background md:px-8"
              >
                Research excellence
              </TabsTrigger>
              <TabsTrigger
                value="tab-3"
                className="heading-h5 items-start justify-start rounded-none border-0 border-b p-6 font-bold last-of-type:border-0 data-[state=inactive]:border-scheme-border data-[state=inactive]:bg-scheme-background md:px-8"
              >
                Global engagement
              </TabsTrigger>
              <TabsTrigger
                value="tab-4"
                className="heading-h5 items-start justify-start rounded-none border-0 border-b p-6 font-bold last-of-type:border-0 data-[state=inactive]:border-scheme-border data-[state=inactive]:bg-scheme-background md:px-8"
              >
                Student success
              </TabsTrigger>
              <TabsTrigger
                value="tab-5"
                className="heading-h5 items-start justify-start rounded-none border-0 border-b p-6 font-bold last-of-type:border-0 data-[state=inactive]:border-scheme-border data-[state=inactive]:bg-scheme-background md:px-8"
              >
                Community impact
              </TabsTrigger>
              <TabsTrigger
                value="tab-6"
                className="heading-h5 items-start justify-start rounded-none border-0 border-b p-6 font-bold last-of-type:border-0 data-[state=inactive]:border-scheme-border data-[state=inactive]:bg-scheme-background md:px-8"
              >
                Sustainable development
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </Card>
      </div>
    </section>
  );
}
