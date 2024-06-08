"use client";

import { forgotPasswordSchema } from "@/lib/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import React, { useState, useTransition } from "react";
import { Controller, useForm } from "react-hook-form";
import { z } from "zod";
import { FormError } from "../ui/error-form";
import { FormSuccess } from "../ui/success-form";
import { forgotPassword } from "@/actions/auth";

const ForgotPasswordForm = () => {
  const [success, setSuccess] = useState<string | undefined>("");
  const [error, setError] = useState<string | undefined>("");
  const [isPending, startTransition] = useTransition();

  const {
    handleSubmit,
    formState: { errors },
    reset,
    control,
    register,
  } = useForm<z.infer<typeof forgotPasswordSchema>>({
    resolver: zodResolver(forgotPasswordSchema),
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = (values: z.infer<typeof forgotPasswordSchema>) => {
    setError("");
    setSuccess("");
    startTransition(() => {
      forgotPassword(values)
        .then((data) => {
          if (data && data.success) {
            setSuccess(data.success);
          } else {
            setError(data.error);
          }
        })
        .catch((err) => {
          setError(err);
        });
    });
  };

  return (
    <div className="space-y-4">
      <FormError message={error} />
      <FormSuccess message={success} />
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <Controller
          name="email"
          control={control}
          render={({ field }) => (
            <div className="space-y-4">
              <label htmlFor="email">Email</label>
              <input
                type="text"
                id="email"
                placeholder="Enter your email here"
                {...field}
                className="w-full rounded border bg-white border-gray-300 py-4 px-2  text-black bg-transparent"
              />
              {errors.email && (
                <p className="text-sm text-red-500 py-2 ">
                  {errors.email.message}
                </p>
              )}
            </div>
          )}
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

export default ForgotPasswordForm;
