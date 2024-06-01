"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from "@/components/ui/card";
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { FlipWords } from "@/components/ui/flip-words";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation"; 
import { useNavbarType } from "../../../components/navbarcontext";
import { useEffect } from "react";

const RiddleCorrectPage = () => {
  const { setNavbarType } = useNavbarType();

  useEffect(() => {
    setNavbarType("blank");
  }, []);

  const words = ["Hustler", "Starter", "Seekers", "Explorers", "Odyssey"];
  const [videoLink, setVideoLink] = useState("");
  const router = useRouter();
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (videoLink) {
      console.log("Submitted video link:", videoLink);
      router.push("/riddleDone")
    } else {
      alert("Please enter a video link.");
    }
  };
  return (
    <>
      <div className="">
        <div className="container mt-11">
          <Card className="border-gray-600 mt-4 bg-white sm:mx-5 lg:mx-60">
            <CardContent>
              <CardDescription className="text-lg text-center py-5 text-black font-inter">
                Congratulations on solving the first riddle! Your keen mind and
                sharp instincts have led you to your first victory. Keep up the
                great work and continue your journey through the challenges
                ahead. Happy riddle-solving!
              </CardDescription>
            </CardContent>
          </Card>
          <Card className="border-gray-600 mt-4 mb-4 bg-white sm:mx-5 lg:mx-60">
            <CardContent>
              <CardHeader className="text-4xl font-bold text-left font-ebgaramond">
                Terms and Conditions Second Mission: Speech Discussion Video
              </CardHeader>
              <div className="text-lg text-justify font-inter">
                <ol className="list-decimal list-inside">
                  <li className="mb-3">
                    Durasi <span className="italic">speech</span> berkisar
                    antara <span className="font-bold">2-5 menit.</span>{" "}
                  </li>
                  <li className="mb-3">
                    <span className="italic">Speech</span> yang dibawakan boleh
                    menggunakan{" "}
                    <span className="font-bold"> bahasa apa saja</span>, asalkan
                    formal dan tidak mengandung unsur SARA.
                  </li>
                  <li className="mb-3">
                    Isi <span className="italic">speech</span> mencakup{" "}
                    <span className="font-bold">perkenalan diri </span>dan{" "}
                    <span className="font-bold">advokasi</span> yang membahas
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
                    <span className="font-bold"> merujuk pendapat</span>{" "}
                    seseorang dari suatu isu sehingga berbentuk tanggapan
                    argumen atau studi kasus
                  </li>
                  <li className="mb-3">
                    Kumpulkan tautan video youtube bertipe publik pada website
                    kami.
                  </li>
                </ol>
              </div>
            </CardContent>
          </Card>
          <Card className="border-gray-600 mt-4 bg-white sm:mx-5 lg:mx-60 font-inter">
            <CardContent>
              <CardHeader className="text-3xl font-bold text-left font-ebgaramond">
                Submit your video here:
              </CardHeader>
              <form onSubmit={handleSubmit}>
                <Input
                  type="text"
                  id="linkRiddle"
                  placeholder="Enter your video link here"
                  value={videoLink}
                  onChange={(e) => setVideoLink(e.target.value)}
                  required
                />
                <button
                  type="submit"
                  className="mx-auto mt-4 bg-red-500 text-white font-bold py-2 px-4 rounded"
                >
                  Submit
                </button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
};

export default RiddleCorrectPage;
