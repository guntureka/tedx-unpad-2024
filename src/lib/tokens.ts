import {
  createPasswordResetToken,
  createVerificationToken,
  deletePasswordResetTokenById,
  deleteVerificationTokenById,
  getPasswordResetTokenByEmail,
  getVerificationTokenByEmail,
} from "@/actions/token";
import { v4 as uuidv4 } from "uuid";

const EXPIRES_TOKEN_TIME = new Date(new Date().getTime() + 3600 * 1000);

export const generatePasswordResetToken = async (email: string) => {
  const token = uuidv4();
  const expires = EXPIRES_TOKEN_TIME;

  const existingToken = await getPasswordResetTokenByEmail(email);

  if (existingToken) {
    await deletePasswordResetTokenById(existingToken.id);
  }

  const passwordResetToken = await createPasswordResetToken({
    email,
    token,
    expires,
  });

  return passwordResetToken;
};

export const generateVerificationToken = async (email: string) => {
  const token = uuidv4();
  const expires = EXPIRES_TOKEN_TIME;

  const existingToken = await getVerificationTokenByEmail(email);

  if (existingToken) {
    await deleteVerificationTokenById(existingToken.id);
  }

  const verificationToken = await createVerificationToken({
    email,
    token,
    expires,
  });

  return verificationToken;
};
