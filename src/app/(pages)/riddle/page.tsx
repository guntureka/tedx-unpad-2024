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
      <div className="px-0 mx-0 top-0">
        <LampContainer className="bg-[#1F1F1F]">
          <motion.h1
            initial={{ opacity: 0.5, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.3,
              duration: 0.8,
              ease: "easeInOut",
            }}
            className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500  bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
          >
            Welcome aboard our Wisdom
            <FlipWords className="text-white" words={words} duration={3000} />
          </motion.h1>
        </LampContainer>

        <div className="container mt-11">
          <Card className="border-gray-600 sm:mx-5 lg:mx-64 bg-[#F5F5F5] mt-4 mb-4 sm:mt-6 sm:mb-6 md:mt-8 md:mb-8 lg:mt-10 lg:mb-10">
            <CardContent>
              <CardDescription className="text-lg text-center text-black font-inter py-5 sm:text-xl md:text-2xl lg:text-3xl">
                Congratulations on discovering the secret riddle website! Your
                curiosity and problem-solving skills have led you to this hidden
                gem. Prepare yourself for a journey filled with challenging
                riddles and exciting puzzles. May your mind stay sharp, and your
                determination unwavering. Happy riddle-solving!
              </CardDescription>
            </CardContent>
          </Card>
          <Card className="border-gray-600 sm:mx-5 lg:mx-64 bg-[#F5F5F5] mt-4 mb-4 sm:mt-6 sm:mb-6 md:mt-8 md:mb-8 lg:mt-10 lg:mb-10">
            <CardContent>
              <CardHeader className="text-4xl font-ebgaramond font-semibold text-center sm:text-5xl md:text-6xl lg:text-7xl">
                First Riddle
              </CardHeader>
              <CardDescription className="text-lg font-inter text-black text-center sm:text-xl md:text-2xl lg:text-3xl">
                Can you guess this puzzle?
              </CardDescription>
            </CardContent>
          </Card>
          <Card className="border-gray-600 sm:mx-5 lg:mx-64 bg-[#F5F5F5] mt-4 mb-4 sm:mt-6 sm:mb-6 md:mt-8 md:mb-8 lg:mt-10 lg:mb-10">
            <CardContent>
              <img
                src="./RiddleFix.jpg"
                alt="Riddle"
                className="py-10 sm:py-12 md:py-14 lg:py-16"
              />
            </CardContent>
          </Card>
          <Card className="border-gray-600 sm:mx-5 lg:mx-64 bg-[#F5F5F5] mt-4 sm:mt-6 md:mt-8 lg:mt-10">
            <CardContent>
              <CardHeader className="text-4xl font-garamound font-semibold text-center sm:text-5xl md:text-6xl font-ebgaramond lg:text-7xl">
                So what is it?
              </CardHeader>

              <form onSubmit={handleSubmit}>
                <Input
                  type="text"
                  id="answerRiddle"
                  placeholder="Enter your answer here"
                  value={answer}
                  onChange={(e) => setAnswer(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded sm:text-lg md:text-xl lg:text-2xl"
                  required
                />
                {feedback && <p className="mt-4 text-red-500">{feedback}</p>}
                <button
                  type="submit"
                  className="mt-4 p-2 bg-red-500 text-white rounded font-inter sm:p-3 md:p-4 lg:p-5"
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
