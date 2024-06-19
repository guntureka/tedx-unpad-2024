import React from "react";
import dynamic from "next/dynamic";

const AnimationNotFound = dynamic(
  () => import("@/components/not-found/lottie-animation"),
);

const NotFound = () => {
  return (
    <main className="flex h-screen w-full flex-col justify-center p-10 lg:p-20">
      <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
        <div className="flex flex-col justify-center space-y-10">
          <h1 className="text-2xl font-extrabold md:text-6xl">
            Sorry, Page Not Found
          </h1>
          <p className="text-sm">
            Looks like you&apos;ve ventured into the abyss of cyberspace and
            stumbled upon a 404 - Page Not Found. Don&apos;t fret, it happens to
            the best of us! Let&apos;s navigate back to familiar territory.
          </p>
          <button className="w-52 rounded-lg bg-red-600 py-2 text-white">
            Back to Home
          </button>
        </div>
        <div className="flex flex-col items-center justify-center">
          <div className="rounded-lg bg-red-600 p-20">
            <AnimationNotFound />
          </div>
        </div>
      </div>
    </main>
  );
};

export default NotFound;
