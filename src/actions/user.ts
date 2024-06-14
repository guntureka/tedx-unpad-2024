import { db } from "@/utils/db";
import { User } from "@prisma/client";

/**
 * Retrieves all users from the database.
 * @returns {Promise<User[]>} A promise that resolves to an array of users.
 */
export const getAllUser = async () => {
  try {
    const users = await db.user.findMany();

    return users;
  } catch (error) {
    console.log(error);
  }
};

/**
 * Retrieves all users with their associated profiles from the database.
 * @returns {Promise<User[]>} A promise that resolves to an array of users with profiles.
 */
export const getAllUserWithProfile = async () => {
  try {
    const users = await db.user.findMany({
      include: {
        Profile: true,
      },
    });

    return users;
  } catch (error) {
    console.log(error);
  }
};

/**
 * Retrieves a user with their profile by ID.
 * @param id - The ID of the user.
 * @returns A Promise that resolves to the user object with their profile, or undefined if not found.
 */
export const getUserWithProfileById = async (id: string) => {
  try {
    const user = await db.user.findUnique({
      where: {
        id,
      },
      include: {
        Profile: true,
      },
    });

    return user;
  } catch (error) {
    console.log(error);
  }
};

/**
 * Retrieves a user from the database based on their email.
 * @param email - The email of the user to retrieve.
 * @returns A Promise that resolves to the user object if found, or undefined if not found.
 */
export const getUserByEmail = async (email: string) => {
  try {
    const user = await db.user.findUnique({
      where: {
        email: email,
      },
    });

    return user;
  } catch (error) {
    console.log(error);
  }
};

/**
 * Retrieves a user by their ID.
 * @param id - The ID of the user to retrieve.
 * @returns A Promise that resolves to the user object, or null if not found.
 */
export const getUserById = async (id: string) => {
  try {
    const user = await db.user.findUnique({
      where: {
        id,
      },
    });

    return user;
  } catch (error) {
    console.log(error);
  }
};
