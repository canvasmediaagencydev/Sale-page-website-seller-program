import Link from "next/link";

const SellerRulesPage = () => {

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Header Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">

        {/* Header Content */}
        <div className="relative z-10 container mx-auto max-w-7xl min-h-[60vh] flex items-center px-4 lg:px-8 xl:px-16">
          <div className="text-center text-white space-y-6 py-20 w-full mt-5">
            {/* Badge */}
            <div className="inline-flex items-center px-5 py-3 bg-gradient-to-r from-paydee-orange-primary/20 to-paydee-yellow-primary/20 backdrop-blur-sm rounded-full text-sm font-semibold border border-paydee-yellow-primary/30">
              ข้อตกลงและเงื่อนไขการใช้บริการ
            </div>

            {/* Main Title */}
            <div className="space-y-4">
              <div
                className="text-4xl md:text-6xl xl:text-7xl font-black leading-tight"
                style={{
                  fontFamily: 'Russo One, sans-serif',
                  background: 'linear-gradient(135deg, #ffffff 0%, #febf12 30%, #fe9812 60%, #ffffff 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundSize: '200% 200%',
                  animation: 'paydee-title 1s ease-out both, gradient-shift 3s ease-in-out infinite'
                }}
              >
                Seller Rules
              </div>
              <div className="text-lg md:text-2xl text-paydee-yellow-primary font-semibold tracking-widest uppercase">
                และนโยบายคุ้มครองความเป็นส่วนตัว
              </div>
            </div>

            {/* Tagline */}
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20 max-w-2xl mx-auto">
              <p className="text-xl font-bold mb-2">
                "ทุกบิลโปร่งใส ทุกบาทถึงมือคุณ"
              </p>
              <p className="text-sm opacity-90">
                Fair Pay. Fast Pay. | Paydee.me
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <div className="max-w-4xl mx-auto py-12 px-4">
        <div className="bg-white rounded-lg shadow-sm p-8">

        {/* Content */}
        <div className="bg-white rounded-lg shadow-sm p-8">
          
          {/* Section 1 */}
          <section id="general" className="mb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4">1. ข้อมูลทั่วไป</h2>
            <div className="space-y-3 text-gray-700">
              <p>
                Paydee.me เป็นแพลตฟอร์มที่ช่วยให้ผู้ขายอิสระ (Seller) สามารถเสนอโปรแกรมทัวร์จากบริษัททัวร์พันธมิตร และรับค่าคอมมิชชั่นจากยอดขายได้อย่างโปร่งใสและรวดเร็ว ภายใต้การดำเนินงานของ บริษัท Gography Tour and Travel Co., Ltd.
              </p>
              <div className="bg-blue-50 p-4 rounded-lg">
                <p className="text-sm">
                  การเข้าสู่ระบบ การสมัครสมาชิก หรือการใช้งานแพลตฟอร์มนี้ ถือว่าผู้ใช้งาน ("ท่าน") ได้อ่าน ทำความเข้าใจ และยอมรับเงื่อนไขทั้งหมดในเอกสารนี้
                </p>
              </div>
            </div>
          </section>

          {/* Section 2 */}
          <section id="qualifications" className="mb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4">2. คุณสมบัติของผู้สมัคร</h2>
            <ul className="space-y-2 text-gray-700">
              <li>• อายุไม่ต่ำกว่า 20 ปีบริบูรณ์</li>
              <li>• ใช้ข้อมูลจริง ครบถ้วน และสามารถตรวจสอบได้</li>
              <li>• สมัครได้ทั้งพนักงานขาย (Sale Office), ฟรีแลนซ์, หรือผู้ที่สนใจเริ่มอาชีพอิสระ</li>
              <li>• บัญชีผู้ใช้ 1 คน ต่อ 1 บัญชีเท่านั้น</li>
              <li className="text-red-600">• บริษัทสงวนสิทธิ์ระงับบัญชี หากมีการให้ข้อมูลเท็จหรือใช้งานผิดวัตถุประสงค์</li>
            </ul>
          </section>

          {/* Section 3 */}
          <section id="responsibilities" className="mb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4">3. หน้าที่ของ Seller</h2>
            <ul className="space-y-2 text-gray-700">
              <li>• แนะนำโปรแกรมทัวร์ให้ลูกค้าตามข้อมูลที่ระบุในระบบ</li>
              <li className="font-semibold">• ห้ามเปลี่ยนแปลงราคา หรือให้ข้อมูลผิดจากที่บริษัททัวร์กำหนด</li>
              <li>• ต้องบันทึกข้อมูลลูกค้าให้ครบถ้วนก่อนการจอง (ชื่อ-สกุล, เบอร์, วันที่เดินทาง)</li>
              <li>• ตรวจสอบสถานะการขายผ่าน Dashboard ได้ตลอดเวลา</li>
              <li>• บริษัทมีสิทธิ์ตรวจสอบข้อมูลเพื่อป้องกันการขายซ้ำซ้อน</li>
              <li>• หากลูกค้ากลับมาติดต่อโดยตรง บริษัทจะตรวจสอบระบบสมาชิกผู้ขายทุกครั้งเพื่อให้สิทธิ์แก่ Seller</li>
            </ul>
          </section>

          {/* Section 4 */}
          <section id="commission" className="mb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4">4. ระบบค่าคอมมิชชั่น</h2>
            <ul className="space-y-2 text-gray-700">
              <li>• ค่าคอมมิชชั่นเริ่มต้นที่ 2,000 บาทต่อทริป (ขึ้นอยู่กับโปรแกรม)</li>
              <li>• บริษัทจะโอนเงินให้ภายใน 24 ชั่วโมง หลังทริปได้รับการยืนยัน</li>
              <li>• สามารถตรวจสอบยอดได้ใน Dashboard แบบเรียลไทม์</li>
              <li>• ค่าคอมคำนวณจากราคาขายสุทธิหลังหักส่วนลดหรือค่าใช้จ่าย</li>
              <li className="text-red-600">• หากข้อมูลบัญชีไม่ถูกต้อง บริษัทไม่รับผิดชอบการโอนล้มเหลว</li>
              <li>• บริษัทสามารถปรับอัตราค่าคอมได้ โดยแจ้งให้ทราบล่วงหน้า</li>
            </ul>
          </section>

          {/* Section 5 */}
          <section id="transparency" className="mb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4">5. ความโปร่งใสและความยุติธรรม</h2>
            <ul className="space-y-2 text-gray-700">
              <li>• ทุกยอดขายจะเชื่อมโยงกับรหัสลูกค้าของ Seller โดยอัตโนมัติ</li>
              <li>• Dashboard แสดงสถานะบิลแบบเรียลไทม์ (Pending / Confirmed / Paid)</li>
              <li>• หากมีข้อสงสัย บริษัทจะตรวจสอบหลักฐานก่อนตัดสินผล</li>
              <li>• ผู้ขายสามารถร้องเรียนหรือสอบถามผ่าน support@paydee.me</li>
            </ul>
          </section>

          {/* Section 6 */}
          <section id="communication" className="mb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4">6. ช่องทางสื่อสารและสนับสนุน</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="font-semibold">Line OA</p>
                <p className="text-sm text-gray-600">@Paydee.me</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="font-semibold">Email</p>
                <p className="text-sm text-gray-600">support@paydee.me</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="font-semibold">Facebook Group</p>
                <p className="text-sm text-gray-600">"Paydee Seller Hub"</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="font-semibold">เวลาทำการ</p>
                <p className="text-sm text-gray-600">จันทร์–ศุกร์ 09:00–18:00 น.</p>
              </div>
            </div>
          </section>

          {/* Section 7 */}
          <section id="prohibitions" className="mb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4">7. ข้อห้ามและจรรยาบรรณการขาย</h2>
            <div className="bg-red-50 p-4 rounded-lg">
              <ul className="space-y-2 text-gray-700">
                <li className="font-semibold">• ห้ามโพสต์โฆษณาเท็จ หรือหลอกลวงลูกค้า</li>
                <li className="font-semibold">• ห้ามรับเงินโดยตรงจากลูกค้า</li>
                <li className="font-semibold">• ห้ามใช้ชื่อแบรนด์ Paydee.me เพื่อวัตถุประสงค์ที่ไม่เกี่ยวข้อง</li>
              </ul>
              <p className="text-red-600 text-sm mt-3">
                <strong>คำเตือน:</strong> การละเมิดกติกา 2 ครั้งขึ้นไป อาจถูกระงับบัญชีถาวร
              </p>
            </div>
          </section>

          {/* Section 8 */}
          <section id="security" className="mb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4">8. ความปลอดภัยของข้อมูล</h2>
            <ul className="space-y-2 text-gray-700">
              <li>• ใช้ระบบเข้ารหัส (Encryption) และยืนยันตัวตนก่อนเข้าสู่ระบบ</li>
              <li>• ข้อมูลผู้ใช้ทั้งหมดได้รับการคุ้มครองตาม Privacy Policy</li>
              <li>• ผู้ใช้สามารถขอเข้าถึง แก้ไข หรือลบข้อมูลได้ตามสิทธิ์ที่กฎหมายกำหนด</li>
            </ul>
          </section>

          {/* Section 9 */}
          <section id="privacy" className="mb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4">9. นโยบายข้อมูลส่วนบุคคล (Privacy Summary)</h2>
            <div className="bg-gray-50 p-4 rounded-lg space-y-3">
              <div>
                <p className="font-semibold">ข้อมูลที่เก็บรวบรวม:</p>
                <p className="text-sm text-gray-600">บริษัทเก็บข้อมูลเฉพาะที่จำเป็น เช่น ชื่อ, เบอร์โทร, อีเมล, บัญชีธนาคาร, ประวัติการขาย</p>
              </div>
              <div>
                <p className="font-semibold">วัตถุประสงค์การใช้:</p>
                <ul className="text-sm text-gray-600">
                  <li>• จ่ายค่าคอมมิชชั่น</li>
                  <li>• ปรับปรุงระบบและประสบการณ์ผู้ใช้</li>
                  <li>• ติดต่อสื่อสารหรือส่งข่าวสารทางการตลาด (เมื่อผู้ใช้ยินยอม)</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold">การเปิดเผยข้อมูล:</p>
                <p className="text-sm text-gray-600">ไม่เปิดเผยข้อมูลแก่บุคคลที่สาม เว้นแต่ได้รับความยินยอมหรือมีคำสั่งศาล</p>
              </div>
            </div>
          </section>

          {/* Section 10 */}
          <section id="additional" className="mb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4">10. เงื่อนไขเพิ่มเติม</h2>
            <ul className="space-y-2 text-gray-700">
              <li>• บริษัทมีสิทธิ์แก้ไขข้อตกลงโดยไม่ต้องแจ้งล่วงหน้า</li>
              <li>• เงื่อนไขใหม่จะมีผลทันทีเมื่อประกาศบนเว็บไซต์</li>
              <li>• การใช้งานระบบต่อเนื่องถือว่ายอมรับเงื่อนไขใหม่แล้ว</li>
            </ul>
          </section>

          {/* Contact Information */}
          <div className="bg-gray-50 p-4 rounded-lg mt-6">
            <h3 className="font-semibold text-gray-800 mb-2">ข้อมูลติดต่อบริษัท</h3>
            <div className="text-sm text-gray-600 space-y-1">
              <p>Paydee.me powered by Gography Tour and Travel Co., Ltd.</p>
              <p>เลขทะเบียนนิติบุคคลเดียวกับบริษัท Gography Tour and Travel</p>
              <p><strong>ที่ตั้ง:</strong> 79/53 Romkloa soi 1 minburi bangkok 10510</p>
              <p><strong>อีเมลติดต่อ:</strong> info@gography.net</p>
            </div>
          </div>

          {/* Back to Home Button */}
          <div className="text-center mt-8">
            <Link 
              href="/"
              className="inline-block px-6 py-3 bg-paydee-blue-primary text-white font-bold rounded-lg hover:bg-paydee-blue-secondary transition-colors"
            >
              กลับสู่หน้าหลัก
            </Link>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default SellerRulesPage;