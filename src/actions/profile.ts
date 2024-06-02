"use server";

import { db } from "@/lib/db";
import { getUserProfileByID } from "@/data/user";
import { ProfileSchema } from "@/schemas";
import { z } from "zod";
import { currentUser } from "@/lib/auth";

export const getProfile = async () => {
    try {
        const user = await currentUser();

        if (!user) {
            throw new Error("Unauthorized");
        }

        const dbUser = await getUserProfileByID(user.id as string);

        if (!dbUser) {
            throw new Error("User not found");
        }

        return { status: "success", data: dbUser };
    } catch (error: any) {
        console.error(error);
        return { status: "error", message: error.message };
    }
};

export const updateProfile = async (data: z.infer<typeof ProfileSchema>) => {
    try {
        const user = await currentUser();

        if (!user) {
            throw new Error("Unauthorized");
        }

        const dbUser = await getUserProfileByID(user.id as string);

        if (!dbUser) {
            throw new Error("User not found");
        }

        await db.user.update({
            where: { id: dbUser.id },
            data: {
                first_name: data.firstName,
                last_name: data.lastName,
            },
        });

        await db.profile.update({
            where: { id: dbUser?.Profile?.id },
            data: {
                age: data.age,
                phone: data.phone,
                address: data.address,
                affiliate: data.affiliation,
                reference: data.reference,
                interest: data.interest,
            },
        });

        return { status: "success", message: "Profile updated" };
    } catch (error: any) {
        console.error(error);
        return { status: "error", message: error.message };
    }
}