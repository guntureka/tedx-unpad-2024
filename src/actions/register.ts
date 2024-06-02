"use server";
import * as z from "zod";
import { db } from "@/lib/db";
import bcrypt from "bcryptjs";
import { RegisterSchema } from "@/schemas";
import { getUserByEmail } from "@/data/user";
import { sendVerificationEmail } from "@/lib/mail";
import { generateVerificationToken } from "@/lib/tokens";

export const register = async (values: z.infer<typeof RegisterSchema>) => {
    const validatedFields = RegisterSchema.safeParse(values);

    if (!validatedFields.success) {
        return { error: "Invalid fields!" };
    }

    const {
        email,
        password,
        firstName,
        lastName,
        address,
        age,
        phone,
        affiliation,
        reference,
        interest,
    } = validatedFields.data;
    const hashedPassword = await bcrypt.hash(password, 10);

    const existingUser = await getUserByEmail(email);

    if (existingUser) {
        return { error: "Email already in use!" };
    }

    await db.user.create({
        data: {
            first_name: firstName,
            last_name: lastName,
            email,
            password: hashedPassword,
        },
    });

    await db.profile.create({
        data: {
            user: {
                connect: {
                    email,
                },
            },
            address,
            age,
            phone,
            affiliate: affiliation,
            reference,
            interest,
        },
    });

    // const verificationToken = await generateVerificationToken(email);
    // await sendVerificationEmail(
    //     verificationToken.email,
    //     verificationToken.token
    // );

    return { success: "User registered successfully!" };
};
