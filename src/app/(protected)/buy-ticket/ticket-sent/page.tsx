"use client";
import React from "react";
import Link from "next/link";
import { useTransition } from "react";

const TicketSent = () => {
  const [isPending, startTransition] = useTransition();
  return (
    <main className="flex min-h-screen w-full flex-col px-10 py-40 lg:px-20">
      <div className="md:px-13 flex w-full flex-col space-y-14 sm:px-10 xl:px-32">
        <p className="text-center text-4xl">Your ticket has been sent!</p>
        <p className="text-center text-4xl">
          Checkout more about our event here!
        </p>
        <div className="flex justify-center">
          <Link href="/">
            <button
              type="button"
              className={`rounded-lg bg-red-600 px-8 py-4 text-white duration-150 hover:bg-red-700 ${
                isPending ? "cursor-progress opacity-50" : ""
              }`}
            >
              Go Home
            </button>
          </Link>
        </div>
      </div>
    </main>
  );
};

export default TicketSent;
