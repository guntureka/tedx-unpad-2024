"use client"
import { Banner } from "@/components/main/banner";
import { CardBody, CardContainer, CardItem } from "@/components/main/logoX";
import { EventCard } from "@/components/main/eventCard";
import { ProfileCard } from "@/components/main/profileCard";
import Carousel from '@/components/main/Carousel';
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import Timeline from "@/components/main/timeline";
import Link from "next/link";
import { useTransition } from "react";

export default function Mainpage() {
  const images = ["/banner1.jpg"];
  const [isPending, startTransition] = useTransition();

  return (
    <main>
      <Banner className="h-[40rem]" images={images}>
        <div className="z-50 flex flex-col justify-center items-start px-8 md:px-16">
          <h1 className="font-bold text-left bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 py-4 text-4xl md:text-7xl">
            TEDxPadjadjaran University 
          </h1>
          <h2 className="text-left bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 py-4 text-2xl md:text-4xl">
            The Flavors of Wisdom
          </h2>
          <p className="text-left bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 py-4 text-lg md:text-3xl">
            A Place Where Wisdom Can Be Seen and Discovered
          </p>

          <div className="flex flex-row gap-5">
          <Link href="/buy-ticket">
            <button
              type="button"
              className={`rounded-lg bg-red-600 px-8 py-4 text-white duration-150 hover:bg-red-700 ${
                isPending ? "cursor-progress opacity-50" : ""
              }`}
            >
              Buy Tickets
            </button>
          </Link>
          </div>
        </div>
      </Banner>
      
<div className="relative w-full px-4 flex flex-col md:flex-row gap-8 justify-between">
  <div className="relative z-10 flex flex-1 flex-col justify-center mt-20 md:mt-20 items-center order-1 md:order-1 bg-opacity-75">
    <div className="w-full md:w-[633px] h-auto md:h-[163px] mb-8 about-us">
      <div
        className="relative bg-darkgrey md:bg-black px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-center text-left"
        style={{ boxShadow: "0 0 20px rgba(255, 255, 255, 0.5)" }}
      >
        <h1 className="font-bold text-justify text-lg md:text-xl text-white mb-4 relative z-50">
          About TEDx
        </h1>
        <p className="font-normal text-justify text-sm md:text-base text-white mb-4 relative z-50">
        TED is a global platform and a conference where Technology, Entertainment, and Design converge. Now, it has expanded to a multitude of worldwide communities and initiatives exploring everything from science and business to education, arts and global issues.
        </p>
      </div>
    </div>

    <div className="w-full md:w-[633px] h-auto md:h-[163px] about-us">
      <div
        className="relative bg-darkgrey md:bg-black px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-center text-left"
        style={{ boxShadow: "0 0 20px rgba(255, 255, 255, 0.5)" }}
      >
        <h1 className="font-bold text-lg md:text-xl text-white mb-4 relative z-50">
          About TEDxPadjadjaran University
        </h1>
        <p className="font-normal text- text-sm md:text-base text-white mb-4 relative z-50">
        A vibrant community here at TEDxPadjadjaran University, we&apos;re driven by a passion to share groundbreaking ideas with the city&apos;s brightest minds. We achieve this by hosting self-organized events that bring people together for a truly immersive TED-like experience.
        </p>
      </div>
    </div>
  </div>

  <div className="flex-1 order-2 md:order-2 mt-8 md:mt-0">
    <div className="hidden md:block">
      <CardContainer className="inter-var">
        <CardBody className="relative group/card dark:hover:shadow-2xl dark:hover:shadow-red-500/[0.1] dark:border-white/[0.2] border-black/[0.1] w-[600px] h-[600px] p-4 md:p-6">
          <CardItem translateZ="100" className="w-auto mt-4">
            <Image
              src="/logox.png"
              height="600"
              width="600"
              className="h-[600px] w-[600px] object-cover group-hover/card:shadow-xl"
              alt="thumbnail"
            />
          </CardItem>
        </CardBody>
      </CardContainer>
    </div>
  </div>
  <div className="block md:hidden absolute top-0 left-0 w-full h-full mt-10 mb-4">
    <Image
      src="/logox.png"
      layout="fill"
      objectFit="cover"
      alt="background"
      className="opacity-20"
    />
  </div>
</div>

<div className="flex flex-col sm:flex-row justify-start gap-8 w-full mt-20 mx-auto px-4 sm:px-0 lg:mt-40">
    <div className="flex items-center justify-center w-full sm:w-1/2 ml-0 lg:ml-60">
        <EventCard />
    </div>
    <div className="flex items-center justify-center w-full sm:w-1/2 ml-0 lg:mr-40">
        <iframe   
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2800.6706842215935!2d107.60792948679277!3d-6.920882922189378!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e63aa98dc66b%3A0xbaa3d2206acbf2b4!2sDe%20Majestic!5e0!3m2!1sen!2sid!4v1718394433062!5m2!1sen!2sid" 
            width="400" 
            height="350" 
            title="Google Maps"
            allowFullScreen
            loading="lazy" 
            className="rounded-[20px]"
            referrerPolicy="no-referrer-when-downgrade">
        </iframe>
    </div>
</div>


<div className="min-h-full text-white py-8">
  <h1 className="text-center text-2xl font-bold mb-8 mt-[100px]">Our Speakers</h1>
  <div className="flex justify-center">
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-0 mt-6 md:grid-cols-4 lg:mt-15">
      <div className="mt-4 sm:mt-0">
        <ProfileCard
          imageSrc="/speakers-1.jpg"
          name="Dr. Fredrick Dermawan Purba, M.Psi."
          title=" "
          barText={"Master of\nQuarter Life Crisis"}
          barColor="#C93420"
          triangleColor="#C93420" // Warna segitiga
        />
      </div>
      <div className="mt-20 sm:mt-0">
        <ProfileCard
          imageSrc="/mystery.png"
          name="COMING SOON"
          title=""
          barText={"Master of\nEconomics and Entrepreneurship"}
          barColor="#EA887B"
          triangleColor="#EA887B" // Warna segitiga
        />
      </div>
      <div className="mt-20 sm:mt-0 font">
        <ProfileCard
          imageSrc="/mystery.png"
          name="COMING SOON"
          title=""
          barText={"Master of\n Inferiority Complex"}
          barColor="#EA887B"
          triangleColor="#EA887B" // Warna segitiga
        />
      </div>
      <div className="mt-20 sm:mt-0">
        <ProfileCard
          imageSrc="/mystery.png"
          name="COMING SOON"
          title=""
          barText={"Master of\nPersonalized Algorithm"}
          barColor="#EA887B"
          triangleColor="#EA887B" // Warna segitiga
        />
      </div>
    </div>
  </div>
</div>

      <div className="justify-center items-center min-h-full mt-20">
        <div className="text-center mb-20 text-white">
          <h1 className="text-2xl font-bold mb-10">
            Explore Our Discussion Topics and Featured Speakers
          </h1>
          <Carousel />
        </div>
      </div>
    </main>
  );
}
