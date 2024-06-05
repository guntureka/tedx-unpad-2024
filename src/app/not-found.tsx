"use client";

import React from "react";
import dynamic from "next/dynamic";

const AnimationNotFound = dynamic(
  () => import("@/components/not-found/lottie-animation")
);

const NotFound = () => {
  return (
    <main className="flex flex-col justify-center w-full h-screen md:p-20 p-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 ">
        <div className="flex flex-col space-y-10 justify-center ">
          <h1 className="md:text-6xl text-2xl font-extrabold">
            Sorry, Page Not Found
          </h1>
          <p className="text-sm">
            Looks like you&apos;ve ventured into the abyss of cyberspace and
            stumbled upon a 404 - Page Not Found. Don&apos;t fret, it happens to
            the best of us! Let&apos;s navigate back to familiar territory.
          </p>
          <button className="bg-red-600 py-2 text-white rounded-lg w-52">
            Back to Home
          </button>
        </div>
        <div className="flex flex-col justify-center items-center">
          <div className="p-20 bg-red-600 rounded-lg">
            <AnimationNotFound />
          </div>
        </div>
      </div>
    </main>
  );
};

export default NotFound;
