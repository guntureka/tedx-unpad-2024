import { Metadata } from "next";
import React from "react";
import Image from "next/legacy/image";
import RegisterForm from "@/components/auth/register-form";

export const metadata: Metadata = {
  title: "Register",
};

const page = () => {
  return (
    <main className="flex h-full w-full flex-col px-10 lg:px-20">
      <div className="grid h-full w-full grid-cols-1 md:grid-cols-2 md:gap-14">
        <div className="hidden w-full md:relative md:flex">
          <Image
            src={"/loginbg.png"}
            alt="login background"
            objectFit="cover"
            layout="fill"
            priority
            className="duration-300 hover:scale-110"
          />
        </div>
        <RegisterForm />
      </div>
    </main>
  );
};

export default page;
