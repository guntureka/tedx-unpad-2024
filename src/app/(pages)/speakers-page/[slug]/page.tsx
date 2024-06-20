import React from "react";
import { notFound } from "next/navigation";
import path from "path";
import fs from "fs";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { Metadata } from "next";

interface Speaker {
  slug: string;
  Foto_Speakers: string;
  Profile_Singkat: string;
  Garis_Besar_Ted_Talks: string;
  Additional_Info: string;
  Nama_Speakers: string;
  title: string;
}

interface SpeakersPageProps {
  params: { slug: string };
}

export const metadata: Metadata = {
  title: "Topic Talks",
};

const SpeakersPage: React.FC<SpeakersPageProps> = ({ params }) => {
  const { slug } = params;
  const filePath = path.join(process.cwd(), "src", "lib", "speakers-data.json");
  const jsonData = fs.readFileSync(filePath, "utf-8");
  const speakersData: Speaker[] = JSON.parse(jsonData);
  const selectedSpeaker = speakersData.find((speaker) => speaker.slug === slug);

  if (!selectedSpeaker) {
    return notFound();
  }
  const {
    Foto_Speakers,
    Profile_Singkat,
    Garis_Besar_Ted_Talks,
    Additional_Info,
    Nama_Speakers,
    title,
  } = selectedSpeaker;

  return (
    <article>
      <div className="min-h-screen px-10 py-40">
        <p className="flex justify-center text-center font-bold">
          Explore Our Discussion Topics and Featured Speakers
        </p>
        <div className="container mt-7 flex flex-col items-center">
          <Card className="w-[320px] bg-white md:grid md:w-full md:grid-cols-2 md:border-none md:bg-transparent">
            <CardHeader className="relative mx-auto my-1 flex h-[100px] w-[100px] md:h-[258px] md:w-[227px]">
              <Image
                src={Foto_Speakers}
                alt={title}
                layout="fill"
                objectFit="cover"
                className="rounded-md"
              />
            </CardHeader>
            <CardContent className="content-center">
              <p className="md:-py-10 font-bold text-black md:text-white">
                {title}
              </p>
              <p className="font-semibold text-black md:text-white">
                {Nama_Speakers}
              </p>
              <p className="text-justify text-sm text-black md:text-white">
                {Profile_Singkat}
              </p>
              <p className="text-justify text-black md:text-white">
                {Garis_Besar_Ted_Talks}
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </article>
  );
};

export default SpeakersPage;
