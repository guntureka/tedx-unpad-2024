"use client";

import { useState, useTransition } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { ResetSchema } from "../../schemas";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { FormError } from "@/components/form-error";
import { FormSuccess } from "@/components/form-success";
import { reset } from "@/actions/reset";
import React, { useEffect } from "react";
import LabeledInput2 from "@/components/ui/labeledinput2";
import { useForm, SubmitHandler } from "react-hook-form";
import { useNavbarType } from "@/components/navbarcontext";

export const ResetForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submittedEmail, setSubmittedEmail] = useState("");
  const {
    register: registerForgotPassword,
    handleSubmit: handleSubmitForgotPassword,
    formState: { errors: errorsForgotPassword },
  } = useForm<z.infer<typeof ResetSchema>>({
    resolver: zodResolver(ResetSchema),
    defaultValues: {
      email: "",
    },
  });

  // const onSubmitPassword: SubmitHandler<z.infer<typeof ResetSchema>> = (
  //   data,
  // ) => {
  //   setSubmittedEmail(data.email);
  //   setIsSubmitted(true);
  //   console.log("Email request:", data);
  // };

  const { setNavbarType } = useNavbarType();

  useEffect(() => {
    setNavbarType("blank");
  }, []);

  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");
  const [isPending, startTransition] = useTransition();

  const onSubmit = (values: z.infer<typeof ResetSchema>) => {
    setError("");
    setSuccess("");

    console.log(values);

    startTransition(() => {
      reset(values).then((data) => {
        setError(data?.error);
        setSuccess(data?.success);
      });
    });
  };

  return (
    <div className="w-screen px-12 sm:px-20 md:px-28 lg:px-36 xl:px-[170px]">
      <div className="mb-[30px] mt-[55px] flex flex-col justify-center gap-[20px] rounded-[10px] border-[2px] border-grey-light bg-grey-dark px-[40px] py-[40px] lg:px-[320px] lg:py-[60px]">
        {isSubmitted ? (
          <>
            <div className="flex flex-col items-center gap-[20px]">
              <svg
                width="100px"
                height="100px"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect x="0" fill="none" width="24" height="24" />
                <g>
                  <path
                    fill="#C93420"
                    d="M11 17.768l-4.884-4.884 1.768-1.768L11 14.232l8.658-8.658C17.823 3.39 15.075 2 12 2 6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10c0-1.528-.353-2.97-.966-4.266L11 17.768z"
                  />
                </g>
              </svg>
              <h2 className="font-inter-700 text-center text-[24px] text-white">
                Request Successfully Sent
              </h2>
            </div>
            <p className="font-inter-400 text-center text-[20px] text-white">
              You may check your email inbox ({submittedEmail}) for the recovery
              password and link.
            </p>
          </>
        ) : (
          <>
            <h2 className="font-inter-700 text-center text-[24px] text-white">
              Forgot Password
            </h2>
            <FormError message={error} />
            <FormSuccess message={success} />
            <form onSubmit={handleSubmitForgotPassword(onSubmit)}>
              <div className="flex flex-col gap-y-[20px]">
                <LabeledInput2
                  label="Enter your Email"
                  id="email"
                  placeholder="Enter your email"
                  register={registerForgotPassword("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                      message: "Invalid email address",
                    },
                  })}
                  error={errorsForgotPassword.email}
                />
              </div>
              <div className="mt-[40px] flex w-full justify-center">
                <button
                  type="submit"
                  className="font-inter-700 rounded-[5px] bg-[#0A51F1] px-[50px] py-[15px] text-[16px] text-white duration-150 hover:bg-[#517de5]"
                >
                  Submit
                </button>
              </div>
            </form>
          </>
        )}
      </div>
    </div>
  );
};
