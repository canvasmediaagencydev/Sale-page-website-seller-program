'use client'

import Image from 'next/image'
import { SellerCardProps } from '@/types/seller'
import { formatApprovedDate } from '@/lib/seller-utils'
import ShareButtons from '@/components/ShareButtons'

export default function SellerCard({ seller, sellerId }: SellerCardProps) {
  const cardUrl = `/seller-verification/${sellerId}`
  const isApproved = !!seller.approved_at

  return (
    <div className="w-full max-w-lg mx-auto">
      {/* Main Card Container */}
      <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-paydee-orange-primary/5 via-white to-paydee-blue-primary/5 pointer-events-none"></div>

        {/* Decorative Top Border */}
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-paydee-orange-primary via-paydee-yellow-primary to-paydee-blue-primary"></div>

        {/* Content */}
        <div className="relative px-8 py-12">
          {/* PayDee Logo/Badge */}
          <div className="flex justify-center mb-8">
            <div className="inline-flex items-center gap-2 px-5 py-2 bg-gradient-to-r from-paydee-orange-primary to-paydee-yellow-primary rounded-full shadow-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-5 h-5 text-white"
              >
                <path fillRule="evenodd" d="M8.603 3.799A4.49 4.49 0 0 1 12 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 0 1 3.498 1.307 4.491 4.491 0 0 1 1.307 3.497A4.49 4.49 0 0 1 21.75 12a4.49 4.49 0 0 1-1.549 3.397 4.491 4.491 0 0 1-1.307 3.497 4.491 4.491 0 0 1-3.497 1.307A4.49 4.49 0 0 1 12 21.75a4.49 4.49 0 0 1-3.397-1.549 4.49 4.49 0 0 1-3.498-1.306 4.491 4.491 0 0 1-1.307-3.498A4.49 4.49 0 0 1 2.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 0 1 1.307-3.497 4.49 4.49 0 0 1 3.497-1.307Zm7.007 6.387a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clipRule="evenodd" />
              </svg>
              <span className="text-white font-bold text-sm tracking-wide">
                PayDee Verified
              </span>
            </div>
          </div>

          {/* Avatar Section */}
          <div className="flex justify-center mb-6">
            <div className="relative">
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-paydee-orange-primary to-paydee-blue-primary rounded-full blur-2xl opacity-20 animate-pulse"></div>

              {/* Avatar Container */}
              <div className="relative w-40 h-40 rounded-full border-4 border-white shadow-2xl overflow-hidden bg-gradient-to-br from-paydee-blue-primary to-paydee-orange-primary">
                {seller.avatar_url ? (
                  <Image
                    src={seller.avatar_url}
                    alt={seller.full_name || 'Seller Avatar'}
                    width={160}
                    height={160}
                    className="w-full h-full object-cover"
                    priority
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <span className="text-white text-5xl font-bold">
                      {seller.full_name?.charAt(0) || 'S'}
                    </span>
                  </div>
                )}
              </div>

              {/* Verified Badge */}
              {isApproved && (
                <div className="absolute -bottom-2 -right-2 bg-green-500 rounded-full p-3 shadow-lg border-4 border-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-6 h-6 text-white"
                  >
                    <path
                      fillRule="evenodd"
                      d="M19.916 4.626a.75.75 0 0 1 .208 1.04l-9 13.5a.75.75 0 0 1-1.154.114l-6-6a.75.75 0 0 1 1.06-1.06l5.353 5.353 8.493-12.74a.75.75 0 0 1 1.04-.207Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              )}
            </div>
          </div>

          {/* Name */}
          <h1 className="text-center text-3xl font-bold text-gray-900 mb-3">
            {seller.full_name || 'ไม่ระบุชื่อ'}
          </h1>

          {/* Seller ID Badge */}
          <div className="flex justify-center mb-8">
            <div className="inline-flex flex-col items-center gap-1">
              <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">
                Seller ID
              </span>
              <div className="flex items-center gap-2 px-5 py-2.5 bg-gray-100 rounded-xl border-2 border-gray-200">
                <span className="text-xl font-bold text-paydee-orange-primary tracking-widest font-mono">
                  {sellerId.toUpperCase()}
                </span>
              </div>
            </div>
          </div>

          {/* Verification Info */}
          {isApproved && (
            <div className="bg-green-50 border-2 border-green-200 rounded-2xl p-5 mb-8">
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-6 h-6 text-white"
                  >
                    <path
                      fillRule="evenodd"
                      d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-green-900 text-lg mb-1">
                    Verified Seller
                  </h3>
                  <p className="text-sm text-green-700 mb-1">
                    ได้รับการอนุมัติและยืนยันตัวตนจาก PayDee แล้ว
                  </p>
                  <p className="text-xs text-green-600">
                    อนุมัติเมื่อ: {formatApprovedDate(seller.approved_at)}
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Share Section */}
          <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
            <ShareButtons
              url={cardUrl}
              sellerName={seller.full_name || 'Seller'}
              sellerId={sellerId}
              variant="seller"
            />
          </div>
        </div>

        {/* Footer */}
        <div className="relative bg-gradient-to-r from-gray-50 to-gray-100 px-8 py-5 border-t border-gray-200">
          <div className="flex items-center justify-center gap-2 text-sm text-gray-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-4 h-4"
            >
              <path fillRule="evenodd" d="M12 1.5a5.25 5.25 0 0 0-5.25 5.25v3a3 3 0 0 0-3 3v6.75a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3v-6.75a3 3 0 0 0-3-3v-3c0-2.9-2.35-5.25-5.25-5.25Zm3.75 8.25v-3a3.75 3.75 0 1 0-7.5 0v3h7.5Z" clipRule="evenodd" />
            </svg>
            <span className="font-blod">
              Protected & Verified by PayDee
            </span>
          </div>
          <p className="text-center text-xs text-gray-500 mt-2">
            www.paydee.me
          </p>
        </div>
      </div>
    </div>
  )
}
