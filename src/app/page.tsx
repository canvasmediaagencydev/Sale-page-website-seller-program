import Button from "@/components/Button";
import BlurText from "@/components/BlurText";
import Image from "next/image";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="min-h-screen relative bg-cover bg-center bg-no-repeat rounded-b-3xl lg:rounded-b-4xl overflow-hidden" style={{backgroundImage: 'url(/img/bg.jpg)'}}>
        <div className="container mx-auto text-white min-h-screen flex flex-col lg:flex-row px-4 lg:px-0">
          <div className="flex-1 pt-25 mt-20 md:mt-30 md:pt-24 lg:pt-30 relative z-10">
            <div className="flex flex-col gap-2 lg:gap-4 items-center md:items-start  lg:text-left">
              <BlurText
                text="Name"
                delay={150}
                animateBy="words"
                direction="top"
                className="text-5xl md:text-7xl flex lg:text-9xl font-bold"
              />
              <BlurText
                text="ทัวร์ต่างประเทศโดยไกด์ช่างภาพมืออาชีพ"
                delay={150}
                animateBy="words"
                direction="bottom"
                className="text-lg font-semibold md:text-2xl flex lg:text-4xl"
              />
            </div>
            
            <div 
              className="bg-black/60 backdrop-blur-xs w-full max-w-2xl mx-auto lg:mx-0 items-center flex justify-center flex-col rounded-2xl lg:rounded-3xl py-8 md:py-12 lg:py-15 px-6 md:px-8 lg:px-10 mt-8 lg:mt-6 gap-6 lg:gap-8 animate-fade-in-up"
              style={{ 
                animationDelay: '1s',
                animationFillMode: 'both'
              }}
            >
              <p 
                className="text-lg md:text-2xl lg:text-3xl leading-7 md:leading-9 lg:leading-10 text-center lg:text-start animate-fade-in"
                style={{ 
                  animationDelay: '1.3s',
                  animationFillMode: 'both'
                }}
              >
                มาร่วมทีมเป็นตัวแทนขายทัวร์กับ Gography <br className="hidden md:block" />
                เปลี่ยนประสบการณ์ของคุณให้เป็นรายได้เพิ่ม
              </p>
              <div
                className="animate-fade-in-scale w-full flex justify-center"
                style={{ 
                  animationDelay: '1.6s',
                  animationFillMode: 'both'
                }}
              >
                <Button className="bg-orange-600 hover:bg-orange-700 text-white px-6 md:px-8 py-3 md:py-4 rounded-full text-lg md:text-xl font-semibold w-full md:w-auto transition-all transform hover:scale-105">
                  สมัครสมาชิกได้เลย
                </Button>
              </div>
            </div>
          </div>
          <div className="flex-1 hidden lg:block relative z-10"></div>
        </div>
      </section>

      {/* Section 2 */}
      <section className="min-h-screen  text-gray-900">
        <div className="container mx-auto py-20">
          <h2 className="text-6xl font-bold text-center mb-10">Section 2</h2>
          <p className="text-2xl text-center">เนื้อหาส่วนที่ 2 ของเว็บไซต์</p>
        </div>
      </section>
    </>
  );
}
