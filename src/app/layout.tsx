import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "../components/ui/navbar";
import Footer from "../components/ui/footer";
import { NavbarProvider } from "../components/navbarcontext";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TEDxUnpad",
  description: "by Tim Dev",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-black-bg ">
        <NavbarProvider>
          <Navbar />
          <div className="pt-[102px]">
            {children}
          </div>
          <Footer />
        </NavbarProvider>
      </body>
    </html>
  );
}