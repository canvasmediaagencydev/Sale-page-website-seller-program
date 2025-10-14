import Link from "next/link";

const TermsAndConditionsPage = () => {

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Header Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">

        {/* Header Content */}
        <div className="relative z-10 container mx-auto max-w-7xl min-h-[60vh] flex items-center px-4 lg:px-8 xl:px-16">
          <div className="text-center text-white space-y-6 py-20 w-full mt-5">
            {/* Badge */}
            <div className="inline-flex items-center px-5 py-3 bg-gradient-to-r from-paydee-orange-primary/20 to-paydee-yellow-primary/20 backdrop-blur-sm rounded-full text-sm font-semibold border border-paydee-yellow-primary/30">
              ข้อกำหนดและเงื่อนไขการใช้งาน
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
                Terms and Conditions
              </div>
              <div className="text-lg md:text-2xl text-paydee-yellow-primary font-semibold tracking-widest uppercase">
                ข้อกำหนดและเงื่อนไขการใช้งาน
              </div>
            </div>

            {/* Tagline */}
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20 max-w-2xl mx-auto">
              <p className="text-xl font-bold mb-2">
                "ความโปร่งใส ความยุติธรรม และความปลอดภัย"
              </p>
              <p className="text-sm opacity-90">
                Paydee.me
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <div className="max-w-4xl mx-auto py-12 px-4">
        <div className="bg-white rounded-lg shadow-sm md:p-8 p-0">

        {/* Content */}
        <div className="bg-white rounded-lg shadow-sm p-8">

          {/* Section 1 */}
          <section id="acceptance" className="mb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4">1. การยอมรับข้อกำหนด</h2>
            <div className="space-y-3 text-gray-700">
              <p>
                เมื่อท่าน ("ผู้ใช้งาน") เข้าใช้งานเว็บไซต์ Paydee.me, ลงทะเบียนบัญชีผู้ใช้, หรือใช้บริการใด ๆ ที่เกี่ยวข้อง ถือว่าท่านได้อ่าน ทำความเข้าใจ และยอมรับข้อกำหนดทั้งหมดในเอกสารนี้ รวมถึง
              </p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>
                  <Link href="/seller-rules" className="text-paydee-blue-primary hover:underline">
                    Seller Rules
                  </Link>
                </li>
                <li>นโยบายคุ้มครองข้อมูลส่วนบุคคล (Privacy Policy)</li>
              </ul>
              <div className="bg-red-50 p-4 rounded-lg mt-3">
                <p className="text-sm font-semibold text-red-800">
                  หากท่านไม่ยอมรับเงื่อนไขใดในเอกสารนี้ กรุณาหยุดการใช้งานเว็บไซต์ทันที
                </p>
              </div>
            </div>
          </section>

          {/* Section 2 */}
          <section id="purpose" className="mb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4">2. วัตถุประสงค์ของแพลตฟอร์ม</h2>
            <div className="space-y-3 text-gray-700">
              <p>
                Paydee.me เป็นแพลตฟอร์มออนไลน์ที่ให้บริการพื้นที่สำหรับ <strong>ผู้ขายอิสระ (Seller)</strong> เพื่อเสนอขาย <strong>โปรแกรมทัวร์จากบริษัททัวร์พันธมิตร</strong> และรับค่าคอมมิชชั่นตามที่กำหนด
              </p>
              <div className="bg-blue-50 p-4 rounded-lg">
                <p className="text-sm">
                  บริษัทเป็นเพียง <strong>ตัวกลางทางเทคโนโลยีและการประมวลผลธุรกรรม</strong><br />
                  ไม่ใช่ผู้ขายหรือผู้ให้บริการทัวร์โดยตรง<br />
                  ความรับผิดชอบต่อคุณภาพของบริการทัวร์เป็นของบริษัททัวร์ต้นทาง
                </p>
              </div>
            </div>
          </section>

          {/* Section 3 */}
          <section id="registration" className="mb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4">3. การสมัครสมาชิกและการใช้งานบัญชี</h2>
            <ul className="space-y-2 text-gray-700">
              <li>1. ผู้ใช้งานต้องมีอายุไม่ต่ำกว่า 20 ปีบริบูรณ์</li>
              <li>2. ต้องให้ข้อมูลจริง ครบถ้วน และสามารถตรวจสอบได้</li>
              <li>3. ท่านต้องเก็บรักษาชื่อผู้ใช้ (Username) และรหัสผ่าน (Password) เป็นความลับ</li>
              <li>4. บริษัทไม่รับผิดชอบต่อความเสียหายที่เกิดจากการเข้าถึงบัญชีโดยบุคคลที่สาม</li>
              <li className="text-red-600">5. บริษัทมีสิทธิ์ระงับ ยกเลิก หรือปิดบัญชี หากตรวจพบการให้ข้อมูลเท็จ หรือการใช้งานผิดวัตถุประสงค์</li>
            </ul>
          </section>

          {/* Section 4 */}
          <section id="usage-prohibitions" className="mb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4">4. การใช้บริการและข้อห้าม</h2>
            <div className="bg-red-50 p-4 rounded-lg">
              <ul className="space-y-2 text-gray-700">
                <li>• ห้ามใช้แพลตฟอร์มเพื่อวัตถุประสงค์ที่ผิดกฎหมาย ฉ้อโกง หรือหลอกลวงผู้อื่น</li>
                <li className="font-semibold">• ห้ามรับเงินจากลูกค้าโดยตรง นอกเหนือจากระบบของ Paydee</li>
                <li>• ห้ามคัดลอก ดัดแปลง หรือเผยแพร่ข้อมูลใด ๆ บนเว็บไซต์ โดยไม่ได้รับอนุญาต</li>
                <li>• ห้ามใช้เครื่องหมายการค้า โลโก้ หรือชื่อ "Paydee.me" เพื่อประโยชน์เชิงพาณิชย์อื่น ๆ</li>
              </ul>
              <p className="text-red-600 text-sm mt-3 font-bold">
                คำเตือน: การละเมิดกติกาซ้ำซ้อน 2 ครั้งขึ้นไป อาจถูกระงับบัญชีถาวร
              </p>
            </div>
          </section>

          {/* Section 5 */}
          <section id="commission-system" className="mb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4">5. ระบบการขายและค่าคอมมิชชั่น</h2>
            <ul className="space-y-2 text-gray-700">
              <li>• ผู้ขายจะได้รับค่าคอมมิชชั่นตามอัตราที่บริษัทกำหนด (ขึ้นอยู่กับโปรแกรมทัวร์)</li>
              <li>• การโอนเงินค่าคอมมิชชั่นจะดำเนินการภายใน 24 ชั่วโมงหลังทริปได้รับการยืนยัน</li>
              <li>• การโอนจะกระทำผ่านบัญชีที่ผู้ขายระบุไว้เท่านั้น บริษัทไม่รับผิดชอบกรณีบัญชีไม่ถูกต้อง</li>
              <li>• ผู้ขายสามารถตรวจสอบยอดและสถานะการจ่ายเงินได้ผ่าน Dashboard</li>
              <li>• บริษัทสงวนสิทธิ์ปรับอัตราค่าคอมมิชชั่นได้ โดยประกาศล่วงหน้าผ่านเว็บไซต์</li>
            </ul>
          </section>

          {/* Section 6 */}
          <section id="data-accuracy" className="mb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4">6. ความถูกต้องของข้อมูลและการโปรโมตทัวร์</h2>
            <ul className="space-y-2 text-gray-700">
              <li>• ผู้ขายต้องเสนอโปรแกรมทัวร์ตามข้อมูลที่บริษัททัวร์กำหนดเท่านั้น</li>
              <li className="font-semibold">• ห้ามแก้ไขราคา รายละเอียด หรือเงื่อนไขของโปรแกรมโดยพลการ</li>
              <li>• หากมีข้อร้องเรียนจากลูกค้า บริษัทมีสิทธิ์ตรวจสอบหลักฐานการขายก่อนตัดสินผล</li>
              <li className="font-semibold">• การตัดสินของบริษัทถือเป็นที่สุด</li>
            </ul>
          </section>

          {/* Section 7 */}
          <section id="transparency" className="mb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4">7. ความโปร่งใสในการดำเนินการ</h2>
            <ul className="space-y-2 text-gray-700">
              <li>• ทุกยอดขายจะถูกบันทึกและเชื่อมโยงกับรหัสผู้ขาย (Seller ID) โดยอัตโนมัติ</li>
              <li>• Dashboard แสดงข้อมูลแบบเรียลไทม์ ได้แก่ "Pending / Confirmed / Paid"</li>
              <li>• ผู้ขายสามารถร้องเรียนหรือสอบถามข้อมูลเพิ่มเติมได้ที่ <strong>support@paydee.me</strong></li>
            </ul>
          </section>

          {/* Section 8 */}
          <section id="privacy" className="mb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4">8. ความเป็นส่วนตัวของข้อมูล</h2>
            <ul className="space-y-2 text-gray-700">
              <li>• บริษัทเก็บและใช้ข้อมูลส่วนบุคคลตาม <strong>Privacy Policy</strong> ที่ประกาศบนเว็บไซต์</li>
              <li>• บริษัทใช้มาตรการรักษาความปลอดภัยของข้อมูลด้วยเทคโนโลยีเข้ารหัส (Encryption)</li>
              <li>• ท่านมีสิทธิ์ขอเข้าถึง แก้ไข หรือยกเลิกข้อมูลส่วนบุคคลของตนเองได้ตามกฎหมาย</li>
            </ul>
          </section>

          {/* Section 9 */}
          <section id="intellectual-property" className="mb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4">9. ทรัพย์สินทางปัญญา</h2>
            <div className="space-y-3 text-gray-700">
              <p>
                ข้อมูลทั้งหมดบนเว็บไซต์ รวมถึงข้อความ ภาพ โลโก้ ระบบซอฟต์แวร์ ฐานข้อมูล และสื่อมัลติมีเดีย เป็นทรัพย์สินของบริษัท
              </p>
              <div className="bg-yellow-50 p-4 rounded-lg">
                <p className="text-sm">
                  ห้ามทำซ้ำ คัดลอก ดัดแปลง หรือเผยแพร่เนื้อหาโดยไม่ได้รับอนุญาตเป็นลายลักษณ์อักษร<br />
                  ผู้ละเมิดอาจถูกดำเนินคดีตามกฎหมายว่าด้วยทรัพย์สินทางปัญญา
                </p>
              </div>
            </div>
          </section>

          {/* Section 10 */}
          <section id="liability-limitation" className="mb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4">10. การจำกัดความรับผิด</h2>
            <ul className="space-y-2 text-gray-700">
              <li>• บริษัทไม่รับประกันว่าระบบจะทำงานได้อย่างต่อเนื่อง ปราศจากข้อผิดพลาด หรือไม่มีการหยุดชะงัก</li>
              <li>• บริษัทไม่รับผิดชอบต่อความเสียหายใด ๆ ที่เกิดจากการใช้งาน หรือการไม่สามารถใช้งานระบบได้</li>
              <li>• บริษัทไม่รับผิดชอบต่อคุณภาพของโปรแกรมทัวร์หรือบริการจากบริษัททัวร์พันธมิตร</li>
              <li className="font-semibold">• ในกรณีข้อพิพาทเกี่ยวกับยอดขายหรือค่าคอมมิชชั่น การตัดสินของบริษัทถือเป็นที่สุด</li>
            </ul>
          </section>

          {/* Section 11 */}
          <section id="external-links" className="mb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4">11. ลิงก์ภายนอก</h2>
            <div className="space-y-3 text-gray-700">
              <p>
                เว็บไซต์นี้อาจมีลิงก์ไปยังเว็บไซต์บุคคลที่สามเพื่ออำนวยความสะดวก
              </p>
              <p>
                บริษัทไม่รับผิดชอบต่อเนื้อหา ความปลอดภัย หรือความเสียหายใด ๆ จากเว็บไซต์ภายนอกเหล่านั้น
              </p>
            </div>
          </section>

          {/* Section 12 */}
          <section id="amendments" className="mb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4">12. การแก้ไขเงื่อนไข</h2>
            <div className="space-y-2 text-gray-700">
              <p>
                บริษัทมีสิทธิ์ปรับปรุงหรือเปลี่ยนแปลงข้อกำหนดนี้ได้ทุกเมื่อโดยไม่ต้องแจ้งล่วงหน้า
              </p>
              <p>
                เมื่อมีการประกาศบนเว็บไซต์ เงื่อนไขใหม่จะมีผลบังคับใช้ทันที
              </p>
              <p className="font-semibold">
                การใช้งานแพลตฟอร์มต่อ ถือว่าท่านยอมรับการเปลี่ยนแปลงดังกล่าว
              </p>
            </div>
          </section>

          {/* Section 13 */}
          <section id="governing-law" className="mb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4">13. กฎหมายและเขตอำนาจศาล</h2>
            <div className="bg-gray-50 p-4 rounded-lg space-y-2 text-gray-700">
              <p>
                ข้อกำหนดนี้อยู่ภายใต้กฎหมายของ <strong>ราชอาณาจักรไทย</strong>
              </p>
              <p>
                กรณีเกิดข้อพิพาท ให้พิจารณาโดยศาลไทยในเขตอำนาจของบริษัท
              </p>
            </div>
          </section>

          {/* Contact Information */}
          <div className="bg-gray-50 p-4 rounded-lg mt-6">
            <h3 className="font-semibold text-gray-800 mb-2">ข้อมูลติดต่อบริษัท</h3>
            <div className="text-sm text-gray-600 space-y-1">
              <p>Paydee.me powered by Gography Tour and Travel Co., Ltd.</p>
              <p><strong>ที่ตั้ง:</strong> 79/53 Romkloa soi 1 minburi bangkok 10510</p>
              <p><strong>อีเมลติดต่อ:</strong> support@paydee.me</p>
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

export default TermsAndConditionsPage;
