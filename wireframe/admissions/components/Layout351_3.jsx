"use client";

import { useMediaQuery } from "@/hooks/use-media-query";
import { motion } from "motion/react";
import React, { useState } from "react";

const useRelume = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const isMobile = useMediaQuery("(max-width: 991px)");
  const CardContent = isMobile ? motion.div : "div";
  const animateWidth = (index) => {
    return isMobile ? "100%" : index === activeIndex ? "100%" : "5rem";
  };
  const animateHeight = (index) => {
    return index === activeIndex ? "auto" : "0px";
  };
  const handleSetIsActive = (index) => () => {
    setActiveIndex((prevIndex) => {
      if (
        prevIndex === index &&
        features.filter((_, i) => i === prevIndex).length === 1
      ) {
        return prevIndex;
      }
      return prevIndex === index ? null : index;
    });
  };
  return {
    handleSetIsActive,
    CardContent,
    animateWidth,
    animateHeight,
  };
};

export function Layout351_3() {
  const useSctoll = useRelume({
    features: [
      {
        columnText: "01",
        verticalText: "Feature one",
        horizontalText: "Feature one",
        heading: "Short heading goes here",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.",
        image: {
          src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg",
          alt: "Relume placeholder image 1",
        },
      },
      {
        columnText: "02",
        verticalText: "Feature two",
        horizontalText: "Feature two",
        heading: "Short heading goes here",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.",
        image: {
          src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg",
          alt: "Relume placeholder image 2",
        },
      },
      {
        columnText: "03",
        verticalText: "Feature three",
        horizontalText: "Feature three",
        heading: "Short heading goes here",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.",
        image: {
          src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg",
          alt: "Relume placeholder image 3",
        },
      },
      {
        columnText: "04",
        verticalText: "Feature four",
        horizontalText: "Feature four",
        heading: "Short heading goes here",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.",
        image: {
          src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg",
          alt: "Relume placeholder image 4",
        },
      },
    ],
  });
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mb-12 w-full max-w-lg md:mb-18 lg:mb-20">
          <p className="mb-3 font-semibold md:mb-4">Transfer</p>
          <h1 className="heading-h2 mb-5 font-bold md:mb-6">
            Transfer and credit evaluation process
          </h1>
          <p className="text-medium">
            Comprehensive approach to recognizing previous academic achievements
          </p>
        </div>
        <div className="flex w-full flex-col overflow-hidden border-r border-b border-l border-scheme-border lg:h-[90vh] lg:flex-row lg:border-t lg:border-r-0">
          <motion.div
            className="flex flex-col justify-start overflow-hidden lg:h-[90vh] lg:min-w-20 lg:flex-row lg:border-r lg:border-scheme-border"
            onClick={useSctoll.handleSetIsActive(0)}
            initial={false}
            animate={{ width: useSctoll.animateWidth(0) }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="relative flex h-16 w-full min-w-full cursor-pointer items-center justify-center border-t border-scheme-border py-8 md:h-20 lg:h-[90vh] lg:w-20 lg:min-w-20 lg:flex-col lg:justify-between lg:border-none">
              <p className="heading-h5 absolute left-6 font-bold whitespace-nowrap md:left-10 lg:relative lg:left-0">
                01
              </p>
              <h2 className="heading-h5 hidden [writing-mode:vertical-rl] lg:mx-auto lg:block lg:rotate-180 lg:font-bold">
                Credit review
              </h2>
              <p className="heading-h5 font-bold lg:hidden">Credit review</p>
            </div>
            <useSctoll.CardContent
              className="w-full overflow-hidden lg:h-full lg:w-auto lg:min-w-[200vw] lg:overflow-auto"
              animate={{ height: useSctoll.animateHeight(0) }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <div className="flex h-full flex-col px-6 pt-4 pb-8 md:px-10 md:pt-12 md:pb-12 lg:w-[40rem] lg:px-12 lg:pt-16 lg:pb-16">
                <h3 className="heading-h3 mb-5 font-bold md:mb-6">
                  Completing transfer evaluation
                </h3>
                <p className="text-medium">
                  Final credit transfer decisions are communicated in writing.
                  Some credits may be accepted, modified, or denied based on
                  academic standards.
                </p>
                <div className="mt-8 h-80 md:mt-10 md:h-[25rem] lg:mt-12">
                  <img
                    src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                    alt="Relume placeholder image 1"
                    className="size-full rounded-image object-cover"
                  />
                </div>
              </div>
            </useSctoll.CardContent>
          </motion.div>
          <motion.div
            className="flex flex-col justify-start overflow-hidden lg:h-[90vh] lg:min-w-20 lg:flex-row lg:border-r lg:border-scheme-border"
            onClick={useSctoll.handleSetIsActive(1)}
            initial={false}
            animate={{ width: useSctoll.animateWidth(1) }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="relative flex h-16 w-full min-w-full cursor-pointer items-center justify-center border-t border-scheme-border py-8 md:h-20 lg:h-[90vh] lg:w-20 lg:min-w-20 lg:flex-col lg:justify-between lg:border-none">
              <p className="heading-h5 absolute left-6 font-bold whitespace-nowrap md:left-10 lg:relative lg:left-0">
                02
              </p>
              <h2 className="heading-h5 hidden [writing-mode:vertical-rl] lg:mx-auto lg:block lg:rotate-180 lg:font-bold">
                Course alignment
              </h2>
              <p className="heading-h5 font-bold lg:hidden">Course alignment</p>
            </div>
            <useSctoll.CardContent
              className="w-full overflow-hidden lg:h-full lg:w-auto lg:min-w-[200vw] lg:overflow-auto"
              animate={{ height: useSctoll.animateHeight(1) }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <div className="flex h-full flex-col px-6 pt-4 pb-8 md:px-10 md:pt-12 md:pb-12 lg:w-[40rem] lg:px-12 lg:pt-16 lg:pb-16">
                <h3 className="heading-h3 mb-5 font-bold md:mb-6">
                  Completing transfer evaluation
                </h3>
                <p className="text-medium">
                  Final credit transfer decisions are communicated in writing.
                  Some credits may be accepted, modified, or denied based on
                  academic standards.
                </p>
                <div className="mt-8 h-80 md:mt-10 md:h-[25rem] lg:mt-12">
                  <img
                    src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                    alt="Relume placeholder image 2"
                    className="size-full rounded-image object-cover"
                  />
                </div>
              </div>
            </useSctoll.CardContent>
          </motion.div>
          <motion.div
            className="flex flex-col justify-start overflow-hidden lg:h-[90vh] lg:min-w-20 lg:flex-row lg:border-r lg:border-scheme-border"
            onClick={useSctoll.handleSetIsActive(2)}
            initial={false}
            animate={{ width: useSctoll.animateWidth(2) }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="relative flex h-16 w-full min-w-full cursor-pointer items-center justify-center border-t border-scheme-border py-8 md:h-20 lg:h-[90vh] lg:w-20 lg:min-w-20 lg:flex-col lg:justify-between lg:border-none">
              <p className="heading-h5 absolute left-6 font-bold whitespace-nowrap md:left-10 lg:relative lg:left-0">
                03
              </p>
              <h2 className="heading-h5 hidden [writing-mode:vertical-rl] lg:mx-auto lg:block lg:rotate-180 lg:font-bold">
                Submission process
              </h2>
              <p className="heading-h5 font-bold lg:hidden">
                Submission process
              </p>
            </div>
            <useSctoll.CardContent
              className="w-full overflow-hidden lg:h-full lg:w-auto lg:min-w-[200vw] lg:overflow-auto"
              animate={{ height: useSctoll.animateHeight(2) }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <div className="flex h-full flex-col px-6 pt-4 pb-8 md:px-10 md:pt-12 md:pb-12 lg:w-[40rem] lg:px-12 lg:pt-16 lg:pb-16">
                <h3 className="heading-h3 mb-5 font-bold md:mb-6">
                  Completing transfer evaluation
                </h3>
                <p className="text-medium">
                  Final credit transfer decisions are communicated in writing.
                  Some credits may be accepted, modified, or denied based on
                  academic standards.
                </p>
                <div className="mt-8 h-80 md:mt-10 md:h-[25rem] lg:mt-12">
                  <img
                    src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                    alt="Relume placeholder image 3"
                    className="size-full rounded-image object-cover"
                  />
                </div>
              </div>
            </useSctoll.CardContent>
          </motion.div>
          <motion.div
            className="flex flex-col justify-start overflow-hidden lg:h-[90vh] lg:min-w-20 lg:flex-row lg:border-r lg:border-scheme-border"
            onClick={useSctoll.handleSetIsActive(3)}
            initial={false}
            animate={{ width: useSctoll.animateWidth(3) }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="relative flex h-16 w-full min-w-full cursor-pointer items-center justify-center border-t border-scheme-border py-8 md:h-20 lg:h-[90vh] lg:w-20 lg:min-w-20 lg:flex-col lg:justify-between lg:border-none">
              <p className="heading-h5 absolute left-6 font-bold whitespace-nowrap md:left-10 lg:relative lg:left-0">
                04
              </p>
              <h2 className="heading-h5 hidden [writing-mode:vertical-rl] lg:mx-auto lg:block lg:rotate-180 lg:font-bold">
                Credit acceptance
              </h2>
              <p className="heading-h5 font-bold lg:hidden">
                Credit acceptance
              </p>
            </div>
            <useSctoll.CardContent
              className="w-full overflow-hidden lg:h-full lg:w-auto lg:min-w-[200vw] lg:overflow-auto"
              animate={{ height: useSctoll.animateHeight(3) }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <div className="flex h-full flex-col px-6 pt-4 pb-8 md:px-10 md:pt-12 md:pb-12 lg:w-[40rem] lg:px-12 lg:pt-16 lg:pb-16">
                <h3 className="heading-h3 mb-5 font-bold md:mb-6">
                  Completing transfer evaluation
                </h3>
                <p className="text-medium">
                  Final credit transfer decisions are communicated in writing.
                  Some credits may be accepted, modified, or denied based on
                  academic standards.
                </p>
                <div className="mt-8 h-80 md:mt-10 md:h-[25rem] lg:mt-12">
                  <img
                    src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                    alt="Relume placeholder image 4"
                    className="size-full rounded-image object-cover"
                  />
                </div>
              </div>
            </useSctoll.CardContent>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
