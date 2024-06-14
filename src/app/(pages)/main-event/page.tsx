import { Metadata } from "next";
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Main Event",
};

const MainEventPage = () => {
  return (
    <main>
      <div className="flex justify-center pt-40">
        <p className="font-bold text-xl">The Flavors We Serve</p>
      </div>
      <div className="flex flex-col md:grid md:grid-cols-3  justify-center w-full min-h-screen px-10 ">
        <section className="my-6 mx-auto">
          <Card className="bg-transparent w-[300px] h-[268px] shadow-lg shadow-white mx-0 ">
            <CardContent className="px-2">
              <div className="relative w-[300px] h-[118px] -mx-2 my-0.5 ">
                <Image
                  src="/Interactive-Exhibition.jpeg"
                  alt="interactive exhibition"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <p className="text-base text-center font-semibold py-2">
                Interactive Exhibition
              </p>
              <p className="text-xs text-justify py-1">
                <p className="text-xs text-justify py-1">
                  Imagine an exhibition where you don&apos;t just look, you
                  participate! This section will likely feature art
                  installations or displays that encourage you to touch, move,
                  or interact with them in some way. It&apos;s a chance to fully
                  immerse yourself in the artistic experience.
                </p>
              </p>
            </CardContent>
          </Card>
        </section>
        <section className="my-6 mx-auto">
          <Card className="bg-transparent w-[300px] h-[268px] shadow-lg shadow-white mx-0 ">
            <CardContent className="px-2">
              <div className="relative w-[300px] h-[118px] -mx-2 my-0.5 ">
                <Image
                  src="/speakers-talk.jpeg"
                  alt="Speaker Talks"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <p className="text-base text-center font-semibold py-2">
                Speaker Talks
              </p>
              <p className="text-xs text-justify py-1">
                Expand your knowledge and gain fresh perspectives through
                engaging presentations by industry experts or thought leaders on
                post colonialism and inferiority complex, social media algorithm
                on personalization, quarter life crisis & Gen Z and Indonesian
                Economics.
              </p>
            </CardContent>
          </Card>
        </section>
        <section className="my-6 mx-auto">
          <Card className="bg-transparent w-[300px] h-[268px] shadow-lg shadow-white mx-0 ">
            <CardContent className="px-2">
              <div className="relative w-[300px] h-[118px] -mx-2 my-0.5 ">
                <Image
                  src="/art-performance.jpeg"
                  alt="interactive exhibition"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <p className="text-base text-center font-semibold py-2">
                Art Performance
              </p>
              <p className="text-xs text-justify py-1">
                A multi-sensory experience that uses movement, music, and
                audience interaction to explore the theme of &quot;Flavors of
                Wisdom.&quot;
              </p>
            </CardContent>
          </Card>
        </section>
        <section className="my-6 mx-auto">
          <Card className="bg-transparent w-[300px] h-[268px] shadow-lg shadow-white mx-0 ">
            <CardContent className="px-2">
              <div className="relative w-[300px] h-[118px] -mx-2 my-0.5 ">
                <Image
                  src="/jazz-performance.jpeg"
                  alt="Jazz Band Performance"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <p className="text-base text-center font-semibold py-2">
                Jazz Band Performance
              </p>
              <p className="text-xs text-justify py-1">
                Immerse yourself in the world of jazz with a captivating
                performance by a live band. Tap your toes or simply sway to the
                music as the band creates an unforgettable atmosphere.
              </p>
            </CardContent>
          </Card>
        </section>
        <section className="my-6 mx-auto">
          <Card className="bg-transparent w-[300px] h-[268px] shadow-lg shadow-white mx-0 ">
            <CardContent className="px-2">
              <div className="relative w-[300px] h-[118px] -mx-2 my-0.5 ">
                <Image
                  src="/interactive-speakers.jpeg"
                  alt="interactive speakers"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <p className="text-base text-center font-semibold py-2">
                Interactive Session with Speaker
              </p>
              <p className="text-xs text-justify py-1">
                This is your chance to delve deeper! After the speaker talk,
                there might be a dedicated session where you can ask questions,
                share your thoughts, and have a more focused discussion with the
                speaker on the presented topic.
              </p>
            </CardContent>
          </Card>
        </section>
        <section className="my-6 mx-auto">
          <Card className="bg-transparent w-[300px] h-[268px] shadow-lg shadow-white mx-0 ">
            <CardContent className="px-2">
              <div className="relative w-[300px] h-[118px] -mx-2 my-0.5 ">
                <Image
                  src="/networking-session.jpeg"
                  alt="Networking Session"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <p className="text-base text-center font-semibold py-2">
                Networking Session
              </p>
              <p className="text-xs text-justify py-1">
                Mingle with fellow wisdom wonderers! This is a designated time
                to connect with others, share your impressions of the event, and
                potentially build new relationships or collaborations. It&apos;s a
                great opportunity to expand your network and meet like-minded
                people.
              </p>
            </CardContent>
          </Card>
        </section>
      </div>
    </main>
  );
};

export default MainEventPage;
