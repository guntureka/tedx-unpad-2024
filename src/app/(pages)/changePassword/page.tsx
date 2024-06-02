"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import LabeledInput2 from "@/components/ui/labeledinput2";
import { useForm, SubmitHandler } from "react-hook-form";
import { useNavbarType } from "@/components/navbarcontext";

interface PasswordInputs {
  email: string;
  password: string;
  newPassword: string;
  verifyNewPassword: string;
}

const ChangePassword: React.FC = () => {
  const {
    register: registerPassword,
    handleSubmit: handleSubmitPassword,
    formState: { errors: errorsPassword },
  } = useForm<PasswordInputs>({
    mode: "all",
    defaultValues: {
      email: "useremail@mail.com",
      password: "123456",
    },
  });

  const onSubmitPassword: SubmitHandler<PasswordInputs> = (data) => {
    console.log("Password Data:", data);
  };

  const { setNavbarType } = useNavbarType();

  useEffect(() => {
    setNavbarType("profile");
  }, []);

  return (
    <div className="w-screen px-12 sm:px-20 md:px-28 lg:px-36 xl:px-[170px]">
      <div className="my-[30px] flex flex-col justify-center gap-[60px] rounded-[10px] border-[2px] border-grey-light bg-grey-dark px-[40px] py-[40px] lg:px-[320px] lg:py-[60px]">
        <h2 className="font-inter-700 text-center text-[24px] text-white">
          Change Password
        </h2>
        <form onSubmit={handleSubmitPassword(onSubmitPassword)}>
          <div className="flex flex-col gap-y-[20px]">
            <LabeledInput2
              label="Email"
              id="email"
              placeholder="Enter your email"
              disabled={true}
              register={registerPassword("email", {
                required: "Email is required",
                pattern: {
                  value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                  message: "Invalid email address",
                },
              })}
              error={errorsPassword.email}
            />
            <div className="relative">
              <LabeledInput2
                label="Password"
                id="password"
                placeholder="Enter your password"
                register={registerPassword("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Password must be at least 6 characters long",
                  },
                })}
                error={errorsPassword.password}
              />
              <Link
                href="#"
                className="font-inter-400 ml-[10px] flex justify-end pt-[13px] text-right text-[14px] text-white hover:underline"
              >
                Forget Password?
              </Link>
            </div>
            <LabeledInput2
              label="New Password"
              id="newPassword"
              placeholder="Enter New Password"
              register={registerPassword("newPassword", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters long",
                },
              })}
              error={errorsPassword.newPassword}
            />
            <LabeledInput2
              label="Verify New Password"
              id="verifyNewPassword"
              placeholder="Verify New Password"
              register={registerPassword("verifyNewPassword", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters long",
                },
              })}
              error={errorsPassword.verifyNewPassword}
            />
          </div>
          <div className="mt-[40px] flex w-full justify-center">
            <button
              type="submit"
              className="font-inter-700 rounded-[5px] bg-[#0A51F1] px-[50px] py-[15px] text-[16px] text-white duration-150 hover:bg-[#517de5]"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ChangePassword;
