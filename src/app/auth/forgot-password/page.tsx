import ForgotPasswordForm from "@/components/auth/forgot-password-form";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Forgot password",
};

const ForgotPassword = () => {
  return (
    <main className="flex min-h-screen w-full flex-col items-center justify-center px-10 py-40 lg:px-20">
      <div className="z-10 flex w-full max-w-2xl flex-col space-y-10 rounded-lg bg-[#333333] p-10 outline outline-1 outline-white">
        <h1 className="text-center text-3xl font-bold">Forgot Password</h1>
        <ForgotPasswordForm />
      </div>
    </main>
  );
};

export default ForgotPassword;
