'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { searchApprovedSellers, SellerCardData } from '@/lib/supabase'
import { generateSellerId } from '@/lib/seller-utils'

export default function SellerSearchPage() {
  const [sellers, setSellers] = useState<SellerCardData[]>([])
  const [searchQuery, setSearchQuery] = useState('')
  const [loading, setLoading] = useState(false)
  const [isSearching, setIsSearching] = useState(false)

  // Debounce search to avoid too many API calls
  useEffect(() => {
    const trimmedQuery = searchQuery.trim()

    // Don't search if less than 5 characters
    if (!trimmedQuery || trimmedQuery.length < 5) {
      setSellers([])
      setIsSearching(false)
      return
    }

    // Debounce: wait 500ms after user stops typing
    setIsSearching(true)
    const timeoutId = setTimeout(async () => {
      setLoading(true)
      const results = await searchApprovedSellers(trimmedQuery)
      setSellers(results)
      setLoading(false)
      setIsSearching(false)
    }, 500)

    return () => clearTimeout(timeoutId)
  }, [searchQuery])

  return (
    <div className="min-h-screen bg-gradient-to-b from-paydee-blue-primary via-paydee-blue-primary/80 to-paydee-blue-primary/60 pt-32 md:pt-36 pb-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center gap-2 mb-4">
            <div className="w-12 h-12 bg-gradient-to-br from-paydee-orange-primary to-paydee-yellow-primary rounded-full flex items-center justify-center shadow-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6 text-white"
              >
                <path fillRule="evenodd" d="M8.603 3.799A4.49 4.49 0 0 1 12 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 0 1 3.498 1.307 4.491 4.491 0 0 1 1.307 3.497A4.49 4.49 0 0 1 21.75 12a4.49 4.49 0 0 1-1.549 3.397 4.491 4.491 0 0 1-1.307 3.497 4.491 4.491 0 0 1-3.497 1.307A4.49 4.49 0 0 1 12 21.75a4.49 4.49 0 0 1-3.397-1.549 4.49 4.49 0 0 1-3.498-1.306 4.491 4.491 0 0 1-1.307-3.498A4.49 4.49 0 0 1 2.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 0 1 1.307-3.497 4.49 4.49 0 0 1 3.497-1.307Zm7.007 6.387a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clipRule="evenodd" />
              </svg>
            </div>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-3">
            ค้นหา Verified Seller
          </h1>
          <p className="text-gray-200 text-lg">
            ตรวจสอบตัวตนและข้อมูล Seller ที่ได้รับการอนุมัติจาก PayDee
          </p>
        </div>

        {/* Search Box */}
        <div className="bg-white/50 backdrop-blur-sm rounded-2xl shadow-xl p-6 mb-8">
          <div className="relative">
            <input
              type="text"
              placeholder="ค้นหาด้วยชื่อ-นามสกุล หรือ Seller ID..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-5 py-4 pr-12 text-lg rounded-xl focus:border-paydee-orange-primary focus:outline-none focus:ring-2 focus:ring-white transition-all"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="absolute right-4 top-1/2 -translate-y-1/2 w-6 h-6 text-white"
            >
              <path
                fillRule="evenodd"
                d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z"
                clipRule="evenodd"
              />
            </svg>
          </div>

          {searchQuery && (
            <div className="mt-4 flex items-center gap-2 text-sm">
              {searchQuery.trim().length < 5 ? (
                <span className="text-gray-200">
                  กรุณาพิมพ์อย่างน้อย 5 ตัวอักษร ({searchQuery.trim().length}/5)
                </span>
              ) : isSearching ? (
                <span className="text-gray-200">
                  กำลังค้นหา...
                </span>
              ) : (
                <>
                  <span className="text-gray-200">พบ</span>
                  <span className="font-bold text-white text-lg">
                    {sellers.length}
                  </span>
                  <span className="text-gray-200">ผลลัพธ์</span>
                </>
              )}
            </div>
          )}
        </div>

        {/* Results */}
        {loading ? (
          <div className="text-center py-20">
            <div className="inline-block animate-spin rounded-full h-16 w-16 border-4 border-white border-t-transparent"></div>
            <p className="mt-6 text-white text-lg">กำลังโหลดข้อมูล Seller...</p>
          </div>
        ) : !searchQuery.trim() || searchQuery.trim().length < 5 ? (
          <div className="bg-white rounded-2xl shadow-xl p-16 text-center border border-gray-200">
            <div className="w-20 h-20 bg-gradient-to-br from-paydee-orange-primary/20 to-paydee-blue-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-10 h-10 text-paydee-orange-primary"
              >
                <path
                  fillRule="evenodd"
                  d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">
              เริ่มต้นค้นหา Seller
            </h3>
            <p className="text-gray-600 text-lg mb-4">
              กรอกชื่อ-นามสกุล หรือ Seller ID ในช่องค้นหาด้านบน
            </p>
            <div className="inline-flex items-center gap-2 text-sm text-gray-500 bg-gray-50 px-4 py-2 rounded-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-4 h-4"
              >
                <path
                  fillRule="evenodd"
                  d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 0 1 .67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 1 1-.671-1.34l.041-.022ZM12 9a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z"
                  clipRule="evenodd"
                />
              </svg>
              <span>ตัวอย่าง: "สมชาย" หรือ "77C23"</span>
            </div>
          </div>
        ) : sellers.length === 0 ? (
          <div className="bg-white rounded-2xl shadow-xl p-16 text-center border border-gray-200">
            <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-10 h-10 text-gray-400"
              >
                <path
                  fillRule="evenodd"
                  d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">
              ไม่พบผลลัพธ์
            </h3>
            <p className="text-gray-600 text-lg">
              ไม่พบ Seller ที่ตรงกับ "{searchQuery}"
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {sellers.map((seller) => {
              const sellerId = generateSellerId(seller.id)
              return (
                <Link
                  key={seller.id}
                  href={`/seller-verification/${sellerId}`}
                  className="bg-white rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 p-6 flex items-center gap-4 group border border-gray-200 hover:border-paydee-orange-primary"
                >
                  {/* Avatar */}
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-full overflow-hidden bg-gradient-to-br from-paydee-blue-primary to-paydee-orange-primary border-2 border-paydee-orange-primary/20 shadow-lg">
                      {seller.avatar_url ? (
                        <Image
                          src={seller.avatar_url}
                          alt={seller.full_name || 'Seller'}
                          width={64}
                          height={64}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-white text-xl font-bold">
                          {seller.full_name?.charAt(0) || 'S'}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Info */}
                  <div className="flex-1 min-w-0">
                    <h3 className="font-bold text-gray-900 text-lg truncate group-hover:text-paydee-orange-primary transition-colors">
                      {seller.full_name}
                    </h3>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-xs text-gray-500">ID:</span>
                      <span className="text-sm font-mono font-bold text-paydee-orange-primary">
                        {sellerId}
                      </span>
                    </div>
                    <div className="flex items-center gap-1 mt-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-4 h-4 text-green-500"
                      >
                        <path
                          fillRule="evenodd"
                          d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-xs text-green-600 font-semibold">
                        Verified
                      </span>
                    </div>
                  </div>

                  {/* Arrow Icon */}
                  <div className="flex-shrink-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-6 h-6 text-gray-400 group-hover:text-paydee-orange-primary group-hover:translate-x-1 transition-all"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </Link>
              )
            })}
          </div>
        )}
      </div>
    </div>
  )
}
