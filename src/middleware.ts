import NextAuth from "next-auth";
import {
  apiAuthPrefix,
  authRoutes,
  DEFAULT_LOGIN_REDIRECT,
  publicRoutes,
} from "@/routes";
import { auth } from "@/auth";
import authConfig from "@/auth.config";
import { NextRequest } from "next/server";

// const { auth } = NextAuth(authConfig);

export default auth((req) => {
  console.log(req.auth);
  const user = req.auth?.user;
  //   const isApiAuthRoute = nextUrl.pathname.startsWith(apiAuthPrefix);
  //   const isPublicRoute = publicRoutes.includes(nextUrl.pathname);
  //   const isAuthRoute = authRoutes.includes(nextUrl.pathname);

  //   if (isApiAuthRoute) {
  //     return;
  //   }

  //   if (isAuthRoute) {
  //     if (isLoggedIn) {
  //       return Response.redirect(new URL(DEFAULT_LOGIN_REDIRECT, nextUrl));
  //     }
  //     return;
  //   }

  //   if (!isLoggedIn && !isPublicRoute) {
  //     return Response.redirect(new URL("/auth/login", nextUrl));
  //   }

  return;
});

// Optionally, don't invoke Middleware on some paths
export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
