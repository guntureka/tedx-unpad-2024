"use client";

import React from "react";
import Lottie from "lottie-react";
import AnimationNotFound from "@/lib/Animation.json";
import { cn } from "@/lib/utils";

const LottieAnimation = ({ className = "" }: { className?: string }) => {
  return (
    <Lottie
      animationData={AnimationNotFound}
      className={cn("flex justify-center items-center max-w-80", className)}
    />
  );
};

export default LottieAnimation;
