"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import LabeledInput from "../../../components/ui/labeledinput";
import { useForm, SubmitHandler } from "react-hook-form";
import { useNavbarType } from "../../../components/navbarcontext";

interface LoginInputs {
  email: string;
  password: string;
}

const Login: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginInputs>({
    mode: "all",
  });

  const onSubmit: SubmitHandler<LoginInputs> = (data) => {
    console.log(data);
  };

  const { setNavbarType } = useNavbarType();

  useEffect(() => {
    setNavbarType("default");
  }, []);

  return (
    <div className="w-screen grid sm:grid-cols-1 md:grid-cols-2 px-4 md:px-20 items-center">
      <div className="hidden md:flex h-full justify-center items-center">
        <div className="w-full h-full">
          <img
            className="object-cover w-full h-full hover:scale-110 duration-300"
            src="/loginbg.png"
            alt="Login BG"
          />
        </div>
      </div>
      <div className="flex flex-col font-inter justify-center p-4 md:p-10 space-y-1 ">
        <h1 className="text-white text-2xl md:text-3xl font-inter-600">
          Login
        </h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="bg-darkgray-800 p-4 md:p-10 rounded-lg shadow-md space-y-6 md:space-y-12">
            <div className="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-4">
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
            <div className="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-4">
              <LabeledInput
                label="Password"
                id="password"
                placeholder="Enter your password"
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
          <div className="flex justify-between items-center mt-[22px]">
            <div className="flex items-center">
              <input
                className="w-[15px] h-[15px]"
                type="checkbox"
                id="remember-me"
              />
              <label
                className="text-white text-[14px] font-inter-400 ml-[10px]"
                htmlFor="remember-me"
              >
                Remember Me
              </label>
            </div>
            <Link
              href="#"
              className="text-white text-[14px] font-inter-400 ml-[10px] hover:underline"
            >
              Forget Password?
            </Link>
          </div>
          <button
            type="submit"
            className="w-full h-[55px] mt-[70px] rounded-[10px] bg-red-normal font-inter-600 text-[18px] text-white hover:bg-red-dark duration-150"
          >
            Login
          </button>
        </form>
        <p className="font-inter-500 py-[10px] text-[16px] text-grey-light text-center">
          or
        </p>
        <button className="w-full h-[55px] flex gap-x-[17px] justify-center items-center rounded-[10px] bg-white font-inter-400 text-[18px] text-black-abs hover:bg-grey-light duration-150">
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
        <p className="mt-[26px] font-inter-400 py-[10px] text-[16px] text-white text-center">
          Don't have an account&nbsp;
          <span>
            <Link href="#" className="font-inter-600 hover:underline">
              Register
            </Link>
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;
