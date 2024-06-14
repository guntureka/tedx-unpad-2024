import { db } from "@/utils/db";
import { User } from "@prisma/client";

/**
 * Represents a custom output type.
 */
type CustomOutput = {
  select?: {};
  include?: {};
};

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
 * Retrieves all users along with their profile and ticket information.
 * @returns {Promise<User[]>} A promise that resolves to an array of users with their profile and ticket information.
 */
export const getAllUserWithProfileTicket = async () => {
  try {
    const users = await db.user.findMany({
      include: {
        Profile: true,
        Ticket: true,
      },
    });

    return users;
  } catch (error) {
    console.log(error);
  }
};

/**
 * Retrieves all users with custom output.
 * @param custom - The custom output to filter the users.
 * @returns A promise that resolves to an array of users.
 */
export const getAllUserWithCustom = async (custom: CustomOutput) => {
  try {
    const users = await db.user.findMany(custom);

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
 * Retrieves all users with their associated tickets from the database.
 * @returns {Promise<User[]>} A promise that resolves to an array of users with their associated tickets.
 */
export const getAllUserWithTicket = async () => {
  try {
    const users = await db.user.findMany({
      include: {
        Ticket: true,
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
 * Retrieves a user with their associated ticket by ID.
 * @param id - The ID of the user to retrieve.
 * @returns A Promise that resolves to the user object with the associated ticket, or undefined if not found.
 */
export const getUserWithTicketById = async (id: string) => {
  try {
    const user = await db.user.findUnique({
      where: {
        id,
      },
      include: {
        Ticket: true,
      },
    });

    return user;
  } catch (error) {
    console.log(error);
  }
};

/**
 * Retrieves a user with their profile and ticket information by ID.
 * @param id - The ID of the user to retrieve.
 * @returns A Promise that resolves to the user object with profile and ticket information.
 */
export const getUserWithProfileTicketById = async (id: string) => {
  try {
    const user = await db.user.findUnique({
      where: {
        id,
      },
      include: {
        Profile: true,
        Ticket: true,
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

/**
 * Retrieves a user by their ID with custom options.
 * @param id - The ID of the user to retrieve.
 * @param custom - Custom options for retrieving the user.
 * @returns A Promise that resolves to the retrieved user.
 */
export const getUserCustomById = async (id: string, custom: CustomOutput) => {
  try {
    const user = await db.user.findUnique({
      where: {
        id,
      },
      ...custom,
    });

    return user;
  } catch (error) {
    console.log(error);
  }
};
