import React from 'react';

interface NavbarProps {
  className?: string;
}

const Navbar: React.FC<NavbarProps> = ({ className = '' }) => {
  return (
    <nav className={`container mx-auto my-4 mt-8 bg-black/40 rounded-full shadow-md py-4 px-[80px] flex items-center justify-between animate-fade-in-down ${className}`}>
      <div className="flex items-center space-x-4">
        <span className="font-bold text-3xl text-white">Logo</span>
      </div>
      <ul className="flex items-center text-xl space-x-12">
        <li><a href="#" className="text-white hover:text-orange-600 font-normal transition">เกี่ยวกับเรา</a></li>
        <li><a href="#" className="text-white hover:text-orange-600 font-normal transition">ค่าคอมมิชชั่น</a></li>
        <li><a href="#" className="text-white hover:text-orange-600 font-normal transition">ติดต่อ</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
