// import NextAuth, { type DefaultSession } from "next-auth";
// import { UserRole } from "@prisma/client";

// export type ExtendedUser = DefaultSession["user"] & {
//   role: UserRole;
//   isTwoFactorEnabled: boolean;
//   isOAuth: boolean;
//   firstName: string;
//   lastName: string;
// };

// declare module "next-auth" {
//   interface Session {
//     user: ExtendedUser;
//   }
// }

// import { JWT } from "next-auth/jwt";

// declare module "next-auth/jwt" {
//   interface JWT {
//     role: "ADMIN" | "USER";
//   }
// }

import { DefaultSession } from "next-auth";
import NextAuth, { type User } from "next-auth";
import { UserRole } from "@prisma/client";
import { JWT } from "next-auth/jwt";

/**
 * Declaration for the "next-auth" module.
 */
declare module "next-auth" {
  /**
   * Represents the session object.
   */
  interface Session {
    /**
     * Represents the user object within the session.
     */
    user: {
      /**
       * Represents the role of the user.
       */
      role: UserRole | null;
      isTwoFactorEnabled: boolean | null;
      isOAuth: boolean | null;
      first_name: string | null;
      last_name: string | null;
    } & DefaultSession["user"];
  }

  /**
   * Represents the user object.
   */
  interface User {
    /**
     * Represents the role of the user.
     */
    role: UserRole | null;
    isTwoFactorEnabled: boolean | null;
    isOAuth: boolean | null;
    first_name: string | null;
    last_name: string | null;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    role: UserRole | null;
    isTwoFactorEnabled: boolean | null;
    isOAuth: boolean | null;
    first_name: string | null;
    last_name: string | null;
  }
}
