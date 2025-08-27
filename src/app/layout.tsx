
import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import SplashCursor from "@/components/SplashCursor";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "PayDee - Best Commission Worldwide Tour",
  description: "ร่วมเป็นตัวแทนขายทัวร์กับ PayDee รับค่าคอมมิชชั่นสูง มีทีมงานคอยสนับสนุน ไม่มีขั้นต่ำ ไม่ต้องเข้าออฟฟิศ",
  keywords: ["ตัวแทนขายทัวร์", "คอมมิชชั่น", "ทัวร์ต่างประเทศ", "PayDee", "งานพาร์ทไทม์"],
  authors: [{ name: "PayDee" }],
  openGraph: {
    url: "https://paydee.com",
    siteName: "PayDee",
    images: [
      {
        url: "/img/bg.jpg",
        width: 1200,
        height: 630,
        alt: "PayDee - ตัวแทนขายทัวร์ค่าคอมมิชชั่นสูง",
      },
    ],
    locale: "th_TH",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link 
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap" 
          rel="stylesheet" 
        />
      </head>
      <body className="">
        <SplashCursor />
        <div className="relative z-10 overflow-x-hidden">
          <Navbar className="absolute inset-x-0 top-0 z-50" />
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
