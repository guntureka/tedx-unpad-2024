import React from "react";
import Image from "next/legacy/image";
import FestivalBanner from "@/components/ui/festival-banner";
import ProfileForm from "@/components/profile/profile-form";
import { auth } from "@/auth";
import { getProfileByUserId } from "@/actions/profile";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Profile",
};

const ProfilePage = async () => {
  const session = await auth();

  if (!session) {
    return null;
  }

  const profile = await getProfileByUserId(session.user.id!);

  if (!profile) {
    return <div>not found</div>;
  }

  return (
    <main className="flex flex-col w-full min-h-screen px-10 lg:px-20 py-40">
      <div className="flex flex-col w-full xl:px-32  md:px-14 sm:px-10 space-y-14">
        <FestivalBanner />
        <ProfileForm {...profile} />
      </div>
    </main>
  );
};

export default ProfilePage;
