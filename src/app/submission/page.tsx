import FestivalBanner from "@/components/ui/festival-banner";
import React from "react";

const SubmissionPage = () => {
  return (
    <main className="flex flex-col w-full h-screen px-10 lg:px-20 py-40">
      <div className="flex flex-col w-full xl:px-32  md:px-14 sm:px-10">
        <FestivalBanner />
      </div>
    </main>
  );
};

export default SubmissionPage;
