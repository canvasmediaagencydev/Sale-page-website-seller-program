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
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [hideNavbar]);

  if (hideNavbar) {
    return null;
  }

  const navLinks = [
    { href: '/#statistics-section', label: 'เกี่ยวกับเรา' },
    { href: '/#trips-section', label: 'ค่าคอมมิชชั่น' },
    { href: '/seller-rules', label: 'ข้อตกลง', isExternal: true },
    { href: '/#footer', label: 'ติดต่อ' },
  ];

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-white'
      } ${className}`}>
        <div className="container mx-auto max-w-7xl px-4 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="/img/paydee LOGO 03.svg"
                alt="PayDee Logo"
                width={44}
                height={44}
                className="h-10 md:h-11 w-auto"
                priority
              />
              <span className="font-bold text-xl md:text-2xl text-gray-900">
                paydee<span className="text-paydee-yellow-primary">.me</span>
              </span>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                link.isExternal ? (
                  <a
                    key={link.href}
                    href={link.href}
                    className="text-gray-600 hover:text-paydee-blue-primary font-medium transition-colors"
                  >
                    {link.label}
                  </a>
                ) : (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-gray-600 hover:text-paydee-blue-primary font-medium transition-colors"
                  >
                    {link.label}
                  </Link>
                )
              ))}

              <button
                onClick={() => window.open('https://app.paydee.me', '_blank')}
                className="bg-paydee-blue-primary hover:bg-paydee-blue-primary/90 text-white px-6 py-2.5 rounded-full font-semibold transition-colors cursor-pointer"
              >
                เริ่มต้นเลย
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 cursor-pointer"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <div className="w-6 h-5 flex flex-col justify-between">
                <span className={`h-0.5 bg-gray-800 rounded transition-all origin-center ${isMobileMenuOpen ? 'rotate-45 translate-y-[9px]' : ''}`}></span>
                <span className={`h-0.5 bg-gray-800 rounded transition-all ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
                <span className={`h-0.5 bg-gray-800 rounded transition-all origin-center ${isMobileMenuOpen ? '-rotate-45 -translate-y-[9px]' : ''}`}></span>
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden bg-white border-t border-gray-100 overflow-hidden transition-all duration-300 ${
          isMobileMenuOpen ? 'max-h-80' : 'max-h-0'
        }`}>
          <div className="container mx-auto px-4 py-4 space-y-1">
            {navLinks.map((link) => (
              link.isExternal ? (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block py-3 text-gray-700 hover:text-paydee-blue-primary font-medium transition-colors"
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block py-3 text-gray-700 hover:text-paydee-blue-primary font-medium transition-colors"
                >
                  {link.label}
                </Link>
              )
            ))}

            <button
              onClick={() => {
                window.open('https://app.paydee.me', '_blank');
                setIsMobileMenuOpen(false);
              }}
              className="w-full mt-3 bg-paydee-blue-primary text-white py-3 rounded-full font-semibold cursor-pointer"
            >
              เริ่มต้นเลย
            </button>
          </div>
        </div>
      </nav>

      {/* Spacer */}
      <div className="h-16 md:h-20"></div>
    </>
  );
};

export default Navbar;
