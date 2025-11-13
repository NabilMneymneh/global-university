"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useMediaQuery } from "@/hooks/use-media-query";
import { motion, useScroll, useTransform } from "motion/react";
import React, { useRef } from "react";
import { RxChevronRight } from "react-icons/rx";

const ConditionalRender = ({ condition, children }) => {
  return condition ? <>{children}</> : null;
};

const useRelume = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });
  const heroWidth = useTransform(scrollYProgress, [0, 1], ["100vw", "55vw"]);
  const scaleHeight = useTransform(scrollYProgress, [0, 1], ["100vh", "90vh"]);
  const position = useTransform(scrollYProgress, [0, 1], ["-5%", "0%"]);
  const cardsXPosition = useTransform(scrollYProgress, [0, 1], ["100%", "0%"]);
  const cardsWidth = useTransform(scrollYProgress, [0, 1], ["100vw", "35vw"]);
  const cardPositions = (index) =>
    useTransform(
      scrollYProgress,
      [0, 0 + index * 0.01, 0.2 + index * 0.5, 1],
      ["100%", "100%", "0%", "0%"],
    );
  const motionHeroStyles = {
    width: heroWidth,
    height: scaleHeight,
    y: position,
    x: position,
  };
  const motionCardsStyles = {
    width: cardsWidth,
    height: scaleHeight,
    y: position,
    x: cardsXPosition,
  };
  return { containerRef, cardPositions, motionHeroStyles, motionCardsStyles };
};

const useMobile = () => {
  const isMobile = useMediaQuery("(max-width: 767px)");
  return { isMobile };
};

const useMotionCard = () => {
  return motion.create(Card);
};

const useTablet = () => {
  const isTablet = useMediaQuery("(min-width: 768px)");
  return { isTablet };
};

const useMotionCard = () => {
  return motion.create(Card);
};

