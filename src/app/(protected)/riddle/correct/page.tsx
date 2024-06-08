import RiddleForm from "@/components/riddle/riddle-form";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from "@/components/ui/card";
import React from "react";
import SubmittedPage from "@/components/riddle/submitted-page";

interface RiddlePageProps {
  searchParams?: { [key: string]: string | string[] | undefined };
}

const RiddleCorrectPage = ({ searchParams }: RiddlePageProps) => {
  const { submitted } = searchParams ?? { submitted: true };

  if (submitted) {
    return <SubmittedPage />;
  }

  return (
    <main className="flex flex-col w-full min-h-screen px-10 lg:px-20 py-40">
      <div className="flex flex-col space-y-14 max-w-3xl mx-auto">
        <Card className=" border-gray-600 bg-[#F5F5F5] ">
          <CardContent>
            <CardDescription className="text-black py-5 text-center font-inter text-lg sm:text-xl md:text-2xl lg:text-3xl">
              Congratulations on solving the first riddle! Your keen mind and
              sharp instincts have led you to your first victory. Keep up the
              great work and continue your journey through the challenges ahead.
              Happy riddle-solving!
            </CardDescription>
          </CardContent>
        </Card>
        <Card className=" border-gray-600 bg-[#F5F5F5] ">
          <CardContent className="space-y-4">
            <CardHeader className="text-center text-black font-ebgaramond text-4xl font-semibold  md:text-5xl ">
              Terms and Conditions Second Mission: Speech Discussion Video
            </CardHeader>
            <div className="text-justify text-lg text-black">
              <ol className="list-inside list-decimal">
                <li className="mb-3">
                  Durasi <span className="italic">speech</span> berkisar antara{" "}
                  <span className="font-bold">2-5 menit.</span>
                </li>
                <li className="mb-3">
                  <span className="italic">Speech</span> yang dibawakan boleh
                  menggunakan{" "}
                  <span className="font-bold"> bahasa apa saja</span>, asalkan
                  formal dan tidak mengandung unsur SARA.
                </li>
                <li className="mb-3">
                  Isi <span className="italic">speech</span> mencakup{" "}
                  <span className="font-bold">perkenalan diri </span>
                  dan <span className="font-bold">advokasi</span> yang membahas
                  permasalahan di bidang jawaban{" "}
                  <span className="italic">riddle</span> sebelumnya.
                </li>
                <li className="mb-3">
                  Video diwajibkan{" "}
                  <span className="font-bold">menampilkan diri</span>,
                  diperbolehkan membuat dengan kreativitas masing-masing
                </li>
                <li className="mb-3">
                  Konten wajib berdasarkan{" "}
                  <span className="font-bold">data valid</span> dan{" "}
                  <span className="font-bold"> merujuk pendapat</span> seseorang
                  dari suatu isu sehingga berbentuk tanggapan argumen atau studi
                  kasus
                </li>
                <li className="mb-3">
                  Kumpulkan tautan video youtube bertipe publik pada website
                  kami.
                </li>
              </ol>
            </div>
          </CardContent>
        </Card>
        <Card className=" border-gray-600 bg-[#F5F5F5]">
          <CardContent>
            <CardHeader className="text-black font-garamound text-center font-ebgaramond text-2xl font-semibold md:text-4xl ">
              Submit your video here!
            </CardHeader>
            <RiddleForm variants="video" />
          </CardContent>
        </Card>
      </div>
    </main>
  );
};

export default RiddleCorrectPage;
