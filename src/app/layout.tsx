
import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import SplashCursor from "@/components/SplashCursor";
import Footer from "@/components/Footer";
import DisableRightClick from "@/components/DisableRightClick";
import ContactStickyButton from "@/components/ContactStickyButton";

export const metadata: Metadata = {
  metadataBase: new URL('https://www.paydee.me'),
  title: {
    default: "PayDee - ตัวแทนขายทัวร์คอมมิชชั่นสูง รายได้เสริม งานพาร์ทไทม์",
    template: "%s | PayDee"
  },
  description: "สมัครเป็นตัวแทนขายทัวร์กับ PayDee รับคอมมิชชั่นเริ่มต้นถึง 2,000+ บาท/คน ไม่มีเป้ายอดขายขั้นต่ำ งานพาร์ทไทม์ทำที่บ้าน ทีมงานช่วยปิดการขาย มีระบบหลังบ้านครบครัน",
  keywords: [
    "ตัวแทนขายทัวร์",
    "คอมมิชชั่นทัวร์",
    "งานขายทัวร์",
    "รายได้เสริม",
    "งานพาร์ทไทม์",
    "ทัวร์ต่างประเทศ",
    "agent ขายทัวร์",
    "สมัครตัวแทนขาย",
    "คอมมิชชั่นสูง",
    "งานทำที่บ้าน",
    "ธุรกิจท่องเที่ยว",
    "PayDee"
  ],
  authors: [{ name: "PayDee" }],
  icons: {
    icon: [
      { url: '/icon', type: 'image/png' },
      { url: '/img/paydee LOGO 03.svg', type: 'image/svg+xml' }
    ],
    apple: [
      { url: '/apple-icon', type: 'image/png' }
    ],
  },
  openGraph: {
    title: "PayDee - ตัวแทนขายทัวร์คอมมิชชั่นสูง รายได้เสริม งานพาร์ทไทม์",
    description: "สมัครเป็นตัวแทนขายทัวร์กับ PayDee รับคอมมิชชั่นเริ่มต้น 2,000+ บาท/คน ไม่มีเป้ายอดขายขั้นต่ำ งานพาร์ทไทม์ทำที่บ้าน",
    url: "https://www.paydee.me",
    siteName: "PayDee - ตัวแทนขายทัวร์คอมมิชชั่นสูง",
    images: [
      {
        url: "https://www.paydee.me/img/meta.jpg",
        width: 1200,
        height: 630,
        alt: "PayDee ตัวแทนขายทัวร์ คอมมิชชั่นสูง รายได้เสริม งานพาร์ทไทม์",
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
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&family=Michroma&display=swap"
          rel="stylesheet"
        />
        <link rel="dns-prefetch" href="https://nycuvphxbffyzkhbslai.supabase.co" />
        <script dangerouslySetInnerHTML={{
          __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-WSDTLCDQ');`
        }} />
        <link rel="canonical" href="https://www.paydee.me" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "PayDee",
              "alternateName": ["เพย์ดี"],
              "description": "แพลตฟอร์มตัวแทนขายทัวร์ที่ให้คอมมิชชั่นสูง พร้อมระบบสนับสนุนการขายครบครัน",
              "url": "https://www.paydee.me",
              "logo": "https://www.paydee.me/img/paydee%20LOGO%2003.svg",
              "foundingDate": "2016",
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+66-97-919-9293",
                "contactType": "customer service",
                "areaServed": "TH",
                "availableLanguage": ["th", "en"]
              },
              "offers": {
                "@type": "Offer",
                "description": "โอกาสเป็นตัวแทนขายทัวร์ คอมมิชชั่นเริ่มต้น 2,000+ บาทต่อคน ไม่มีขั้นต่ำ",
                "category": "Business Opportunity"
              },
              "serviceType": "Travel Agency",
              "areaServed": {
                "@type": "Country",
                "name": "Thailand"
              }
            })
          }}
        />
        
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "JobPosting",
              "title": "ตัวแทนขายทัวร์ - คอมมิชชั่นสูง",
              "description": "เปิดรับสมัครตัวแทนขายทัวร์ รับคอมมิชชั่นเริ่มต้น 2,000+ บาทต่อคน ไม่มีเป้ายอดขายขั้นต่ำ ทำงานที่บ้านได้ ทีมงานสนับสนุน",
              "employmentType": "PART_TIME",
              "hiringOrganization": {
                "@type": "Organization",
                "name": "PayDee",
                "sameAs": "https://paydee.me",
                "logo": "https://www.paydee.me/img/bg.jpg"
              },
              "jobLocation": {
                "@type": "Place",
                "address": {
                  "@type": "PostalAddress",
                  "addressCountry": "TH",
                  "addressRegion": "ทั่วประเทศไทย"
                }
              },
              "baseSalary": {
                "@type": "MonetaryAmount",
                "currency": "THB",
                "value": {
                  "@type": "QuantitativeValue",
                  "minValue": 1000,
                  "maxValue": 10000,
                  "unitText": "MONTH"
                }
              },
              "workHours": "Flexible",
              "datePosted": "2024-01-01",
              "validThrough": "2024-12-31"
            })
          }}
        />
      </head>
      <body className="">
        <noscript dangerouslySetInnerHTML={{
          __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-WSDTLCDQ"
          height="0" width="0" style="display:none;visibility:hidden"></iframe>`
        }} />
        <DisableRightClick />
        {/* <SplashCursor /> */}
        <div className="relative z-10 overflow-x-hidden">
          <Navbar className="absolute inset-x-0 top-0 z-50" />
          {children}
        </div>
        <Footer />
        <ContactStickyButton />
      </body>
    </html>
  );
}
