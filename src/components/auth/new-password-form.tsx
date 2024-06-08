"use client";

import { newPasswordSchema } from "@/lib/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import React, { useState, useTransition } from "react";
import { Controller, useForm } from "react-hook-form";
import { z } from "zod";
import { FormError } from "../ui/error-form";
import { FormSuccess } from "../ui/success-form";
import { forgotPassword, newPassword } from "@/actions/auth";
import Input from "@/components/ui/input";
import FormField from "../ui/form-field";
import { useRouter, useSearchParams } from "next/navigation";

const NewPasswordForm = ({ token }: { token: string }) => {
  const [success, setSuccess] = useState<string | undefined>("");
  const [error, setError] = useState<string | undefined>("");
  const [isPending, startTransition] = useTransition();

  const router = useRouter();

  const {
    handleSubmit,
    formState: { errors },
    reset,
    control,
    register,
  } = useForm<z.infer<typeof newPasswordSchema>>({
    resolver: zodResolver(newPasswordSchema),
    defaultValues: {
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit = (values: z.infer<typeof newPasswordSchema>) => {
    setError("");
    setSuccess("");
    startTransition(() => {
      newPassword(token, values)
        .then((data) => {
          if (data && data.success) {
            setSuccess(data.success);
            router.push("/auth/login");
          } else {
            setError(data.error);
            reset();
          }
        })
        .catch((err) => {
          setError(err);
        });
      console.log(values);
    });
  };

  return (
    <div className="space-y-4">
      <FormError message={error} />
      <FormSuccess message={success} />
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          id="password"
          label="New password"
          register={register("password")}
          error={errors.password}
          isPassword
        />
        <FormField
          id="confirmPassword"
          label="New password confirmation"
          register={register("confirmPassword")}
          error={errors.confirmPassword}
          isPassword
        />
        <div className="flex w-full justify-center items-center">
          <button
            type="submit"
            disabled={isPending}
            className={`w-full rounded-lg bg-red-600 text-white duration-150 hover:bg-red-700 py-4 ${
              isPending ? "cursor-progress opacity-50" : ""
            }`}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default NewPasswordForm;
