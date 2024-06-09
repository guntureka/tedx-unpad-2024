"use client";

import { riddleSchema } from "@/lib/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import React, { useState, useTransition } from "react";
import { Controller, useForm } from "react-hook-form";
import { z } from "zod";
import Input from "../ui/input";
import { FormError } from "../ui/error-form";
import { useRouter } from "next/navigation";
import { FormSuccess } from "../ui/success-form";
import { createRiddleSubmission } from "@/actions/riddle";
import { auth } from "@/auth";
import { useSession } from "next-auth/react";

interface RiddleFormProps {
  variants: "riddle" | "video";
}

const CORRECT_ANSWER = "indonesia emas 2045";

const RiddleForm = ({ variants }: RiddleFormProps) => {
  const [success, setSuccess] = useState<string | undefined>("");
  const [error, setError] = useState<string | undefined>("");
  const [isPending, startTransition] = useTransition();

  const router = useRouter();
  const session = useSession();
  const {
    handleSubmit,
    formState: { errors },
    reset,
    control,
    register,
  } = useForm<z.infer<typeof riddleSchema>>({
    resolver: zodResolver(riddleSchema),
    defaultValues: {
      answer: "",
    },
  });

  const onSubmit = (values: z.infer<typeof riddleSchema>) => {
    setError("");
    setSuccess("");
    startTransition(() => {
      if (variants === "riddle") {
        if (values.answer.toLowerCase() === CORRECT_ANSWER) {
          setSuccess("Correct");
          router.push("/riddle/correct");
        } else {
          setError("Wrong answer, please try again!");
        }
      }

      if (variants === "video") {
        console.log(values);
        createRiddleSubmission(session.data?.user.id!, values)
          .then((data) => {
            if (data && data.success) {
              setSuccess(data.success);
              router.push("/riddle/correct?submitted=true");
            } else {
              setError(data.error);
            }
          })
          .catch((err) => {
            setError(err);
          });
      }
    });
  };

  return (
    <div className="space-y-4">
      <FormError message={error} />
      <FormSuccess message={success} />
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <Controller
          name="answer"
          control={control}
          render={({ field }) => (
            <div>
              <input
                type="text"
                id="answer"
                placeholder={`Enter your ${
                  variants === "riddle" ? "answer here" : "video link here"
                }`}
                {...field}
                className="w-full rounded border border-gray-300 bg-transparent p-2 text-black sm:text-lg md:text-xl lg:text-2xl"
              />
              {errors.answer && (
                <p className="py-2 text-sm text-red-500">
                  {errors.answer.message}
                </p>
              )}
            </div>
          )}
        />
        <button
          type="submit"
          disabled={isPending}
          className="font-inter rounded bg-red-500 p-2 text-white sm:p-3 md:p-4 lg:p-5"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default RiddleForm;
