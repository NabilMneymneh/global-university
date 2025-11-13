"use client";

import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { VideoIframe } from "@/components/ui/video-iframe";
import React from "react";
import { FaCirclePlay } from "react-icons/fa6";

export function Layout219() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <Tabs
          defaultValue="tab-one"
          className="grid grid-cols-1 items-center gap-y-12 md:grid-cols-2 md:gap-x-12 lg:gap-x-20"
        >
          <div className="order-last flex items-center justify-center overflow-hidden md:order-first">
            <TabsContent
              value="tab-one"
              className="data-[state=active]:animate-tabs"
            >
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                alt="Relume placeholder image 1"
                className="size-full rounded-image object-cover"
              />
            </TabsContent>
            <TabsContent
              value="tab-two"
              className="data-[state=active]:animate-tabs"
            >
              <Dialog>
                <DialogTrigger className="relative flex w-full items-center justify-center overflow-hidden rounded-image">
                  <img
                    src="https://d22po4pjz3o32e.cloudfront.net/placeholder-video-thumbnail.svg"
                    alt="Relume placeholder image 2"
                    className="size-full object-cover"
                  />
                  <FaCirclePlay className="absolute z-20 size-16 text-white" />
                  <span className="absolute inset-0 z-10 bg-neutral-darkest/50" />
                </DialogTrigger>
                <DialogContent>
                  <VideoIframe video="https://www.youtube.com/embed/8DKLYsikxTs?si=Ch9W0KrDWWUiCMMW" />
                </DialogContent>
              </Dialog>
            </TabsContent>
            <TabsContent
              value="tab-three"
              className="data-[state=active]:animate-tabs"
            >
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                alt="Relume placeholder image 3"
                className="size-full rounded-image object-cover"
              />
            </TabsContent>
          </div>
          <TabsList className="order-first flex-col gap-8 py-8 md:order-last md:py-0">
            <TabsTrigger
              value="tab-one"
              className="flex-col items-start justify-start rounded-none border-0 border-l-2 py-0 pr-0 pl-8 text-left whitespace-normal data-[state=active]:bg-transparent"
            >
              <h3 className="heading-h4 mb-3 font-bold md:mb-4">
                Personal counseling services
              </h3>
              <p>
                Confidential support to help you navigate personal challenges
                and maintain mental wellness.
              </p>
            </TabsTrigger>
            <TabsTrigger
              value="tab-two"
              className="flex-col items-start justify-start rounded-none border-0 border-l-2 py-0 pr-0 pl-8 text-left whitespace-normal data-[state=active]:bg-transparent"
            >
              <h3 className="heading-h4 mb-3 font-bold md:mb-4">
                Personal counseling services
              </h3>
              <p>
                Confidential support to help you navigate personal challenges
                and maintain mental wellness.
              </p>
            </TabsTrigger>
            <TabsTrigger
              value="tab-three"
              className="flex-col items-start justify-start rounded-none border-0 border-l-2 py-0 pr-0 pl-8 text-left whitespace-normal data-[state=active]:bg-transparent"
            >
              <h3 className="heading-h4 mb-3 font-bold md:mb-4">
                Personal counseling services
              </h3>
              <p>
                Confidential support to help you navigate personal challenges
                and maintain mental wellness.
              </p>
            </TabsTrigger>
          </TabsList>
        </Tabs>
      </div>
    </section>
  );
}
