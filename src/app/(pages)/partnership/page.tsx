"use client";

import VideoCarousel from "@/components/partnership/VideoCarousel";
import SponsorsCollage from "@/components/partnership/SponsorsCollage";
import MediaPartnersCollage from "@/components/partnership/MediaPartnersCollage";
import { Lora } from "next/font/google";
import { cn } from "@/lib/utils";

const lora = Lora({ subsets: ["latin"] });

export default function Partnership() {
  return (
    <div className="mt-[80px] flex w-full flex-col items-center justify-center gap-[50px] py-[70px]">
      <h1 className="font-inter text-[24px] font-bold text-white">
        SPECIAL THANKS TO
      </h1>
      <VideoCarousel />
      <div
        className={cn(
          "flex w-full flex-col items-center justify-center",
          lora.className,
        )}
      >
        <h2 className="font-lora pb-[25px] text-[18px] font-normal text-white">
          Our Sponsors
        </h2>
        <SponsorsCollage />
      </div>
      <div
        className={cn(
          "flex w-full flex-col items-center justify-center",
          lora.className,
        )}
      >
        <h2 className="font-lora pb-[25px] text-[18px] font-normal text-white">
          Our Media Partners
        </h2>
        <MediaPartnersCollage />
      </div>
    </div>
  );
}