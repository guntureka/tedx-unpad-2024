import React from 'react';
import Image from 'next/image';

const Footer: React.FC = () => {
  return (
    <div className="w-full h-auto flex flex-col sm:flex-row px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 py-6 sm:py-10 bg-black-abs items-start sm:items-center sm:justify-between">
      <div className="flex flex-col w-full sm:w-auto h-full justify-between mb-6 sm:mb-0">
        <Image src="/logo-dark.png" width={246} height={48} alt="Logo" />
        <p className="font-medium text-sm sm:text-base text-white mt-4 sm:mt-0">© 2024 Copyright. All rights reserved.</p>
      </div>
      <div className="flex flex-col font-inter sm:flex-row w-full sm:w-auto gap-y-6 sm:gap-y-0 gap-x-8 md:gap-x-16 lg:gap-x-24">
        <div className="flex font-inter flex-col w-1/2 sm:w-auto gap-y-4 sm:gap-y-6">
          <p className="font-semibold text-sm sm:text-base text-white">Follow us on</p>
          <a href="https://www.instagram.com/tedxpadjadjaranuniversity/" className="font-medium text-sm sm:text-base text-white hover:text-red-500 transition duration-150">Instagram</a>
          <a href="https://www.linkedin.com/company/tedx-padjadjaran-university/" className="font-medium text-sm sm:text-base text-white hover:text-red-500 transition duration-150">LinkedIn</a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
