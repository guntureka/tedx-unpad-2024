import { db } from "@/utils/db";
import { PasswordResetToken } from "@prisma/client";

export const getPasswordResetTokenByToken = async (token: string) => {
  try {
    const passwordResetToken = await db.passwordResetToken.findUnique({
      where: {
        token,
      },
    });

    return passwordResetToken;
  } catch (error) {
    return null;
  }
};

export const getPasswordResetTokenByEmail = async (email: string) => {
  try {
    const passwordResetToken = await db.passwordResetToken.findFirst({
      where: {
        email,
      },
    });

    return passwordResetToken;
  } catch (error) {
    return null;
  }
};

export const deletePasswordResetTokenById = async (id: string) => {
  try {
    const passwordResetToken = await db.passwordResetToken.delete({
      where: {
        id,
      },
    });

    return passwordResetToken;
  } catch (error) {
    return null;
  }
};

export const createPasswordResetToken = async ({
  email,
  token,
  expires,
}: {
  email: string;
  token: string;
  expires: Date;
}) => {
  try {
    const passwordResetToken = await db.passwordResetToken.create({
      data: {
        email,
        token,
        expires,
      },
    });

    return passwordResetToken;
  } catch (error) {
    return null;
  }
};

export const getVerificationTokenByEmail = async (email: string) => {
  try {
    const verificationToken = await db.verificationToken.findFirst({
      where: {
        email,
      },
    });

    return verificationToken;
  } catch (error) {
    return null;
  }
};

export const deleteVerificationTokenById = async (id: string) => {
  try {
    const verificationToken = await db.verificationToken.delete({
      where: {
        id,
      },
    });

    return verificationToken;
  } catch (error) {
    return null;
  }
};

export const createVerificationToken = async ({
  email,
  token,
  expires,
}: {
  email: string;
  token: string;
  expires: Date;
}) => {
  try {
    const verificationToken = await db.verificationToken.create({
      data: {
        email,
        token,
        expires,
      },
    });

    return verificationToken;
  } catch (error) {
    return null;
  }
};
