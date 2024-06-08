import ForgotPasswordForm from "@/components/auth/forgot-password-form";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Reset password",
};

const ForgotPassword = () => {
  return (
    <main className="flex flex-col w-full justify-center items-center min-h-screen px-10 lg:px-20 py-40">
      <div className="outline max-w-2xl outline-white outline-1 z-10 flex flex-col rounded-lg p-10 bg-[#333333] w-full space-y-10">
        <h1 className="text-3xl font-bold text-center">Forgot Password</h1>
        <ForgotPasswordForm />
      </div>
    </main>
  );
};

export default ForgotPassword;
