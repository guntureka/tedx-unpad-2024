"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useState, useTransition } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { LoginSchema } from "@/schemas";
import { FormError } from "@/components/form-error";
import { FormSuccess } from "@/components/form-success";
import { login } from "@/actions/login";
import React, { useEffect } from "react";
import LabeledInput from "@/components/ui/labeledinput";
import { useForm } from "react-hook-form";
import { useNavbarType } from "@/components/navbarcontext";
import { signIn } from "next-auth/react";
import { DEFAULT_LOGIN_REDIRECT } from "@/routes";

export const LoginForm = () => {
  const searchParams = useSearchParams();
  const urlError =
    searchParams.get("error") === "OAuthAccountNotLinked"
      ? "Email already in use with different provider!"
      : "";

  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");
  const [isPending, startTransition] = useTransition();

  const { setNavbarType } = useNavbarType();

  useEffect(() => {
    setNavbarType("blank");
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<z.infer<typeof LoginSchema>>({
    mode: "all",
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (values: z.infer<typeof LoginSchema>) => {
    setError("");
    setSuccess("");
    startTransition(() => {
      login(values)
        .then((data) => {
          if (data?.error) {
            setError(data.error);
          }
        })
        .catch(() => setError("Something went wrong!"));
    });
  };

  const onClick = (provider: "google") => {
    signIn(provider, {
      callbackUrl: DEFAULT_LOGIN_REDIRECT,
    });
  };

  return (
    <div className="grid w-screen items-center px-4 sm:grid-cols-1 md:grid-cols-2 md:px-20">
      <div className="hidden h-full items-center justify-center md:flex">
        <div className="h-full w-full overflow-hidden">
          <img
            className="h-full w-full object-cover duration-300 hover:scale-110"
            src="/loginbg.png"
            alt="Login BG"
          />
        </div>
      </div>
      <div className="flex flex-col justify-center space-y-1 p-4 font-inter md:p-10">
        <h1 className="font-inter-600 text-2xl text-white md:text-3xl">
          Login
        </h1>
        <FormError message={error} />
        <FormSuccess message={success} />
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="bg-darkgray-800 space-y-6 rounded-lg p-4 md:space-y-12 md:p-10">
            <div className="flex flex-col space-y-6 md:flex-row md:space-x-4 md:space-y-0">
              <LabeledInput
                label="Email"
                id="email"
                placeholder="Enter your email"
                register={register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                    message: "Invalid email address",
                  },
                })}
                error={errors.email}
              />
            </div>
            <div className="flex flex-col space-y-6 md:flex-row md:space-x-4 md:space-y-0">
              <LabeledInput
                label="Password"
                id="password"
                placeholder="Enter your password"
                isPassword
                register={register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Password must be at least 6 characters long",
                  },
                })}
                error={errors.password}
              />
            </div>
          </div>
          <div className="mt-[22px] flex items-center justify-between">
            <div className="flex items-center">
              <input
                className="h-[15px] w-[15px]"
                type="checkbox"
                id="remember-me"
              />
              <label
                className="font-inter-400 ml-[10px] text-[14px] text-white"
                htmlFor="remember-me"
              >
                Remember Me
              </label>
            </div>
            <Link
              href="/auth/reset"
              className="font-inter-400 ml-[10px] text-[14px] text-white hover:underline"
            >
              Forget Password?
            </Link>
          </div>
          <button
            type="submit"
            className="bg-red-normal font-inter-600 hover:bg-red-dark mt-[70px] h-[55px] w-full rounded-[10px] text-[18px] text-white duration-150"
          >
            Login
          </button>
        </form>
        <p className="font-inter-500 py-[10px] text-center text-[16px] text-grey-light">
          or
        </p>
        <button
          onClick={() => onClick("google")}
          className="font-inter-400 flex h-[55px] w-full items-center justify-center gap-x-[17px] rounded-[10px] bg-white text-[18px] text-black-abs duration-150 hover:bg-grey-light"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="24px"
            height="24px"
            viewBox="0 0 48 48"
          >
            <path
              fill="#FFC107"
              d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
            ></path>
            <path
              fill="#FF3D00"
              d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
            ></path>
            <path
              fill="#4CAF50"
              d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
            ></path>
            <path
              fill="#1976D2"
              d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
            ></path>
          </svg>
          <span>Login with Google</span>
        </button>
        <p className="font-inter-400 mt-[26px] py-[10px] text-center text-[16px] text-white">
          Don&apos;t have an account&nbsp;
          <span>
            <Link
              href="/auth/register"
              className="font-inter-600 hover:underline"
            >
              Register
            </Link>
          </span>
        </p>
      </div>
    </div>
  );
};
