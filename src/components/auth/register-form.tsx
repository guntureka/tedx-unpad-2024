"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import LabeledInput from "@/components/ui/labeledinput";
import { useForm, SubmitHandler } from "react-hook-form";
import { useNavbarType } from "@/components/navbarcontext";

interface Register {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
  age: number;
  phone: number;
  afiliasi: string;
  interest: string;
  reference: string;
  alamat: string;
}

const Register: React.FC = (): React.ReactNode => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm<Register>({
    mode: "all",
  });

  const onSubmit: SubmitHandler<Register> = (data) => {
    console.log(data);
  };

  const { setNavbarType } = useNavbarType();

  useEffect(() => {
    setNavbarType("blank");
  }, []);

  return (
    <div className="grid w-screen items-center px-4 sm:grid-cols-1 md:px-20 lg:grid-cols-2">
      <div className="hidden h-full items-center justify-center lg:flex">
        <div className="h-full w-full overflow-hidden">
          <img
            className="h-full w-full object-cover duration-300 hover:scale-110"
            src="/loginbg.png"
            alt="Login BG"
          />
        </div>
      </div>

      <div className="flex flex-col justify-center space-y-1 p-4 font-inter md:p-10">
        <h1 className="mb-5 text-2xl font-semibold text-white md:text-3xl">
          Register
        </h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="bg-darkgray-800 space-y-6 rounded-lg p-4 md:space-y-12 md:p-10">
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
                register={register("age", {
                  required: "Age is required",
                  min: {
                    value: 1,
                    message: "Invalid age",
                  },
                  max: {
                    value: 100,
                    message: "Invalid age",
                  },
                  pattern: {
                    value: /^\d+$/,
                    message: "Age must be a number",
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
              register={register("alamat", {
                required: "Address is required",
              })}
              error={errors.alamat}
            />

            <LabeledInput
              label="Affiliation"
              id="afiliasi"
              placeholder="Enter your affiliation (ex: Padjadjaran University)"
              register={register("afiliasi", {
                required: "Affiliation is required",
              })}
              error={errors.afiliasi}
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
                    value="Inferiority Complex"
                    {...register("interest", {
                      required: "Interest is required",
                    })}
                  />
                  <label htmlFor="interestIC" className="ml-2 text-white">
                    Inferiority Complex
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    type="radio"
                    id="interestPA"
                    value="Personalized Algorithm"
                    {...register("interest", {
                      required: "Interest is required",
                    })}
                  />
                  <label htmlFor="interestPA" className="ml-2 text-white">
                    Personalized Algorithm
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
              className="mt-6 h-12 w-full rounded-lg bg-red-600 text-lg font-semibold text-white duration-150 hover:bg-red-700"
            >
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
