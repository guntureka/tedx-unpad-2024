"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useNavbarType } from "../navbarcontext";

const Navbar: React.FC = () => {
  const { navbarType } = useNavbarType();

  return (
    <div className="w-screen h-[72px] flex px-4 sm:px-8 md:px-12 lg:px-16 xl:px-[70px] fixed top-[30px] justify-center items-center z-10">
      <div className="bg-[#FAFAFA] rounded-lg py-[20px] relative w-full h-full items-center">
        <div className="absolute left-4 sm:left-6 md:left-8 lg:left-10 xl:left-[30px] inline-block">
          <Link href="#">
            <Image src="/logo-light.png" width={164} height={32} alt="Logo" />
          </Link>
        </div>
        <div className="absolute left-1/2 transform -translate-x-1/2 space-x-2 sm:space-x-4 md:space-x-6 lg:space-x-8 xl:space-x-[40px]">
          {navbarType === 'default' && (
            <>
              <Link href="#" className="text-black-txt text-[14px] sm:text-[16px] font-inter-600 hover:text-red-normal duration-150"> </Link>
              <Link href="#" className="text-black-txt text-[14px] sm:text-[16px] font-inter-600 hover:text-red-normal duration-150"> </Link>
            </>
          )}
          {navbarType === 'profile' && (
            <>
              <Link href="#" className="text-black-txt text-[14px] sm:text-[16px] font-inter-600 hover:text-red-normal duration-150">Dashboard</Link>
              <Link href="#" className="text-black-txt text-[14px] sm:text-[16px] font-inter-600 hover:text-red-normal duration-150">Submission</Link>
            </>
          )}
        </div>
        <div className="absolute right-4 sm:right-6 md:right-8 lg:right-10 xl:right-[30px]">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-[20px] sm:w-[24px] h-[20px] sm:h-[24px]">
            <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z" clipRule="evenodd" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
