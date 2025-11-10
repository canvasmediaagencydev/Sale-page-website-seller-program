'use client'

import { usePathname } from 'next/navigation'

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
      <div className="relative z-10 min-h-screen flex items-center justify-center px-4 py-16">
        {children}
      </div>
    </div>
  )
}
