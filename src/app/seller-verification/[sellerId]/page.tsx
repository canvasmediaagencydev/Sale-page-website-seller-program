import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { Suspense } from 'react'
import { fetchSellerById } from '@/lib/supabase'
import { generateSellerId, isValidSellerIdFormat } from '@/lib/seller-utils'
import SellerCard from '@/components/SellerCard'
import SellerCardSkeleton from '@/components/SellerCardSkeleton'

interface SellerCardPageProps {
  params: Promise<{
    sellerId: string
  }>
}

// Generate metadata for SEO and social sharing
export async function generateMetadata({
  params
}: SellerCardPageProps): Promise<Metadata> {
  const { sellerId } = await params

  // Validate format
  if (!isValidSellerIdFormat(sellerId)) {
    return {
      title: 'ไม่พบข้อมูล Seller | PayDee',
      description: 'ไม่พบข้อมูล Seller ID ที่คุณค้นหา'
    }
  }

  // Fetch seller data
  const seller = await fetchSellerById(sellerId)

  if (!seller) {
    return {
      title: 'ไม่พบข้อมูล Seller | PayDee',
      description: 'ไม่พบข้อมูล Seller ID ที่คุณค้นหา'
    }
  }

  const sellerName = seller.full_name || 'Seller'
  const title = `${sellerName} - PayDee Verified Seller`
  const description = `ยืนยันตัวตน ${sellerName} (Seller ID: ${sellerId.toUpperCase()}) ได้รับการอนุมัติโดย PayDee เป็นตัวแทนขายทัวร์ที่เชื่อถือได้`
  const cardUrl = `https://www.paydee.me/seller-verification/${sellerId}`

  return {
    title,
    description,
    keywords: [
      'PayDee',
      'Verified Seller',
      'ตัวแทนขายทัวร์',
      'seller verification',
      sellerName,
      `Seller ID ${sellerId}`
    ],
    authors: [{ name: 'PayDee' }],
    openGraph: {
      type: 'profile',
      title,
      description,
      url: cardUrl,
      siteName: 'PayDee',
      images: [
        {
          url: seller.avatar_url || 'https://www.paydee.me/images/paydee-og-image.jpg',
          width: 1200,
          height: 630,
          alt: `${sellerName} - PayDee Verified Seller`
        }
      ]
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [seller.avatar_url || 'https://www.paydee.me/images/paydee-og-image.jpg']
    },
    alternates: {
      canonical: cardUrl
    }
  }
}

export default async function SellerCardPage({ params }: SellerCardPageProps) {
  const { sellerId } = await params

  // Validate Seller ID format
  if (!isValidSellerIdFormat(sellerId)) {
    notFound()
  }

  // Fetch seller data
  const seller = await fetchSellerById(sellerId)

  // If seller not found or not approved, show 404
  if (!seller) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-paydee-blue-primary via-paydee-blue-primary/80 to-paydee-blue-primary/60 pt-32 md:pt-36 pb-20 px-4">
      {/* Decorative Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-72 h-72 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-paydee-orange-primary/20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10">
        <Suspense fallback={<SellerCardSkeleton />}>
          <SellerCard seller={seller} sellerId={sellerId} />
        </Suspense>
      </div>

      {/* Optional: Add schema.org structured data for better SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Person',
            name: seller.full_name || 'Seller',
            identifier: sellerId.toUpperCase(),
            image: seller.avatar_url,
            memberOf: {
              '@type': 'Organization',
              name: 'PayDee',
              url: 'https://www.paydee.me'
            },
            description: `Verified Seller on PayDee platform with ID: ${sellerId.toUpperCase()}`
          })
        }}
      />
    </div>
  )
}
