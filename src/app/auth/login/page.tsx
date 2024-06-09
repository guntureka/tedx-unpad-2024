import React from "react";
import LoginForm from "@/components/auth/login-form";
import Image from "next/legacy/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Login",
};

const LoginPage = () => {
  return (
    <main className="flex flex-col w-full h-screen px-10 lg:px-20">
      <div className="grid grid-cols-1 w-full h-full md:grid-cols-2 md:gap-14 overflow-hidden">
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
        <LoginForm />
      </div>
    </main>
  );
};

export default LoginPage;
