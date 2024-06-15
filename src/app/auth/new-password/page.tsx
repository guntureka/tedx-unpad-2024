import NewPasswordForm from "@/components/auth/new-password-form";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Metadata } from "next";
import { redirect } from "next/navigation";
import React from "react";

export const metadata: Metadata = {
  title: "New password",
};

interface ForgotPasswordProps {
  searchParams?: { [key: string]: string | undefined };
}

const ForgotPassword = ({ searchParams }: ForgotPasswordProps) => {
  const { token } = searchParams ?? { token: "" };

  if (!token) {
    return redirect("/");
  }

  return (
    <main className="flex min-h-screen w-full flex-col items-center justify-center px-10 py-40 lg:px-20">
      <div className="z-10 flex w-full max-w-2xl flex-col space-y-10 rounded-lg bg-[#333333] p-10 outline outline-1 outline-white">
        <h1 className="text-center text-3xl font-bold">New Password</h1>
        <NewPasswordForm token={token} />
      </div>
    </main>
  );
};

export default ForgotPassword;
