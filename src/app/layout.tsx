import type { Metadata } from "next";
import "./globals.css";
import { IBM_Plex_Sans, Outfit } from "next/font/google";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import LenisProvider from "@/components/layout/LenisProvider";

const ibmPlexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"], // Add only the weights you use
  display: "swap",
  variable: "--font-ibm",
});

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"], // Add only the weights you use
  display: "swap",
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  title: "NETTAX",
  description: "Simplifying Your Tax Journey with nettax.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${outfit.variable} ${ibmPlexSans.variable}`}>
      <body>
        <LenisProvider>
          <header>
            <Header />
          </header>
          <main>{children}</main>
          <footer>
            <Footer />
          </footer>
        </LenisProvider>
      </body>
    </html>
  );
}
