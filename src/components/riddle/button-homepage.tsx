"use client";

import { useRouter } from "next/navigation";
import React from "react";

const ButtonHomepage = () => {
  const router = useRouter();

  return (
    <button
      type="button"
      onClick={() => router.push("/")}
      className="font-inter rounded bg-red-500 p-2 text-white sm:p-3 md:p-4 lg:p-5"
    >
      Back to home
    </button>
  );
};

export default ButtonHomepage;
