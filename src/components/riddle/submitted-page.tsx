import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from "@/components/ui/card";
import { useRouter } from "next/navigation";
import ButtonHomepage from "./button-homepage";

const SubmittedPage = () => {
  return (
    <main>
      <div className="flex flex-col w-full min-h-screen justify-center items-center px-10 lg:px-20 py-40">
        <div className="flex flex-col space-y-14 max-w-3xl mx-auto justify-center items-center">
          <Card className=" border-gray-600 bg-[#F5F5F5] ">
            <CardContent>
              <CardDescription className="text-black py-5 text-center font-inter text-lg sm:text-xl md:text-2xl lg:text-3xl">
                Thank you for participating! Your enthusiasm and effort are
                greatly appreciated. We hope you enjoy the challenges and
                continue to have fun while solving them.
              </CardDescription>
            </CardContent>
          </Card>
          <ButtonHomepage />
        </div>
      </div>
    </main>
  );
};

export default SubmittedPage;
