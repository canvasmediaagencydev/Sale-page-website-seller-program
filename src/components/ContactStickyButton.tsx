'use client';

import { useState } from 'react';
import { FiPhone, FiMail, FiMessageCircle, FiX } from 'react-icons/fi';
import { CONTACT_INFO } from '@/constants';
import { FaLine } from "react-icons/fa6";

export default function ContactStickyButton() {
  const [isOpen, setIsOpen] = useState(false);

  const contactOptions = [
    {
      icon: FiPhone,
      label: 'โทรหา',
      value: CONTACT_INFO.PHONE,
      href: `tel:${CONTACT_INFO.PHONE}`,
      color: 'bg-green-500 hover:bg-green-600',
    },
    {
      icon: FaLine,
      label: 'LINE',
      value: CONTACT_INFO.LINE_ID,
      href: `https://line.me/ti/p/${CONTACT_INFO.LINE_ID}`,
      color: 'bg-green-400 hover:bg-green-500',
    },
    {
      icon: FiMail,
      label: 'อีเมล',
      value: CONTACT_INFO.EMAIL,
      href: `mailto:${CONTACT_INFO.EMAIL}`,
      color: 'bg-paydee-blue-primary hover:bg-paydee-blue-light',
    },
  ];

  return (
    <>
      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/20 z-40 transition-opacity"
          onClick={() => setIsOpen(false)}
        />
      )}

      <div className="fixed bottom-6 right-6 z-50">
        {/* Contact Options */}
        {isOpen && (
          <div className="mb-4 space-y-3 animate-in slide-in-from-bottom-2 duration-300">
            {contactOptions.map((option) => (
              <a
                key={option.label}
                href={option.href}
                target={option.href.startsWith('http') ? '_blank' : undefined}
                rel={option.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className={`flex items-center gap-3 px-4 py-3 rounded-full text-white shadow-lg transition-all hover:shadow-xl hover:scale-105 ${option.color}`}
                onClick={() => setIsOpen(false)}
              >
                <option.icon className="w-5 h-5" />
                <div className="text-md">
                  <div className="opacity-90">{option.value}</div>
                </div>
              </a>
            ))}
          </div>
        )}

        {/* Main Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`w-14 h-14 rounded-full shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-110 ${
            isOpen 
              ? 'bg-red-500 hover:bg-red-600 rotate-180' 
              : 'bg-gradient-to-r from-paydee-blue-primary to-paydee-orange-primary hover:from-paydee-blue-light hover:to-paydee-yellow-primary'
          }`}
          aria-label={isOpen ? 'ปิดเมนูติดต่อ' : 'เปิดเมนูติดต่อ'}
        >
          {isOpen ? (
            <FiX className="w-6 h-6 text-white mx-auto" />
          ) : (
            <FiPhone className="w-6 h-6 text-white mx-auto animate-pulse" />
          )}
        </button>
      </div>
    </>
  );
}