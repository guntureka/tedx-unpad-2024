"use client";

import { profileSchema } from "@/lib/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { Profile } from "@prisma/client";
import React, { useState, useTransition, useEffect } from "react";
import { Controller, useForm } from "react-hook-form";
import { z } from "zod";
import FormField from "../ui/form-field";
import { DividerHorizontalIcon } from "@radix-ui/react-icons";
import { FormSuccess } from "../ui/success-form";
import { FormError } from "../ui/error-form";
import { updateProfileById } from "@/actions/profile";

const interestData = [
  "Post Colonialism & Inferiority Complex",
  "Social Media Algorithm",
  "Quarter Life Crisis",
  "Economics & Entrepreneurship",
];

const ProfileForm = (profile: Profile) => {
  const [success, setSuccess] = useState<string | undefined>("");
  const [error, setError] = useState<string | undefined>("");
  const [isPending, startTransition] = useTransition();

  const {
    handleSubmit,
    register,
    control,
    formState: { errors },
    reset,
  } = useForm<z.infer<typeof profileSchema>>({
    resolver: zodResolver(profileSchema),
    defaultValues: {
      firstName: profile.firstName || "",
      lastName: profile.lastName || "",
      address: profile.address || "",
      // born di input value langsung
      phone: profile.phone || "",
      affiliation: profile.affiliate || "",
      reference: profile.reference || "",
      interest: profile.interest || "",
    },
  });

  const onSubmit = async (values: z.infer<typeof profileSchema>) => {
    setError("");
    setSuccess("");
    startTransition(() => {
      updateProfileById(profile.id, values)
        .then((data) => {
          if (data && data.error) {
            setError(data.error);
          } else {
            setSuccess(data.success);
          }
        })
        .catch((error) => {
          setError("Something went wrong!");
        });
        
    });
  };

  return (
    <div className="z-10 flex w-full flex-col items-center justify-center space-y-4 rounded-lg bg-[#333333] p-10 outline outline-1 outline-white">
      <h1 className="text-3xl font-bold">Profile</h1>
      <div>{/* handleImage */}</div>
      <div className="flex w-full flex-col space-y-4">
        <FormSuccess message={success} />
        <FormError message={error} />
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className="grid grid-cols-1 items-start gap-4 md:grid-cols-2">
            <FormField
              id="firstName"
              label="First name"
              placeholder="Enter your first name"
              register={register("firstName")}
              error={errors.firstName}
            />
            <FormField
              id="lastName"
              label="Last name"
              placeholder="Enter your last name"
              register={register("lastName")}
              error={errors.lastName}
            />
            <FormField
              id="born"
              label="Born"
              register={register("born")}
              type="date"
              error={errors.born}
              required
              value={
                profile.born ? profile.born.toISOString().split("T")[0] : ""
              }
            />
            <FormField
              id="phone"
              label="Phone number"
              placeholder="08921323223"
              register={register("phone")}
              error={errors.phone}
            />
            <FormField
              id="address"
              label="Address"
              placeholder="Enter your address"
              register={register("address")}
              error={errors.address}
              variants={"input"}
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
            <Controller
              name="interest"
              control={control}
              render={({ field }) => (
                <div className="relative w-full space-y-1">
                  <label htmlFor={field.name}>Interest</label>
                  <select
                    {...field}
                    className="relative flex w-full appearance-auto border-b-2 border-white bg-transparent py-4 text-gray-300 placeholder-opacity-0 duration-150 focus:outline-0 disabled:border-gray-600"
                  >
                    {interestData.map((data, index) => (
                      <option
                        value={data}
                        key={index}
                        className="col-start-1 row-start-1 bg-white py-4 text-black"
                      >
                        {data}
                      </option>
                    ))}
                  </select>
                </div>
              )}
            />
          </div>
          <div className="flex items-center justify-center">
            <button
              type="submit"
              className={`rounded-lg bg-red-600 px-8 py-4 text-white duration-150 hover:bg-red-700 ${
                isPending ? "cursor-progress opacity-50" : ""
              }`}
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProfileForm;
