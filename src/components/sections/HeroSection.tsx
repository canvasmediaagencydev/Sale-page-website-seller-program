"use client"

import BlurText from "@/components/BlurText";
import Button from "@/components/Button";
import { ANIMATION_DELAYS } from "@/constants";
import { AnimationConfig } from "@/types";
import { RiArrowDownWideFill } from "react-icons/ri";

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
          <span className="text-white/70 text-sm font-medium">เลื่อนลง</span>
          <RiArrowDownWideFill className="text-white/70 w-6 h-6" />
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto max-w-7xl min-h-screen flex items-center px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen py-20">
          {/* Left Content */}
          <div className="text-white space-y-8">
            {/* Badge */}
            <div
              className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium animate-fade-in"
              style={{ animationDelay: ANIMATION_DELAYS.HERO_TITLE }}
            >
              <span className="w-2 h-2 bg-paydee-yellow-primary rounded-full mr-2 animate-pulse"></span>
              ใหม่! โปรแกรมตัวแทนขาย
            </div>

            {/* Main Title */}
            <div className="space-y-4">
              <BlurText
                text="PayDee"
                delay={ANIMATION_DELAYS.HERO_TITLE}
                animateBy="words"
                direction="top"
                className="text-6xl md:text-8xl lg:text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-paydee-yellow-primary to-white"
                style={{ fontFamily: 'Playfair Display, serif' }}
              />
              <BlurText
                text="ทัวร์ต่างประเทศ"
                delay={ANIMATION_DELAYS.HERO_SUBTITLE}
                animateBy="words"
                direction="bottom"
                className="text-2xl md:text-4xl font-semibold text-paydee-yellow-primary"
              />
              <BlurText
                text="โดยไกด์ช่างภาพมืออาชีพ"
                delay={ANIMATION_DELAYS.HERO_SUBTITLE + 0.2}
                animateBy="words"
                direction="bottom"
                className="text-xl md:text-2xl font-normal text-white/90"
              />
            </div>

            {/* Description */}
            <div
              className="space-y-6 animate-fade-in-up"
              style={{
                animationDelay: ANIMATION_DELAYS.HERO_CONTENT,
                ...animationConfig
              }}
            >
              <p
                className="text-xl md:text-2xl leading-relaxed text-white/90 max-w-2xl animate-fade-in"
                style={{
                  animationDelay: ANIMATION_DELAYS.HERO_TEXT
                }}
              >
                มาร่วมทีมเป็นตัวแทนขายทัวร์กับ <span className="text-paydee-yellow-primary font-semibold">PayDee</span>
                <br />เปลี่ยนประสบการณ์ของคุณให้เป็นรายได้เสริมพิเศษ
              </p>

              {/* Features */}
              <div className="grid md:grid-cols-2 gap-4 text-sm md:text-base">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-paydee-yellow-primary rounded-full"></div>
                  <span>คอมมิชชั่นสูงสุด 15,000 บาท/ทริป</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-paydee-yellow-primary rounded-full"></div>
                  <span>ไม่มีค่าสมัครสมาชิก</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-paydee-yellow-primary rounded-full"></div>
                  <span>ทีมงานสนับสนุน 24/7</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-paydee-yellow-primary rounded-full"></div>
                  <span>ระบบติดตามยอดขายแบบเรียลไทม์</span>
                </div>
              </div>

              {/* CTA Buttons */}
              <div
                className="flex flex-col sm:flex-row gap-4 pt-4 animate-fade-in-scale"
                style={{
                  animationDelay: ANIMATION_DELAYS.HERO_BUTTON
                }}
              >
                <Button className="bg-gradient-to-r from-paydee-orange-primary to-paydee-yellow-primary hover:from-paydee-yellow-primary hover:to-paydee-orange-primary text-white px-8 py-4 rounded-full text-lg font-semibold transition-all transform hover:scale-105 shadow-xl hover:shadow-2xl">
                  เริ่มต้นเป็นตัวแทนขาย
                </Button>
                <button className="border-2 border-white/30 hover:border-white text-white px-8 py-4 rounded-full text-lg font-semibold transition-all transform hover:scale-105 backdrop-blur-sm">
                  ดูรายละเอียด
                </button>
              </div>
            </div>
          </div>

          {/* Right Content - Stats/Visual */}
          <div className="hidden lg:block">
            <div className="relative">
              {/* Floating Stats Cards */}
              <div className="space-y-6">
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
                  <div className="text-3xl font-bold text-paydee-yellow-primary mb-2">15,000+</div>
                  <div className="text-white/80">บาท คอมมิชชั่นสูงสุด</div>
                </div>

                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 ml-12 animate-fade-in-up" style={{ animationDelay: '1s' }}>
                  <div className="text-3xl font-bold text-paydee-yellow-primary mb-2">500+</div>
                  <div className="text-white/80">ตัวแทนขายที่ไว้วางใจ</div>
                </div>

                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 animate-fade-in-up" style={{ animationDelay: '1.2s' }}>
                  <div className="text-3xl font-bold text-paydee-yellow-primary mb-2">5+</div>
                  <div className="text-white/80">ปี ประสบการณ์</div>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-paydee-yellow-primary/20 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-10 -left-10 w-24 h-24 bg-paydee-orange-primary/20 rounded-full blur-2xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;