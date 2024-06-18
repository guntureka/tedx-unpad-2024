"use client"

import React from 'react';
import Link from "next/link";
import { useTransition } from "react";

export const EventCard = () => {
  const [isPending, startTransition] = useTransition();
  return (
    <div className="max-w-3xl mx-auto text-white rounded-lg shadow-md overflow-hidden">
      <div className="p-6">
        <h2 className="text-xl font-bold mb-6">Are you ready for our Main Event?</h2>
        <p className="text-lg mb-6 " style={{ color: '#EA887B' }}>TEDx Padjadjaran University 2024: The Flavors of Wisdom</p>
        <div className="mb-6">
          <p className="mb-4">
            <span className="text-gray-400">Date</span>
            <span className="text-white ml-8">Saturday, July 6th 2024</span>
          </p>
          <p className="mb-4">
            <span className="text-gray-400">Time</span>
            <span className="text-white ml-8">14:00 - 20:00 WIB</span>
          </p>
          <p className="mb-4">
            <span className="text-gray-400">Place</span>
            <span className="text-white ml-8">De Majestic Bandung (Jl. Braga No.1)</span>
          </p>
        </div>
        <div className="flex space-x-4 mt-8">
        <Link href="/main-event">
            <button
              type="button"
              className={`rounded-lg bg-red-600 px-8 py-4 text-white duration-150 hover:bg-red-700 ${
                isPending ? "cursor-progress opacity-50" : ""
              }`}
            >
              Learn More
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

