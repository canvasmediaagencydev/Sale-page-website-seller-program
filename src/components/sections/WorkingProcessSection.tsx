"use client";

import { motion } from "motion/react";
import { FiSearch, FiUsers, FiStar, FiTrendingUp } from "react-icons/fi";

interface ProcessStepProps {
  number: string;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  index: number;
}

const ProcessStep = ({ number, title, description, icon: Icon, index }: ProcessStepProps) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: index * 0.2 }}
    viewport={{ once: true }}
    className="relative flex flex-col items-center text-center group"
  >
    {/* Number Circle */}
    <div className="relative mb-6">
      <div className="w-20 h-20 bg-gradient-to-br from-paydee-blue-primary to-paydee-blue-light rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg group-hover:scale-110 transition-transform duration-300">
        {number}
      </div>
      
      {/* Icon Background */}
      <div className="absolute -top-2 -right-2 w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center border-2 border-paydee-blue-light/30">
        <Icon className="w-5 h-5 text-paydee-blue-primary" />
      </div>
    </div>

    {/* Content */}
    <div className="space-y-3">
      <h3 className="text-xl md:text-2xl font-semibold text-gray-800">
        {title}
      </h3>
      <p className="text-gray-600 text-sm md:text-base max-w-xs">
        {description}
      </p>
    </div>

    {/* Connecting Line - Hidden on last item */}
    {index < 3 && (
      <div className="hidden md:block absolute top-10 left-full w-24 h-0.5 bg-gradient-to-r from-paydee-blue-light to-paydee-orange-primary -translate-x-2" />
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
    <section className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto max-w-7xl px-4 lg:px-8 xl:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-2 bg-paydee-blue-light/20 text-paydee-blue-primary rounded-full text-sm mb-4">
            PROCESS
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Working Process
          </h2>
          <p className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto">
            ขั้นตอนการทำงานง่ายๆ เพียง 4 ขั้นตอน เริ่มสร้างรายได้ได้เลย
          </p>
        </motion.div>

        {/* Process Steps */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 relative">
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
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <button className="bg-gradient-to-r from-paydee-blue-primary to-paydee-orange-primary hover:from-paydee-blue-light hover:to-paydee-yellow-primary text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
            เริ่มต้นเป็นตัวแทนขายวันนี้
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default WorkingProcessSection;