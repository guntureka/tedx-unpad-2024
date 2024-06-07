'use server'

import { riddleSchema } from "@/lib/schemas";
import { db } from "@/utils/db";
import { z } from "zod";

export const createRiddleSubmission = async (
  id: string,
  values: z.infer<typeof riddleSchema>
) => {
  const validatedFields = riddleSchema.safeParse(values);

  if (!validatedFields.success) {
    return {
      error: "Invalid fields!",
    };
  }

  const { answer } = validatedFields.data;
  console.log(id)

  try {
    await db.riddleSubmission.create({
      data: {
        user: {
          connect: {
            id: id,
          },
        },
        url: answer,
      },
    });

    return {
      success: "Link submitted successfully",
    };
  } catch (error) {
    return {
      error: "Something went wrong!",
    };
  }
};
