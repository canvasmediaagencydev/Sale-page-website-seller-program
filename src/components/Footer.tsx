"use client"

import Image from "next/image";
import { FaFacebook, FaInstagram, FaLine, FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { RiRocketFill } from "react-icons/ri";
import { CONTACT_INFO, STATISTICS, BRAND } from "@/constants";

export default function Footer() {
  return (
    <footer id="footer" className="bg-paydee-blue-primary text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-32 h-32 bg-paydee-orange-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-paydee-yellow-primary/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="container mx-auto max-w-7xl px-4 lg:px-8 xl:px-16">
            <div className="grid lg:grid-cols-4 gap-8 lg:gap-12">

              {/* Company Info */}
              <div className="lg:col-span-2 space-y-6">
                <div className="inline-flex items-center gap-3">
                  <div className="bg-white/60 backdrop-blur-md rounded-xl p-3 border border-white/30 shadow-lg">
                    <Image
                      src="/img/paydee LOGO 03.svg"
                      alt="PayDee Logo"
                      width={140}
                      height={45}
                      className=""
                    />
                  </div>
                </div>
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold">{BRAND.NAME} Seller Program</h3>
                  <p className="text-blue-100 text-lg leading-relaxed max-w-md">
                    รวมทัวร์ต่างประเทศ จากทั่วโลกไว้ที่นี่ที่เดียว
                  </p>
                  <div
                    onClick={() => window.open('https://app.paydee.me', '_blank')}
                    className="inline-flex items-center px-6 py-3 bg-paydee-orange-primary rounded-full text-white font-semibold hover:bg-paydee-yellow-primary transition-colors cursor-pointer"
                  >
                    <RiRocketFill className="mr-2" />
                    เริ่มต้นเป็นตัวแทนขาย
                  </div>
                </div>
              </div>

              {/* Contact Info */}
              <div className="space-y-6">
                <h4 className="text-xl font-bold">ติดต่อเรา</h4>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <FaMapMarkerAlt className="text-paydee-orange-primary mt-1 flex-shrink-0" />
                    <p className="text-blue-100">
                      {CONTACT_INFO.ADDRESS.STREET}<br />
                      {CONTACT_INFO.ADDRESS.DISTRICT}<br />
                      {CONTACT_INFO.ADDRESS.PROVINCE} {CONTACT_INFO.ADDRESS.POSTAL_CODE}
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <FaPhone className="text-paydee-orange-primary" />
                    <p className="text-blue-100">{CONTACT_INFO.PHONE}</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <FaEnvelope className="text-paydee-orange-primary" />
                    <p className="text-blue-100">{CONTACT_INFO.EMAIL}</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <FaLine className="text-paydee-orange-primary" />
                    <p className="text-blue-100">{CONTACT_INFO.LINE_ID}</p>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="space-y-6">
                <h4 className="text-xl font-bold">ติดตามเรา</h4>
                <div className="flex gap-4">
                  <a
                    href="#"
                    className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center hover:bg-paydee-orange-primary hover:scale-110 transition-all duration-300 cursor-pointer"
                    aria-label="Facebook"
                  >
                    <FaFacebook className="text-xl" />
                  </a>
                  <a
                    href="#"
                    className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center hover:bg-paydee-orange-primary hover:scale-110 transition-all duration-300 cursor-pointer"
                    aria-label="Instagram"
                  >
                    <FaInstagram className="text-xl" />
                  </a>
                  <a
                    href="#"
                    className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center hover:bg-paydee-orange-primary hover:scale-110 transition-all duration-300 cursor-pointer"
                    aria-label="Line"
                  >
                    <FaLine className="text-xl" />
                  </a>
                </div>
                <div className="space-y-2">
                  <p className="text-paydee-yellow-primary font-bold">คอมมิชชั่นสูง</p>
                  <p className="text-2xl font-black text-white">{STATISTICS.COMMISSION.toLocaleString()}+ บาท/ทริป</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 py-6">
          <div className="container mx-auto max-w-7xl px-4 lg:px-8 xl:px-16">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-blue-100 text-sm">
                © 2024 {BRAND.NAME}. All rights reserved.
              </p>
              <div className="flex items-center gap-6">
                <a href="/seller-rules" className="text-blue-100 hover:text-white text-sm transition-colors cursor-pointer">
                  Seller Rules
                </a>
                <a href="/terms-and-conditions" className="text-blue-100 hover:text-white text-sm transition-colors cursor-pointer">
                  เงื่อนไขการใช้งาน
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
