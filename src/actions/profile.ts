"use server";

import { profileSchema } from "@/lib/schemas";
import { getAge } from "@/utils/converter";
import { db } from "@/utils/db";
import { z } from "zod";

export const getProfileByUserId = async (userId: string) => {
  try {
    const profile = await db.profile.findUnique({
      where: {
        userId: userId,
      },
    });

    if (!profile) {
      return null;
    }

    return profile;
  } catch (error) {
    console.log(error);
  }
};

export const updateProfileById = async (
  id: string,
  values: z.infer<typeof profileSchema>
) => {
  const validatedFields = await profileSchema.safeParseAsync(values);

  if (!validatedFields.success) {
    return {
      error: "Invalids fields!",
    };
  }

  const {
    address,
    affiliation,
    born,
    firstName,
    interest,
    lastName,
    phone,
    reference,
  } = validatedFields.data;

  const age = getAge(born);
  const name = firstName.concat(" ", lastName);

  try {
    await db.profile.update({
      where: {
        id: id,
      },
      data: {
        address,
        affiliate: affiliation,
        age,
        born,
        firstName,
        interest,
        lastName,
        phone,
        reference,
        user: {
          update: {
            name: name,
          },
        },
      },
    });

    return { success: "Profile updated successfully" };
  } catch (error) {
    console.log(error);
    return {
      error: "Something went wrong!",
    };
  }
};
