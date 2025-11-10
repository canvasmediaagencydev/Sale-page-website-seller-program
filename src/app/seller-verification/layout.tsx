import type { Metadata } from 'next'
import SellerShell from '@/components/SellerShell'

export const metadata: Metadata = {
  title: 'PayDee Seller Verification',
}

export default function SellerVerificationLayout({ children }: { children: React.ReactNode }) {
  return <SellerShell>{children}</SellerShell>
}
