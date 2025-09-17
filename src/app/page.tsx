"use client"

import { lazy, Suspense } from "react";
import Button from "@/components/Button";
import Image from "next/image";
import CircularText from "@/components/CircularText";
import HeroSection from "@/components/sections/HeroSection";
import StatisticsSection from "@/components/sections/StatisticsSection";
import TripsSection from "@/components/sections/TripsSection";
import WorkingProcessSection from "@/components/sections/WorkingProcessSection";
import { useTrips } from "@/hooks/useTrips";

// Lazy load components that are not immediately visible
const AutoPlayVideo = lazy(() => import("@/components/AutoPlayVideo"));

const ProgramSection = () => (
  <section className="min-h-screen text-gray-900">
    <div className="container mx-auto max-w-7xl md:pt-10 px-4 lg:px-8 xl:px-12">
      <div>
        <div className="relative flex justify-center items-center mt-5 px-5">
          <Image src="/img/labtop.svg" alt="Seller Program" width={300} height={300} className="md:hidden z-20" />
          <CircularText
            text="SELLER*PROGRAM*BEST*"
            onHover="speedUp"
            spinDuration={20}
            className="absolute -top-15 right-40 z-10 md:hidden"
          />
        </div>

        <div className="bg-black flex flex-col text-white mx-5 p-8 rounded-3xl md:p-10 md:px-30 relative">
          <div className="md:w-4/7">
            <p className="md:text-6xl text-xl items-center font-semibold"
              style={{ fontFamily: 'Playfair Display, serif' }}>
              Seller Program
            </p>
            <p className="md:text-2xl mt-4">
              เพิ่มประสิทธิภาพการขาย ด้วยระบบหลังบ้านที่ทันสมัย
              ติดตามยอด และสถานะทุกขั้นตอน โปร่งใส ชัดเจน
              ตรวจสอบเรียลไทม์ได้ตลอด 24 ชั่วโมง
            </p>
            <Button className="bg-paydee-orange-primary hover:bg-paydee-yellow-primary text-white px-4 md:px-30 py-3 md:py-4 rounded-full text-md md:text-xl font-semibold w-full md:w-auto transition-all transform hover:scale-105 mt-8">
              ร่วมทีมกับเราตอนนี้
            </Button>
          </div>
          <Image 
            src="/img/labtop.svg" 
            alt="Seller Program" 
            width={400} 
            height={300} 
            className="w-2/5 absolute right-10 -top-25 hidden md:block" 
          />
        </div>
      </div>
      
      <div className="flex justify-center items-center md:mt-10 p-4 md:p-8">
        <Suspense 
          fallback={
            <div className="w-full md:w-4/6 aspect-video bg-gray-300 rounded-xl md:rounded-2xl animate-pulse flex items-center justify-center">
              <div className="text-gray-500">Loading video...</div>
            </div>
          }
        >
          <AutoPlayVideo
            src="https://player.mux.com/PJD5WuOZZgVlr1vMylE1101Fow5nicWNqxLUOt2nKPTw?"
            style={{ width: "95%", border: "none", aspectRatio: "16/9" }}
            className="rounded-xl md:rounded-2xl w-full md:w-4/6"
          />
        </Suspense>
      </div>
    </div>
  </section>
);

const PartnerSection = () => (
  <section className="my-10 md:mt-15 py-15 border-t-2 border-b-2 border-gray-200">
    <div className="container mx-auto max-w-7xl px-4 lg:px-8 xl:px-12 flex flex-col md:flex-row justify-center items-center">
      <div className="w-full p-5 order-2 md:order-1">
        <p className="text-2xl md:text-5xl font-semibold text-center md:text-end" 
           style={{ fontFamily: 'Playfair Display, serif' }}>
          We Work With The <br />Best Partners
        </p>
        <p className="text-center md:text-end text-base md:text-lg mt-3 md:mt-5">
          เราร่วมมือกับพันธมิตรคุณภาพ
          เพื่อทำให้ทุกทริปกับ PayDee พิเศษยิ่งขึ้น
          มากกว่าแค่การเดินทาง แต่คือประสบการณ์น่าจดจำ
          พร้อมสิทธิประโยชน์ที่รอคุณอยู่
        </p>
      </div>
      <div className="w-full order-1 md:order-2 mb-6 md:mb-0">
        <Image 
          src="/img/gogo.png" 
          alt="Partner Logo" 
          width={200} 
          height={100} 
          className="mx-auto w-32 h-auto md:w-55 md:h-auto" 
        />
      </div>
    </div>
  </section>
);
export default function Home() {
  const { trips, loading, currentPage, paginationData, handlePageChange } = useTrips();

  return (
    <>
      <HeroSection />
      <WorkingProcessSection />
      <StatisticsSection />
      <ProgramSection />
      <PartnerSection />
      <TripsSection 
        loading={loading}
        paginationData={paginationData}
        currentPage={currentPage}
        handlePageChange={handlePageChange}
        totalTrips={trips.length}
      />
    </>
  );
}