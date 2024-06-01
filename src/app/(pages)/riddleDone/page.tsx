import React from "react";
import { Card, CardContent, CardDescription } from "@/components/ui/card";
export default function RiddleDone() {
  return (
    <>
      <div className="container mx-auto mt-10">
        <Card className="border-gray-600 lg:mb-64 sm:mt-30 sm:mb-24 bg-white sm:mx-5 lg:mx-60">
          <CardContent>
            <CardDescription className="text-lg text-center py-5 text-black font-inter">
              Thank you for participating! Your enthusiasm and effort are
              greatly appreciated. We hope you enjoy the challenges and continue
              to have fun while solving them.
            </CardDescription>
          </CardContent>
        </Card>
        <button className="mx-auto mt-4 bg-red-500 text-white font-bold py-1 px-2 mb-10 rounded">
          <div className="text-white font-inter font-bold  ">
            <a href="/riddle">Go to homepage </a>
          </div>
        </button>
      </div>
    </>
  );
}
