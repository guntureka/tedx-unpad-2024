"use server";

import { registerSchema } from "@/lib/schemas";
import { getAge } from "@/utils/converter";
import { db } from "@/utils/db";
import { z } from "zod";
import bcrypt from "bcryptjs";
import { getUserByEmail } from "./user";

export const registerAction = async (
  values: z.infer<typeof registerSchema>
) => {
  const validatedFields = await registerSchema.safeParseAsync(values);

  if (!validatedFields.success) {
    return {
      error: "Invalid fields!",
    };
  }

  const {
    email,
    password,
    firstName,
    lastName,
    address,
    born,
    phone,
    affiliation,
    reference,
    interest,
  } = validatedFields.data;

  const age = getAge(born);
  const name = values.firstName.concat(" ", values.lastName);
  const passwordHash = await bcrypt.hash(password, 10);

  try {
    const userExist = await getUserByEmail(email);

    if (userExist) {
      return {
        error: "Email already in use!",
      };
    }

    const user = await db.user.create({
      data: {
        name: name,
        email: email,
        password: passwordHash,
      },
    });

    const profile = await db.profile.create({
      data: {
        user: {
          connect: {
            email,
          },
        },
        address: address,
        phone: phone,
        age: age,
        affiliate: affiliation,
        reference: reference,
        interest: interest,
      },
    });

    return {
      success: "User registered successfully!",
    };
  } catch (error) {
    console.log(error);
  }
};
