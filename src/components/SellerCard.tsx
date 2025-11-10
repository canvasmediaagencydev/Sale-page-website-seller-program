'use client'

import Image from 'next/image'
import ShareButtons from '@/components/ShareButtons'
import { SellerCardProps } from '@/types/seller'
import { formatApprovedDate } from '@/lib/seller-utils'

export default function SellerCard({ seller, sellerId }: SellerCardProps) {
  const sellerName = seller.full_name || 'ไม่ระบุชื่อ'
  const displaySellerId = sellerId.toUpperCase()
  const cardUrl = `/seller-verification/${sellerId}`
  const isApproved = !!seller.approved_at
  const approvedText = isApproved && seller.approved_at
    ? `ยืนยันเมื่อ ${formatApprovedDate(seller.approved_at)}`
    : 'รอการยืนยันจากทีม PayDee'
  const contactHref = seller.email ? `mailto:${seller.email}` : cardUrl

  return (
    <div className="w-full flex flex-col items-center gap-5">
      <div className="relative w-full max-w-sm">
        <div className="absolute -inset-6 rounded-[36px] bg-gradient-to-br from-paydee-blue-primary/10 via-white/30 to-paydee-orange-primary/10 blur-3xl" aria-hidden="true" />
        <div className="relative rounded-[30px] border border-white/40 bg-white/55 shadow-[0_35px_80px_-60px_rgba(15,23,42,0.55)] backdrop-blur-xl">
          <div className="p-5 pb-6 space-y-5">
            {/* Portrait */}
            <div className="relative aspect-[3/4] rounded-[26px] overflow-hidden border border-white/40 bg-white/25 backdrop-blur">
              {seller.avatar_url ? (
                <Image
                  src={seller.avatar_url}
                  alt={sellerName}
                  fill
                  sizes="(max-width: 768px) 100vw, 360px"
                  className="object-cover scale-[1.08]"
                  priority
                />
              ) : (
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-4xl font-semibold text-slate-400">
                    {sellerName.charAt(0)}
                  </span>
                </div>
              )}

              {/* Soft gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-white/5 via-transparent to-black/10" />
              <div className="absolute inset-0 rounded-[26px] border border-white/40 pointer-events-none" />

              {isApproved && (
                <div className="absolute top-4 left-4 inline-flex items-center gap-1 rounded-full bg-white/80 px-3 py-1 text-xs font-semibold text-emerald-600 shadow-sm backdrop-blur">
                  <span className="inline-block h-2 w-2 rounded-full bg-emerald-500" />
                  PayDee Verified
                </div>
              )}
            </div>

            {/* Text content */}
            <div className="space-y-4">
              <div>
                <div className="flex items-center gap-2">
                  <h1 className="text-xl font-semibold text-slate-900">{sellerName}</h1>
                  {isApproved && (
                    <span className="inline-flex items-center gap-1 rounded-full text-[11px] font-semibold text-emerald-700">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="h-6 w-6"
                      >
                        <path
                          fillRule="evenodd"
                          d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75-9.75-4.365-9.75-9.75Zm14.31-1.56a.75.75 0 0 0-1.12-.99l-4.347 4.92-2.443-2.443a.75.75 0 0 0-1.06 1.06l3 3a.75.75 0 0 0 1.093-.035l4.877-5.512Z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                  )}
                </div>
                <p className="mt-1 text-sm text-slate-600">
                  ตัวแทนขาย PayDee ที่ผ่านการตรวจสอบแล้ว
                </p>
              </div>
            </div>

            <div className="rounded-2xl border border-white/40 bg-white/35 px-4 py-3 backdrop-blur">
              <p className="text-[11px] uppercase tracking-[0.3em] text-slate-400">Seller ID</p>
              <p className="font-mono text-lg tracking-[0.35em] text-slate-900">{displaySellerId}</p>
            </div>

            <div className="flex items-center justify-between text-xs text-slate-500 rounded-2xl border border-white/30 bg-white/30 px-4 py-3 backdrop-blur">
              <div className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.7}
                  className="h-4 w-4 text-slate-400"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="m4 6 8 5 8-5" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16v12H4z" />
                </svg>
                <span className="truncate max-w-[160px]">
                  {seller.email || 'verified@paydee.me'}
                </span>
              </div>
              <span>{approvedText}</span>
            </div>

            <div className="flex items-center justify-between border-t border-white/50 pt-4">
              <span className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                PayDee Secure Seller
              </span>
              <a
                href={contactHref}
                className="rounded-full bg-slate-900 px-4 py-1.5 text-xs font-semibold text-white transition-colors hover:bg-slate-800"
              >
                {seller.email ? 'ติดต่อ' : 'เปิดลิงก์'}
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="relative w-full max-w-sm">
        <div className="absolute -inset-4 rounded-[30px] bg-gradient-to-br from-white/30 via-paydee-orange-primary/10 to-paydee-blue-primary/10 blur-3xl" aria-hidden="true" />
        <div className="relative rounded-2xl border border-white/40 bg-white/55 px-4 py-5 shadow-[0_20px_45px_-40px_rgba(15,23,42,0.45)] backdrop-blur-xl">
          <p className="text-center text-sm font-semibold text-slate-900">แชร์โปรไฟล์นี้</p>
          <div className="mt-4">
            <ShareButtons
              url={cardUrl}
              sellerName={sellerName}
              sellerId={sellerId}
              variant="seller"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
