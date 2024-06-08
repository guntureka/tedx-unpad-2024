"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef, useEffect } from "react";
import Book from "../ui/book";

export default function MultiParallax() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll();

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
    <>
      <div ref={ref}>
        <div className="hidden lg:relative lg:grid lg:h-screen lg:w-full lg:place-items-center lg:overflow-hidden">
          <motion.div
            className="z-50 h-40 w-72 cursor-pointer rounded-full bg-white p-4 shadow-lg"
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
          </motion.div>
          <motion.img
            src="./asset/waiter.svg"
            alt=""
            className="absolute z-40 object-cover"
            initial={{ scale: 0 }}
            animate={{ scale: 0.27 }}
            style={{
              y: 0,
              scale: 0.27,
              translateX: waiterTranslateX,
              translateY: 200,
            }}
          />
          <motion.img
            src="./asset/building.svg"
            alt=""
            className="absolute inset-0 z-20 object-cover"
            style={{
              translateX: 340,
            }}
          />
          <motion.img
            src="/asset/background.svg"
            alt=""
            className="absolute inset-0 z-0 object-cover"
            style={{
              y: 0,
              scale: 0.8,
              translateX: 190,
              translateY: -150,
            }}
          />
          <motion.img
            src="./asset/people1.svg"
            alt=""
            className="absolute z-10 object-cover"
            style={{
              y: 0,
              scale: 0.2,
              translateX: people1TranslateX,
            }}
            animate={{
              scale: 0.6,
            }}
          />
          <motion.img
            src="./asset/people2.svg"
            alt=""
            className="absolute z-10 object-cover"
            style={{
              y: 0,
              scale: 0.2,
              translateX: people2TranslateX,
            }}
            animate={{
              scale: 0.6,
            }}
          />
          <motion.img
            src="./asset/bush.svg"
            alt=""
            className="absolute z-30 object-cover"
            style={{
              y: 0,
              translateY: 500,
              scale: 1.1,
              bottom: 0,
            }}
          />
        </div>
        <div className="hidden overflow-hidden bg-black-abs pb-24 pt-[50px] sm:block">
          <motion.img
            src="./asset/podium.svg"
            alt=""
            className="absolute z-50 overflow-visible object-cover"
            style={{
              y: 0,
              scale: 0.2,
              translateX: podiumTranslateX,
              translateY: -750,
            }}
            initial={{ x: 0 }}
            animate={{ scale: 0.3 }}
          />
          <h1 className="text-4xl text-white"></h1>

          <motion.img
            src="./asset/Nampan.svg"
            alt=""
            className="absolute z-0 overflow-hidden object-cover"
            style={{
              y: 0,
              scale: 0.7,
              translateY: -120,
            }}
          />

          <motion.div
            className="z-30 -mx-8 mb-20 overflow-hidden px-10 py-36"
            style={{
              translateX: bookTranslateX,
            }}
          >
            <Book />
          </motion.div>
        </div>
      </div>

      <img src="./web-final.png" alt="" className="block md:hidden" />
      <motion.div
        className="z-10 block h-16 w-36 cursor-pointer rounded-full bg-white shadow-lg md:hidden"
        initial={{ scale: 0 }}
        animate={{ rotate: 360, scale: 1 }}
        style={{
          x: 10,
          y: -200,
        }}
      >
        <h1 className="text-wrap px-3 py-4 text-center font-inter text-xs">
          Open via desktop for a better experience!
        </h1>
      </motion.div>

      <motion.div
        className="z-10 mt-4 block h-16 w-36 cursor-pointer rounded-full bg-white shadow-lg md:hidden"
        initial={{ scale: 0 }}
        animate={{ rotate: -360, scale: 1 }}
        style={{
          x: 190,
          y: -400,
        }}
      >
        <h1 className="text-wrap px-3 py-2 text-center font-inter text-xs">
          Remember to rescan the QR code after login & register!
        </h1>
      </motion.div>
    </>
  );
}
