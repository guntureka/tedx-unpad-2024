"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef, useEffect } from "react";
import Book from "./ui/book";
import { useNavbarType } from "./navbarcontext";
import Image from "next/image";
import BookMobile from "./ui/BookMobile";
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
    [-300, -1000],
  );
  const podiumTranslateY = useTransform(scrollYProgress, [0, 1], [-1200, 400]);
  const podiumTranslateX = useTransform(scrollYProgress, [0, 0.5], [50, 1500]);
  const podiumScale = useTransform(scrollYProgress, [0, 1], [0.3, 0.7]);
  const bookTranslateX = useTransform(scrollYProgress, [0, 0.5], [1000, 30]);
  const people1TranslateX = useTransform(scrollYProgress, [0, 1], [300, 1000]);
  const people2TranslateX = useTransform(scrollYProgress, [0, 1], [200, -1000]);

  return (
    <>
      <section className="block lg:hidden bg-black-bg">
        <Image
          src="/web-final.png"
          alt=""
          layout="fill"
          objectFit="cover"
          className=""
        />
        <motion.div
          className="z-40 h-20 w-40 cursor-pointer rounded-full bg-white p-4 shadow-lg"
          initial={{ scale: 0, y: -100, x: 200 }}
          animate={{ rotate: 360, scale: 1, y: 50 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
          }}
        >
          <h1 className="text-sm  text-center font-inter font-semibold">
            Open via dekstop for full experience!
          </h1>
        </motion.div>
      </section>

      <div ref={ref}>
        <div className="hidden overflow-hidden sm:relative sm:grid sm:h-screen sm:w-full sm:place-items-center">
          <motion.div
            className="z-50 hidden h-40 w-72 cursor-pointer rounded-full bg-white p-4 shadow-lg lg:block"
            initial={{ scale: 0 }}
            animate={{ rotate: 360, scale: 1, y: -200 }}
            variants={{}}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 20,
            }}
            style={{
              x: bubbleTranslateX,
            }}
          >
            <h1 className="py-8 text-center font-inter text-2xl font-semibold">
              Fancy to taste the flavors of wisdom?
            </h1>
          </motion.div>
          <motion.img
            src="./asset/waiter.svg"
            alt=""
            className="absolute z-40 hidden object-cover lg:block"
            initial={{ scale: 0, y: 200, x: 0 }}
            animate={{ scale: 0.27 }}
            style={{
              translateX: waiterTranslateX,
            }}
          />
          <motion.img
            src="./asset/building.svg"
            alt=""
            className="absolute inset-0 z-20 hidden object-cover lg:block"
            initial={{ x: 340 }}
          />
          <motion.img
            src="/asset/background.svg"
            alt=""
            className="absolute inset-0 z-0 hidden object-cover lg:block"
            initial={{
              x: 0,
              y: 0,
              scale: 0.8,
              translateX: 190,
              translateY: -150,
            }}
          />
          <motion.img
            src="./asset/people1.svg"
            alt=""
            className="absolute z-10 hidden object-cover lg:block"
            initial={{ scale: 0.4, x: 0, y: 0 }}
            style={{
              translateX: people1TranslateX,
            }}
            animate={{
              scale: 0.6,
            }}
          />
          <motion.img
            src="./asset/people2.svg"
            alt=""
            className="absolute z-10 hidden object-cover lg:block"
            initial={{ scale: 0.4, x: 0, y: 0 }}
            style={{
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
          <motion.img
            src="./asset/podium.svg"
            alt=""
            className="absolute z-50 hidden overflow-visible object-cover lg:block"
            style={{
              y: 0,
              scale: 0.2,
              translateX: podiumTranslateX,
            }}
            initial={{ x: -200, y: 150 }}
            animate={{ scale: 0.3 }}
          />
        </div>
        <div className="hidden overflow-hidden bg-black-abs pb-24 pt-[50px] sm:block">
          <motion.img
            src="./asset/Nampan.svg"
            alt=""
            className="absolute z-0 hidden overflow-hidden object-cover lg:block"
            style={{
              y: 0,
              scale: 0.7,
              translateY: -120,
            }}
          />

          <motion.div
            className="z-30 -mx-8 mb-20 hidden overflow-hidden px-10 py-36 lg:block"
            style={{
              translateX: bookTranslateX,
            }}
          >
            <Book />
          </motion.div>
        </div>
      </div>
    </>
  );
}
