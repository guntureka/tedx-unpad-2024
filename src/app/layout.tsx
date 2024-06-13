import { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import { cn } from "@/lib/utils";
import ThemeProvider from "@/components/theme-provider";
import Footer from "@/components/ui/footer";
import Header from "@/components/ui/header";
import { SessionProvider } from "next-auth/react";
import { auth } from "@/auth";

const inter = Inter({ subsets: ["latin"] });

/**
 * Represents the metadata for the layout.
 */
export const metadata: Metadata = {
  /**
   * Represents the title of the layout.
   */
  title: {
    /**
     * Represents the absolute title.
     */
    absolute: "",
    /**
     * Represents the default title.
     */
    default: "Home | TEDxUNPAD",
    /**
     * Represents the title template.
     */
    template: "%s | TEDxUNPAD",
  },
  /**
   * Represents the icons for the layout.
   */
  icons: {
    /**
     * Represents the icon path.
     */
    icon: "/logox.png",
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth();
  return (
    <html lang="en " suppressHydrationWarning>
      <body className={cn("bg-gradient-to-r from-[#000000] to-[#451b15] from-50%", inter.className)}>
        <SessionProvider>
          <ThemeProvider attribute="class" defaultTheme="dark">
            <Header session={session} />
            {children}
            <Footer />
          </ThemeProvider>
        </SessionProvider>
      </body>
    </html>
  );
}
