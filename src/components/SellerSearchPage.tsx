'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { HiMagnifyingGlass, HiOutlineSparkles, HiOutlineStar, HiOutlineUser } from 'react-icons/hi2'
import { searchApprovedSellers, SellerCardData } from '@/lib/supabase'
import { generateSellerId } from '@/lib/seller-utils'

export default function SellerSearchPage() {
  const [sellers, setSellers] = useState<SellerCardData[]>([])
  const [searchQuery, setSearchQuery] = useState('')
  const [loading, setLoading] = useState(false)
  const [isSearching, setIsSearching] = useState(false)

  useEffect(() => {
    const trimmedQuery = searchQuery.trim()
    if (!trimmedQuery || trimmedQuery.length < 5) {
      setSellers([])
      setIsSearching(false)
      return
    }

    setIsSearching(true)
    const timeoutId = setTimeout(async () => {
      setLoading(true)
      const results = await searchApprovedSellers(trimmedQuery)
      setSellers(results)
      setLoading(false)
      setIsSearching(false)
    }, 400)

    return () => clearTimeout(timeoutId)
  }, [searchQuery])

  return (
    <div className="min-h-screen bg-gradient-to-b from-paydee-blue-primary via-paydee-blue-primary/80 to-paydee-blue-primary/60">
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-24 right-12 w-80 h-80 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute bottom-16 left-6 w-[32rem] h-[32rem] bg-paydee-orange-primary/15 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 px-4 pt-40 pb-20 max-w-5xl mx-auto">
        <section className="mb-12 text-center text-white">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/15 rounded-full border border-white/30 backdrop-blur">
            <HiOutlineSparkles className="h-4 w-4" />
            <span className="text-sm font-semibold uppercase tracking-wide">Verified Seller Directory</span>
          </div>
          <h1 className="mt-6 text-5xl font-bold drop-shadow-lg">Seller Verification</h1>
          <p className="mt-3 text-xl text-white/90 max-w-2xl mx-auto">
            ตรวจสอบและยืนยันตัวตน Seller ที่ได้รับการรับรองจาก PayDee
          </p>
        </section>

        <section className="mb-12">
          <div className="bg-white/75 backdrop-blur-xl rounded-[32px] border border-white/50 shadow-2xl p-8">
            <div className="relative">
              <HiMagnifyingGlass className="absolute left-6 top-1/2 -translate-y-1/2 h-6 w-6 text-gray-400" />
              <input
                type="text"
                placeholder="ค้นหาด้วยชื่อ-นามสกุล หรือ Seller ID"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-16 pr-6 py-5 text-lg bg-white/60 border border-white/60 rounded-2xl focus:border-paydee-blue-primary focus:ring-4 focus:ring-paydee-blue-primary/15 transition-all placeholder:text-gray-400"
              />
              {isSearching && (
                <div className="absolute right-6 top-1/2 -translate-y-1/2">
                  <div className="w-5 h-5 border-2 border-paydee-blue-primary border-t-transparent rounded-full animate-spin" />
                </div>
              )}
            </div>
            {searchQuery && (
              <div className="mt-4 flex items-center justify-between text-sm text-gray-500 px-2">
                {searchQuery.trim().length < 5 ? (
                  <div className="inline-flex items-center gap-2">
                    <HiOutlineUser className="h-4 w-4" />
                    <span>พิมพ์อย่างน้อย 5 ตัวอักษรเพื่อเริ่มค้นหา</span>
                  </div>
                ) : (
                  <div className="inline-flex items-center gap-2 text-paydee-blue-primary font-semibold">
                    <HiOutlineStar className="h-4 w-4" />
                    <span>ค้นหา "{searchQuery}"</span>
                  </div>
                )}
                {loading && <span className="text-xs uppercase tracking-wide">กำลังดึงข้อมูล...</span>}
              </div>
            )}
          </div>
        </section>

        <section>
          {searchQuery.trim().length < 5 ? (
            <div className="bg-white/15 backdrop-blur-xl rounded-[32px] border border-white/30 p-14 text-center text-white">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white/20 mb-5">
                <HiOutlineUser className="h-6 w-6" />
              </div>
              <h3 className="text-3xl font-bold mb-3">เริ่มต้นค้นหา</h3>
              <p className="text-white/85">
                กรอกชื่อ-นามสกุล หรือ Seller ID ในช่องด้านบน เพื่อดูสถานะการยืนยัน
              </p>
            </div>
          ) : sellers.length === 0 ? (
            <div className="bg-white/20 backdrop-blur-xl rounded-[32px] border border-white/30 p-16 text-center text-white">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/20 mb-6">
                <HiOutlineStar className="h-8 w-8" />
              </div>
              <h3 className="text-3xl font-bold mb-3">ไม่พบผลลัพธ์</h3>
              <p className="text-white/90">ไม่พบ Seller ที่ตรงกับ "{searchQuery}"</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {sellers.map((seller) => {
                const sellerId = generateSellerId(seller.id)
                return (
                  <Link key={seller.id} href={`/seller-verification/${sellerId}`} className="group">
                    <div className="bg-white/35 backdrop-blur-2xl rounded-2xl border border-white/40 p-6 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
                      <div className="flex items-center gap-4">
                        <div className="relative">
                          <div className="absolute inset-0 bg-gradient-to-br from-paydee-blue-primary to-paydee-orange-primary rounded-2xl blur-md opacity-40 group-hover:opacity-60" />
                          <div className="relative w-20 h-20 rounded-2xl overflow-hidden border border-white/50 bg-white/60">
                            {seller.avatar_url ? (
                              <Image src={seller.avatar_url} alt={seller.full_name || 'Seller'} width={80} height={80} className="object-cover w-full h-full" />
                            ) : (
                              <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-paydee-blue-primary to-paydee-orange-primary text-white text-2xl font-semibold">
                                {seller.full_name?.charAt(0) || 'S'}
                              </div>
                            )}
                          </div>
                          <div className="absolute -bottom-1 -right-1 w-7 h-7 rounded-full bg-emerald-500 border-2 border-white flex items-center justify-center text-white text-xs font-bold">
                            ✓
                          </div>
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between">
                            <p className="text-lg font-semibold text-slate-800 truncate">{seller.full_name}</p>
                            <span className="text-xs font-mono text-paydee-blue-primary">{sellerId}</span>
                          </div>
                          <p className="mt-1 text-sm text-gray-500 truncate">{seller.email || 'verified@paydee.me'}</p>
                          <p className="text-xs text-emerald-600 mt-1">ยืนยันแล้ว</p>
                        </div>
                      </div>
                    </div>
                  </Link>
                )
              })}
            </div>
          )}
        </section>
      </div>
    </div>
  )
}
