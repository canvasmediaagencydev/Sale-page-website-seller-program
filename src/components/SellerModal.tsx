"use client"

import { useState } from "react";
import { RiCloseFill, RiRocketFill, RiStarFill } from "react-icons/ri";

interface SellerModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SellerModal = ({ isOpen, onClose }: SellerModalProps) => {
  if (!isOpen) return null;

  const handleApply = () => {
    window.open('https://app.paydee.me', '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      ></div>

      {/* Modal */}
      <div className="relative bg-white rounded-3xl p-8 mx-4 max-w-lg w-full shadow-2xl animate-fade-in-scale">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors duration-200 cursor-pointer"
        >
          <RiCloseFill className="w-6 h-6 text-gray-600" />
        </button>

        {/* Content */}
        <div className="text-center space-y-6">
          {/* Icon */}
          <div className="w-20 h-20 bg-gradient-to-br from-paydee-blue-primary to-paydee-orange-primary rounded-full flex items-center justify-center mx-auto">
            <RiStarFill className="w-10 h-10 text-white" />
          </div>

          {/* Title */}
          <div>
            <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-2">
              สมัครเป็น
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-paydee-blue-primary to-paydee-orange-primary">
                {" "}Seller{" "}
              </span>
              ก่อน
            </h2>
            <p className="text-gray-600 text-lg">
              เข้าถึงข้อมูลทริปและเริ่มต้นขายได้ทันที!
            </p>
          </div>

          {/* Benefits */}
          <div className="bg-gray-50 rounded-2xl p-6 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-paydee-orange-primary rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">✓</span>
              </div>
              <span className="text-gray-700">คอมมิชชั่นสูงสุด 3,000+ บาท/ทริป</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-paydee-blue-primary rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">✓</span>
              </div>
              <span className="text-gray-700">ไม่มีค่าสมัคร ไม่มีค่าใช้จ่ายแอบแฝง</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-paydee-yellow-primary rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">✓</span>
              </div>
              <span className="text-gray-700">ทีมสนับสนุน 24/7</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="space-y-3">
            <button
              onClick={handleApply}
              className="w-full bg-gradient-to-r from-paydee-blue-primary via-paydee-orange-primary to-paydee-yellow-primary text-white px-8 py-4 rounded-2xl text-lg font-bold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 cursor-pointer"
            >
              <span className="flex items-center justify-center gap-3">
                <RiRocketFill className="text-xl" />
                สมัครเป็น Seller ตอนนี้
              </span>
            </button>
            <button
              onClick={onClose}
              className="w-full border-2 border-gray-300 text-gray-600 hover:border-gray-400 hover:text-gray-700 px-8 py-3 rounded-2xl text-lg font-semibold transition-all duration-300 cursor-pointer"
            >
              ดูข้อมูลเพิ่มเติมก่อน
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SellerModal;