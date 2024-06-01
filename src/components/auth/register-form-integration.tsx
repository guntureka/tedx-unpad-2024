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
import { RegisterSchema } from "@/schemas";
import { Input } from "@/components/ui/input";
import { CardWrapper } from "@/components/auth/card-wrapper";
import { Button } from "@/components/ui/button";
import { FormError } from "@/components/form-error";
import { FormSuccess } from "@/components/form-success";
import { register as registerAction } from "@/actions/register";
import React, { useEffect } from "react";
import Link from "next/link";
import LabeledInput from "@/components/ui/labeledinput";
import { useForm, SubmitHandler } from "react-hook-form";
import { useNavbarType } from "@/components/navbarcontext";

export const RegisterForm = () => {
    const [error, setError] = useState<string | undefined>("");
    const [success, setSuccess] = useState<string | undefined>("");
    const [isPending, startTransition] = useTransition();

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

    const onSubmit = (values: z.infer<typeof RegisterSchema>) => {
        console.log(values);
        setError("");
        setSuccess("");
        startTransition(() => {
            registerAction(values)
                .then((data) => {
                    setError(data.error);
                    setSuccess(data.success);
                })
                .catch((error) => {
                    setError("An error occurred. Please try again.");
                });
        });
    };

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

            <div className="flex flex-col font-inter justify-center p-4 md:p-10 space-y-1">
                <h1 className="text-white text-2xl md:text-3xl font-semibold mb-5">
                    Register
                </h1>
                <FormError message={error} />
                <FormSuccess message={success} />
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="bg-darkgray-800 p-4 md:p-10 rounded-lg shadow-md space-y-6 md:space-y-12">
                        <div className="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-4">
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

                        <div className="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-4">
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
                                        message:
                                            "Phone number must contain only digits",
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
                            <label className="text-white font-semibold">
                                Interest
                            </label>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-7 mt-2">
                                <div className="flex items-center">
                                    <input
                                        type="radio"
                                        id="interestIC"
                                        value="Inferiority Complex"
                                        {...register("interest", {
                                            required: "Interest is required",
                                        })}
                                    />
                                    <label
                                        htmlFor="interestIC"
                                        className="ml-2 text-white"
                                    >
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
                                    <label
                                        htmlFor="interestPA"
                                        className="ml-2 text-white"
                                    >
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
                                    <label
                                        htmlFor="interestQLC"
                                        className="ml-2 text-white"
                                    >
                                        Quarter Life Crisis
                                    </label>
                                </div>
                                <div className="flex items-center">
                                    <input
                                        type="radio"
                                        id="interestFF"
                                        value="Financial Freedom"
                                        {...register("interest", {
                                            required: "Interest is required",
                                        })}
                                    />
                                    <label
                                        htmlFor="interestFF"
                                        className="ml-2 text-white"
                                    >
                                        Financial Freedom
                                    </label>
                                </div>
                            </div>
                            {errors.interest && (
                                <p className="text-red-500">
                                    {errors.interest.message}
                                </p>
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
                                    message:
                                        "Password must be at least 6 characters long",
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
                                    value === getValues("password") ||
                                    "Passwords do not match",
                            })}
                            error={errors.confirmPassword}
                            isPassword={true}
                        />

                        <button
                            type="submit"
                            className={`w-full h-12 mt-6 rounded-lg bg-red-600 text-white text-lg font-semibold hover:bg-red-700 duration-150 ${
                                isPending ? "opacity-50 cursor-progress" : ""
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
