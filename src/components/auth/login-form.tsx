"use client";

import { loginSchema } from "@/lib/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import React, { useEffect, useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import FormField from "../ui/form-field";
import Link from "next/link";
import { FormSuccess } from "../ui/success-form";
import { FormError } from "../ui/error-form";
import { credentialsLogin } from "@/actions/auth";
import { signIn } from "next-auth/react";
import { AuthError } from "next-auth";
import { useSearchParams } from "next/navigation";

const LoginForm = () => {
  const [success, setSuccess] = useState<string | undefined>("");
  const [error, setError] = useState<string | undefined>("");
  const [isPending, startTransition] = useTransition();
  const params = useSearchParams();

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  useEffect(() => {
    const errorParams = params.get("error");

    if (errorParams) {
      switch (errorParams) {
        case "OAuthAccountNotLinked":
          setError("Try login with another provider");
        default:
          return;
      }
    }
  }, [params]);

  const onSubmit = async (values: z.infer<typeof loginSchema>) => {
    setError("");
    setSuccess("");
    startTransition(() => {
      credentialsLogin(values)
        .then((data) => {
          if (data && data.error) {
            setError(data.error);
          } else {
            setSuccess("Login successed!");
          }
        })
        .catch((error) => setError(error));
    });
  };

  const handleProviderLogin = async (provider: string) => {
    setError("");
    setSuccess("");
    startTransition(async () => {
      await signIn(provider);
    });
  };

  return (
    <div className="flex flex-col justify-center  w-full space-y-10 py-40 z-10">
      <h1 className="text-2xl md:text-3xl text-start font-bold">Login</h1>
      <div className="flex flex-col justify-center  w-full space-y-4">
        <FormSuccess message={success} />
        <FormError message={error} />
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col space-y-4 "
        >
          <FormField
            id="email"
            label="Email"
            placeholder="Enter your email"
            register={register("email")}
            error={errors.email}
          />
          <FormField
            id="password"
            label="Password"
            placeholder="Enter your password"
            register={register("password")}
            isPassword
            error={errors.password}
          />
          <Link
            href="/auth/reset"
            className=" text-sm text-white underline-offset-4 underline"
          >
            Forget Password?
          </Link>
          <button
            type="submit"
            className={`w-full rounded-lg bg-red-600 text-white duration-150 hover:bg-red-700 py-4 ${
              isPending ? "cursor-progress opacity-50" : ""
            }`}
          >
            Submit
          </button>
        </form>
        <p className="text-center text-gray-400">or</p>
        <button
          type="button"
          onClick={() => handleProviderLogin("google")}
          className={`w-full rounded-lg flex items-center justify-center gap-4  bg-white text-black py-4 duration-150 hover:bg-gray-400 ${
            isPending ? "cursor-progress opacity-50" : ""
          }`}
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
          Don&apos;t have an account?&nbsp;
          <span>
            <Link
              href="/auth/register"
              className="underline underline-offset-4"
            >
              Register
            </Link>
          </span>
        </p>
      </div>
    </div>
  );
};

export default LoginForm;
