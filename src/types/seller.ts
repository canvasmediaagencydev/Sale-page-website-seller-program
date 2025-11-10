import { SellerCardData } from '@/lib/supabase'

// Re-export for convenience
export type { SellerCardData }

// Props for components
export interface SellerCardProps {
  seller: SellerCardData
  sellerId: string
}

export interface VerificationBadgeProps {
  approved: boolean
  size?: 'sm' | 'md' | 'lg'
}

export interface ShareButtonsProps {
  sellerName: string
  sellerId: string
  url: string
}
