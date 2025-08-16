import Image from "next/image";
import { FaFacebook, FaInstagram, FaLine } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-slate-800 rounded-t-3xl text-white py-8 p-5 md:py-12">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          {/* Left Section - Logo and Company Info */}
          <div className="flex-1">
            <div className="mb-10">
              <h2 className="text-2xl md:text-4xl font-bold mb-2">Logo</h2>
            </div>
            <div>
              <h3 className="text-xl md:text-2xl font-bold mb-2">GOGRAPHY</h3>
              <p className="text-sm md:text-base text-gray-300 leading-relaxed">
                79/576 ซอยสนามกีฬาแห่ง 150 แขวงสะพานสูง<br />
                เขตสะพานสูง กรุงเทพมหานคร 10240
              </p>
            </div>
          </div>

          {/* Right Section - Contact Info and Social Media */}
          <div className="flex-1 md:text-right">
            <h3 className="text-xl md:text-2xl font-bold mb-4">Follow us</h3>
            <div className="space-y-2 mb-6">
              <p className="text-sm md:text-base text-gray-300">
                Tel: 097-919-9293
              </p>
              <p className="text-sm md:text-base text-gray-300">
                Email: info@gography.net
              </p>
              <p className="text-sm md:text-base text-gray-300">
                Line: @Gography
              </p>
            </div>

            {/* Social Media Icons */}
            <div className="flex gap-4 md:justify-end">
              <a 
                href="#" 
                className="w-8 h-8 md:w-10 md:h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
                aria-label="Facebook"
              >
                <FaFacebook className="text-lg md:text-xl" />
              </a>
              <a 
                href="#" 
                className="w-8 h-8 md:w-10 md:h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
                aria-label="Instagram"
              >
                <FaInstagram className="text-lg md:text-xl" />
              </a>
              <a 
                href="#" 
                className="w-8 h-8 md:w-10 md:h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
                aria-label="Line"
              >
                <FaLine className="text-lg md:text-xl" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
