import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="container mx-auto my-4 bg-black/40 rounded-full shadow-md py-4 px-[80px] flex items-center justify-between">
      <div className="flex items-center space-x-4">
        <span className="font-bold text-3xl text-white">Logo</span>
      </div>
      <ul className="flex items-center space-x-12">
        <li><a href="#" className="text-white hover:text-blue-600 transition">Home</a></li>
        <li><a href="#" className="text-white hover:text-blue-600 transition">Features</a></li>
        <li><a href="#" className="text-white hover:text-blue-600 transition">Pricing</a></li>
        <li><a href="#" className="text-white hover:text-blue-600 transition">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
