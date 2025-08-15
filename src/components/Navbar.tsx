"use client"

import React, { useState } from 'react';

interface NavbarProps {
  className?: string;
}

const Navbar: React.FC<NavbarProps> = ({ className = '' }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className={`container mx-auto my-2 md:my-4 mt-4 md:mt-8 md:bg-black/40 md:backdrop-blur-sm rounded-full md:shadow-lg py-3 md:py-4 px-5 md:px-[80px] flex items-center justify-between animate-fade-in-down ${className}`}>
      <div className="flex items-center space-x-4">
        <span className="font-bold text-4xl md:text-3xl text-white">Logo</span>
      </div>
      
      {/* Desktop Menu */}
      <ul className="hidden md:flex items-center text-lg lg:text-xl space-x-6 lg:space-x-12">
        <li><a href="#" className="text-white hover:text-orange-600 font-normal transition-colors">เกี่ยวกับเรา</a></li>
        <li><a href="#" className="text-white hover:text-orange-600 font-normal transition-colors">ค่าคอมมิชชั่น</a></li>
        <li><a href="#" className="text-white hover:text-orange-600 font-normal transition-colors">ติดต่อ</a></li>
      </ul>

      {/* Mobile Menu Button */}
      <button 
        className="md:hidden text-white p-2 mt-1 rounded-lg hover:bg-white/10 transition-colors"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        <div className="w-6 h-6 flex flex-col justify-center space-y-1">
          <div className={`h-0.5 bg-white transition-all ${isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></div>
          <div className={`h-0.5 bg-white transition-all ${isMobileMenuOpen ? 'opacity-0' : ''}`}></div>
          <div className={`h-0.5 bg-white transition-all ${isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></div>
        </div>
      </button>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-4 right-4 mt-2 bg-black/40 backdrop-blur-lg rounded-2xl shadow-lg py-4 md:hidden">
          <ul className="flex flex-col space-y-3 px-6">
            <li><a href="#" className="block text-white hover:text-orange-600 font-normal transition-colors py-2">เกี่ยวกับเรา</a></li>
            <li><a href="#" className="block text-white hover:text-orange-600 font-normal transition-colors py-2">ค่าคอมมิชชั่น</a></li>
            <li><a href="#" className="block text-white hover:text-orange-600 font-normal transition-colors py-2">ติดต่อ</a></li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
