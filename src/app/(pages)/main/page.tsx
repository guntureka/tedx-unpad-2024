"use client";

import { Banner } from "@/components/Banner";
import { AboutUs } from "@/components/AboutUs";
import { CardBody, CardContainer, CardItem } from "@/components/LogoX";
import Timeline from "@/components/Timeline";
import Image from "next/image";
import React, { useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { useNavbarType } from "@/components/navbarcontext";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/Carousel";

export default function Home() {
  const images = ["/banner1.jpg"];
  const slides = [
    {
      title: "The Power of Vulnerability",
      speaker: "Dr. Emily Johnson",
      description:
        "In this compelling TED Talk, Dr. Emily Johnson delves into the transformative potential of vulnerability. Drawing from her extensive research in psychology and personal experiences, she explores how embracing our imperfections can lead to deeper connections, personal growth, and resilience. Join her on a journey to discover the courage and strength that lie within our vulnerabilities, and learn how they can become our greatest assets in navigating life's challenges.",
      image: "/banner1.jpg",
    },
    {
      title: "The Power of Vulnerability",
      speaker: "Dr. Emily Johnson",
      description:
        "In this compelling TED Talk, Dr. Emily Johnson delves into the transformative potential of vulnerability. Drawing from her extensive research in psychology and personal experiences, she explores how embracing our imperfections can lead to deeper connections, personal growth, and resilience. Join her on a journey to discover the courage and strength that lie within our vulnerabilities, and learn how they can become our greatest assets in navigating life's challenges.",
      image: "/banner1.jpg",
    },
    // Add more slide objects as needed
  ];

  const { setNavbarType } = useNavbarType();
  useEffect(() => {
    setNavbarType("blank");
  }, []);

  return (
    <main>
      <Banner className="h-[40rem]" images={images}>
        <div className="z-50 flex flex-col items-start justify-center px-8 md:flex md:px-16">
          <h1 className="bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text py-4 text-left font-bold text-transparent md:text-7xl">
            TEDxPadjadjaran University
          </h1>
          <h2 className="bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text py-4 text-left text-[#EA887B] text-transparent md:text-4xl">
            The Flavors of Wisdom
          </h2>
          <p className="bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text py-4 text-left text-transparent md:text-3xl">
            A place where wisdom can be seen and discovered
          </p>

          <div className="flex flex-row gap-5">
            <button className="relative mt-4 h-[66px] w-[258px] rounded-[20px] bg-[#C93420] px-4 py-2 text-center text-white backdrop-blur-sm hover:bg-[#721E12] hover:text-[#999999]">
              <span>Buy Ticket</span>
            </button>
          </div>
        </div>
      </Banner>

      <div className="flex w-full flex-row justify-between gap-8">
        <div className="mt-20 flex flex-1 flex-col items-center justify-center">
          <div className="mb-8 h-[163px] w-[633px]">
            <div className="bg-darkgrey items-left relative flex h-full flex-col justify-center overflow-hidden rounded-2xl border border-[#C93420] px-4 py-8 text-left shadow-xl">
              <h1 className="relative z-50 mb-4 text-xl font-bold text-white">
                About TEDx
              </h1>
              <p className="relative z-50 mb-4 text-base font-normal text-white">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                vestibulum dolor vel ipsum scelerisque, eget lacinia libero
                hendrerit. Vivamus tempus ultricies metus, quis ullamcorper
                libero accumsan id. Cras vel pharetra arcu.
              </p>
              <AboutUs number={20} />
            </div>
          </div>

          <div className="h-[163px] w-[633px]">
            <div className="bg-darkgrey items-left relative flex h-full flex-col justify-center overflow-hidden rounded-2xl border border-[#C93420] px-4 py-8 text-left shadow-xl">
              <h1 className="relative z-50 mb-4 text-xl font-bold text-white">
                About TEDxPadjadjaran University
              </h1>
              <p className="relative z-50 mb-4 text-base font-normal text-white">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                vestibulum dolor vel ipsum scelerisque, eget lacinia libero
                hendrerit. Vivamus tempus ultricies metus, quis ullamcorper
                libero accumsan id. Cras vel pharetra arcu.
              </p>
              {/* <AboutUs number={20} /> */}
            </div>
          </div>
        </div>

        <div className="flex-1">
          <CardContainer className="inter-var">
            <CardBody className="group/card dark:bg-black border-black/[0.1] w-600 sm:w-600 h-600 relative p-6 dark:border-white/[0.2] dark:hover:shadow-2xl dark:hover:shadow-red-500/[0.1]">
              <CardItem translateZ="100" className="mt-4 w-auto">
                <Image
                  src="/logox.png"
                  height="600"
                  width="600"
                  className="h-600 w-600 object-cover group-hover/card:shadow-xl"
                  alt="thumbnail"
                />
              </CardItem>
            </CardBody>
          </CardContainer>
        </div>
      </div>

      <Timeline />

      <div className="bg-black mt-20 min-h-screen items-center justify-center">
        <div className="mb-8 text-center text-white">
          <h1 className="text-2xl font-bold">
            Explore Our Discussion Topics and Featured Speakers
          </h1>
        </div>

        <div className="flex justify-center">
          <Carousel className="max-h-1x1 w-full max-w-2xl">
            <CarouselContent>
              {slides.map((slide, index) => (
                <CarouselItem key={index}>
                  <div className="text-black mt-10 flex rounded-lg bg-white p-8 shadow-lg">
                    <div className="flex h-1/3 w-1/3 items-center justify-center rounded-lg bg-red-500">
                      <img
                        src={slide.image}
                        alt="Speaker"
                        className="h-full w-full rounded-lg object-cover"
                      />
                    </div>
                    <div className="w-2/3 p-4">
                      <h2 className="mb-2 ml-4 text-xl font-bold">
                        {slide.title}
                      </h2>
                      <h3 className="mb-2 ml-4 text-lg">{slide.speaker}</h3>
                      <p className="ml-4 text-sm">{slide.description}</p>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="text-white" />
            <CarouselNext className="text-white" />
          </Carousel>
        </div>
      </div>
    </main>
  );
}
