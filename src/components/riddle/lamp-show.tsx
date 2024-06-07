"use client";

import React from "react";
import { motion } from "framer-motion";
import { LampContainer } from "@/components/ui/lamp";
import { FlipWords } from "@/components/ui/flip-words";

const LampShow = () => {
  const words = ["Hustler", "Starter", "Seekers", "Explorers", "Odyssey"];

  return (
    <LampContainer className="bg-[#1F1F1F]">
      <motion.h1
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
      >
        Welcome aboard our Wisdom
        <FlipWords className="text-white" words={words} duration={3000} />
      </motion.h1>
    </LampContainer>
  );
};

export default LampShow;
