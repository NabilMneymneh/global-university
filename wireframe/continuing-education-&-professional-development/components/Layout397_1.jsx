"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import React from "react";
import { RxChevronRight } from "react-icons/rx";

export function Layout397_1() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mx-auto mb-12 w-full max-w-lg text-center md:mb-18 lg:mb-20">
          <p className="mb-3 font-semibold md:mb-4">Online</p>
          <h1 className="heading-h2 mb-5 font-bold md:mb-6">
            Digital learning for professionals
          </h1>
          <p className="text-medium">
            Expand your skills through flexible online education programs
          </p>
        </div>
        <div className="grid auto-cols-fr grid-cols-1 gap-6 md:gap-8 lg:grid-cols-3">
          <div className="grid auto-cols-fr grid-cols-1 gap-6 md:gap-8">
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
                  Digital marketing certification
                </h2>
                <p>Master modern digital marketing strategies and techniques</p>
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
                <p className="mb-2 font-semibold">Tech</p>
                <h2 className="heading-h4 mb-3 font-bold md:mb-4">
                  Web development intensive course
                </h2>
                <p>Learn full-stack programming from industry experts</p>
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
              <div className="flex w-full flex-col items-center justify-center self-start">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                  alt="Relume placeholder image 1"
                />
              </div>
            </Card>
          </div>
          <div className="grid auto-cols-fr grid-cols-1 gap-6 md:gap-8">
            <Card className="flex flex-col">
              <div className="flex flex-1 flex-col justify-center p-6 md:p-8">
                <p className="mb-2 font-semibold">Skills</p>
                <h2 className="heading-h4 mb-3 font-bold md:mb-4">
                  Data science fundamentals
                </h2>
                <p>Gain practical skills in data analysis and visualization</p>
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
              <div className="flex w-full flex-col items-center justify-center self-start">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                  alt="Relume placeholder image 2"
                />
              </div>
            </Card>
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
                  Cybersecurity essentials
                </h2>
                <p>Understand critical network security principles</p>
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
          </div>
          <div className="grid auto-cols-fr grid-cols-1 gap-6 md:gap-8">
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
                  Cloud computing certification
                </h2>
                <p>Advanced training in cloud infrastructure and management</p>
                <div className="mt-5 md:mt-6">
                  <Button
                    title="Register"
                    variant="link"
                    size="link"
                    iconRight={<RxChevronRight />}
                  >
                    Register
                  </Button>
                </div>
              </div>
            </Card>
            <Card className="flex flex-col">
              <div className="flex flex-1 flex-col justify-center p-6 md:p-8">
                <p className="mb-2 font-semibold">Growth</p>
                <h2 className="heading-h4 mb-3 font-bold md:mb-4">
                  Digital entrepreneurship program
                </h2>
                <p>
                  Build strategies for launching and scaling digital businesses
                </p>
                <div className="mt-5 md:mt-6">
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
                  alt="Relume placeholder image 3"
                />
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
