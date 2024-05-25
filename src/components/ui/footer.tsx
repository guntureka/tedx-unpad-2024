import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Footer: React.FC = () => {
  return (  
    <div className="w-screen h-[240px] flex px-[70px] py-[52px] bg-black-abs items-center justify-between">
        <div className="flex flex-col h-full justify-between">
            <Image src="/logo-dark.png" width={246} height={48} alt="Logo"/>
            <p className="font-inter-500 text-[16px] text-white">© 2024 Copyright. All rights reserved.</p>
        </div>
        <div className="flex flex-row gap-x-[130px]">
            <div className="flex flex-col gap-y-[20px]">
                <p className="font-inter-700 text-[16px] text-white">Navigations</p>
                <Link href="#" className="font-inter-500 text-[16px] text-white hover:text-red-normal transition-150">Main Event</Link>
                <Link href="#" className="font-inter-500 text-[16px] text-white hover:text-red-normal transition-150">Gallery</Link>
                <Link href="#" className="font-inter-500 text-[16px] text-white hover:text-red-normal transition-150">Partnership</Link>
            </div>
            <div className="flex flex-col gap-y-[20px]">
                <p className="font-inter-700 text-[16px] text-white">Follow us on</p>
                <a href="#" className="font-inter-500 text-[16px] text-white hover:text-red-normal transition-150">Instagram</a>
                <a href="#" className="font-inter-500 text-[16px] text-white hover:text-red-normal transition-150">LinkedIn</a>
                <a href="#" className="font-inter-500 text-[16px] text-white hover:text-red-normal transition-150">Tiktok</a>
            </div>
        </div>
    </div>
  );
};

export default Footer;