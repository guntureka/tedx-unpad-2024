import React from "react";
import { Metadata } from "next";
import LoginForm from "@/components/auth/login-form";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Login",
};

const LoginPage = () => {
  return (
    <main className="flex flex-col w-full h-screen px-10 lg:px-20">
      <div className="grid grid-cols-1 w-full h-full md:grid-cols-2 gap-14">
        <div className="w-full relative md:flex hidden">
          <Image
            src={"/loginbg.png"}
            alt="login background"
            objectFit="cover"
            fill
            className="duration-300 hover:scale-110"
          />
        </div>
        <LoginForm />
      </div>
    </main>
  );
};

export default LoginPage;
