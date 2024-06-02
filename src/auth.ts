import NextAuth from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { db } from "@/lib/db";
import authConfig from "@/auth.config";
import { getUserById } from "@/lib/actions/user";
import { getAccountByUserId } from "./lib/actions/account";
import { UserRole } from "@prisma/client";
import { Adapter } from "next-auth/adapters";

export const { handlers, auth, signIn, signOut } = NextAuth({
  adapter: PrismaAdapter(db) as Adapter,
  session: { strategy: "jwt" },
  //   pages: {
  //     signIn: "/auth/signin",
  //     error: "/auth/error",
  //   },
  events: {
    async linkAccount({ user }) {
      await db.user.update({
        where: {
          id: user.id,
        },
        data: {
          emailVerified: new Date(),
        },
      });
    },
  },
  //   callbacks: {
  //     // async signIn({ user, account }) {
  //     //   if (account?.provider !== "credentials") {
  //     //     return true;
  //     //   }

  //     //   const existingUser = await getUserById(user.id!);

  //     //   // Prevent sign in without email verification
  //     //   // if (!existingUser?.emailVerified) {
  //     //   //   return false;
  //     //   // }

  //     //   // if (existingUser.isTwoFactorEnabled) {
  //     //   //   const twoFactorConfirmation = await getTwoFactorConfirmationByUserId(existingUser.id);

  //     //   //   if (!twoFactorConfirmation) {
  //     //   //     return false;
  //     //   //   }

  //     //   //   // Delete two factor confirmation for next sign in
  //     //   //   await db.twoFactorConfirmation.delete({
  //     //   //     where: {
  //     //   //       id: twoFactorConfirmation.id,
  //     //   //     },
  //     //   //   });
  //     //   // }

  //     //   return true;
  //     // },
  //     async session({ token, session }) {
  //       if (token.sub && session.user) {
  //         session.user.id = token.sub;
  //       }

  //       if (token.role && session.user) {
  //         session.user.role = token.role as UserRole;
  //       }

  //       if (session.user) {
  //         // token.isTwoFactorEnabled
  //         session.user.isTwoFactorEnabled = token.isTwoFactorEnabled as boolean;
  //       }

  //       console.log(session.user);

  //       if (session.user) {
  //         session.user.firstName = token.firstName as string;
  //         session.user.lastName = token.lastName as string;
  //         session.user.email = token.email as string;
  //         session.user.isOAuth = token.isOAuth as boolean;
  //         session.user.role = token.role;
  //       }

  //       return session;
  //     },
  //     async jwt({ token }) {
  //       if (!token.sub) {
  //         return token;
  //       }

  //       const existingUser = await getUserById(token.sub);

  //       if (!existingUser) {
  //         return token;
  //       }

  //       console.log(existingUser);

  //       const existingAccount = await getAccountByUserId(existingUser.id);

  //       console.log(existingAccount);

  //       token.isOAuth = !!existingAccount;
  //       token.firstName = existingUser.first_name;
  //       token.lastName = existingUser.last_name;
  //       token.email = existingUser.email;
  //       token.role = existingUser.role;
  //       token.isTwoFactorEnabled = existingUser.isTwoFactorEnabled;

  //       return token;
  //     },
  //   },
  callbacks: {
    async jwt({ token, user }) {
      if (!token || !user) {
        return token;
      }

      token.role = user.role;
      token.first_name = user.first_name;
      token.last_name = user.last_name;
      token.isOAuth = user.isOAuth;

      return token;
    },
    async session({ session, token, user }) {
      if (token.sub && session.user) {
        session.user.id = token.sub;
        session.user.role = token.role;
        session.user.first_name = token.first_name;
        session.user.last_name = token.last_name;
        session.user.isOAuth = token.isOAuth;
      }

      //   console.log(user);

      return session;
    },
  },
  ...authConfig,
});
