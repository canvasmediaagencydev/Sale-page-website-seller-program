import { Metadata } from 'next'
import SellerSearchPage from '@/components/SellerSearchPage'

export const metadata: Metadata = {
  title: 'ค้นหา Seller - PayDee Verified Sellers',
  description: 'ค้นหาและตรวจสอบตัวตน Seller ที่ได้รับการอนุมัติจาก PayDee ค้นหาได้จากชื่อ-นามสกุลหรือ Seller ID',
  keywords: ['PayDee', 'Seller Search', 'ค้นหา Seller', 'Verified Seller', 'ตรวจสอบ Seller'],
  openGraph: {
    title: 'ค้นหา Seller - PayDee Verified Sellers',
    description: 'ค้นหาและตรวจสอบตัวตน Seller ที่ได้รับการอนุมัติจาก PayDee',
    url: 'https://www.paydee.me/seller-verification',
    siteName: 'PayDee',
    type: 'website'
  }
}

export default function SellerSearchIndexPage() {
  return <SellerSearchPage />
}
