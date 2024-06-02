"use client";

import { useState, useTransition } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { NewPasswordSchema } from "@/schemas";
import { FormError } from "@/components/form-error";
import { FormSuccess } from "@/components/form-success";
import { newPassword } from "@/actions/new-password";
import React, { useEffect } from "react";
import LabeledInput2 from "@/components/ui/labeledinput2";
import { useForm } from "react-hook-form";

interface PasswordInputs {
  email: string;
  password: string;
  newPassword: string;
  verifyNewPassword: string;
}

export const NewPasswordForm = () => {
  const searchParams = useSearchParams();
  const token = searchParams.get("token");
  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");
  const [isPending, startTransition] = useTransition();
  const router = useRouter();

  const {
    register: registerPassword,
    handleSubmit: handleSubmitPassword,
    formState: { errors: errorsPassword },
  } = useForm<z.infer<typeof NewPasswordSchema>>({
    resolver: zodResolver(NewPasswordSchema),
    defaultValues: {
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit = (values: z.infer<typeof NewPasswordSchema>) => {
    setError("");
    setSuccess("");

    startTransition(() => {
      newPassword(values, token).then((data) => {
        setError(data?.error);
        setSuccess(data?.success);
        if (data?.success) {
          setTimeout(() => {
            router.push("/login");
          }, 2000);
        }
      });
    });
  };

  return (
    <div className="w-screen px-12 sm:px-20 md:px-28 lg:px-36 xl:px-[170px]">
      <div className="my-[30px] flex flex-col justify-center gap-[20px] rounded-[10px] border-[2px] border-grey-light bg-grey-dark px-[40px] py-[40px] lg:px-[320px] lg:py-[60px]">
        <h2 className="font-inter-700 text-center text-[24px] text-white">
          Reset Password
        </h2>
        <FormError message={error} />
        <FormSuccess message={success} />
        <form onSubmit={handleSubmitPassword(onSubmit)}>
          <div className="flex flex-col gap-y-[20px]">
            <LabeledInput2
              label="New Password"
              id="password"
              placeholder="Enter New Password"
              register={registerPassword("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters long",
                },
              })}
              error={errorsPassword.password}
            />
            <LabeledInput2
              label="Verify New Password"
              id="password"
              placeholder="Verify New Password"
              register={registerPassword("confirmPassword", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters long",
                },
              })}
              error={errorsPassword.confirmPassword}
            />
          </div>
          <div className="mt-[40px] flex w-full justify-center">
            <button
              type="submit"
              disabled={isPending}
              className={`font-inter-700 rounded-[5px] bg-[#0A51F1] px-[50px] py-[15px] text-[16px] text-white duration-150 hover:bg-[#517de5] ${
                isPending ? "cursor-not-allowed opacity-50" : ""
              }`}
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
