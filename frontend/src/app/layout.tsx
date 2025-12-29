import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter, Roboto } from "next/font/google";
import "./globals.css";
import { Variable } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ChatWidget } from "@/components/common/ChatWidget";
import QueryProvider from "@/components/providers/QueryProvider";
import { ToastProvider } from "@/components/common/ToastContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"]
})

export const metadata: Metadata = {
  title: "A.R.C Global",
  description: "For over 15 years, A.R.C. Global Tours & Travels has been crafting unforgettable travel experiences for adventurers around the globe. We believe that travel is more than just visiting places; it's about creating stories that last a lifetime.",
};

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"]
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${roboto.variable} ${inter.variable} antialiased`}
      >
        <QueryProvider>
          <ToastProvider>
            <Navbar />
            <div className="md:pt-20 pt-[3.2294rem] bg-[#F0F0F0] overflow-x-hidden">
              {children}
            </div>
            <ChatWidget />
            <Footer />
          </ToastProvider>
        </QueryProvider>
      </body>
    </html>
  );
}

//subheading - roboto
//display bold d2 - roboto 3.5rem, 4rem lh, #FFFFFF
//Sub_heading-semibold/sub5 - roboto w-600 2rem, 2.5rem lh, #242323
//Paragraph-regular/p5 - roboto
//Paragraph-regular/p3 - roboto w--400, .875rem size, 1.375rem lh, #606060
//Paragraph-semibold/p3 - roboto, .875rem, 1.375rem lineheight w-600 #242323
//Heading-semibold/h3 - roboto, w-600, 1.25rem, 1.75rem lh, #242323