"use client";

import { motion } from "motion/react";
import { RiPlaneFill, RiShareFill, RiRocketFill, RiCheckLine } from "react-icons/ri";

const WorkingProcessSection = () => {
  const benefits = [
    "ค่าคอม 2,000+ บาทต่อคน",
    "จ่ายเต็ม 100% ทุกการจอง",
    "รับเงินไว ภายใน 24 ชม.",
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto max-w-5xl px-4 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-1.5 bg-paydee-blue-primary/10 text-paydee-blue-primary rounded-full text-sm font-medium mb-4">
            Affiliate Program
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            สมัคร 1 ครั้ง <span className="text-paydee-blue-primary">ได้ 2 ทาง</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            ไม่ต้องมีความรู้เรื่องทัวร์ก็ขายได้ แค่แนะนำคนมา แอดมินจะปิดการขายให้คุณ
          </p>
        </motion.div>

        {/* Two Ways Cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {/* Way 1: Travel Yourself */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-paydee-blue-primary rounded-2xl p-8 text-white"
          >
            <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center mb-5">
              <RiPlaneFill className="w-7 h-7" />
            </div>
            <h3 className="text-2xl font-bold mb-2">เที่ยวเอง</h3>
            <p className="text-lg text-white/90 mb-3">ได้เที่ยว + ได้ค่าคอม</p>
            <p className="text-white/70">
              จองทัวร์ให้ตัวเองหรือครอบครัว ก็ได้รับค่าคอมมิชชั่นเหมือนกัน คุ้มกว่าจองที่อื่น!
            </p>
          </motion.div>

          {/* Way 2: Refer Others */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-paydee-orange-primary to-paydee-yellow-primary rounded-2xl p-8 text-white"
          >
            <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center mb-5">
              <RiShareFill className="w-7 h-7" />
            </div>
            <h3 className="text-2xl font-bold mb-2">บอกต่อ</h3>
            <p className="text-lg text-white/90 mb-3">แนะนำคนอื่น ก็ได้ค่าคอม</p>
            <p className="text-white/70">
              แค่แนะนำเพื่อน ครอบครัว หรือคนรู้จักมา ทุกการจองคือค่าคอมของคุณ!
            </p>
          </motion.div>
        </div>

        {/* Benefits & CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-gray-900 rounded-2xl p-8 md:p-10"
        >
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            {/* Benefits List */}
            <div>
              <h3 className="text-xl font-bold text-white mb-4">ทำไมต้อง PayDee?</h3>
              <div className="flex flex-wrap gap-x-6 gap-y-2">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <RiCheckLine className="w-5 h-5 text-paydee-yellow-primary" />
                    <span className="text-gray-300">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Button */}
            <button
              onClick={() => window.open('https://app.paydee.me', '_blank')}
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-paydee-orange-primary to-paydee-yellow-primary hover:from-paydee-yellow-primary hover:to-paydee-orange-primary text-white px-8 py-4 rounded-full text-lg font-bold transition-all duration-300 cursor-pointer whitespace-nowrap"
            >
              <RiRocketFill className="text-xl" />
              สมัครเลย ฟรี!
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WorkingProcessSection;
