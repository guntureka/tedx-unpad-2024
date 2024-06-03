import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { auth } from "@/auth";
import { SessionProvider } from "next-auth/react";
import { Toaster } from "@/components/ui/sonner";
import Navbar from "@/components/ui/navbar";
import Footer from "@/components/ui/footer";
import { NavbarProvider } from "@/components/navbarcontext";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TEDxUnpad",
  description: "by Tim Dev",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth();

  return (
    <SessionProvider session={session}>
      <html lang="en">
        <body className={`bg-black-bg ` + inter.className}>
          <NavbarProvider>
            <Toaster />
            <Navbar />
            <div className="overflow-hidden pt-[102px]">{children}</div>
            <Footer />
          </NavbarProvider>
        </body>
      </html>
    </SessionProvider>
  );
}
