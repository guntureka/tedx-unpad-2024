"use client";

import { Metadata } from "next";
import { profileSchema } from "@/lib/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { Profile, Ticket } from "@prisma/client";
import React, { useState, useTransition, useEffect } from "react";
import { Controller, useForm } from "react-hook-form";
import { array, z } from "zod";
import FormField from "@/components/ui/form-field";
import { DividerHorizontalIcon } from "@radix-ui/react-icons";
import { FormSuccess } from "@/components/ui/success-form";
import { FormError } from "@/components/ui/error-form";
import { createTicketByUserId } from "@/actions/ticket";
import { getAllTicket } from "@/actions/ticket";

const ticketSchema = z.object({
  nickname: z.string().min(1, "Nickname is required"),
  haveAttended: z.boolean(),
  linkedin: z.string().url().optional(),
  instagram: z.string().url().optional(),
  twitter: z.string().url().optional(),
  facebook: z.string().url().optional(),
  reason: z.string().min(1, "Reason is required"),
  selfishReason: z.string().min(1, "Selfish reason is required"),
  selflessReason: z.string().min(1, "Selfless reason is required"),
  goal: array(z.string()).min(1, "Goal is required"),
});

const goalOptions = ["I want to A", "I want to B", "I want to C"];

const ticketPage = () => {
  const [success, setSuccess] = useState<string | undefined>("");
  const [error, setError] = useState<string | undefined>("");
  const [isPending, startTransition] = useTransition();
  const [tickets, setTickets] = useState<Ticket[] | undefined>([]);

  useEffect(() => {
    startTransition(() => {
      getAllTicket()
        .then((data) => {
          if (data && data.status === "success") {
            setTickets(data.data);
          } else {
            setError(data.message);
          }
        })
        .catch((error) => {
          setError("Something went wrong!");
        });
    });
  }, []);

  const {
    handleSubmit,
    register,
    control,
    formState: { errors },
    reset,
  } = useForm<z.infer<typeof ticketSchema>>({
    resolver: zodResolver(ticketSchema),
    defaultValues: {
      nickname: "",
      haveAttended: false,
      linkedin: "",
      instagram: "",
      twitter: "",
      facebook: "",
      reason: "",
      selfishReason: "",
      selflessReason: "",
      goal: [],
    },
  });

  const onSubmit = async (values: z.infer<typeof ticketSchema>) => {
    setError("");
    setSuccess("");
    startTransition(() => {
      createTicketByUserId(values, "666ce022e7fd044dc36af8a7")
        .then((data) => {
          if (data && data.status === "success") {
            setSuccess("Ticket created successfully!");
            reset();
          } else {
            setError(data.message);
          }
        })
        .catch((error) => {
          setError("Something went wrong!");
        });
    });
  };

  return (
    <main className="flex min-h-screen w-full flex-col px-10 py-40 lg:px-20">
      <div className="flex w-full flex-col sm:px-10 md:px-14 xl:px-32">
        {/* Create Ticket Data */}
        <div className="flex w-full flex-col space-y-10">
          <h1 className="text-4xl font-bold">Create Ticket</h1>
          <div className="flex w-full flex-col space-y-4">
            <FormSuccess message={success} />
            <FormError message={error} />
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex w-full flex-col space-y-4"
            >
              <div className="grid grid-cols-1 items-start gap-4 md:grid-cols-2">
                <FormField
                  id="nickname"
                  label="Nickname"
                  placeholder="Enter your nickname"
                  register={register("nickname")}
                  error={errors.nickname}
                />
                <FormField
                  id="haveAttended"
                  label="Have you attended before?"
                  type="checkbox"
                  register={register("haveAttended")}
                  error={errors.haveAttended}
                />
                <FormField
                  id="linkedin"
                  label="Linkedin"
                  type="url"
                  placeholder="Enter your linkedin"
                  register={register("linkedin")}
                  error={errors.linkedin}
                />
                <FormField
                  id="instagram"
                  label="Instagram"
                  type="url"
                  placeholder="Enter your instagram"
                  register={register("instagram")}
                  error={errors.instagram}
                />
                <FormField
                  id="twitter"
                  label="Twitter"
                  type="url"
                  placeholder="Enter your twitter"
                  register={register("twitter")}
                  error={errors.twitter}
                />
                <FormField
                  id="facebook"
                  label="Facebook"
                  type="url"
                  placeholder="Enter your facebook"
                  register={register("facebook")}
                  error={errors.facebook}
                />
                <FormField
                  id="reason"
                  label="Reason"
                  placeholder="Enter your reason"
                  register={register("reason")}
                  error={errors.reason}
                />
                <FormField
                  id="selfishReason"
                  label="Selfish Reason"
                  placeholder="Enter your selfish reason"
                  register={register("selfishReason")}
                  error={errors.selfishReason}
                />
                <FormField
                  id="selflessReason"
                  label="Selfless Reason"
                  placeholder="Enter your selfless reason"
                  register={register("selflessReason")}
                  error={errors.selflessReason}
                />
                <div className="flex w-full flex-col space-y-4">
                  <label htmlFor="goal" className="text-lg font-semibold">
                    Goal
                  </label>
                  {goalOptions.map((goal, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        id={goal}
                        value={goal}
                        {...register("goal")}
                      />
                      <label htmlFor={goal}>{goal}</label>
                    </div>
                  ))}
                  {errors.goal && (
                    <span className="text-red-500">{errors.goal.message}</span>
                  )}
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

                  <button
                    type="button"
                    onClick={() => reset()}
                    className={`rounded-lg bg-red-600 px-8 py-4 text-white duration-150 hover:bg-red-700 ${
                      isPending ? "cursor-progress opacity-50" : ""
                    }`}
                  >
                    Reset
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Get All Ticket Data */}
      <div className="flex w-full flex-col space-y-10 sm:px-10 md:px-14 xl:px-32">
        <h1 className="text-4xl font-bold">All Tickets</h1>
        <div className="flex w-full flex-col space-y-4">
          {tickets && tickets.length > 0 ? (
            <div className="flex w-full flex-col space-y-4">
              {tickets.map((ticket, index) => (
                <div
                  key={index}
                  className="flex w-full flex-col space-y-4 border border-gray-200 p-4"
                >
                  <h3 className="text-xl font-semibold">{ticket.nickname}</h3>
                  <p className="text-lg font-medium">
                    Have attended: {ticket.haveAttended ? "Yes" : "No"}
                  </p>
                  <p className="text-lg font-medium">
                    Linkedin: {ticket.linkedin}
                  </p>
                  <p className="text-lg font-medium">
                    Instagram: {ticket.instagram}
                  </p>
                  <p className="text-lg font-medium">
                    Twitter: {ticket.twitter}
                  </p>
                  <p className="text-lg font-medium">
                    Facebook: {ticket.facebook}
                  </p>
                  <p className="text-lg font-medium">Reason: {ticket.reason}</p>
                  <p className="text-lg font-medium">
                    Selfish Reason: {ticket.selfishReason}
                  </p>
                  <p className="text-lg font-medium">
                    Selfless Reason: {ticket.selflessReason}
                  </p>
                  <p className="text-lg font-medium">Goal: {ticket.goal}</p>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-lg font-medium">
              {isPending ? "Loading..." : "No tickets found!"}
            </p>
          )}
        </div>
      </div>
    </main>
  );
};

export default ticketPage;
