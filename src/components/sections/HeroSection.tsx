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
    <section className={`min-h-screen relative flex flex-row bg-cover bg-center bg-no-repeat  overflow-hidden ${className}`}
      style={{ backgroundImage: 'url(/img/bg-3.jpg)', transform: 'scaleX(-1)' }}>
      <div>
        <RiArrowDownWideFill className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white animate-bounce bg-gray-900/40 p-3 rounded-full w-12 h-12" style={{ animationDuration: '1.3s' }} />
      </div>
      <div className="container flex flex-row mx-auto" style={{ transform: 'scaleX(-1)' }}>
        <div className="container md:w-1/2 w-full mx-auto max-w-7xl text-white min-h-screen flex flex-col lg:flex-row px-4 lg:px-8 ">
          <div className="flex-1 pt-25 mt-10 md:mt-15 md:pt-24 lg:pt-30 relative z-10">
            <div className="flex flex-col gap-2 lg:gap-4 items-center md:items-start lg:text-left">
              <BlurText
                text="PayDee"
                delay={ANIMATION_DELAYS.HERO_TITLE}
                animateBy="words"
                direction="top"
                className="text-5xl md:text-7xl flex lg:text-9xl font-bold"
                style={{ fontFamily: 'Playfair Display, serif' }}
              />
              <BlurText
                text="ทัวร์ต่างประเทศโดยไกด์ช่างภาพมืออาชีพ"
                delay={ANIMATION_DELAYS.HERO_SUBTITLE}
                animateBy="words"
                direction="bottom"
                className="text-lg font-semibold md:text-2xl flex lg:text-3xl"
              />
            </div>

            <div
              className="bg-black/40 backdrop-blur-xs w-full max-w-2xl mx-auto lg:mx-0 items-center flex justify-center flex-col rounded-2xl lg:rounded-3xl py-8 md:py-12 lg:py-15 px-6 md:px-8 lg:px-10 mt-8 lg:mt-6 gap-6 lg:gap-8 animate-fade-in-up"
              style={{
                animationDelay: ANIMATION_DELAYS.HERO_CONTENT,
                ...animationConfig
              }}
            >
              <p
                className="text-lg md:text-2xl lg:text-2xl leading-7 md:leading-9 lg:leading-10 text-center lg:text-start animate-fade-in"
                style={{
                  animationDelay: ANIMATION_DELAYS.HERO_TEXT
                }}
              >
                มาร่วมทีมเป็นตัวแทนขายทัวร์กับ PayDee <br className="hidden md:block" />
                เปลี่ยนประสบการณ์ของคุณให้เป็นรายได้เสริมพิเศษ
              </p>
              <div
                className="animate-fade-in-scale w-full flex justify-center"
                style={{
                  animationDelay: ANIMATION_DELAYS.HERO_BUTTON
                }}
              >
                <Button className="bg-orange-600 hover:bg-orange-700 text-white px-6 md:px-30 py-3 md:py-4 rounded-full text-lg md:text-xl font-semibold w-full md:w-auto transition-all transform hover:scale-105">
                  สมัครสมาชิกได้เลย
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="w-1/2 hidden md:block">
        </div>
      </div>

    </section>
  );
};

export default HeroSection;