export function Layout518() {
  const useMotionCard = useMotionCard();
  const renderTablet = useTablet();
  const useMotionCard = useMotionCard();
  const renderMobile = useMobile();
  const useScroll = useRelume();
  return (
    <section
      ref={useScroll.containerRef}
      className="relative px-[5%] py-16 md:px-0 md:py-24 lg:h-[250vh] lg:py-0"
    >
      <ConditionalRender condition={renderMobile.isMobile}>
        <useMotionCard className="relative mb-6 flex items-center justify-center px-6 py-16 md:mb-8 md:px-8 md:py-24">
          <div className="max-w-md text-center text-white">
            <p className="mb-3 font-semibold md:mb-4">Tagline</p>
            <h2 className="heading-h2 mb-5 font-bold md:mb-6">
              Medium length section heading goes here
            </h2>
            <p className="text-medium">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique. Duis cursus,
              mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam
              libero vitae erat.
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-4 md:mt-8">
              <Button title="Button" variant="secondary-alt">
                Button
              </Button>
              <Button
                title="Button"
                variant="link-alt"
                size="link"
                iconRight={<RxChevronRight />}
              >
                Button
              </Button>
            </div>
          </div>
          <div className="absolute inset-0 -z-10">
            <img
              src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
              className="size-full object-cover"
              alt="Relume placeholder image"
            />
            <div className="absolute inset-0 bg-neutral-darkest/50" />
          </div>
        </useMotionCard>
        <div className="grid grid-cols-1 gap-y-6 md:gap-y-8">
          <Card className="flex p-8 text-center">
            <div className="mx-auto flex max-w-md flex-col items-center justify-center lg:max-w-full">
              <div className="mb-3 md:mb-4">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                  className="size-12 object-cover"
                  alt="Relume placeholder image 1"
                />
              </div>
              <h3 className="heading-h3 mb-3 font-bold md:mb-4">
                Short heading here
              </h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique.
              </p>
              <Button
                title="Button"
                variant="link"
                size="link"
                iconRight={<RxChevronRight />}
                className="mt-6 md:mt-8"
              >
                Button
              </Button>
            </div>
          </Card>
          <Card className="flex p-8 text-center">
            <div className="mx-auto flex max-w-md flex-col items-center justify-center lg:max-w-full">
              <div className="mb-3 md:mb-4">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                  className="size-12 object-cover"
                  alt="Relume placeholder image 2"
                />
              </div>
              <h3 className="heading-h3 mb-3 font-bold md:mb-4">
                Short heading here
              </h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique.
              </p>
              <Button
                title="Button"
                variant="link"
                size="link"
                iconRight={<RxChevronRight />}
                className="mt-6 md:mt-8"
              >
                Button
              </Button>
            </div>
          </Card>
        </div>
      </ConditionalRender>
      <ConditionalRender condition={renderTablet.isTablet}>
        <div className="mx-auto w-[90vw] lg:sticky lg:top-0 lg:flex lg:h-screen lg:w-full lg:items-center lg:justify-center lg:overflow-hidden">
          <div className="grid grid-cols-1 gap-y-6 md:gap-y-8 lg:h-[90vh] lg:w-[90vw] lg:grid-cols-[55vw_35vw] lg:gap-y-0">
            <useMotionCard
              style={useScroll.motionHeroStyles}
              className="relative flex items-center justify-center px-6 py-16 md:px-8 md:py-24 lg:p-3"
            >
              <div className="max-w-md text-center text-white">
                <p className="mb-3 font-semibold md:mb-4">Resources</p>
                <h2 className="heading-h2 mb-5 font-bold md:mb-6">
                  Academic catalogue
                </h2>
                <p className="text-medium">
                  Comprehensive guide to our academic programs and course
                  offerings
                </p>
                <div className="mt-6 flex flex-wrap items-center justify-center gap-4 md:mt-8">
                  <Button title="Download" variant="secondary-alt">
                    Download
                  </Button>
                  <Button
                    title="Explore"
                    variant="link-alt"
                    size="link"
                    iconRight={<RxChevronRight />}
                  >
                    Explore
                  </Button>
                </div>
              </div>
              <div className="absolute inset-0 -z-10">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                  className="size-full object-cover"
                  alt="Relume placeholder image"
                />
                <div className="absolute inset-0 bg-neutral-darkest/50" />
              </div>
            </useMotionCard>
            <motion.div
              style={useScroll.motionCardsStyles}
              className="grid grid-cols-1 gap-y-6 md:gap-y-8 lg:pl-8"
            >
              <useMotionCard
                style={{ x: useScroll.cardPositions(0) }}
                className="flex p-8 text-center lg:max-w-[640px]"
              >
                <div className="mx-auto flex max-w-md flex-col items-center justify-center lg:max-w-full">
                  <div className="mb-3 md:mb-4">
                    <img
                      src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                      className="size-12 object-cover"
                      alt="Relume placeholder image 1"
                    />
                  </div>
                  <h3 className="heading-h3 mb-3 font-bold md:mb-4">
                    Program details
                  </h3>
                  <p>
                    Detailed information about course structures, credits, and
                    academic requirements
                  </p>
                  <Button
                    className="mt-6 md:mt-8"
                    asChild={true}
                    title="Learn"
                    variant="link"
                    size="link"
                    iconRight={<RxChevronRight />}
                  >
                    Learn
                  </Button>
                </div>
              </useMotionCard>
              <useMotionCard
                style={{ x: useScroll.cardPositions(1) }}
                className="flex p-8 text-center lg:max-w-[640px]"
              >
                <div className="mx-auto flex max-w-md flex-col items-center justify-center lg:max-w-full">
                  <div className="mb-3 md:mb-4">
                    <img
                      src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                      className="size-12 object-cover"
                      alt="Relume placeholder image 2"
                    />
                  </div>
                  <h3 className="heading-h3 mb-3 font-bold md:mb-4">
                    Course descriptions
                  </h3>
                  <p>
                    Comprehensive overview of curriculum and learning outcomes
                    for each program
                  </p>
                  <Button
                    className="mt-6 md:mt-8"
                    asChild={true}
                    title="Discover"
                    variant="link"
                    size="link"
                    iconRight={<RxChevronRight />}
                  >
                    Discover
                  </Button>
                </div>
              </useMotionCard>
            </motion.div>
          </div>
        </div>
      </ConditionalRender>
    </section>
  );
}
