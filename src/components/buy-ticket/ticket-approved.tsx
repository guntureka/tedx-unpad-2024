"use client";
import React from "react";
import Link from "next/link";
import { useTransition } from "react";

const TicketApproved = () => {
  const [isPending, startTransition] = useTransition();
  return (
    <main className="flex min-h-screen w-full flex-col px-10 py-40 lg:px-20">
      <div className="md:px-13 flex w-full flex-col sm:px-10 xl:px-32">
        <p className="text-center text-4xl font-bold">Congratulations!</p>
        <p className="text-center text-xl">
          You have been selected as one of the 100 Wisdom Wonderers.
        </p>
        <p className="text-center text-xl mt-4">
          To confirm your spot, please proceed with the payment by clicking
          the button below
        </p>
        <div className="flex justify-center">
          <Link href="https://forms.gle/kH6DXrTD6zzuXuvx8 ">
            <button
              type="button"
              className={`rounded-lg bg-red-600 px-8 py-4  mt-8 font-bold text-white duration-150 hover:bg-red-700 ${
                isPending ? "cursor-progress opacity-50" : ""
              }`}
            >
              PAY NOW
            </button>
          </Link>
        </div>
      </div>
    </main>
  );
};

export default TicketApproved;
