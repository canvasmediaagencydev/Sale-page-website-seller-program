"use client"

import Image from "next/image";
import CountUp from "@/components/CountUp";
import { STATISTICS } from "@/constants";
import { motion } from "motion/react";
import { RiMoneyDollarCircleFill, RiTeamFill, RiAwardFill, RiStarFill } from "react-icons/ri";

const StatisticsSection = () => {
  return (
    <section id="statistics-section" className="py-16 md:py-20 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-24 h-24 bg-paydee-blue-primary rounded-full"></div>
        <div className="absolute top-40 right-32 w-16 h-16 bg-paydee-orange-primary rounded-full"></div>
        <div className="absolute bottom-32 left-40 w-20 h-20 bg-paydee-yellow-primary rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-32 h-32 bg-paydee-blue-light rounded-full"></div>
      </div>

      <div className="container mx-auto max-w-7xl px-4 lg:px-8 xl:px-16 relative">
        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-3 gap-12 lg:gap-16 items-center">
          {/* Left Column - Main Message */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-8"
          >
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 bg-paydee-orange-primary/10 border border-paydee-orange-primary/20 text-paydee-orange-primary rounded-full text-sm font-semibold">
              <RiStarFill className="w-4 h-4 mr-2" />
              ผลลัพธ์ที่พิสูจน์แล้ว
            </div>

            {/* Main Heading */}
            <div className="space-y-4">
              <h2 className="text-4xl md:text-6xl font-black text-gray-900 leading-tight">
                ร่วมเป็น
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-paydee-blue-primary via-paydee-orange-primary to-paydee-yellow-primary">
                  ตัวแทนขายมืออาชีพ
                </span>
              </h2>
              <p className="text-xl md:text-2xl text-gray-600 leading-relaxed max-w-2xl">
                เปลี่ยนประสบการณ์การเดินทางของคุณให้เป็นรายได้ที่มั่นคง
                ด้วยคอมมิชชั่นสูงสุด <span className="font-bold text-paydee-orange-primary">3,000+ บาทต่อทริป</span>
              </p>
            </div>

            {/* Key Features */}
            <div className="grid md:grid-cols-2 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="flex items-start space-x-4"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-paydee-blue-primary to-paydee-blue-light rounded-xl flex items-center justify-center shadow-lg">
                  <RiMoneyDollarCircleFill className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-1">คอมมิชชั่นสูง</h3>
                  <p className="text-gray-600">ได้รับคอมมิชชั่นสูงสุด 3,000+ บาท ต่อการขาย 1 ทริป</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                className="flex items-start space-x-4"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-paydee-orange-primary to-paydee-yellow-primary rounded-xl flex items-center justify-center shadow-lg">
                  <RiTeamFill className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-1">ทีมสนับสนุน</h3>
                  <p className="text-gray-600">ทีมงานมืออาชีพคอยช่วยเหลือ 24/7 ตลอดการขาย</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
                className="flex items-start space-x-4"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-paydee-orange-primary to-paydee-yellow-primary rounded-xl flex items-center justify-center shadow-lg">
                  <RiAwardFill className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-1">ไม่มีค่าสมัคร</h3>
                  <p className="text-gray-600">เริ่มต้นได้ทันทีโดยไม่มีค่าใช้จ่ายใดๆ ล่วงหน้า</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                viewport={{ once: true }}
                className="flex items-start space-x-4"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-paydee-blue-primary to-paydee-blue-light rounded-xl flex items-center justify-center shadow-lg">
                  <RiStarFill className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-1">ระบบครบครัน</h3>
                  <p className="text-gray-600">ระบบจัดการขายและติดตามคอมมิชชั่นแบบเรียลไทม์</p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Column - Statistics */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Main Image with Stats Overlay */}
            <div className="relative">
              <div className="relative overflow-hidden rounded-3xl">
                <Image
                  src="/img/7411 1.svg"
                  alt="PayDee Success"
                  width={400}
                  height={300}
                  className="w-full h-auto object-cover"
                  priority
                />
                {/* Overlay Stats */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent">
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6">
                      <div className="grid grid-cols-2 gap-4 text-center">
                        <div>
                          <div className="text-3xl font-black text-paydee-orange-primary mb-1">
                            <CountUp from={0} to={3} duration={1.5} />K+
                          </div>
                          <div className="text-sm text-gray-600 font-medium">บาท/ทริป</div>
                        </div>
                        <div>
                          <div className="text-3xl font-black text-paydee-blue-primary mb-1">
                            <CountUp from={0} to={500} duration={2} />+
                          </div>
                          <div className="text-sm text-gray-600 font-medium">ตัวแทนขาย</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Side Stats */}
            <div className="grid grid-cols-1 gap-4">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                viewport={{ once: true }}
                className="bg-gradient-to-r from-paydee-blue-primary/10 to-paydee-blue-light/10 border border-paydee-blue-primary/20 rounded-2xl p-6 text-center"
              >
                <div className="text-4xl font-black text-paydee-blue-primary mb-2">
                  <CountUp from={0} to={STATISTICS.EXPERIENCE_YEARS} duration={1} />+
                </div>
                <div className="text-gray-700 font-semibold">ปี ประสบการณ์</div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                viewport={{ once: true }}
                className="bg-gradient-to-r from-paydee-orange-primary/10 to-paydee-yellow-primary/10 border border-paydee-orange-primary/20 rounded-2xl p-6 text-center"
              >
                <div className="text-4xl font-black text-paydee-orange-primary mb-2">
                  <CountUp from={0} to={Math.floor(STATISTICS.CUSTOMERS / 100)} duration={2} />K+
                </div>
                <div className="text-gray-700 font-semibold">ลูกค้าไว้วางใจ</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default StatisticsSection;