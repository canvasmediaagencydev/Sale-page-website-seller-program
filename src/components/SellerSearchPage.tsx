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
    <div className="min-h-screen bg-gradient-to-b from-paydee-blue-primary via-paydee-blue-primary/80 to-paydee-blue-primary/60 pt-32 md:pt-36 pb-20 px-4">
      {/* Decorative Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-72 h-72 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-paydee-orange-primary/20 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Premium Header */}
        <div className="text-center mb-12">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full shadow-lg mb-6">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-sm font-semibold text-white">Verified Seller Directory</span>
          </div>

          {/* Main Title */}
          <h1 className="text-5xl md:text-6xl font-bold mb-4 text-white drop-shadow-lg">
            Seller Verification
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
            ตรวจสอบและยืนยันตัวตน Seller ที่ได้รับการรับรองจาก PayDee
          </p>
        </div>

        {/* Premium Search Box */}
        <div className="mb-12">
          <div className="bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/20 p-8">
            <div className="relative">
              {/* Search Icon */}
              <div className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>

              {/* Search Input */}
              <input
                type="text"
                placeholder="ค้นหาด้วยชื่อ-นามสกุล หรือ Seller ID (อย่างน้อย 5 ตัวอักษร)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-16 pr-6 py-5 text-lg bg-gray-50 border-2 border-gray-200 rounded-2xl focus:border-paydee-blue-primary focus:outline-none focus:ring-4 focus:ring-paydee-blue-primary/10 transition-all placeholder:text-gray-400"
              />

              {/* Loading Indicator */}
              {isSearching && (
                <div className="absolute right-6 top-1/2 -translate-y-1/2">
                  <div className="w-5 h-5 border-2 border-paydee-blue-primary border-t-transparent rounded-full animate-spin"></div>
                </div>
              )}
            </div>

            {/* Search Status */}
            {searchQuery && (
              <div className="mt-4 flex items-center justify-between px-2">
                {searchQuery.trim().length < 5 ? (
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                      <path fillRule="evenodd" d="M18 10a8 8 0 1 1-16 0 8 8 0 0 1 16 0Zm-7-4a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM9 9a.75.75 0 0 0 0 1.5h.253a.25.25 0 0 1 .244.304l-.459 2.066A1.75 1.75 0 0 0 10.747 15H11a.75.75 0 0 0 0-1.5h-.253a.25.25 0 0 1-.244-.304l.459-2.066A1.75 1.75 0 0 0 9.253 9H9Z" clipRule="evenodd" />
                    </svg>
                    <span>พิมพ์อีก {5 - searchQuery.trim().length} ตัวอักษร</span>
                  </div>
                ) : isSearching ? (
                  <div className="flex items-center gap-2 text-sm text-paydee-blue-primary">
                    <div className="w-4 h-4 border-2 border-paydee-blue-primary border-t-transparent rounded-full animate-spin"></div>
                    <span className="font-medium">กำลังค้นหา...</span>
                  </div>
                ) : (
                  <div className="flex items-center gap-2 text-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-green-500">
                      <path fillRule="evenodd" d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm3.857-9.809a.75.75 0 0 0-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 1 0-1.06 1.061l2.5 2.5a.75.75 0 0 0 1.137-.089l4-5.5Z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">
                      พบ <span className="font-bold text-paydee-blue-primary">{sellers.length}</span> ผลลัพธ์
                    </span>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Results */}
        {loading ? (
          <div className="text-center py-20">
            <div className="inline-block w-16 h-16 border-4 border-white border-t-transparent rounded-full animate-spin mb-4"></div>
            <p className="text-white text-lg font-medium">กำลังโหลดข้อมูล...</p>
          </div>
        ) : !searchQuery.trim() || searchQuery.trim().length < 5 ? (
          <div className="bg-white/20 backdrop-blur-xl rounded-3xl shadow-2xl p-16 text-center border border-white/30">
            <div className="w-24 h-24 bg-gradient-to-br from-paydee-blue-primary/20 to-paydee-orange-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-12 h-12 text-paydee-blue-primary"
              >
                <path
                  fillRule="evenodd"
                  d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <h3 className="text-3xl font-bold text-white mb-4">
              เริ่มต้นค้นหา
            </h3>
            <p className="text-white/90 text-lg mb-6">
              กรอกชื่อ-นามสกุล หรือ Seller ID ในช่องค้นหาด้านบน
            </p>
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/20 backdrop-blur-sm rounded-xl border border-white/30">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-white">
                <path d="M10 2a.75.75 0 0 1 .75.75v1.5a.75.75 0 0 1-1.5 0v-1.5A.75.75 0 0 1 10 2ZM10 15a.75.75 0 0 1 .75.75v1.5a.75.75 0 0 1-1.5 0v-1.5A.75.75 0 0 1 10 15ZM10 7a3 3 0 1 0 0 6 3 3 0 0 0 0-6ZM15.657 5.404a.75.75 0 1 0-1.06-1.06l-1.061 1.06a.75.75 0 0 0 1.06 1.06l1.06-1.06ZM6.464 14.596a.75.75 0 1 0-1.06-1.06l-1.06 1.06a.75.75 0 0 0 1.06 1.06l1.06-1.06ZM18 10a.75.75 0 0 1-.75.75h-1.5a.75.75 0 0 1 0-1.5h1.5A.75.75 0 0 1 18 10ZM5 10a.75.75 0 0 1-.75.75h-1.5a.75.75 0 0 1 0-1.5h1.5A.75.75 0 0 1 5 10ZM14.596 15.657a.75.75 0 0 0 1.06-1.06l-1.06-1.061a.75.75 0 1 0-1.06 1.06l1.06 1.06ZM5.404 6.464a.75.75 0 0 0 1.06-1.06l-1.06-1.06a.75.75 0 1 0-1.061 1.06l1.06 1.06Z" />
              </svg>
              <span className="text-sm font-bold text-white">ตัวอย่าง: "สมชาย ใจดี" หรือ "77C23"</span>
            </div>
          </div>
        ) : sellers.length === 0 ? (
          <div className="bg-white/20 backdrop-blur-xl rounded-3xl shadow-2xl p-16 text-center border border-white/30">
            <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-12 h-12 text-gray-400"
              >
                <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
              </svg>
            </div>
            <h3 className="text-3xl font-bold text-white mb-4">
              ไม่พบผลลัพธ์
            </h3>
            <p className="text-white/90 text-lg">
              ไม่พบ Seller ที่ตรงกับ <span className="font-semibold">"{searchQuery}"</span>
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {sellers.map((seller) => {
              const sellerId = generateSellerId(seller.id)
              return (
                <Link
                  key={seller.id}
                  href={`/seller-verification/${sellerId}`}
                  className="group"
                >
                  <div className="bg-white/30 backdrop-blur-xl rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-6 border border-white/40 hover:border-white/60 hover:-translate-y-1">
                    <div className="flex items-center gap-4">
                      {/* Avatar with gradient border */}
                      <div className="relative flex-shrink-0">
                        <div className="absolute inset-0 bg-gradient-to-br from-paydee-blue-primary to-paydee-orange-primary rounded-2xl blur-sm opacity-50 group-hover:opacity-75 transition-opacity"></div>
                        <div className="relative w-20 h-20 rounded-2xl overflow-hidden bg-gradient-to-br from-paydee-blue-primary to-paydee-orange-primary p-0.5">
                          <div className="w-full h-full rounded-2xl overflow-hidden bg-white">
                            {seller.avatar_url ? (
                              <Image
                                src={seller.avatar_url}
                                alt={seller.full_name || 'Seller'}
                                width={80}
                                height={80}
                                className="w-full h-full object-cover"
                              />
                            ) : (
                              <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-paydee-blue-primary to-paydee-orange-primary text-white text-2xl font-bold">
                                {seller.full_name?.charAt(0) || 'S'}
                              </div>
                            )}
                          </div>
                        </div>
                        {/* Verified Badge */}
                        <div className="absolute -bottom-1 -right-1 w-7 h-7 bg-green-500 rounded-full border-2 border-white flex items-center justify-center shadow-lg">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 text-white">
                            <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clipRule="evenodd" />
                          </svg>
                        </div>
                      </div>

                      {/* Info */}
                      <div className="flex-1 min-w-0">
                        <h3 className="font-bold text-white text-xl truncate group-hover:text-paydee-orange-primary transition-colors mb-1 drop-shadow">
                          {seller.full_name}
                        </h3>
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-xs font-medium text-white/80 uppercase tracking-wide">Seller ID</span>
                          <span className="text-sm font-mono font-bold text-paydee-yellow-primary">
                            {sellerId}
                          </span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <div className="w-1.5 h-1.5 bg-green-400 rounded-full"></div>
                          <span className="text-xs text-green-300 font-semibold uppercase tracking-wide">
                            Verified Seller
                          </span>
                        </div>
                      </div>

                      {/* Arrow */}
                      <div className="flex-shrink-0">
                        <div className="w-10 h-10 rounded-full bg-white/20 group-hover:bg-white flex items-center justify-center transition-all">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className="w-5 h-5 text-white group-hover:text-paydee-blue-primary group-hover:translate-x-0.5 transition-all"
                          >
                            <path fillRule="evenodd" d="M3 10a.75.75 0 0 1 .75-.75h10.638L10.23 5.29a.75.75 0 1 1 1.04-1.08l5.5 5.25a.75.75 0 0 1 0 1.08l-5.5 5.25a.75.75 0 1 1-1.04-1.08l4.158-3.96H3.75A.75.75 0 0 1 3 10Z" clipRule="evenodd" />
                          </svg>
                        </div>
                      </div>
                    </div>
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
