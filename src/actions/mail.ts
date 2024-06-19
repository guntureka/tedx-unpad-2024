"use server";

import { transporter } from "@/utils/mail";

// export const sendTwoFactorTokenEmail = async (email: string, token: string) => {
//   await resend.emails.send({
//     from: "onboarding@resend.dev",
//     to: email,
//     subject: "Two-factor authentication code",
//     html: `<p>Your two-factor authentication code is: <strong>${token}</strong></p>`,
//   });
// };

export const sendPasswordResetByEmail = async (
  email: string,
  token: string,
) => {
  const appUrl = process.env.NEXT_PUBLIC_URL || "http://localhost:3000";
  const resetLink = `${appUrl}/auth/new-password?token=${token}`;

  const mailOptions = {
    from: "admin@tedxpadjadjaranuniversity.com",
    to: email,
    subject: "Reset your password",
    html: `<p>Click <a href="${resetLink}">here</a> to reset your password.</p>`,
  };

  try {
    await transporter.sendMail(mailOptions);
  } catch (error) {
    console.log(error);
  }
};

// export const sendVerificationEmail = async (email: string, token: string) => {
//   const confirmLink = `http://localhost:3000/auth/new-verification?token=${token}`;

//   await resend.emails.send({
//     from: "onboarding@resend.dev",
//     to: email,
//     subject: "Confirm your email",
//     html: `<p>Click <a href="${confirmLink}">here</a> to confirm email.</p>`,
//   });
// };
