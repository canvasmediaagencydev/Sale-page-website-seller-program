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
      <div className="w-full max-w-sm">
        <div className="rounded-[30px] border border-slate-100 bg-white shadow-[0_35px_80px_-60px_rgba(15,23,42,0.45)]">
          <div className="p-5 pb-6 space-y-5">
            {/* Portrait */}
            <div className="relative aspect-[3/4] rounded-[26px] overflow-hidden bg-gradient-to-br from-slate-200 via-white to-slate-50">
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
                    <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2.5 py-0.5 text-[11px] font-semibold text-emerald-700">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="h-4 w-4"
                      >
                        <path
                          fillRule="evenodd"
                          d="M12 1.5a5.25 5.25 0 0 0-5.25 5.25v3a3 3 0 0 0-3 3v6.75a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3v-6.75a3 3 0 0 0-3-3v-3c0-2.9-2.35-5.25-5.25-5.25Zm3.75 8.25v-3a3.75 3.75 0 1 0-7.5 0v3h7.5Z"
                          clipRule="evenodd"
                        />
                        <path
                          fillRule="evenodd"
                          d="M9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25a.75.75 0 0 0-1.22-.872l-3.236 4.53L9.53 12.22Z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                  )}
                </div>
                <p className="mt-1 text-sm text-slate-600">
                  ตัวแทนขาย PayDee ที่ผ่านการตรวจสอบแล้ว ตรวจสอบ ID ก่อนโอนเพื่อความสบายใจของลูกค้า
                </p>
              </div>
            </div>

            <div className="rounded-2xl bg-slate-50 px-4 py-3">
              <p className="text-[11px] uppercase tracking-[0.3em] text-slate-400">Seller ID</p>
              <p className="font-mono text-lg tracking-[0.35em] text-slate-900">{displaySellerId}</p>
            </div>

            <div className="flex items-center justify-between text-xs text-slate-500">
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

            <div className="flex items-center justify-between border-t border-slate-100 pt-4">
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

      <div className="w-full max-w-sm rounded-2xl border border-slate-100 bg-white/80 px-4 py-5 shadow-[0_20px_45px_-40px_rgba(15,23,42,0.4)] backdrop-blur">
        <p className="text-center text-sm font-semibold text-slate-900">แชร์โปรไฟล์นี้</p>
        <p className="text-center text-xs text-slate-500">
          ส่งให้ลูกค้าเพื่อยืนยันตัวตนหรือเก็บไว้เป็นหลักฐานการชำระเงิน
        </p>
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
  )
}
