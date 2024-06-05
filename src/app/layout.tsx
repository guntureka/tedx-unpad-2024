import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { auth } from "@/auth";
import { SessionProvider } from "next-auth/react";
import { Toaster } from "@/components/ui/sonner";
import Navbar from "@/components/ui/navbar";
import Footer from "@/components/ui/footer";
import { NavbarProvider } from "@/components/navbarcontext";
import "./globals.css";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TEDxPadjadjaran University",
  description: "by Tim Dev",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth();

  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/logox.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/logox.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/logox.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/logox.png" />
      </Head>
      <SessionProvider session={session}>
        <html lang="en">
          <body className={`bg-black-bg ` + inter.className}>
            <NavbarProvider>
              <Toaster />
              <Navbar />
              <div className="pt-[102px]">{children}</div>
              <Footer />
            </NavbarProvider>
          </body>
        </html>
      </SessionProvider>
    </>
  );
}
