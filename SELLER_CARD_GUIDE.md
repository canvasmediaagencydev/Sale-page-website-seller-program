# Seller Digital Card - คู่มือการใช้งาน

## ภาพรวม

ระบบ Seller Digital Card เป็นหน้า Public Profile Card สำหรับ Seller ที่ได้รับการ approve จาก PayDee เพื่อใช้ในการยืนยันตัวตนและแชร์ข้อมูลได้อย่างง่าย

## URL Structure

### Individual Seller Card
```
https://www.paydee.me/card/[SELLER_ID]
```

**Seller ID Format**: 6 ตัวอักษรสุดท้ายของ UUID จาก `user_profiles.id`

### Search/Directory Page
```
https://www.paydee.me/card
```
หน้าค้นหา Seller ทั้งหมด พร้อมฟังก์ชันค้นหาแบบ real-time

### ตัวอย่าง Seller IDs จากข้อมูลจริง:

1. **seller paydee** (seller@paydee.me)
   - Full UUID: `c2336e30-3389-4baf-b132-35920c377c23`
   - Seller ID: `377C23`
   - URL: https://www.paydee.me/card/377C23

2. **ณัฐฐริญา เพชรมณี** (mayynattariya@gmail.com)
   - Full UUID: `9f411690-8c12-45a8-8506-f1b68d07cdd6`
   - Seller ID: `07CDD6`
   - URL: https://www.paydee.me/card/07CDD6

3. **วัชรพล ขวัญเพ็ชร** (wkp.walkon@gmaol.com)
   - Full UUID: `43ee482d-d78f-474e-a4f4-d8b100d0a982`
   - Seller ID: `D0A982`
   - URL: https://www.paydee.me/card/D0A982

4. **Athimeth Lerdkitveruj** (gographyphotographer@gmail.com)
   - Full UUID: `efbecf4e-1bbd-4cb3-bf9e-56a3e41a22c0`
   - Seller ID: `1A22C0`
   - URL: https://www.paydee.me/card/1A22C0

## ฟีเจอร์หลัก

### 1. ข้อมูลที่แสดง
- รูปโปรไฟล์ Seller (avatar_url)
- ชื่อ-นามสกุล (full_name)
- Seller ID (6 ตัวอักษร)
- สถานะการอนุมัติ (Verified Seller badge)
- วันที่ได้รับการอนุมัติ (approved_at)

### 2. การแชร์
- ปุ่มแชร์ไป LINE
- ปุ่มแชร์ไป Facebook
- ปุ่มแชร์ไป Twitter/X
- ปุ่มคัดลอกลิงก์

### 3. SEO & Social Sharing
- Dynamic metadata สำหรับแต่ละ seller
- Open Graph images สำหรับ Facebook/LINE
- Twitter Cards สำหรับ Twitter/X
- Schema.org structured data (Person)

## การทำงาน

### 1. Data Fetching
```typescript
// src/lib/supabase.ts
fetchSellerById(sellerId: string)
```
- Query ข้อมูล sellers ที่ `approved_at IS NOT NULL`
- Match Seller ID กับ 6 ตัวสุดท้ายของ UUID
- Return: id, full_name, avatar_url, approved_at, email

### 2. Seller ID Generation
```typescript
// src/lib/seller-utils.ts
generateSellerId(uuid: string)
```
- Remove hyphens จาก UUID
- เอา 6 ตัวสุดท้าย
- Convert เป็น uppercase
- Example: `c2336e30-3389-4baf-b132-35920c377c23` → `377C23`

### 3. Validation
```typescript
isValidSellerIdFormat(sellerId: string)
```
- Check format: 5-6 uppercase alphanumeric characters
- Pattern: `/^[A-Z0-9]{5,6}$/`

## โครงสร้างไฟล์

```
src/
├── app/
│   └── card/
│       └── [sellerId]/
│           ├── page.tsx          # Main page with metadata
│           └── not-found.tsx     # 404 page
├── components/
│   ├── SellerCard.tsx            # Main card component
│   ├── SellerCardSkeleton.tsx    # Loading state
│   ├── VerificationBadge.tsx     # Verified badge
│   └── ShareButtons.tsx          # Social share buttons (updated)
├── lib/
│   ├── supabase.ts               # Data fetching (added fetchSellerById)
│   └── seller-utils.ts           # Seller ID utilities
└── types/
    └── seller.ts                 # TypeScript types
```

## Error Handling

### Invalid Seller ID
- Format ไม่ถูกต้อง → 404 Not Found
- Seller ไม่มีในระบบ → 404 Not Found
- Seller ยังไม่ได้รับการ approve → 404 Not Found

