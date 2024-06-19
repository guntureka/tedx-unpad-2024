import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-black-abs flex h-auto w-full flex-col items-start space-y-10 bg-black px-10 py-6 sm:flex-row sm:items-center sm:justify-between sm:py-10 md:space-y-0 lg:px-20">
      <div className="mb-6 flex h-full w-full flex-col justify-between space-y-4 sm:mb-0 sm:w-auto">
        <Image src="/logo-dark.png" width={246} height={48} alt="Logo" />
        <p className="mt-4 text-sm font-medium text-white sm:mt-0 sm:text-base">
          © 2024 Copyright. All rights reserved.
        </p>
      </div>
      <div className="font-inter flex w-full flex-col gap-x-8 gap-y-6 sm:w-auto sm:flex-row sm:gap-y-0 md:gap-x-16 lg:gap-x-24">
        <div className="font-inter flex w-1/2 flex-col gap-y-4 sm:w-auto sm:gap-y-6">
          <p className="text-lg font-semibold text-white sm:text-xl">
            Follow us on
          </p>
          <a
            href="https://www.instagram.com/tedxpadjadjaranuniversity/"
            className="text-sm font-medium text-white transition duration-150 hover:text-red-500 sm:text-base"
          >
            Instagram
          </a>
          <a
            href="https://www.linkedin.com/company/tedx-padjadjaran-university/"
            className="text-sm font-medium text-white transition duration-150 hover:text-red-500 sm:text-base"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
