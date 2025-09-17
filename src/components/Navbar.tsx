"use client"

import React, { useState } from 'react';
import Image from 'next/image';

interface NavbarProps {
  className?: string;
}

const Navbar: React.FC<NavbarProps> = ({ className = '' }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className={`transition-all duration-300 ${className}`}>
      <div className="container mx-auto max-w-7xl px-4 lg:px-8">
        <div className="flex items-center justify-between h-20 md:h-24">
          {/* Logo Section */}
          <div className="flex items-center space-x-3">
            <div className="relative">
              <Image
                src="/img/paydee LOGO 03.svg"
                alt="PayDee Logo"
                width={140}
                height={45}
                className="h-10 md:h-12 w-auto drop-shadow-lg"
                priority
              />
            </div>
            <div className="hidden md:block">
              <span className="text-white font-bold text-2xl md:text-3xl tracking-tight drop-shadow-lg">
                paydee<span className="text-paydee-yellow-primary">.me</span>
              </span>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <ul className="flex items-center space-x-8">
              <li>
                <a href="#about" className="text-white/90 hover:text-white font-bold text-lg transition-all duration-300 hover:scale-105 relative group">
                  เกี่ยวกับเรา
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-paydee-yellow-primary transition-all duration-300 group-hover:w-full"></span>
                </a>
              </li>
              <li>
                <a href="#commission" className="text-white/90 hover:text-white font-bold text-lg transition-all duration-300 hover:scale-105 relative group">
                  ค่าคอมมิชชั่น
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-paydee-yellow-primary transition-all duration-300 group-hover:w-full"></span>
                </a>
              </li>
              <li>
                <a href="#contact" className="text-white/90 hover:text-white font-bold text-lg transition-all duration-300 hover:scale-105 relative group">
                  ติดต่อ
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-paydee-yellow-primary transition-all duration-300 group-hover:w-full"></span>
                </a>
              </li>
            </ul>

            {/* CTA Button */}
            <button className="bg-gradient-to-r from-paydee-orange-primary to-paydee-yellow-primary hover:from-paydee-yellow-primary hover:to-paydee-orange-primary text-white px-6 py-3 rounded-full font-semibold text-sm transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
              เริ่มต้นเลย
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden relative z-50 p-3 rounded-full bg-white/10 backdrop-blur-sm transition-all duration-300 hover:bg-white/20"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <div className="w-6 h-6 flex flex-col justify-center space-y-1">
              <div className={`h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></div>
              <div className={`h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`}></div>
              <div className={`h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></div>
            </div>
          </button>
        </div>
      </div>


      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-black/50 z-40 transition-opacity duration-300" onClick={() => setIsMobileMenuOpen(false)} />
      )}

      {/* Mobile Menu */}
      <div className={`md:hidden fixed top-0 right-0 h-full w-80 bg-gradient-to-b from-paydee-blue-primary to-paydee-blue-light backdrop-blur-xl z-40 transform transition-transform duration-300 ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="pt-24 px-6">
          <ul className="space-y-6">
            <li>
              <a href="#about" className="block text-white font-bold text-xl py-3 border-b border-white/20 hover:text-paydee-yellow-primary transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}>
                เกี่ยวกับเรา
              </a>
            </li>
            <li>
              <a href="#commission" className="block text-white font-bold text-xl py-3 border-b border-white/20 hover:text-paydee-yellow-primary transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}>
                ค่าคอมมิชชั่น
              </a>
            </li>
            <li>
              <a href="#contact" className="block text-white font-bold text-xl py-3 border-b border-white/20 hover:text-paydee-yellow-primary transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}>
                ติดต่อ
              </a>
            </li>
          </ul>

          <div className="mt-8">
            <button className="w-full bg-gradient-to-r from-paydee-orange-primary to-paydee-yellow-primary text-white px-6 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
              เริ่มต้นเลย
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
