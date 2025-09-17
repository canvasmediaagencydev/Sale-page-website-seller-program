"use client"

import BlurText from "@/components/BlurText";
import Button from "@/components/Button";
import { ANIMATION_DELAYS } from "@/constants";
import { AnimationConfig } from "@/types";
import {
  RiArrowDownWideFill,
  RiMoneyDollarCircleFill,
  RiGiftFill,
  RiCustomerService2Fill,
  RiBarChartBoxFill,
  RiRocketFill,
  RiFireFill
} from "react-icons/ri";

interface HeroSectionProps {
  className?: string;
}

const HeroSection = ({ className = "" }: HeroSectionProps) => {
  const animationConfig: AnimationConfig = {
    fillMode: 'both'
  };

  return (
    <section className={`min-h-screen relative overflow-hidden ${className}`}>
      {/* Background */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-x-[-1]"
          style={{ backgroundImage: 'url(/img/bg-3.jpg)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/30" />
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex flex-col items-center space-y-2 animate-bounce" style={{ animationDuration: '2s' }}>
          <RiArrowDownWideFill className="text-white/70 w-6 h-6" />
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto max-w-7xl min-h-screen flex items-center px-4 lg:px-8 xl:px-16">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 xl:gap-24 items-center min-h-screen py-32 w-full">
          {/* Left Content */}
          <div className="lg:col-span-7 text-white space-y-1">
            {/* Badge */}
            <div
              className="inline-flex items-center px-5 py-3 bg-gradient-to-r from-paydee-orange-primary/20 to-paydee-yellow-primary/20 backdrop-blur-sm rounded-full text-sm font-semibold border border-paydee-yellow-primary/30 animate-fade-in"
              style={{ animationDelay: `${ANIMATION_DELAYS.HERO_TITLE}s` }}
            >
              <RiFireFill className="text-paydee-yellow-primary text-lg animate-pulse" />
              รับตัวแทนขายใหม่ - คอมมิชชั่นสูงสุด 15,000 บาท!
            </div>

            {/* Main Title */}
            <div className="space-y-2">
              <div className="space-y-4">
                <div
                  className="text-7xl md:text-8xl xl:text-9xl font-black leading-none"
                  style={{
                    fontFamily: 'Playfair Display, serif',
                    background: 'linear-gradient(135deg, #ffffff 0%, #febf12 25%, #fe9812 50%, #ffffff 75%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundSize: '200% 200%',
                    animation: `paydee-title 1s ease-out ${ANIMATION_DELAYS.HERO_TITLE + 0.2}s both, gradient-shift 3s ease-in-out infinite`,
                    animationDelay: `${ANIMATION_DELAYS.HERO_TITLE + 0.2}s`
                  }}
                >
                  PayDee
                </div>
                <div className="text-lg md:text-xl text-paydee-yellow-primary font-semibold tracking-widest uppercase">
                  ศูนย์รวมทัวร์ต่างประเทศ
                </div>
              </div>

              <BlurText
                text="เปลี่ยนความหลงใหลในการเดินทางให้กลายเป็นรายได้หลักหลายหมื่นบาทต่อเดือน"
                delay={ANIMATION_DELAYS.HERO_SUBTITLE}
                animateBy="words"
                direction="bottom"
                className="text-xl md:text-2xl xl:text-3xl font-bold text-white/95 leading-relaxed max-w-3xl"
              />
            </div>

            {/* Key Benefits */}
            <div
              className="space-y-8 animate-fade-in-up"
              style={{
                animationDelay: `${ANIMATION_DELAYS.HERO_CONTENT}s`,
                ...animationConfig
              }}
            >
              {/* Features Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                <div className="flex items-start space-x-4 p-4 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300">
                  <div className="w-12 h-12 bg-gradient-to-br from-paydee-orange-primary to-paydee-yellow-primary rounded-xl flex items-center justify-center text-white shadow-lg">
                    <RiMoneyDollarCircleFill className="text-2xl" />
                  </div>
                  <div>
                    <div className="text-white font-semibold text-lg">คอมมิชชั่นสูงสุด</div>
                    <div className="text-paydee-yellow-primary font-bold text-xl">15,000 บาท/ทริป</div>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-4 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300">
                  <div className="w-12 h-12 bg-gradient-to-br from-paydee-blue-primary to-paydee-blue-light rounded-xl flex items-center justify-center text-white shadow-lg">
                    <RiGiftFill className="text-2xl" />
                  </div>
                  <div>
                    <div className="text-white font-semibold text-lg">ฟรี! ไม่มีค่าใช้จ่าย</div>
                    <div className="text-white/80">สมัครได้ทันที ไม่มีค่าแอบแฝง</div>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-4 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-400 rounded-xl flex items-center justify-center text-white shadow-lg">
                    <RiCustomerService2Fill className="text-2xl" />
                  </div>
                  <div>
                    <div className="text-white font-semibold text-lg">ทีมสนับสนุน 24/7</div>
                    <div className="text-white/80">คอยช่วยเหลือทุกขั้นตอน</div>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-4 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center text-white shadow-lg">
                    <RiBarChartBoxFill className="text-2xl" />
                  </div>
                  <div>
                    <div className="text-white font-semibold text-lg">ระบบเรียลไทม์</div>
                    <div className="text-white/80">ติดตามยอดขายได้ตลอดเวลา</div>
                  </div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div
                className="flex flex-col sm:flex-row gap-6 pt-6 animate-fade-in-scale"
                style={{
                  animationDelay: `${ANIMATION_DELAYS.HERO_BUTTON}s`
                }}
              >
                <Button className="group relative bg-gradient-to-r from-paydee-orange-primary via-paydee-yellow-primary to-paydee-orange-primary bg-size-200 bg-pos-0 hover:bg-pos-100 text-white px-10 py-5 rounded-2xl text-xl font-bold transition-all duration-500 transform hover:scale-105 shadow-2xl hover:shadow-paydee-orange-primary/25 border-2 border-paydee-yellow-primary/50">
                  <span className="relative z-10 flex items-center gap-3">
                    <RiRocketFill className="text-2xl" />
                    เริ่มต้นเป็นตัวแทนขาย
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-paydee-yellow-primary to-paydee-orange-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
                </Button>
              </div>
            </div>
          </div>

          {/* Right Content - Enhanced Stats */}
          <div className="lg:col-span-5 hidden lg:block">
            <div className="relative h-full flex items-center justify-end">
              {/* Main Stats Container */}
              <div className="relative w-full max-w-sm ml-auto">
                {/* Center Card - Made larger and more prominent */}
                <div className="relative z-20 bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-xl rounded-4xl p-10 border border-white/30 shadow-2xl animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
                  <div className="text-center">
                    <div className="text-6xl font-black text-paydee-yellow-primary mb-3 tracking-tight">15,000</div>
                    <div className="text-white font-bold text-xl mb-6">บาท/ทริป</div>
                    <div className="text-white/80 text-base leading-relaxed">คอมมิชชั่นสูงสุด<br/>ที่คุณจะได้รับ</div>
                  </div>
                </div>

                {/* Floating Cards - Better positioned */}
                <div className="absolute -top-28 -right-12 z-10 bg-gradient-to-br from-paydee-orange-primary/90 to-paydee-yellow-primary/90 backdrop-blur-lg rounded-3xl p-7 border border-white/40 shadow-xl animate-fade-in-up transform rotate-3" style={{ animationDelay: '0.8s' }}>
                  <div className="text-3xl font-black text-white mb-2">500+</div>
                  <div className="text-white text-sm font-semibold">ตัวแทนขายที่ไว้วางใจ</div>
                </div>

                <div className="absolute -bottom-25 -left-10 z-10 bg-gradient-to-br from-paydee-blue-primary/90 to-paydee-blue-light/90 backdrop-blur-lg rounded-3xl p-7 border border-white/40 shadow-xl animate-fade-in-up transform -rotate-2" style={{ animationDelay: '1s' }}>
                  <div className="text-3xl font-black text-white mb-2">5+</div>
                  <div className="text-white text-sm font-semibold">ปี ประสบการณ์ในวงการ</div>
                </div>

                <div className="absolute -top-20 -left-12 z-15 bg-gradient-to-br from-green-500/90 to-emerald-400/90 backdrop-blur-lg rounded-3xl p-6 border border-white/40 shadow-xl animate-fade-in-up transform rotate-2" style={{ animationDelay: '1.2s' }}>
                  <div className="text-2xl font-black text-white mb-1">24/7</div>
                  <div className="text-white text-xs font-semibold">สนับสนุนลูกค้า</div>
                </div>
              </div>

              {/* More subtle decorative elements */}
              <div className="absolute top-1/4 right-1/4 w-32 h-32 bg-gradient-to-br from-paydee-yellow-primary/20 to-paydee-orange-primary/10 rounded-full blur-3xl animate-pulse"></div>
              <div className="absolute bottom-1/4 left-1/4 w-24 h-24 bg-gradient-to-tr from-paydee-blue-primary/20 to-paydee-blue-light/10 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;