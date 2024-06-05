"use client";

import { useState, useTransition } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { RegisterSchema } from "@/schemas";
import { FormError } from "@/components/form-error";
import { FormSuccess } from "@/components/form-success";
import { register as registerAction } from "@/actions/register";
import React, { useEffect } from "react";
import LabeledInput from "@/components/ui/labeledinput";
import { useForm, SubmitHandler } from "react-hook-form";
import { useRouter } from "next/navigation";
import { useNavbarType } from "@/components/navbarcontext";

export const RegisterForm = () => {
  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");
  const [isPending, startTransition] = useTransition();
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm<z.infer<typeof RegisterSchema>>({
    mode: "all",
    resolver: zodResolver(RegisterSchema),
    defaultValues: {
      email: "",
      password: "",
      firstName: "",
      lastName: "",
      age: 0,
      phone: "",
      address: "",
      affiliation: "",
      reference: "",
      interest: "",
      confirmPassword: "",
    },
  });
  
  const { setNavbarType } = useNavbarType();
  useEffect(() => {
    setNavbarType("blank");
  })

  const onSubmit = (values: z.infer<typeof RegisterSchema>) => {
    console.log(values);
    setError("");
    setSuccess("");
    startTransition(() => {
      registerAction(values)
        .then((data) => {
          setError(data.error);
          setSuccess(data.success);
          router.push("/auth/login");
        })
        .catch((error) => {
          setError("An error occurred. Please try again.");
        });
    });
  };

  return (
    <div className="grid w-screen items-center px-4 sm:grid-cols-1 md:grid-cols-2 md:px-20">
      <div className="hidden h-full items-center justify-center md:flex">
        <div className="h-full w-full">
          <img
            className="h-full w-full object-cover duration-300 hover:scale-110"
            src="/loginbg.png"
            alt="Login BG"
          />
        </div>
      </div>

      <div className="flex flex-col justify-center space-y-1 p-4 font-inter md:p-10">
        <h1 className="mb-5 text-2xl font-semibold text-white md:text-3xl md:mx-9 mx-4">
          Register
        </h1>
        <FormError message={error} />
        <FormSuccess message={success} />
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="bg-darkgray-800 space-y-6 rounded-lg p-4 shadow-md md:space-y-12 md:p-10">
            <div className="flex flex-col space-y-6 md:flex-row md:space-x-4 md:space-y-0">
              <LabeledInput
                label="First Name"
                id="firstName"
                placeholder="First Name"
                register={register("firstName", {
                  required: "First name is required",
                  minLength: {
                    value: 1,
                    message: "Invalid first name",
                  },
                })}
                error={errors.firstName}
              />

              <LabeledInput
                label="Last Name"
                id="lastName"
                placeholder="Last Name"
                register={register("lastName", {
                  required: "Last name is required",
                  minLength: {
                    value: 1,
                    message: "Invalid last name",
                  },
                })}
                error={errors.lastName}
              />
            </div>

            <div className="flex flex-col space-y-6 md:flex-row md:space-x-4 md:space-y-0">
              <LabeledInput
                label="Age"
                id="age"
                placeholder="Enter your age"
                type="number"
                register={register("age", {
                  valueAsNumber: true,
                  required: "Age is required",
                  min: {
                    value: 1,
                    message: "Invalid age",
                  },
                  max: {
                    value: 100,
                    message: "Invalid age",
                  },
                })}
                error={errors.age}
              />

              <LabeledInput
                label="Phone"
                id="phone"
                placeholder="Enter your phone number"
                register={register("phone", {
                  required: "Phone number is required",
                  minLength: {
                    value: 10,
                    message: "Invalid phone number",
                  },
                  pattern: {
                    value: /^[0-9]+$/,
                    message: "Phone number must contain only digits",
                  },
                })}
                error={errors.phone}
              />
            </div>

            <LabeledInput
              label="Email"
              id="email"
              placeholder="Enter your email"
              register={register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Invalid email address",
                },
              })}
              error={errors.email}
            />

            <LabeledInput
              label="Address"
              id="alamat"
              placeholder="Enter your address"
              register={register("address", {
                required: "Address is required",
              })}
              error={errors.address}
            />

            <LabeledInput
              label="Affiliation"
              id="afiliasi"
              placeholder="Enter your affiliation (ex: Padjadjaran University)"
              register={register("affiliation", {
                required: "Affiliation is required",
              })}
              error={errors.affiliation}
            />

            <LabeledInput
              label="How Did You Hear About Us?"
              id="reference"
              placeholder="(ex: Instagram, Tiktok, Friends, ....)"
              register={register("reference", {
                required: "Reference is required",
              })}
              error={errors.reference}
            />

            <div>
              <label className="font-semibold text-white">Interest</label>
              <div className="mt-2 grid grid-cols-1 gap-7 md:grid-cols-2">
                <div className="flex items-center">
                  <input
                    type="radio"
                    id="interestIC"
                    value="Post Colonialism & Inferiority Complex"
                    {...register("interest", {
                      required: "Interest is required",
                    })}
                  />
                  <label htmlFor="interestIC" className="ml-2 text-white">
                  Post Colonialism & Inferiority Complex
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    type="radio"
                    id="interestPA"
                    value="Social Media Algorithm"
                    {...register("interest", {
                      required: "Interest is required",
                    })}
                  />
                  <label htmlFor="interestPA" className="ml-2 text-white">
                  Social Media Algorithm
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    type="radio"
                    id="interestQLC"
                    value="Quarter Life Crisis"
                    {...register("interest", {
                      required: "Interest is required",
                    })}
                  />
                  <label htmlFor="interestQLC" className="ml-2 text-white">
                    Quarter Life Crisis
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    type="radio"
                    id="interestFF"
                    value="Economics & Entrepreneurship"
                    {...register("interest", {
                      required: "Interest is required",
                    })}
                  />
                  <label htmlFor="interestFF" className="ml-2 text-white">
                    Economics & Entrepreneurship
                  </label>
                </div>
              </div>
              {errors.interest && (
                <p className="text-red-500">{errors.interest.message}</p>
              )}
            </div>

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
              isPassword={true}
            />

            <LabeledInput
              label="Confirm Password"
              id="confirmPassword"
              placeholder="Confirm your password"
              register={register("confirmPassword", {
                required: "Please confirm your password",
                validate: (value) =>
                  value === getValues("password") || "Passwords do not match",
              })}
              error={errors.confirmPassword}
              isPassword={true}
            />

            <button
              type="submit"
              className={`mt-6 h-12 w-full rounded-lg bg-red-600 text-lg font-semibold text-white duration-150 hover:bg-red-700 ${
                isPending ? "cursor-progress opacity-50" : ""
              }`}
              disabled={isPending}
            >
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
