"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import React from "react";
import { RxChevronRight } from "react-icons/rx";

export function Layout398() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mb-12 md:mb-18 lg:mb-20">
          <div className="mx-auto max-w-lg text-center">
            <p className="mb-3 font-semibold md:mb-4">Programs</p>
            <h1 className="heading-h2 mb-5 font-bold md:mb-6">
              Comprehensive learning tracks
            </h1>
            <p className="text-medium">
              Discover programs designed to elevate your professional journey
            </p>
          </div>
        </div>
        <div className="grid auto-cols-fr grid-cols-1 gap-6 md:gap-8 lg:grid-cols-3">
          <div className="grid auto-cols-fr grid-cols-1 gap-6 md:gap-8">
            <Card className="flex flex-col">
              <div className="flex w-full flex-col items-center justify-center self-start">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                  alt="Relume placeholder image 1"
                />
              </div>
              <div className="flex flex-1 flex-col justify-center p-6 md:p-8">
                <p className="text-small mb-2 font-semibold">New</p>
                <h2 className="heading-h4 mb-3 font-bold md:mb-4">
                  Professional certification courses
                </h2>
                <p>Gain specialized credentials in emerging fields</p>
                <div className="mt-5 md:mt-6">
                  <Button
                    title="Enroll"
                    variant="link"
                    size="link"
                    iconRight={<RxChevronRight />}
                  >
                    Enroll
                  </Button>
                </div>
              </div>
            </Card>
            <Card className="flex flex-col">
              <div className="flex flex-1 flex-col justify-center p-6 md:p-8">
                <div className="mb-5 md:mb-6">
                  <img
                    src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                    className="size-12"
                    alt="Relume logo 1"
                  />
                </div>
                <h2 className="heading-h4 mb-3 font-bold md:mb-4">
                  Digital transformation programs
                </h2>
                <p>Master cutting-edge technologies and strategies</p>
              </div>
            </Card>
          </div>
          <div className="grid auto-cols-fr grid-cols-1 gap-6 md:gap-8">
            <Card className="flex flex-col">
              <div className="flex flex-1 flex-col justify-center p-6 md:p-8">
                <div className="mb-5 md:mb-6">
                  <img
                    src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                    className="size-12"
                    alt="Relume logo 2"
                  />
                </div>
                <h2 className="heading-h4 mb-3 font-bold md:mb-4">
                  Leadership development tracks
                </h2>
                <p>Build strategic management skills</p>
              </div>
            </Card>
            <Card className="flex flex-col">
              <div className="flex w-full flex-col items-center justify-center self-start">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                  alt="Relume placeholder image 2"
                />
              </div>
              <div className="flex flex-1 flex-col justify-center p-6 md:p-8">
                <p className="text-small mb-2 font-semibold">Tech</p>
                <h2 className="heading-h4 mb-3 font-bold md:mb-4">
                  Technology skills bootcamps
                </h2>
                <p>Learn practical coding and digital skills</p>
              </div>
            </Card>
          </div>
          <div className="grid auto-cols-fr grid-cols-1 gap-6 md:gap-8">
            <Card className="flex flex-col">
              <div className="flex w-full flex-col items-center justify-center self-start">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                  alt="Relume placeholder image 3"
                />
              </div>
              <div className="flex flex-1 flex-col justify-center p-6 md:p-8">
                <p className="text-small mb-2 font-semibold">Skills</p>
                <h2 className="heading-h4 mb-3 font-bold md:mb-4">
                  Executive education modules
                </h2>
                <p>Advanced training for senior professionals</p>
              </div>
            </Card>
            <Card className="flex flex-col">
              <div className="flex flex-1 flex-col justify-center p-6 md:p-8">
                <div className="mb-5 md:mb-6">
                  <img
                    src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                    className="size-12"
                    alt="Relume logo 3"
                  />
                </div>
                <h2 className="heading-h4 mb-3 font-bold md:mb-4">
                  Marketing innovation workshops
                </h2>
                <p>Explore contemporary marketing strategies</p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
