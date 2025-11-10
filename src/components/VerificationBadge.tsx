import React from 'react'
import { VerificationBadgeProps } from '@/types/seller'

export default function VerificationBadge({
  approved,
  size = 'md'
}: VerificationBadgeProps) {
  if (!approved) return null

  const sizeClasses = {
    sm: 'w-5 h-5 text-xs',
    md: 'w-6 h-6 text-sm',
    lg: 'w-8 h-8 text-base'
  }

  return (
    <div
      className={`
        ${sizeClasses[size]}
        rounded-full
        bg-green-500
        flex items-center justify-center
        text-white
        font-bold
        shadow-lg
        border-2 border-white
      `}
      title="Verified Seller"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-full h-full p-1"
      >
        <path
          fillRule="evenodd"
          d="M19.916 4.626a.75.75 0 0 1 .208 1.04l-9 13.5a.75.75 0 0 1-1.154.114l-6-6a.75.75 0 0 1 1.06-1.06l5.353 5.353 8.493-12.74a.75.75 0 0 1 1.04-.207Z"
          clipRule="evenodd"
        />
      </svg>
    </div>
  )
}
