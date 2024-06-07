"use server";

import { loginSchema, registerSchema } from "@/lib/schemas";
import { getAge } from "@/utils/converter";
import { db } from "@/utils/db";
import { z } from "zod";
import bcrypt from "bcryptjs";
import { getUserByEmail } from "./user";
import { signIn } from "@/auth";
import { AuthError, CredentialsSignin } from "next-auth";

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
  const name = firstName.concat(" ", lastName);
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
        firstName: firstName,
        lastName: lastName,
        address: address,
        phone: phone,
        age: age,
        affiliate: affiliation,
        reference: reference,
        interest: interest,
        born: born,
      },
    });

    return {
      success: "User registered successfully!",
    };
  } catch (error) {
    console.log(error);
  }
};

export const credentialsLogin = async (values: z.infer<typeof loginSchema>) => {
  const validatedFields = loginSchema.safeParse(values);

  if (!validatedFields.success) {
    return {
      error: "Invalid fields!",
    };
  }

  const { email, password } = validatedFields.data;

  const user = await getUserByEmail(email);

  if (!user) {
    return {
      error: "User did not exist!",
    };
  }

  if (!user.password) {
    return {
      error: "Try login with another provider!",
    };
  }

  const passwordMatch = await bcrypt.compare(password, user.password!);

  if (!passwordMatch) {
    return {
      error: "Password did not match!",
    };
  }

  try {
    await signIn("credentials", {
      email,
      password,
      redirect: false,
    });
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return { error: "Invalid credentials!" };
        default:
          return { error: "Something went wrong!" };
      }
    }
  }
};
