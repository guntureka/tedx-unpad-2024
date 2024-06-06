import { Metadata } from "next";
import React from "react";
import Image from "next/legacy/image";
import RegisterForm from "@/components/auth/register-form";

export const metadata: Metadata = {
  title: "Register",
};

const page = () => {
  return (
    <main className="flex flex-col w-full h-full px-10 lg:px-20">
      <div className="grid grid-cols-1 w-full h-full md:grid-cols-2 md:gap-14">
        <div className="w-full md:relative md:flex hidden">
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
