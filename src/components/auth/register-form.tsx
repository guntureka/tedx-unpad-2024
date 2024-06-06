"use client";

import { registerSchema } from "@/lib/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import React, { useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import FormField from "../ui/form-field";
import Label from "../ui/label";
import Input from "../ui/input";
import { FormSuccess } from "../ui/success-form";
import { FormError } from "../ui/error-form";
import { registerAction } from "@/actions/auth";

const interestData = [
  "Post Colonialism & Inferiority Complex",
  "Social Media Algorithm",
  "Quarter Life Crisis",
  "Economics & Entrepreneurship",
];

const RegisterForm = () => {
  const [success, setSuccess] = useState<string | undefined>("");
  const [error, setError] = useState<string | undefined>("");
  const [isPending, startTransition] = useTransition();

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<z.infer<typeof registerSchema>>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      password: "",
      email: "",
      confirmPassword: "",
      address: "",
      born: undefined,
      phone: "",
      affiliation: "",
      reference: "",
      interest: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof registerSchema>) => {
    setError("");
    setSuccess("");
    startTransition(() => {
      registerAction(values)
        .then((data) => {
          if (data && data.error) {
            setError(data.error);
          }
          if (data && data.success) {
            setSuccess(data.success);
          }
        })
        .catch((error) => {
          setError("An error occurred. Please try again.");
        });
    });
  };

  return (
    <div className="flex flex-col justify-center  w-full space-y-10 py-40 z-10">
      <h1 className="text-2xl md:text-3xl text-start font-bold">Register</h1>
      <div className="flex flex-col justify-center  w-full space-y-4">
        <FormSuccess message={success} />
        <FormError message={error} />

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col space-y-4 "
        >
          <div className="flex flex-col md:flex-row gap-4">
            <FormField
              id="firstName"
              label="First name"
              placeholder="Enter your first name"
              register={register("firstName")}
              error={errors.firstName}
            />
            <FormField
              id="lastNanme"
              label="Last name"
              placeholder="Enter your last name"
              register={register("lastName")}
              error={errors.lastName}
            />
          </div>
          <div className="flex flex-col md:flex-row gap-4">
            <FormField
              id="born"
              label="Born"
              register={register("born")}
              type="date"
              error={errors.born}
              required
            />
            <FormField
              id="phone"
              label="Phone number"
              placeholder="08921323223"
              register={register("phone")}
              error={errors.phone}
            />
          </div>
          <FormField
            id="address"
            label="Address"
            placeholder="Enter your address"
            register={register("address")}
            error={errors.address}
            variants={"textarea"}
          />
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
          <FormField
            id="confirmPassword"
            label="Confirm password"
            placeholder="Enter your confirm password"
            register={register("confirmPassword")}
            isPassword
            error={errors.confirmPassword}
          />
          <FormField
            id="affiliation"
            label="Affiliation"
            placeholder="Enter your affiliation (ex: Universitas Padjadjaran)"
            register={register("affiliation")}
            error={errors.affiliation}
          />
          <FormField
            id="reference"
            label="How did you hear about us?"
            placeholder="(ex: Instagram, Tiktok, Friends, etc)"
            register={register("reference")}
            error={errors.reference}
          />
          <div className="space-y-4">
            <p>Interest</p>
            <div className="grid grid-cols-1 md:grid-cols-2">
              {interestData.map((data, index) => (
                <div
                  key={index}
                  className="flex justify-start items-center gap-4 py-4"
                >
                  <Input
                    id={`interest-${index}`}
                    value={data}
                    register={register("interest")}
                    type="radio"
                  />
                  <Label id={"interest"} label={data} className="" />
                </div>
              ))}
            </div>
          </div>
          <button
            type="submit"
            disabled={isPending}
            className={`w-full rounded-lg bg-red-600 text-white duration-150 hover:bg-red-700 py-4 ${
              isPending ? "cursor-progress opacity-50" : ""
            } `}
          >
            Submit
          </button>
        </form>
        <p className="font-inter-400 mt-[26px] py-[10px] text-center text-[16px] text-white">
          have an account?&nbsp;
          <span>
            <Link href="/auth/login" className="underline underline-offset-4">
              Login
            </Link>
          </span>
        </p>
      </div>
    </div>
  );
};

export default RegisterForm;
