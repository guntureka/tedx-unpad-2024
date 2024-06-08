"use server";

import {
  forgotPasswordSchema,
  loginSchema,
  newPasswordSchema,
  registerSchema,
} from "@/lib/schemas";
import { getAge } from "@/utils/converter";
import { db } from "@/utils/db";
import { z } from "zod";
import bcrypt from "bcryptjs";
import { getUserByEmail } from "./user";
import { signIn } from "@/auth";
import { AuthError, CredentialsSignin } from "next-auth";
import { generatePasswordResetToken } from "@/lib/tokens";
import { sendPasswordResetByEmail } from "./mail";
import { getPasswordResetTokenByToken } from "./token";

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

export const forgotPassword = async (
  values: z.infer<typeof forgotPasswordSchema>
) => {
  const validatedFields = forgotPasswordSchema.safeParse(values);

  if (!validatedFields.success) {
    return {
      error: "Invalid fields",
    };
  }

  const { email } = validatedFields.data;

  const user = await getUserByEmail(email);

  if (!user) {
    return {
      error: "Email not found",
    };
  }

  try {
    const passwordResetToken = await generatePasswordResetToken(email);

    if (!passwordResetToken) {
      return {
        error: "Token failed to generated",
      };
    }
    // generate email

    const sendEmail = await sendPasswordResetByEmail(
      passwordResetToken.email,
      passwordResetToken.token
    );

    return { success: "Reset email has been sent!" };
  } catch (error) {
    return {
      error: "Something went wrong!",
    };
  }
};

export const newPassword = async (
  token: string,
  values: z.infer<typeof newPasswordSchema>
) => {
  const validatedFields = newPasswordSchema.safeParse(values);

  if (!validatedFields.success) {
    return {
      error: "Invalid fields!",
    };
  }

  if (!token) {
    return { error: "Missing token!" };
  }

  const { password, confirmPassword } = validatedFields.data;

  const existingToken = await getPasswordResetTokenByToken(token);

  if (!existingToken) {
    return {
      error: "Invalid token!",
    };
  }

  const hasExpired = new Date() > new Date(existingToken.expires);

  if (hasExpired) {
    return {
      error: "Token has expired!",
    };
  }

  const existingUser = await getUserByEmail(existingToken.email);

  if (!existingUser) {
    return {
      error: "Email does not exist!",
    };
  }

  const passwordHash = await bcrypt.hash(password, 10);

  try {
    await db.user.update({
      where: {
        id: existingUser.id,
      },
      data: {
        password: passwordHash,
      },
    });

    await db.passwordResetToken.delete({
      where: {
        id: existingToken.id,
      },
    });

    return { success: "Password updated successfully" };
  } catch (error) {
    return {
      error: "Something went wrong",
    };
  }
};
