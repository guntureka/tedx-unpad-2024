import NextAuth, { CredentialsSignin } from "next-auth";
import authConfig from "./auth.config";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { db } from "./utils/db";
import Google from "next-auth/providers/google";
import Credentials from "next-auth/providers/credentials";
import { loginSchema } from "./lib/schemas";
import { getUserByEmail } from "./actions/user";
import bcrypt from "bcryptjs";

export const { handlers, auth, signIn, signOut } = NextAuth({
  adapter: PrismaAdapter(db),
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/auth/login",
  },

  callbacks: {
    async jwt({ token, user, profile }) {
      if (!token.sub || !user) {
        return token;
      }

      token.sub = user.id;
      token.role = user.role;

      return token;
    },
    async session({ token, session }) {
      if (token.sub && session.user) {
        session.user.id = token.sub;
        session.user.role = token.role;
      }

      return session;
    },
    async signIn({ user, account }) {
      // Allow OAuth without email verification
      if (account?.provider !== "credentials") {
        return true;
      }

      // const existingUser = await getUserByID(user.id!);

      // Prevent sign in without email verification
      // if (!existingUser?.emailVerified) {
      //   return false;
      // }

      // if (existingUser.isTwoFactorEnabled) {
      //   const twoFactorConfirmation = await getTwoFactorConfirmationByUserId(existingUser.id);

      //   if (!twoFactorConfirmation) {
      //     return false;
      //   }

      //   // Delete two factor confirmation for next sign in
      //   await db.twoFactorConfirmation.delete({
      //     where: {
      //       id: twoFactorConfirmation.id,
      //     },
      //   });
      // }

      return true;
    },
  },
  events: {
    async linkAccount({ user }) {
      await db.user.update({
        where: {
          id: user.id,
        },
        data: { emailVerified: new Date() },
      });

      const nameSplit = user.name?.split(" ")!;

      const firstName = nameSplit[0]!;
      const lastName = nameSplit.slice(1).join(" ");

      await db.profile.create({
        data: {
          user: {
            connect: {
              id: user.id,
            },
          },
          firstName: firstName,
          lastName: lastName,
        },
      });
    },
  },
  ...authConfig,
});
