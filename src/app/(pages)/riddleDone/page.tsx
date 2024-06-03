"use client";
import React from "react";
import { Card, CardContent, CardDescription } from "@/components/ui/card";
import { useNavbarType } from "../../../components/navbarcontext";
import { useEffect } from "react";
export default function RiddleDone() {
  const { setNavbarType } = useNavbarType();
  useEffect(() => {
    setNavbarType("blank");
  }, []);

  return (
    <>
      <div className="container mx-auto mt-10">
        <Card className="sm:mt-30 border-gray-600 bg-white sm:mx-5 sm:mb-24 lg:mx-60 lg:mb-64">
          <CardContent>
            <CardDescription className="text-black py-5 text-center font-inter text-lg">
              Thank you for participating! Your enthusiasm and effort are
              greatly appreciated. We hope you enjoy the challenges and continue
              to have fun while solving them.
            </CardDescription>
          </CardContent>
        </Card>
        <button className="mx-auto mb-10 mt-4 rounded bg-red-500 px-2 py-1 font-bold text-white">
          <div className="font-inter font-bold text-white">
            <a href="/">Go to homepage </a>
          </div>
        </button>
      </div>
    </>
  );
}
