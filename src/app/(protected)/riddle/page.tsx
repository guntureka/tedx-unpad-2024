import LampShow from "@/components/riddle/lamp-show";
import RiddleForm from "@/components/riddle/riddle-form";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from "@/components/ui/card";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import React from "react";

const RiddlePage = () => {
  return (
    <main className="">
      <div className="">
        <LampShow />
      </div>
      <div className="flex min-h-screen w-full flex-col px-10 py-20 lg:px-20">
        <div className="mx-auto flex max-w-3xl flex-col space-y-14">
          <Card className="border-gray-600 bg-[#F5F5F5]">
            <CardContent>
              <CardDescription className="font-inter py-5 text-center text-lg text-black sm:text-xl md:text-2xl lg:text-3xl">
                Congratulations on discovering the secret riddle website! Your
                curiosity and problem-solving skills have led you to this hidden
                gem. Prepare yourself for a journey filled with challenging
                riddles and exciting puzzles. May your mind stay sharp, and your
                determination unwavering. Happy riddle-solving!
              </CardDescription>
            </CardContent>
          </Card>
          <Card className="border-gray-600 bg-[#F5F5F5]">
            <CardContent>
              <CardHeader className="font-ebgaramond text-center text-4xl font-semibold text-black sm:text-5xl md:text-6xl lg:text-7xl">
                First Riddle
              </CardHeader>
              <CardDescription className="font-inter text-center text-lg text-black sm:text-xl md:text-2xl lg:text-3xl">
                Can you guess this puzzle?
              </CardDescription>
            </CardContent>
          </Card>
          <Card className="border-gray-600 bg-[#F5F5F5]">
            <CardContent>
              <Image
                src="/assets/RiddleFix.jpg"
                alt="Riddle"
                width={400}
                height={400}
                className="w-full p-5"
              />
            </CardContent>
          </Card>
          <Card className="border-gray-600 bg-[#F5F5F5]">
            <CardContent>
              <CardHeader className="font-garamound font-ebgaramond text-center text-4xl font-semibold text-black sm:text-5xl md:text-6xl lg:text-7xl">
                So what is it?
              </CardHeader>
              <RiddleForm variants="riddle" />
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  );
};

export default RiddlePage;
