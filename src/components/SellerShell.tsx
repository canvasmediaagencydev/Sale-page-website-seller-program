'use client'

import { usePathname } from 'next/navigation'
import Image from 'next/image'

interface SellerShellProps {
  children: React.ReactNode
}

export default function SellerShell({ children }: SellerShellProps) {
  const pathname = usePathname() || ''
  const isSellerDetail = /^\/seller-verification\/[A-Za-z0-9-]+$/.test(pathname)

  if (!isSellerDetail) {
    return <>{children}</>
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-paydee-blue-primary via-paydee-blue-primary/80 to-paydee-blue-primary/60">
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-72 h-72 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-paydee-orange-primary/20 rounded-full blur-3xl" />
      </div>

      {/* Header with PayDee logo and verify text */}
      <header className="relative z-20 px-4 py-6 border-b border-white/10 backdrop-blur-sm bg-white/5">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative">
                <Image
                  src="/img/paydee LOGO 03.svg"
                  alt="PayDee"
                  width={40}
                  height={40}
                  className="w-10 h-10 object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-white font-bold text-xl tracking-tight">
                  paydee.<span className='text-orange-400'>me</span>
                </span>
                <span className="text-white/80 text-xs font-bold uppercase tracking-wider">
                  Seller Verification
                </span>
              </div>
            </div>

            {/* Trust badge */}
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20">
              <svg
                className="w-4 h-4 text-green-400"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-white/90 text-xs font-semibold">
                Verified
              </span>
            </div>
          </div>
        </div>
      </header>

      <div className="relative z-10 min-h-[calc(100vh-88px)] flex items-center justify-center px-4 py-8">
        {children}
      </div>
    </div>
  )
}
