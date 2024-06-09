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
      <div className="flex min-h-screen w-full flex-col items-center justify-center px-10 py-40 lg:px-20">
        <div className="mx-auto flex max-w-3xl flex-col items-center justify-center space-y-14">
          <Card className="border-gray-600 bg-[#F5F5F5]">
            <CardContent>
              <CardDescription className="font-inter py-5 text-center text-lg text-black sm:text-xl md:text-2xl lg:text-3xl">
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
