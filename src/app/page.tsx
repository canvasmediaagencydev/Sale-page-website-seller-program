"use client"

import { lazy, Suspense } from "react";
import Button from "@/components/Button";
import Image from "next/image";
import HeroSection from "@/components/sections/HeroSection";
import StatisticsSection from "@/components/sections/StatisticsSection";
import TripsSection from "@/components/sections/TripsSection";
import WorkingProcessSection from "@/components/sections/WorkingProcessSection";
import { useTrips } from "@/hooks/useTrips";

// Lazy load components that are not immediately visible
const AutoPlayVideo = lazy(() => import("@/components/AutoPlayVideo"));

const ProgramSection = () => (
  <section className="py-20 md:py-32 text-gray-900 relative overflow-hidden">
    {/* Background Elements */}
    <div className="absolute inset-0">
      <div className="absolute top-20 left-20 w-40 h-40 bg-paydee-blue-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-20 w-32 h-32 bg-paydee-orange-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-conic from-paydee-yellow-primary/3 via-transparent to-paydee-blue-primary/3 rounded-full blur-3xl"></div>
    </div>

    <div className="container mx-auto max-w-7xl px-4 lg:px-8 xl:px-16 relative">
      {/* Section Header */}
      <div className="text-center mb-16">
        <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-paydee-blue-primary/10 to-paydee-orange-primary/10 backdrop-blur-sm border border-paydee-blue-primary/20 text-paydee-blue-primary rounded-full text-sm font-semibold mb-6">
          <span className="w-2 h-2 bg-paydee-orange-primary rounded-full mr-2 animate-pulse"></span>
          ระบบการขายที่ทันสมัย
        </div>
        <h2 className="text-4xl md:text-6xl font-black text-gray-900 mb-6 leading-tight">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-paydee-blue-primary via-paydee-orange-primary to-paydee-yellow-primary">
            Seller Program
          </span>
          <span className="block text-gray-900">
            ระบบหลังบ้านที่ทันสมัย
          </span>
        </h2>
        <p className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
          เพิ่มประสิทธิภาพการขายด้วยเทคโนโลยีที่ทันสมัย ติดตามยอดขายและคอมมิชชั่นแบบเรียลไทม์
        </p>
      </div>

      {/* Main Content */}
      <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center mb-20">
        {/* Left Content */}
        <div className="space-y-8">
          {/* Features List */}
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-gradient-to-br from-paydee-blue-primary to-paydee-blue-light rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-white font-bold">1</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">ติดตามยอดขายแบบเรียลไทม์</h3>
                <p className="text-gray-600">ดูสถานะการขาย คอมมิชชั่น และรายได้ของคุณได้ตลอด 24 ชั่วโมง</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-gradient-to-br from-paydee-blue-primary to-paydee-blue-light rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-white font-bold">2</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">ระบบจัดการลูกค้าครบครัน</h3>
                <p className="text-gray-600">เครื่องมือช่วยจัดการข้อมูลลูกค้า ติดตามประวัติการซื้อ และสร้างความสัมพันธ์</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-gradient-to-br from-paydee-blue-primary to-paydee-blue-light rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-white font-bold">3</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">รายงานและการวิเคราะห์</h3>
                <p className="text-gray-600">ข้อมูลเชิงลึกเพื่อช่วยวางแผนการขายและเพิ่มประสิทธิภาพ</p>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button className="bg-gradient-to-r from-paydee-blue-primary via-paydee-orange-primary to-paydee-yellow-primary bg-size-200 bg-pos-0 hover:bg-pos-100 text-white px-8 py-4 rounded-2xl text-lg font-bold shadow-xl hover:shadow-paydee-orange-primary/25 transform hover:scale-105 transition-all duration-500">
              เริ่มใช้ระบบวันนี้
            </Button>
            <button className="border-2 border-paydee-blue-primary text-paydee-blue-primary hover:bg-paydee-blue-primary hover:text-white px-8 py-4 rounded-2xl text-lg font-semibold transition-all duration-300 transform hover:scale-105">
              ดูคุณสมบัติเพิ่มเติม
            </button>
          </div>
        </div>

        {/* Right Content - Image */}
        <div className="relative">
          <div className="relative">
            <Image
              src="/img/labtop.svg"
              alt="Seller Program Dashboard"
              width={600}
              height={450}
              className="w-full h-auto relative z-10"
              priority
            />
            <div className="absolute -bottom-6 -right-6 w-full h-full bg-gradient-to-br from-paydee-blue-primary/10 to-paydee-orange-primary/10 rounded-3xl"></div>
          </div>
        </div>
      </div>

      {/* Video Section */}
      <div className="text-center">
        <div className="inline-flex items-center px-4 py-2 bg-paydee-orange-primary/10 border border-paydee-orange-primary/20 text-paydee-orange-primary rounded-full text-sm font-semibold mb-8">
          🎬 ดูการใช้งานจริง
        </div>
        <h3 className="text-2xl md:text-4xl font-bold text-gray-900 mb-8">
          เรียนรู้การใช้งานระบบใน
          <span className="text-paydee-orange-primary"> 1 นาที</span>
        </h3>

        <div className="flex justify-center">
          <div className="relative w-full max-w-4xl">
            <Suspense
              fallback={
                <div className="w-full aspect-video bg-gradient-to-br from-gray-100 to-gray-200 rounded-3xl animate-pulse flex items-center justify-center border-2 border-gray-200">
                  <div className="text-gray-500 text-lg">กำลังโหลดวิดีโอ...</div>
                </div>
              }
            >
              <AutoPlayVideo
                src="https://player.mux.com/PJD5WuOZZgVlr1vMylE1101Fow5nicWNqxLUOt2nKPTw?"
                style={{ width: "100%", border: "none", aspectRatio: "16/9" }}
                className="rounded-3xl shadow-2xl border-4 border-white"
              />
            </Suspense>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-paydee-yellow-primary/20 rounded-full blur-2xl"></div>
            <div className="absolute -top-4 -left-4 w-32 h-32 bg-paydee-blue-primary/20 rounded-full blur-2xl"></div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const PartnerSection = () => (
  <section className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
    {/* Subtle background elements */}
    <div className="absolute top-10 left-10 w-20 h-20 bg-paydee-blue-primary/5 rounded-full blur-2xl"></div>
    <div className="absolute bottom-10 right-10 w-24 h-24 bg-paydee-orange-primary/5 rounded-full blur-2xl"></div>

    <div className="container mx-auto max-w-7xl px-4 lg:px-8 xl:px-16 relative">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-6">
          <div className="inline-flex items-center px-4 py-2 bg-paydee-blue-primary/10 text-paydee-blue-primary rounded-full text-sm font-semibold">
            <span className="w-2 h-2 bg-paydee-orange-primary rounded-full mr-2"></span>
            พันธมิตรคุณภาพ
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight"
             style={{ fontFamily: 'Playfair Display, serif' }}>
            We Work With The{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-paydee-blue-primary to-paydee-orange-primary">
              Best Partners
            </span>
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            เราร่วมมือกับพันธมิตรคุณภาพ เพื่อทำให้ทุกทริปกับ PayDee พิเศษยิ่งขึ้น
            มากกว่าแค่การเดินทาง แต่คือประสบการณ์น่าจดจำ พร้อมสิทธิประโยชน์ที่รอคุณอยู่
          </p>
        </div>
        <div className="relative">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
            <Image
              src="/img/gogo.png"
              alt="Partner Logo"
              width={280}
              height={140}
              className="mx-auto"
            />
          </div>
          <div className="absolute -bottom-4 -right-4 w-full h-full bg-gradient-to-br from-paydee-blue-primary/10 to-paydee-orange-primary/10 rounded-2xl -z-10"></div>
        </div>
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