"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from "@/components/ui/card";
import React, { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";
import { useCurrentUser } from "@/hooks/use-current-user";

const RiddleCorrectPage = () => {
  const userId = useCurrentUser()?.id;
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [videoLink, setVideoLink] = useState("");
  const router = useRouter();

  useEffect(() => {
    const checkAlreadySubmitted = async () => {
      if (!userId) return;

      try {
        const response = await fetch(`/api/riddle?userId=${userId}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (response.ok) {
          const data = await response.json();
          if (data.riddleSubmission) {
            setHasSubmitted(true);
          }
        } else {
          const errorData = await response.json();
          alert(`Error: ${errorData.error}`);
        }
      } catch (error) {
        console.error("Error checking if already submitted:", error);
        alert("An error occurred while checking if already submitted.");
      }
    };

    checkAlreadySubmitted();
  }, [userId]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (videoLink) {
      try {
        const response = await fetch("/api/riddle", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ userId, url: videoLink }),
        });

        if (response.ok) {
          console.log("Submitted video link:", videoLink);
          router.push("/riddleDone");
        } else {
          const errorData = await response.json();
          alert(`Error: ${errorData.error}`);
        }
      } catch (error) {
        console.error("Error submitting video link:", error);
        alert("An error occurred while submitting the video link.");
      }
    } else {
      alert("Please enter a video link.");
    }
  };

  if (hasSubmitted) {
    return (
      <div className="container mx-auto mt-10">
        <Card className="border-gray-600 lg:mb-64 sm:mt-30 sm:mb-24 bg-white sm:mx-5 lg:mx-60">
          <CardContent>
            <CardDescription className="text-lg text-center py-5 text-black font-inter">
              Thank you for participating! Your enthusiasm and effort are
              greatly appreciated. We hope you enjoy the challenges and continue
              to have fun while solving them.
            </CardDescription>
          </CardContent>
        </Card>
        <button className="mx-auto mt-4 bg-red-500 text-white font-bold py-1 px-2 mb-10 rounded">
          <div className="text-white font-inter font-bold">
            <a href="/riddle">Go to homepage</a>
          </div>
        </button>
      </div>
    );
  }

  return (
    <div className="container mt-11">
      <Card className="border-gray-600 mt-4 bg-white sm:mx-5 lg:mx-60">
        <CardContent>
          <CardDescription className="text-lg text-center py-5 text-black font-inter">
            Congratulations on solving the first riddle! Your keen mind and
            sharp instincts have led you to your first victory. Keep up the
            great work and continue your journey through the challenges ahead.
            Happy riddle-solving!
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
                Durasi <span className="italic">speech</span> berkisar antara{" "}
                <span className="font-bold">2-5 menit.</span>
              </li>
              <li className="mb-3">
                <span className="italic">Speech</span> yang dibawakan boleh
                menggunakan <span className="font-bold"> bahasa apa saja</span>,
                asalkan formal dan tidak mengandung unsur SARA.
              </li>
              <li className="mb-3">
                Isi <span className="italic">speech</span> mencakup{" "}
                <span className="font-bold">perkenalan diri </span>dan{" "}
                <span className="font-bold">advokasi</span> yang membahas
                permasalahan di bidang jawaban <span className="italic">riddle</span>{" "}
                sebelumnya.
              </li>
              <li className="mb-3">
                Video diwajibkan <span className="font-bold">menampilkan diri</span>,
                diperbolehkan membuat dengan kreativitas masing-masing
              </li>
              <li className="mb-3">
                Konten wajib berdasarkan <span className="font-bold">data valid</span> dan{" "}
                <span className="font-bold"> merujuk pendapat</span> seseorang dari
                suatu isu sehingga berbentuk tanggapan argumen atau studi kasus
              </li>
              <li className="mb-3">
                Kumpulkan tautan video youtube bertipe publik pada website kami.
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
  );
};

export default RiddleCorrectPage;