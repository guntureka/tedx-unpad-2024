import { UserRole } from "@prisma/client";
import NextAuth, { DefaultSession, User } from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      role: UserRole | null;
    } & DefaultSession["user"];
  }

  interface User {
    role: UserRole | null;
  }
}

import { JWT } from "next-auth/jwt";

declare module "next-auth/jwt" {
  interface JWT {
    role: UserRole | null;
  }
}
