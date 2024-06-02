"use server";

import { db } from "../db";

export const getAccountById = async (id: string) => {
  try {
    const account = await db.account.findUnique({
      where: {
        id: id,
      },
    });

    return account;
  } catch (error) {
    return null;
  }
};

export const getAccountByUserId = async (id: string) => {
  try {
    const account = await db.account.findFirst({
      where: {
        userId: id,
      },
    });

    return account;
  } catch (error) {
    return null;
  }
};
