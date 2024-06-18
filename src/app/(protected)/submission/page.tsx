import FestivalBanner from "@/components/ui/festival-banner";
import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Submission",
};

const SubmissionPage = () => {
  return (
    <main className="flex h-screen w-full flex-col px-10 py-40 lg:px-20">
      <div className="flex w-full flex-col sm:px-10 md:px-14 xl:px-32">
        <FestivalBanner />
      </div>
    </main>
  );
};

export default SubmissionPage;
