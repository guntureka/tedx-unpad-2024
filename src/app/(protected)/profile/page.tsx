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
    <main className="flex min-h-screen w-full flex-col px-10 py-40 lg:px-20">
      <div className="z-0">
        <Image
          src={"/background-profile.png"}
          alt="login background"
          objectFit="cover"
          layout="fill"
          priority
          className="absolute z-0"
        />
      </div>
      <div className="flex w-full flex-col space-y-14 sm:px-10 md:px-14 xl:px-32">
        <FestivalBanner />
        <ProfileForm {...profile} />
      </div>
    </main>
  );
};

export default ProfilePage;
