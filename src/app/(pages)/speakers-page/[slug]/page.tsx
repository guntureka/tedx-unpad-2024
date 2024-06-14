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
        <p className="flex justify-center font-bold text-center">
          Explore Our Discussion Topics and Featured Speakers
        </p>
        <div className="container flex flex-col items-center  ">
          <Card className="bg-white  w-[320px] md:w-full md:grid md:grid-cols-2 md:bg-transparent md:border-none">
            <CardHeader className="relative flex mx-auto my-1 w-[100px] h-[100px] md:w-[227px] md:h-[258px] ">
              <Image
                src={Foto_Speakers}
                alt={title}
                layout="fill"
                objectFit="cover"
                className="rounded-md"
              />
            </CardHeader>
            <CardContent className="content-center">
              <p className="text-black md:text-white md:-py-10 font-bold">{title}</p>
              <p className="text-black md:text-white font-semibold">{Nama_Speakers}</p>
              <p className="text-black md:text-white text-sm text-justify">
                {Profile_Singkat} {Garis_Besar_Ted_Talks}
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </article>
  );
};

export default SpeakersPage;
