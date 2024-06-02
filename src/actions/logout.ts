"use server";

import { signOut } from "@/auth";
import { optimizeImage } from "next/dist/server/image-optimizer";

export const logout = async () => {
  // some server stuff
  await signOut({
    redirectTo: "/auth/login",
  });
};
