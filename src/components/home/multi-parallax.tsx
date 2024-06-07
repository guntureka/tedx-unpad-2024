"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef, useEffect } from "react";
import Book from "@/components/ui/book";

const MultiParallax = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll();
  const imagePath = "./assets/parallax";

  const waiterTranslateX = useTransform(scrollYProgress, [0, 1], [-500, -1000]);
  const bubbleTranslateX = useTransform(
    scrollYProgress,
    [0, 0.5],
    [-300, -1000]
  );
  const podiumTranslateY = useTransform(scrollYProgress, [0, 1], [-1200, 400]);
  const podiumTranslateX = useTransform(scrollYProgress, [0, 1], [-300, 2500]);
  const podiumScale = useTransform(scrollYProgress, [0, 1], [0.3, 0.7]);
  const bookTranslateX = useTransform(scrollYProgress, [0, 0.5], [1000, 30]);
  const people1TranslateX = useTransform(scrollYProgress, [0, 1], [300, 1000]);
  const people2TranslateX = useTransform(scrollYProgress, [0, 1], [200, -1000]);
  return (
    <div ref={ref}>
      <div className="relative w-full min-h-screen flex flex-col">
        <div className="relative">
          <motion.img
            src={`${imagePath}/waiter.svg`}
            alt=""
            className=" z-40 object-cover"
            initial={{ scale: 0 }}
            // animate={{ scale: 0.27 }}
            // style={{
            //   y: 0,
            //   scale: 0.27,
            //   translateX: waiterTranslateX,
            //   translateY: 200,
            // }}
          />
        </div>
        {/* <motion.div
          className=""
          initial={{ scale: 0 }}
          animate={{ rotate: 360, scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
          }}
          style={{
            x: bubbleTranslateX,
            y: -200,
          }}
        >
          <h1 className="py-8 text-center font-inter text-2xl font-semibold">
            Fancy to taste the flavors of wisdom?
          </h1>
        </motion.div> */}
      </div>
    </div>
  );
};

export default MultiParallax;
