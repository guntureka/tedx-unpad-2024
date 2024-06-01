import NextAuth from "next-auth";
import { db } from "@/lib/db";
import { getUserByID } from "@/data/user";
import { PrismaAdapter } from "@auth/prisma-adapter";
import authConfig from "./auth.config";
import { getTwoFactorConfirmationByUserId } from "@/data/two-factor-confirmation";
import { getAccountByUserId } from "@/data/account";

export const { handlers, auth, signIn, signOut } = NextAuth({
    pages: {
        signIn: "/auth/signin",
        error: "/auth/error",
    },
    events: {
        async linkAccount({ user }) {
            await db.user.update({
                where: { id: user.id },
                data: { emailVerified: new Date() },
            });
        },
    },
    callbacks: {
        async signIn({ user, account }) {
            // Allow OAuth without email verification
            if (account?.provider !== "credentials") {
                return true;
            }

            const existingUser = await getUserByID(user.id!);

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
        async session({ token, session }) {
            if (token.sub && session.user) {
                session.user.id = token.sub;
            }

            if (token.role && session.user) {
                session.user.role = token.role;
            }

            if (session.user) {
                // token.isTwoFactorEnabled
                session.user.isTwoFactorEnabled =
                    token.isTwoFactorEnabled as boolean;
            }

            if (session.user) {
                session.user.firstName = token.firstName as string;
                session.user.lastName = token.lastName as string;
                session.user.email = token.email as string;
                session.user.isOAuth = token.isOAuth as boolean;
            }

            return session;
        },
        async jwt({ token }) {
            if (!token.sub) {
                return token;
            }

            const existingUser = await getUserByID(token.sub);

            if (!existingUser) {
                return token;
            }

            const existingAccount = await getAccountByUserId(existingUser.id);

            token.isOAuth = !!existingAccount;
            token.firstName = existingUser.first_name;
            token.lastName = existingUser.last_name;
            token.email = existingUser.email;
            token.role = existingUser.role;
            token.isTwoFactorEnabled = existingUser.isTwoFactorEnabled;

            return token;
        },
    },
    adapter: PrismaAdapter(db),
    session: { strategy: "jwt" },
    ...authConfig,
});
