"use client";

import React from "react";
import Lottie from "lottie-react";
import AnimationNotFound from "@/lib/Animation.json";
import { cn } from "@/lib/utils";

const LottieAnimation = ({ className = "" }: { className?: string }) => {
  return (
    <Lottie
      animationData={AnimationNotFound}
      className={cn("flex max-w-80 items-center justify-center", className)}
    />
  );
};

export default LottieAnimation;