### 404 Page Features
- คำอธิบายข้อผิดพลาด
- ตัวอย่าง Seller ID format
- ปุ่มกลับหน้าแรก
- ลิงก์ไป PayDee App

## การใช้งาน Components

### SellerCard
```tsx
import SellerCard from '@/components/SellerCard'

<SellerCard
  seller={sellerData}
  sellerId="377C23"
/>
```

### ShareButtons
```tsx
import ShareButtons from '@/components/ShareButtons'

// For seller cards
<ShareButtons
  url="/card/377C23"
  sellerName="seller paydee"
  sellerId="377C23"
  variant="seller"  // Use seller variant
/>

// For blog posts (existing)
<ShareButtons
  url="/blog/some-post"
  title="Blog Title"
  variant="blog"  // Use blog variant (default)
/>
```

## การทดสอบ

### ทดสอบ Locally
```bash
# Start dev server
npm run dev

# Visit URLs:
http://localhost:3001/card/377C23  # seller paydee
http://localhost:3001/card/07CDD6  # ณัฐฐริญา เพชรมณี
http://localhost:3001/card/INVALID # Should show 404
```

### ทดสอบ Seller ID Generation
```bash
node -e "
const { generateSellerId } = require('./src/lib/seller-utils');
console.log(generateSellerId('YOUR-UUID-HERE'));
"
```

### ทดสอบ Data Fetching
```typescript
import { fetchSellerById } from '@/lib/supabase'

const seller = await fetchSellerById('377C23')
console.log(seller)
```

## Database Requirements

### user_profiles Table
- `id` (uuid): Primary key
- `full_name` (text): ชื่อ-นามสกุล (required)
- `avatar_url` (text): รูปโปรไฟล์ (optional)
- `approved_at` (timestamptz): วันที่อนุมัติ (required for visibility)
- `email` (text): อีเมล (optional)

### Query สำหรับดึงข้อมูล Sellers ที่ approved
```sql
SELECT id, full_name, avatar_url, approved_at, email
FROM user_profiles
WHERE approved_at IS NOT NULL
  AND full_name IS NOT NULL
ORDER BY approved_at DESC;
```

## Security & Privacy

### Public Access
- ✅ เข้าถึงได้โดยไม่ต้อง login
- ✅ แชร์ได้ทุก platform
- ✅ SEO-friendly URLs

### Data Protection
- ✅ แสดงเฉพาะ sellers ที่ approved_at ไม่เป็น null
- ✅ ไม่แสดงข้อมูลส่วนตัวที่ sensitive (เช่น เบอร์โทร, ที่อยู่)
- ✅ Email ไม่แสดงใน UI (ใช้ในระบบเท่านั้น)

## Performance Optimizations

### Implemented
- ✅ Image optimization with Next.js Image
- ✅ Lazy loading for non-critical components
- ✅ Suspense for loading states
- ✅ Static metadata generation

### Future Considerations
- ISR (Incremental Static Regeneration) for popular sellers
- Edge caching for faster global access
- Image CDN optimization

## Deployment Checklist

- [ ] Test all seller URLs work correctly
- [ ] Verify 404 page displays for invalid IDs
- [ ] Test social sharing on LINE, Facebook, Twitter
- [ ] Verify Open Graph images load correctly
- [ ] Check mobile responsiveness
- [ ] Test clipboard copy functionality
- [ ] Verify SEO metadata is correct
- [ ] Ensure images from Supabase storage load properly

## Future Enhancements

### Nice to Have
1. **QR Code**: เพิ่ม QR code บน card สำหรับแชร์ง่ายขึ้น
2. **Statistics**: แสดงยอดขาย/คอมมิชชั่น (ถ้าเป็นข้อมูลสาธารณะ)
3. **Search Page**: หน้าค้นหา seller โดยใช้ชื่อหรือ ID
4. **Download Card**: ดาวน์โหลด card เป็นรูปภาพ
5. **Custom URL**: ให้ sellers เลือก custom URL ได้ (เช่น /card/john-doe)

## Support & Documentation

### คำถามที่พบบ่อย

**Q: Seller ID เปลี่ยนได้ไหม?**
A: ไม่ได้ เพราะสร้างจาก UUID ซึ่งเป็น immutable

**Q: Seller ที่ยังไม่ approved จะมี card ไหม?**
A: ไม่มี จะ redirect ไป 404 page เพื่อความปลอดภัย

**Q: แก้ไขข้อมูลบน card ยังไง?**
A: แก้ที่ `user_profiles` table ใน database การเปลี่ยนแปลงจะมีผลทันที

**Q: รองรับ mobile ไหม?**
A: ใช่ design เป็น mobile-first และ responsive ทุกหน้าจอ

## License & Credits

Developed for PayDee by Claude Code.
Design inspired by modern digital business cards.
