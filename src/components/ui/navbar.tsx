"use client";

import React from 'react';
import Link from 'next/link';
import { useNavbarType } from "../navbarcontext";

const Navbar: React.FC = () => {
  const { navbarType } = useNavbarType();

  return (
    <div className="w-screen h-[72px] flex px-4 sm:px-8 md:px-12 lg:px-16 xl:px-[70px] fixed top-[30px] z-[100]">
      <div className="bg-[#FAFAFA] rounded-lg relative flex items-center w-full h-full">
        <div className="absolute left-4 sm:left-6 md:left-8 lg:left-10 xl:left-[30px]">
          <Link href="/main">
            <img className="hidden md:inline-block" src="/logo-light.png" width={164} height={32} alt="Logo" />
            <svg xmlns="http://www.w3.org/2000/svg" className="md:hidden" x="0px" y="0px" width="24px" height="24px" viewBox="0 0 48 48">
              <path d="M39.5,43h-9c-1.381,0-2.5-1.119-2.5-2.5v-9c0-1.105-0.895-2-2-2h-4c-1.105,0-2,0.895-2,2v9c0,1.381-1.119,2.5-2.5,2.5h-9	C7.119,43,6,41.881,6,40.5V21.413c0-2.299,1.054-4.471,2.859-5.893L23.071,4.321c0.545-0.428,1.313-0.428,1.857,0L39.142,15.52	C40.947,16.942,42,19.113,42,21.411V40.5C42,41.881,40.881,43,39.5,43z"></path>
            </svg>
          </Link>
        </div>
        <div className="absolute left-1/2 transform -translate-x-1/2 space-x-4 sm:space-x-4 md:space-x-6 lg:space-x-8 xl:space-x-[40px]">
          {navbarType === 'default' && (
            <>
              <Link href="#" className="text-black-txt text-[14px] sm:text-[16px] font-inter-600 hover:text-red-normal duration-150">Events</Link>
              <Link href="#" className="text-black-txt text-[14px] sm:text-[16px] font-inter-600 hover:text-red-normal duration-150">Partnership</Link>
            </>
          )}
          {navbarType === 'profile' && (
            <>
              <Link href="/dashboardUser" className="text-black-txt text-[14px] sm:text-[16px] font-inter-600 hover:text-red-normal duration-150">Dashboard</Link>
              <Link href="#" className="text-black-txt text-[14px] sm:text-[16px] font-inter-600 hover:text-red-normal duration-150">Submission</Link>
            </>
          )}
          {navbarType === 'blank' && (
            <>
            </>
          )}
        </div>
        <Link href="/dashboardUser" className="absolute right-4 sm:right-6 md:right-8 lg:right-10 xl:right-[30px]">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-[24px] h-[24px]">
            <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z" clipRule="evenodd" />
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
