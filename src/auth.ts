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
  callbacks: {
    async jwt({ token, user }) {
      if (!token || !user) {
        return token;
      }

      //   const account = await db.account.findFirst({
      //     where: {
      //       userId: user.id,
      //     },
      //   });

      const account = await getAccountByUserId(user.id!);

      let isOAuth = false;

      if (account) {
        isOAuth = true;
      }

      token.role = user.role;
      token.first_name = user.first_name;
      token.last_name = user.last_name;
      token.isOAuth = isOAuth;
      token.isTwoFactorEnabled = user.isTwoFactorEnabled;

      return token;
    },
    async session({ session, token }) {
      if (token.sub && session.user) {
        session.user.id = token.sub;
        session.user.role = token.role;
        session.user.first_name = token.first_name;
        session.user.last_name = token.last_name;
        session.user.isOAuth = token.isOAuth;
        session.user.isTwoFactorEnabled = token.isTwoFactorEnabled;
      }

      return session;
    },
  },
  ...authConfig,
});
