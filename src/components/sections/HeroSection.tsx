"use client"

import Image from "next/image";
import Button from "@/components/Button";
import { ANIMATION_DELAYS } from "@/constants";
import { RiRocketFill, RiCalendarLine } from "react-icons/ri";

interface HeroSectionProps {
  className?: string;
}

const HeroSection = ({ className = "" }: HeroSectionProps) => {
  return (
    <section className={`min-h-screen relative overflow-hidden ${className}`}>
      {/* Background - Light blue gradient with clouds effect */}
      <div className="absolute inset-0">
        {/* Base gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-white via-sky-50 to-sky-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900" />

        {/* Cloud-like decorative elements */}
        <div className="absolute top-20 left-10 w-96 h-96 bg-white/80 dark:bg-paydee-blue-primary/10 rounded-full blur-3xl" />
        <div className="absolute top-40 right-20 w-80 h-80 bg-sky-100/60 dark:bg-paydee-blue-light/10 rounded-full blur-3xl" />
        <div className="absolute bottom-40 left-1/4 w-72 h-72 bg-white/70 dark:bg-paydee-orange-primary/10 rounded-full blur-3xl" />
        <div className="absolute top-60 left-1/2 w-64 h-64 bg-sky-50/80 dark:bg-paydee-blue-primary/5 rounded-full blur-3xl" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto max-w-6xl px-4 pt-32 pb-16">
        {/* Text Content - Centered */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          {/* Main Headline */}
          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight mb-6 animate-fade-in-up"
            style={{
              animationDelay: `${ANIMATION_DELAYS.HERO_TITLE}s`,
              animationFillMode: 'both'
            }}
          >
            เปลี่ยนการท่องเที่ยว
            <span className="bg-gradient-to-r from-paydee-blue-primary to-paydee-blue-light bg-clip-text text-transparent">
              เป็นรายได้
            </span>
          </h1>

          {/* Subtitle */}
          <p
            className="text-lg md:text-xl text-gray-500 dark:text-gray-400 max-w-xl mx-auto mb-10 animate-fade-in-up"
            style={{
              animationDelay: `${ANIMATION_DELAYS.HERO_CONTENT}s`,
              animationFillMode: 'both'
            }}
          >
            ค่าคอมเต็ม 100% สำหรับคนทำงานจริง ตรวจสอบได้ จ่ายภายใน 24 ชั่วโมง
          </p>

          {/* CTA Buttons */}
          <div
            className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up"
            style={{
              animationDelay: `${ANIMATION_DELAYS.HERO_BUTTON}s`,
              animationFillMode: 'both'
            }}
          >
            <Button
              onClick={() => window.open('https://app.paydee.me', '_blank')}
              className="bg-paydee-blue-primary hover:bg-paydee-blue-primary/90 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <span className="flex items-center gap-2">
                <RiRocketFill className="text-xl" />
                เริ่มต้นฟรี
              </span>
            </Button>

            <Button
              onClick={() => document.getElementById('trips-section')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-800 dark:text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 border border-gray-200 dark:border-gray-600 shadow-md hover:shadow-lg flex items-center gap-2"
            >
              <RiCalendarLine className="text-xl text-paydee-blue-primary dark:text-paydee-blue-light" />
              ดูทัวร์ทั้งหมด
            </Button>
          </div>
        </div>

        {/* Image Mockup Placeholder */}
        <div
          className="relative max-w-5xl mx-auto animate-fade-in-up"
          style={{
            animationDelay: `${ANIMATION_DELAYS.HERO_BUTTON + 0.2}s`,
            animationFillMode: 'both'
          }}
        >
          {/* Main mockup container with perspective */}
          <div className="relative" style={{ perspective: '1000px' }}>
            {/* Shadow beneath the mockup */}
            <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-[90%] h-16 bg-gradient-to-t from-sky-200/50 dark:from-paydee-blue-primary/20 to-transparent blur-2xl rounded-full" />

            {/* Main image */}
            <div
              className="relative bg-white dark:bg-gray-800 rounded-2xl md:rounded-3xl shadow-2xl overflow-hidden border border-gray-100 dark:border-gray-700"
              style={{
                transform: 'rotateX(5deg)',
                transformOrigin: 'center bottom'
              }}
            >
              <Image
                src="/board.png"
                alt="Paydee Dashboard"
                width={1920}
                height={1200}
                className="w-full h-auto"
                priority
              />
            </div>

            {/* Optional floating elements for depth effect */}
            <div className="absolute -left-4 md:-left-8 top-1/4 w-16 md:w-24 h-16 md:h-24 bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700 flex items-center justify-center animate-float" style={{ animationDelay: '0s' }}>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-paydee-blue-primary dark:text-paydee-blue-light">500+</div>
                <div className="text-xs text-gray-500 dark:text-gray-400">ตัวแทน</div>
              </div>
            </div>

            <div className="absolute -right-4 md:-right-8 top-1/3 w-16 md:w-24 h-16 md:h-24 bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700 flex items-center justify-center animate-float" style={{ animationDelay: '0.5s' }}>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-paydee-orange-primary">2K+</div>
                <div className="text-xs text-gray-500 dark:text-gray-400">บาท/คน</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;