import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Riddle",
};

const RiddleLayout = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>;
};

export default RiddleLayout;
