"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef, useEffect } from "react";
import Book from "./ui/book";
import { useNavbarType } from "./navbarcontext";

export default function MultiParallax() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll();
  const { setNavbarType } = useNavbarType();

  useEffect(() => {
    setNavbarType("blank");
  }, []);

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
        <div className="lg:w-full lg:h-screen lg:overflow-hidden lg:relative lg:grid lg:place-items-center hidden">
          <motion.div
            className="z-50 p-4 cursor-pointer bg-white rounded-full shadow-lg w-72 h-40"
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
            <h1 className="py-8 text-2xl text-center font-inter font-semibold ">
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
        <div className="pt-[50px] overflow-hidden bg-black-abs pb-24 hidden sm:block">
          <motion.img
            src="./asset/podium.svg"
            alt=""
            className="absolute z-50 object-cover overflow-visible"
            style={{
              y: 0,
              scale: 0.2,
              translateX: podiumTranslateX,
              translateY: -750,
            }}
            initial={{ x: 0 }}
            animate={{ scale: 0.3 }}
          />
          <h1 className="text-white text-4xl"></h1>

          <motion.img
            src="./asset/Nampan.svg"
            alt=""
            className="absolute z-0 object-cover overflow-hidden"
            style={{
              y: 0,
              scale: 0.7,
              translateY: -120,
            }}
          />

          <motion.div
            className="px-10 py-36 mb-20 -mx-8 z-30 overflow-hidden"
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
        className="z-10 cursor-pointer bg-white rounded-full shadow-lg w-36 h-24 block md:hidden"
        initial={{ scale: 0 }}
        animate={{ rotate: 360, scale: 1 }}
        style={{
          x: 190,
          y: -400,
        }}
      >
        <h1 className="py-4 px-3 text-wrap text-sm text-center font-inter">
          Open via desktop for a better experience!
        </h1>
      </motion.div>
    </>
  );
}
