"use client"

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface NavbarProps {
  className?: string;
}

const Navbar: React.FC<NavbarProps> = ({ className = '' }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname() || '';
  const hideNavbar = /^\/seller-verification\/.+/.test(pathname);

  useEffect(() => {
    if (hideNavbar) {
      return;
    }
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [hideNavbar]);

  if (hideNavbar) {
    return null;
  }

  return (
    <nav className={`transition-all duration-500 ease-in-out ${
      isScrolled
        ? 'fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-lg'
        : ''
    } ${className}`}>
      <div className="container mx-auto max-w-7xl px-4 lg:px-8">
        <div className="flex items-center justify-between h-20 md:h-24">
          {/* Logo Section */}
          <Link href="/" className="flex items-center space-x-3">
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
            <div className="block md:hidden">
              <span className={`font-bold text-lg tracking-tight drop-shadow-lg transition-colors duration-500 ease-in-out ${
                isScrolled ? 'text-gray-900' : 'text-white'
              }`}>
                paydee<span className="text-paydee-yellow-primary">.me</span>
              </span>
            </div>
            <div className="hidden md:block">
              <span className={`font-bold text-2xl md:text-3xl tracking-tight drop-shadow-lg transition-colors duration-500 ease-in-out ${
                isScrolled ? 'text-gray-900' : 'text-white'
              }`}>
                paydee<span className="text-paydee-yellow-primary">.me</span>
              </span>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <ul className="flex items-center space-x-8">
              <li>
                <Link
                  href="/#statistics-section"
                  className={`font-bold text-lg transition-all duration-500 ease-in-out hover:scale-105 relative group cursor-pointer ${
                    isScrolled ? 'text-gray-700 hover:text-gray-900' : 'text-white/90 hover:text-white'
                  }`}
                >
                  เกี่ยวกับเรา
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-paydee-yellow-primary transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>
              <li>
                <Link
                  href="/#trips-section"
                  className={`font-bold text-lg transition-all duration-500 ease-in-out hover:scale-105 relative group cursor-pointer ${
                    isScrolled ? 'text-gray-700 hover:text-gray-900' : 'text-white/90 hover:text-white'
                  }`}
                >
                  ค่าคอมมิชชั่น
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-paydee-yellow-primary transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className={`font-bold text-lg transition-all duration-500 ease-in-out hover:scale-105 relative group cursor-pointer ${
                    isScrolled ? 'text-gray-700 hover:text-gray-900' : 'text-white/90 hover:text-white'
                  }`}
                >
                  บทความ
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-paydee-yellow-primary transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>
              <li>
                <a
                  href="/seller-rules"
                  className={`font-bold text-lg transition-all duration-500 ease-in-out hover:scale-105 relative group cursor-pointer ${
                    isScrolled ? 'text-gray-700 hover:text-gray-900' : 'text-white/90 hover:text-white'
                  }`}
                >
                  เงื่อนไขและข้อตกลง
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-paydee-yellow-primary transition-all duration-300 group-hover:w-full"></span>
                </a>
              </li>
              <li>
                <Link
                  href="/#footer"
                  className={`font-bold text-lg transition-all duration-500 ease-in-out hover:scale-105 relative group cursor-pointer ${
                    isScrolled ? 'text-gray-700 hover:text-gray-900' : 'text-white/90 hover:text-white'
                  }`}
                >
                  ติดต่อ
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-paydee-yellow-primary transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>
            </ul>

            {/* CTA Button */}
            <button
              onClick={() => window.open('https://app.paydee.me', '_blank')}
              className="bg-gradient-to-r from-paydee-orange-primary to-paydee-yellow-primary hover:from-paydee-yellow-primary hover:to-paydee-orange-primary text-white px-6 py-3 rounded-full font-semibold text-sm transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl cursor-pointer"
            >
              เริ่มต้นเลย
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden relative z-50 p-3 rounded-full backdrop-blur-sm transition-all duration-300 cursor-pointer ${
              isScrolled
                ? 'bg-gray-100 hover:bg-gray-200'
                : 'bg-white/10 hover:bg-white/20'
            }`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <div className="w-6 h-6 flex flex-col justify-center space-y-1">
              <div className={`h-0.5 transition-all duration-300 ${
                isScrolled ? 'bg-gray-700' : 'bg-white'
              } ${isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></div>
              <div className={`h-0.5 transition-all duration-300 ${
                isScrolled ? 'bg-gray-700' : 'bg-white'
              } ${isMobileMenuOpen ? 'opacity-0' : ''}`}></div>
              <div className={`h-0.5 transition-all duration-300 ${
                isScrolled ? 'bg-gray-700' : 'bg-white'
              } ${isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></div>
            </div>
          </button>
        </div>
      </div>


      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black/50 transition-opacity duration-300"
          onClick={() => setIsMobileMenuOpen(false)}
          style={{ zIndex: 9998 }}
        />
      )}

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed inset-0 transform transition-transform duration-300 ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
        style={{
          backgroundColor: '#176daf',
          zIndex: 9999,
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          width: '100vw',
          height: '100vh'
        }}
      >
        {/* Close Button */}
        <div className="absolute top-6 right-6">
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            className="w-12 h-12 bg-white/20 hover:bg-white/30 rounded-full flex flex-col justify-center items-center text-white transition-all duration-300 transform hover:scale-110 cursor-pointer"
          >
            <div className="w-6 h-0.5 bg-white transform rotate-45 translate-y-0.5 transition-all duration-300"></div>
            <div className="w-6 h-0.5 bg-white transform -rotate-45 -translate-y-0.5 transition-all duration-300"></div>
          </button>
        </div>
        <div className="pt-24 px-6">
          <ul className="space-y-6">
            <li>
              <Link
                href="/#statistics-section"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block text-white font-bold text-xl py-3 border-b border-white/20 hover:text-paydee-yellow-primary transition-colors cursor-pointer"
              >
                เกี่ยวกับเรา
              </Link>
            </li>
            <li>
              <Link
                href="/#trips-section"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block text-white font-bold text-xl py-3 border-b border-white/20 hover:text-paydee-yellow-primary transition-colors cursor-pointer"
              >
                ค่าคอมมิชชั่น
              </Link>
            </li>
            <li>
              <Link
                href="/blog"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block text-white font-bold text-xl py-3 border-b border-white/20 hover:text-paydee-yellow-primary transition-colors cursor-pointer"
              >
                บทความ
              </Link>
            </li>
            <li>
              <a
                href="/seller-rules"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block text-white font-bold text-xl py-3 border-b border-white/20 hover:text-paydee-yellow-primary transition-colors cursor-pointer"
              >
                ข้อตกลง
              </a>
            </li>
            <li>
              <Link
                href="/#footer"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block text-white font-bold text-xl py-3 border-b border-white/20 hover:text-paydee-yellow-primary transition-colors cursor-pointer"
              >
                ติดต่อ
              </Link>
            </li>
          </ul>

          <div className="mt-8">
            <button
              onClick={() => window.open('https://app.paydee.me', '_blank')}
              className="w-full bg-gradient-to-r from-paydee-orange-primary to-paydee-yellow-primary text-white px-6 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg cursor-pointer"
            >
              เริ่มต้นเลย
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
