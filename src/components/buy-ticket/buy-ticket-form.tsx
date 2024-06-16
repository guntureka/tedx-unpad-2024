"use client";

import { Metadata } from "next";
import { profileSchema } from "@/lib/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { Ticket } from "@prisma/client";
import React, { useState, useTransition, useEffect } from "react";
import { Controller, useForm } from "react-hook-form";
import { array, z } from "zod";
import FormField from "@/components/ui/form-field";
import { DividerHorizontalIcon } from "@radix-ui/react-icons";
import { FormSuccess } from "@/components/ui/success-form";
import { FormError } from "@/components/ui/error-form";
import { createTicketByUserId } from "@/actions/ticket";
import { getAllTicket } from "@/actions/ticket";
import { ticketSchema } from "@/lib/schemas";
import { useRouter } from "next/navigation";

interface BuyTicketFormProps {
  userID: string;
}

const goalOptions = [
  "Networking",
  "Learning New Ideas",
  "Professional Development",
  "Finding Potential Collaborators",
  "Seeking Inspiration",
  "Others",
];

const BuyTicketForm: React.FC<BuyTicketFormProps> = ({ userID }) => {
  const [success, setSuccess] = useState<string | undefined>("");
  const [error, setError] = useState<string | undefined>("");
  const [isPending, startTransition] = useTransition();
  const [tickets, setTickets] = useState<Ticket[] | undefined>([]);
  const router = useRouter();

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
      status: "REVIEW",
    },
  });

  const onSubmit = async (values: z.infer<typeof ticketSchema>) => {
    setError("");
    setSuccess("");
    startTransition(() => {
      createTicketByUserId(values, userID)
        .then((data) => {
          if (data && data.status === "success") {
            setSuccess("Ticket created successfully!");
            reset();
            router.push("buy-ticket/ticket-sent");
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
      <div className="z-10 flex w-full flex-col items-center justify-center space-y-4 rounded-lg bg-[#333333] p-10 outline outline-1 outline-white">
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
                  label="Nickname (to put on badges):"
                  placeholder="Enter your nickname"
                  register={register("nickname")}
                  error={errors.nickname}
                />
                <FormField
                  id="haveAttended"
                  label="Have you attended a TED or TEDx event before? (check if you have)"
                  type="checkbox"
                  register={register("haveAttended")}
                  error={errors.haveAttended}
                  className="block "
                />
                <FormField
                  id="linkedin"
                  label="Linkedin"
                  type="url"
                  placeholder="Enter your LinkedIn profile"
                  register={register("linkedin")}
                  error={errors.linkedin}
                />
                <FormField
                  id="instagram"
                  label="Instagram Username"
                  placeholder="Enter your Instagram username"
                  register={register("instagram")}
                  error={errors.instagram}
                />
                <FormField
                  id="twitter"
                  label="Twitter URL (Optional)"
                  placeholder="Enter your Twitter URL (Optional)"
                  register={register("twitter")}
                  error={errors.twitter}
                />
                <FormField
                  id="facebook"
                  label="Twitter Facebook (Optional)"
                  placeholder="Enter your Facebook URL (Optional)"
                  register={register("facebook")}
                  error={errors.facebook}
                />
                <FormField
                  id="reason"
                  label="What are the most topic you like to talk about? "
                  placeholder="e.g.: K-Pop, Technology, etc."
                  register={register("reason")}
                  error={errors.reason}
                />
                <FormField
                  id="selfishReason"
                  label="What's your selfish reason for wanting to join TEDx?"
                  placeholder="Write your selfish reason here (max. 20 words)"
                  register={register("selfishReason")}
                  error={errors.selfishReason}
                />
                <FormField
                  id="selflessReason"
                  label="What's your selfless reason for wanting to join TEDx?"
                  placeholder="Write your selfless reason here (max. 20 words)"
                  register={register("selflessReason")}
                  error={errors.selflessReason}
                />
                <div className="flex w-full flex-col space-y-4">
                  <label htmlFor="goal" className="text-lg font-semibold">
                    What are your top three goals for attending this TEDx event?
                    (You can choose max 3)
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
                    Buy Ticket!
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
};

export default BuyTicketForm;
