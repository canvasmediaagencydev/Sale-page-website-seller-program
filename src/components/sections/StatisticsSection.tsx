"use client"

import Image from "next/image";
import CountUp from "@/components/CountUp";
import { STATISTICS } from "@/constants";
import { StatisticItemProps } from "@/types";

const StatisticItem = ({ value, label, duration = 1, suffix = "+" }: StatisticItemProps) => (
  <div className="text-2xl md:text-6xl font-semibold">
    <div className="flex items-center md:justify-between justify-around">
      <div>
        <CountUp
          from={0}
          to={value}
          separator=","
          direction="up"
          duration={duration}
          className="count-up-text"
        />
        {suffix}
      </div>
      <p className="text-lg md:text-4xl font-normal text-gray-700">
        {label}
      </p>
    </div>
  </div>
);

const StatisticsSection = () => {
  return (
    <section className="pb-25 text-gray-900">
      <div className="container mx-auto max-w-7xl px-4 ">
        {/* <div className="hidden md:block">
          <div className="flex justify-center items-center gap-5">
            <p className="md:text-4xl text-lg">ทัวร์ต่างประเทศมากมาย สร้างรายได้ได้ตลอดทั้งปี</p>
            <Image 
              src="/img/image 5.png" 
              alt="Tour" 
              width={200} 
              height={300} 
              className="hidden md:block"
              priority
              placeholder="blur"
              blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkrHB0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
            />
          </div>
          <div className="flex justify-center items-center gap-5 md:mt-4 mt-2">
            <Image src="/img/image 6.png" alt="Tour" width={200} height={300} className="hidden md:block" />
            <p className="md:text-4xl text-lg text-gray-700">ไม่มีขั้นต่ำกดดัน ไม่ต้องเข้าออฟฟิศ ไม่ต้องดูแลลูกค้าเอง</p>
          </div>
        </div> */}
        
        <div className="flex flex-col md:flex-row mt-8 md:mt-15">
          <p className="text-2xl md:text-5xl md:leading-14 md:hidden font-semibold mb-4 text-center md:text-left">
            ร่วมเป็นส่วนหนึ่งของทีมเรา <br />
            เพื่อรับค่าคอมมิชชั่นที่สูงกว่า!
          </p>
          
          <div className="w-full md:w-1/3 flex items-center justify-center mb-8 md:mb-0 relative">
            <Image 
              src="/img/7411 1.svg" 
              alt="Tour" 
              width={300} 
              height={225} 
              className="w-full max-w-[250px] h-auto md:max-w-[400px] z-10 shadow-lg rounded-4xl"
              priority
            />
            <div className="bg-paydee-blue-primary hidden md:block w-100 h-130 absolute top-4 left-2 rounded-4xl"></div>
          </div>
          
          <div className="flex-1 md:mx-20 mx-0">
            <p className="text-2xl md:text-5xl md:leading-14 hidden md:block font-semibold mb-4 text-center md:text-left">
              ร่วมเป็นส่วนหนึ่งของทีมเรา <br />
              เพื่อรับค่าคอมมิชชั่นที่สูงกว่า!
            </p>
            <p className="text-md md:text-lg lg:text-xl text-center md:text-left leading-6 md:leading-normal">
              ด้วยประสบการณ์เดินทางทั่วโลกกว่า {STATISTICS.EXPERIENCE_YEARS} ปี มีลูกค้าไว้วางใจมากมาย <br className="md:block hidden" />
              วันนี้เราพร้อมเปิดรับตัวแทนขาย มอบค่าคอมมิชชั่นที่สูง มีทีมงานคอยเคียงข้าง เพื่อให้คุณปิดการขายได้ง่ายขึ้น
            </p>
            
            <div className="mt-6 md:mt-10 flex flex-col gap-4 md:gap-6 bg-gray-100 md:bg-white p-5 rounded-3xl">
              <StatisticItem 
                value={STATISTICS.COMMISSION} 
                label="ค่าคอมมิชชั่นสูง" 
                duration={1} 
              />
              <StatisticItem 
                value={STATISTICS.EXPERIENCE_YEARS} 
                label="ประสบการณ์" 
                duration={1} 
                suffix=" +"
              />
              <StatisticItem 
                value={STATISTICS.CUSTOMERS} 
                label="ลูกค้าที่ไว้วางใจ" 
                duration={2} 
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatisticsSection;