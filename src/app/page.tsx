import Button from "@/components/Button";
import BlurText from "@/components/BlurText";
import Image from "next/image";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="h-screen relative bg-cover  bg-center bg-no-repeat" style={{backgroundImage: 'url(/img/bg.jpg)'}}>
        <div className="container flex flex-row mx-auto text-white h-full">
          <div className="flex-1 mt-30 relative z-10">
            <div className="mt-30 flex flex-col gap-2">
              <BlurText
                text="Name !!"
                delay={150}
                animateBy="words"
                direction="top"
                className="text-9xl"
              />
              <BlurText
                text="ทัวร์ต่างประเทศโดยไกด์ช่างภาพมืออาชีพ"
                delay={150}
                animateBy="words"
                direction="bottom"
                className="text-4xl"
              />
            </div>
            <div 
              className="bg-black/60 w-6/6 items-center flex justify-center flex-col rounded-3xl py-15 px-10 mt-6 gap-8 animate-fade-in-up"
              style={{ 
                animationDelay: '1s',
                animationFillMode: 'both'
              }}
            >
              <p 
                className="text-3xl leading-10 text-start animate-fade-in"
                style={{ 
                  animationDelay: '1.3s',
                  animationFillMode: 'both'
                }}
              >
                มาร่วมทีมเป็นตัวแทนขายทัวร์กับ Name <br />
                เปลี่ยนประสบการณ์ของคุณให้เป็นรายได้เพิ่ม
              </p>
              <div
                className="animate-fade-in-scale"
                style={{ 
                  animationDelay: '1.6s',
                  animationFillMode: 'both'
                }}
              >
                <Button className="transform hover:scale-105 transition-transform duration-300 ease-in-out text-2xl">
                  สมัครเลยไม่มีค่าใช้จ่าย
                </Button>
              </div>
            </div>
          </div>
          <div className="flex-1 relative z-10"></div>
        </div>
      </section>

      {/* Section 2 */}
      <section className="min-h-screen bg-gray-900 text-white">
        <div className="container mx-auto py-20">
          <h2 className="text-6xl font-bold text-center mb-10">Section 2</h2>
          <p className="text-2xl text-center">เนื้อหาส่วนที่ 2 ของเว็บไซต์</p>
        </div>
      </section>
    </>
  );
}
