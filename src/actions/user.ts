import { db } from "@/utils/db";

export const getUserByEmail = async (email: string) => {
  try {
    const user = await db.user.findUnique({
      where: {
        email: email,
      },
    });

    if (!user) {
      return null;
    }

    return user;
  } catch (error) {
    console.log(error);
  }
};
