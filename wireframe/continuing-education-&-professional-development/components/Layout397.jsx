"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import React from "react";
import { RxChevronRight } from "react-icons/rx";

export function Layout397() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mx-auto mb-12 w-full max-w-lg text-center md:mb-18 lg:mb-20">
          <p className="mb-3 font-semibold md:mb-4">Workshops</p>
          <h1 className="heading-h2 mb-5 font-bold md:mb-6">
            Professional development experiences
          </h1>
          <p className="text-medium">
            Immersive learning opportunities for career advancement
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
                  Communication skills seminar
                </h2>
                <p>Enhance interpersonal and professional communication</p>
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
                <p className="mb-2 font-semibold">Tech</p>
                <h2 className="heading-h4 mb-3 font-bold md:mb-4">
                  AI and machine learning workshop
                </h2>
                <p>Practical insights into emerging technologies</p>
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
                  Project management intensive
                </h2>
                <p>Learn industry-standard management techniques</p>
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
                  Financial strategy masterclass
                </h2>
                <p>Advanced financial planning and analysis</p>
                <div className="mt-5 md:mt-6">
                  <Button
                    title="Join"
                    variant="link"
                    size="link"
                    iconRight={<RxChevronRight />}
                  >
                    Join
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
                  Leadership development retreat
                </h2>
                <p>Transformative leadership training</p>
                <div className="mt-5 md:mt-6">
                  <Button
                    title="Apply"
                    variant="link"
                    size="link"
                    iconRight={<RxChevronRight />}
                  >
                    Apply
                  </Button>
                </div>
              </div>
            </Card>
            <Card className="flex flex-col">
              <div className="flex flex-1 flex-col justify-center p-6 md:p-8">
                <p className="mb-2 font-semibold">Growth</p>
                <h2 className="heading-h4 mb-3 font-bold md:mb-4">
                  Innovation and creativity workshop
                </h2>
                <p>Unlock creative problem-solving skills</p>
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
