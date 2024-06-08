import MultiParallax from "@/components/home/multi-parallax";
import { Metadata } from "next";
import Image from "next/legacy/image";

export default function Home() {
  return (
    <main className="min-h-screen text-black">
      <div className="w-full">
        <MultiParallax />
      </div>
    </main>
    // <main className="flex flex-col w-full min-h-screen px-10 lg:px-20 py-40">
    //   <div className="w-full">
    //     <MultiParallax />
    //   </div>
    // </main>
  );
}
