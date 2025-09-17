"use client";

import { motion } from "motion/react";
import { FiSearch, FiUsers, FiStar, FiTrendingUp } from "react-icons/fi";
import { RiRocketFill } from "react-icons/ri";

interface ProcessStepProps {
  number: string;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  index: number;
}

const ProcessStep = ({ number, title, description, icon: Icon, index }: ProcessStepProps) => (
  <motion.div
    initial={{ opacity: 0, y: 50, scale: 0.9 }}
    whileInView={{ opacity: 1, y: 0, scale: 1 }}
    transition={{
      duration: 0.7,
      delay: index * 0.15,
      type: "spring",
      stiffness: 100
    }}
    viewport={{ once: true }}
    className="relative group"
  >
    {/* Main Card */}
    <div className="relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 group overflow-hidden">

      {/* Subtle Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-paydee-blue-primary/2 via-transparent to-paydee-orange-primary/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

      {/* Number Circle */}
      <div className="relative mb-6 flex justify-center">
        <div className="relative">
          {/* Main Number */}
          <div className="w-20 h-20 bg-gradient-to-br from-paydee-blue-light via-paydee-blue-light to-paydee-orange-primary/30 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg group-hover:scale-110 transition-transform duration-300">
            {number}
          </div>

          {/* Icon Badge */}
          <div className="absolute -top-2 -right-2 w-10 h-10 bg-gradient-to-br from-paydee-orange-primary to-paydee-yellow-primary rounded-full shadow-md flex items-center justify-center border-2 border-white group-hover:scale-110 transition-transform duration-300">
            <Icon className="w-5 h-5 text-white" />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="relative text-center space-y-4">
        <h3 className="text-lg md:text-xl font-bold text-gray-900 group-hover:text-paydee-blue-primary transition-colors duration-300">
          {title}
        </h3>
        <p className="text-gray-600 text-sm leading-relaxed">
          {description}
        </p>
      </div>

      {/* Hover Border */}
      <div className="absolute inset-0 border-2 border-paydee-orange-primary/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    </div>

    {/* Connecting Arrow - Hidden on last item */}
    {index < 3 && (
      <div className="hidden lg:block absolute top-1/2 -right-6 transform -translate-y-1/2 z-10">
        <div className="w-12 h-0.5 bg-gradient-to-r from-paydee-blue-light to-paydee-orange-primary"></div>
        <div className="absolute -right-1 -top-1 w-3 h-3 bg-paydee-orange-primary rounded-full"></div>
      </div>
    )}
  </motion.div>
);

const WorkingProcessSection = () => {
  const processSteps = [
    {
      number: "1",
      title: "สมัครง่าย",
      description: "สมัครเป็นตัวแทนขายได้ในไม่กี่ขั้นตอน พร้อมเริ่มใช้งานได้ทันที ไม่มีค่าใช้จ่ายแอบแฝง",
      icon: FiUsers,
    },
    {
      number: "2",
      title: "เลือกขายทัวร์ที่ใช่",
      description: "เลือกรายการทัวร์ที่คุณสนใจได้อิสระ ระบบและทีมหลังบ้านสนับสนุนให้การขายง่ายขึ้น",
      icon: FiSearch,
    },
    {
      number: "3",
      title: "รับเงินง่าย",
      description: "เมื่อขายสำเร็จ ระบบจะแสดงคอมมิชชั่นอย่างชัดเจน โปร่งใส ตรวจสอบได้ทุกขั้นตอน",
      icon: FiStar,
    },
    {
      number: "4",
      title: "ค่าคอมมิชชั่นต่อเนื่อง",
      description: "เมื่อลูกค้าซื้อซ้ำ คุณยังคงได้รับคอมมิชชั่นต่อเนื่อง เพิ่มโอกาสสร้างรายได้แบบยั่งยืน",
      icon: FiTrendingUp,
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-white via-gray-50/50 to-white relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-paydee-blue-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-paydee-orange-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-conic from-paydee-yellow-primary/3 via-transparent to-paydee-blue-primary/3 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto max-w-7xl px-4 lg:px-8 xl:px-16 relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-paydee-blue-primary/10 to-paydee-orange-primary/10 backdrop-blur-sm border border-paydee-blue-primary/20 text-paydee-blue-primary rounded-full text-sm font-semibold mb-6">
            <span className="w-2 h-2 bg-paydee-orange-primary rounded-full mr-2 animate-pulse"></span>
            ขั้นตอนการทำงาน
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-4 leading-tight">
            เริ่มขายได้ใน
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-paydee-blue-primary via-paydee-orange-primary to-paydee-yellow-primary">
              4 ขั้นตอนง่าย
            </span>
          </h2>
          <p className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            ไม่ต้องมีประสบการณ์ขาย เราจะแนะนำทุกขั้นตอน<br className="hidden md:block" />
            จนกว่าคุณจะปิดการขายได้สำเร็จ
          </p>
        </motion.div>

        {/* Process Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 relative mb-12">
          {processSteps.map((step, index) => (
            <ProcessStep
              key={step.number}
              number={step.number}
              title={step.title}
              description={step.description}
              icon={step.icon}
              index={index}
            />
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-paydee-blue-primary/5 to-paydee-orange-primary/5 rounded-3xl p-8 border border-paydee-blue-primary/10">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              พร้อมเริ่มต้นแล้วใช่ไหม?
            </h3>
            <p className="text-gray-600 text-lg mb-6 max-w-xl mx-auto">
              ไม่ต้องรอ! เริ่มสร้างรายได้จากการขายทัวร์ได้ทันที
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => window.open('https://app.paydee.me', '_blank')}
                className="group relative bg-gradient-to-r from-paydee-blue-primary via-paydee-orange-primary to-paydee-yellow-primary bg-size-200 bg-pos-0 hover:bg-pos-100 text-white px-8 py-4 rounded-2xl text-lg font-bold shadow-xl hover:shadow-paydee-orange-primary/25 transform hover:scale-105 transition-all duration-500"
              >
                <span className="flex items-center gap-3">
                  <RiRocketFill className="text-xl group-hover:rotate-12 transition-transform duration-300" />
                  เริ่มต้นเป็นตัวแทนขายวันนี้
                </span>
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WorkingProcessSection;