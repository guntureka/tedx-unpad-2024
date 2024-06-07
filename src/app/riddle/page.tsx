import LampShow from "@/components/riddle/lamp-show";
import RiddleForm from "@/components/riddle/riddle-form";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from "@/components/ui/card";
import Image from "next/image";
import React from "react";
const RiddlePage = () => {
  return (
    <main className="">
      <div className="">
        <LampShow />
      </div>
      <div className="flex flex-col w-full min-h-screen px-10 lg:px-20 py-20">
        <div className="flex flex-col space-y-14 max-w-3xl mx-auto">
          <Card className=" border-gray-600 bg-[#F5F5F5] ">
            <CardContent>
              <CardDescription className="text-black py-5 text-center font-inter text-lg sm:text-xl md:text-2xl lg:text-3xl">
                Congratulations on discovering the secret riddle website! Your
                curiosity and problem-solving skills have led you to this hidden
                gem. Prepare yourself for a journey filled with challenging
                riddles and exciting puzzles. May your mind stay sharp, and your
                determination unwavering. Happy riddle-solving!
              </CardDescription>
            </CardContent>
          </Card>
          <Card className=" border-gray-600 bg-[#F5F5F5] ">
            <CardContent>
              <CardHeader className="text-center text-black font-ebgaramond text-4xl font-semibold sm:text-5xl md:text-6xl lg:text-7xl">
                First Riddle
              </CardHeader>
              <CardDescription className="text-black text-center font-inter text-lg sm:text-xl md:text-2xl lg:text-3xl">
                Can you guess this puzzle?
              </CardDescription>
            </CardContent>
          </Card>
          <Card className=" border-gray-600 bg-[#F5F5F5] ">
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
          <Card className=" border-gray-600 bg-[#F5F5F5]">
            <CardContent>
              <CardHeader className="text-black font-garamound text-center font-ebgaramond text-4xl font-semibold sm:text-5xl md:text-6xl lg:text-7xl">
                So what is it?
              </CardHeader>
              <RiddleForm />
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  );
};

export default RiddlePage;
