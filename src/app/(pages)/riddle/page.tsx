"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { FlipWords } from "@/components/ui/flip-words";
import { motion } from "framer-motion";
import { LampContainer } from "@/components/ui/lamp";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useNavbarType } from "../../../components/navbarcontext";
import { useEffect } from "react";


const RiddlePage = () => {
  const { setNavbarType } = useNavbarType();

  useEffect(() => {
    setNavbarType("blank");
  }, []);

  const words = ["Hustler", "Starter", "Seekers", "Explorers", "Odyssey"];
  const [answer, setAnswer] = useState("");
  const [feedback, setFeedback] = useState("");
  const router = useRouter();
  const correctAnswer = "Indonesia Emas 2045"; // Replace with the actual correct answer

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (answer.toLowerCase() === correctAnswer.toLowerCase()) {
      router.push("/riddleCorrect");
    } else {
      setFeedback("Incorrect answer. Please try again.");
    }
  };

  return (
    <>
      <div className="top-0 mx-0 px-0">
        <LampContainer className="bg-[#1F1F1F]">
          <motion.h1
            initial={{ opacity: 0.5, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.3,
              duration: 0.8,
              ease: "easeInOut",
            }}
            className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
          >
            Welcome aboard our Wisdom
            <FlipWords className="text-white" words={words} duration={3000} />
          </motion.h1>
        </LampContainer>

        <div className="container mt-11">
          <Card className="mb-4 mt-4 border-gray-600 bg-[#F5F5F5] sm:mx-5 sm:mb-6 sm:mt-6 md:mb-8 md:mt-8 lg:mx-64 lg:mb-10 lg:mt-10">
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
          <Card className="mb-4 mt-4 border-gray-600 bg-[#F5F5F5] sm:mx-5 sm:mb-6 sm:mt-6 md:mb-8 md:mt-8 lg:mx-64 lg:mb-10 lg:mt-10">
            <CardContent>
              <CardHeader className="text-center font-ebgaramond text-4xl font-semibold sm:text-5xl md:text-6xl lg:text-7xl">
                First Riddle
              </CardHeader>
              <CardDescription className="text-black text-center font-inter text-lg sm:text-xl md:text-2xl lg:text-3xl">
                Can you guess this puzzle?
              </CardDescription>
            </CardContent>
          </Card>
          <Card className="mb-4 mt-4 border-gray-600 bg-[#F5F5F5] sm:mx-5 sm:mb-6 sm:mt-6 md:mb-8 md:mt-8 lg:mx-64 lg:mb-10 lg:mt-10">
            <CardContent>
              <img
                src="./RiddleFix.jpg"
                alt="Riddle"
                className="py-10 sm:py-12 md:py-14 lg:py-16"
              />
            </CardContent>
          </Card>
          <Card className="mt-4 border-gray-600 bg-[#F5F5F5] sm:mx-5 sm:mt-6 md:mt-8 lg:mx-64 lg:mt-10">
            <CardContent>
              <CardHeader className="font-garamound text-center font-ebgaramond text-4xl font-semibold sm:text-5xl md:text-6xl lg:text-7xl">
                So what is it?
              </CardHeader>

              <form onSubmit={handleSubmit}>
                <Input
                  type="text"
                  id="answerRiddle"
                  placeholder="Enter your answer here"
                  value={answer}
                  onChange={(e) => setAnswer(e.target.value)}
                  className="w-full rounded border border-gray-300 p-2 sm:text-lg md:text-xl lg:text-2xl"
                  required
                />
                {feedback && <p className="mt-4 text-red-500">{feedback}</p>}
                <button
                  type="submit"
                  className="mt-4 rounded bg-red-500 p-2 font-inter text-white sm:p-3 md:p-4 lg:p-5"
                >
                  Submit
                </button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
};

export default RiddlePage;
