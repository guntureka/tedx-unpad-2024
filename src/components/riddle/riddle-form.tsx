"use client";

import { riddleSchema } from "@/lib/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { z } from "zod";
import Input from "../ui/input";
import { FormError } from "../ui/error-form";

const RiddleForm = () => {
  const [error, setError] = useState<string | undefined>("");
  const form = useForm<z.infer<typeof riddleSchema>>({
    resolver: zodResolver(riddleSchema),
    defaultValues: {
      answer: "",
    },
  });

  return (
    <div>
      <FormError message={error} />
      <form action="" className="space-y-4">
        <Controller
          name="answer"
          control={form.control}
          render={({ field }) => (
            <div>
              <Input
                type="text"
                id="answer"
                placeholder="Enter your answer here"
                register={form.register("answer")}
                className="w-full rounded border border-gray-300 p-2 sm:text-lg md:text-xl lg:text-2xl text-black"
              />
            </div>
          )}
        />
        <button
          type="submit"
          className="rounded bg-red-500 p-2 font-inter text-white sm:p-3 md:p-4 lg:p-5"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default RiddleForm;
