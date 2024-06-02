import type { NextAuthConfig } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import Google from "next-auth/providers/google";
import { LoginSchema } from "@/lib/schemas";
import bcrypt from "bcryptjs";
import { getUserByEmail } from "@/lib/actions/user";

export default {
  providers: [
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    Credentials({
      async authorize(credentials, request) {
        const validatedFields = LoginSchema.safeParse(credentials);

        if (validatedFields.success) {
          const { email, password } = validatedFields.data;

          const user = await getUserByEmail(email);
          if (!user || !user.password) return null;

          const passwordMatch = await bcrypt.compare(password, user.password);

          if (passwordMatch) {
            return {
              id: user.id,
              first_name: user.first_name,
              last_name: user.last_name,
              name: user.name,
              email: user.email,
              emailVerified: user.emailVerified,
              image: user.image,
              password: user.password,
              role: user.role,
              isTwoFactorEnabled: user.isTwoFactorEnabled,
              isOAuth: false, // Add this line
              firstName: user.first_name, // Add this line
              lastName: user.last_name, // Add this line
            };
          }
        }

        return null;
      },
    }),
  ],
} satisfies NextAuthConfig;
