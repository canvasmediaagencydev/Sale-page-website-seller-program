"use client";

import Link from "next/link";

const SellerRulesPage = () => {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      {/* Hero Section */}
      <div className="bg-paydee-blue-primary text-white py-16 px-4 pt-40">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              เงื่อนไขและข้อตกลงการใช้บริการ
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-2">
              และนโยบายคุ้มครองความเป็นส่วนตัว
            </p>
            <p className="text-lg text-blue-200">
              Paydee.me powered by Gography Tour and Travel Co., Ltd.
            </p>
            <p className="text-sm text-blue-300 mt-4">
              มีผลบังคับใช้ตั้งแต่วันที่ 15 ตุลาคม 2568
            </p>
          </div>
        </div>
      </div>

      {/* Table of Contents */}
      {/* <div className="sticky top-20 z-40 bg-white/95 backdrop-blur-sm shadow-md py-4 px-4 mb-8">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-lg font-semibold text-gray-800 mb-3">เนื้อหา</h2>
          <div className="flex flex-wrap gap-2">
            {[
              { id: 'general', label: 'ข้อมูลทั่วไป' },
              { id: 'registration', label: 'การสมัครสมาชิก' },
              { id: 'roles', label: 'บทบาทผู้ใช้งาน' },
              { id: 'payment', label: 'การชำระเงิน' },
              { id: 'rights', label: 'การคุ้มครองสิทธิ์' },
              { id: 'security', label: 'ความปลอดภัยข้อมูล' },
              { id: 'privacy', label: 'นโยบายความเป็นส่วนตัว' },
              { id: 'modification', label: 'การแก้ไขเงื่อนไข' },
              { id: 'contact', label: 'การติดต่อ' }
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="px-3 py-1 bg-paydee-blue-primary/10 text-paydee-blue-primary rounded-full text-sm font-medium hover:bg-paydee-blue-primary/20 transition-colors"
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </div> */}

      {/* Content */}
      <div className="container mx-auto max-w-4xl px-4 pb-16">
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mt-10">
          
          {/* Section 1 */}
          <section id="general" className="mb-12 scroll-mt-24">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 flex items-center">
              <span className="bg-paydee-blue-primary text-white w-8 h-8 rounded-full flex items-center justify-center mr-3 text-sm">1</span>
              ข้อมูลทั่วไป
            </h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Paydee.me ("แพลตฟอร์ม") ดำเนินการภายใต้บริษัท Gography Tour and Travel Co., Ltd. ("บริษัท")
              </p>
              <p>
                ซึ่งมีวัตถุประสงค์เพื่อเป็นศูนย์กลางรวบรวมโปรแกรมทัวร์จากบริษัททัวร์พันธมิตร และเปิดโอกาสให้ผู้ขายอิสระ ("เซลล์") สามารถเข้ามาเข้าร่วมโปรแกรมเพื่อแนะนำลูกค้าและรับค่าคอมมิชชั่นตามที่กำหนด
              </p>
              <p className="bg-paydee-yellow-primary/20 p-4 rounded-lg border-l-4 border-paydee-yellow-primary">
                การเข้าสู่ระบบ การสมัครสมาชิก หรือการใช้งานแพลตฟอร์มนี้ ถือว่าผู้ใช้งาน ("ท่าน") ได้อ่าน ทำความเข้าใจ และยอมรับเงื่อนไขทั้งหมดในเอกสารนี้
              </p>
            </div>
          </section>

          {/* Section 2 */}
          <section id="registration" className="mb-12 scroll-mt-24">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 flex items-center">
              <span className="bg-paydee-blue-primary text-white w-8 h-8 rounded-full flex items-center justify-center mr-3 text-sm">2</span>
              การสมัครสมาชิกและการใช้งาน
            </h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-paydee-orange-primary mr-2">•</span>
                  <span>การสมัครสมาชิกต้องใช้ข้อมูลจริงและครบถ้วน โดยบริษัทสงวนสิทธิ์ในการระงับหรือยกเลิกบัญชีหากพบว่ามีการให้ข้อมูลเท็จหรือผิดวัตถุประสงค์</span>
                </li>
                <li className="flex items-start">
                  <span className="text-paydee-orange-primary mr-2">•</span>
                  <span>ผู้ใช้งานต้องมีอายุไม่ต่ำกว่า 20 ปีบริบูรณ์</span>
                </li>
                <li className="flex items-start">
                  <span className="text-paydee-orange-primary mr-2">•</span>
                  <span>บัญชีผู้ใช้ไม่สามารถโอนให้บุคคลอื่นได้</span>
                </li>
                <li className="flex items-start">
                  <span className="text-paydee-orange-primary mr-2">•</span>
                  <span>บริษัทขอสงวนสิทธิ์ในการระงับการเข้าถึงระบบหากมีการใช้งานผิดวัตถุประสงค์ เช่น การละเมิดลิขสิทธิ์ การหลอกลวง หรือการละเมิดข้อตกลงนี้</span>
                </li>
              </ul>
            </div>
          </section>

          {/* Section 3 */}
          <section id="roles" className="mb-12 scroll-mt-24">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 flex items-center">
              <span className="bg-paydee-blue-primary text-white w-8 h-8 rounded-full flex items-center justify-center mr-3 text-sm">3</span>
              บทบาทของผู้ใช้งาน
            </h2>
            
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">3.1 เซลล์ (ผู้ขายโปรแกรมทัวร์)</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-paydee-orange-primary mr-2">•</span>
                  <span>มีหน้าที่เผยแพร่และแนะนำลูกค้าให้กับบริษัทหรือโปรแกรมทัวร์ที่เข้าร่วม</span>
                </li>
                <li className="flex items-start">
                  <span className="text-paydee-orange-primary mr-2">•</span>
                  <span>การขายจะถือว่าเสร็จสมบูรณ์เมื่อบริษัทได้รับการชำระเงินจากลูกค้า</span>
                </li>
                <li className="flex items-start">
                  <span className="text-paydee-orange-primary mr-2">•</span>
                  <span>บริษัทจะโอนค่าคอมมิชชั่นให้ภายใน 24 ชั่วโมง หลังการชำระเงินเสร็จสิ้น</span>
                </li>
                <li className="flex items-start">
                  <span className="text-paydee-orange-primary mr-2">•</span>
                  <span>เซลล์สามารถตรวจสอบยอดขายและสถานะค่าคอมผ่านระบบ Dashboard ของตนเอง</span>
                </li>
                <li className="flex items-start">
                  <span className="text-paydee-orange-primary mr-2">•</span>
                  <span>บริษัทขอสงวนสิทธิ์ในการตรวจสอบข้อมูลลูกค้าเพื่อป้องกันการทับซ้อนของการขาย</span>
                </li>
                <li className="flex items-start">
                  <span className="text-paydee-orange-primary mr-2">•</span>
                  <span>ในกรณีที่ลูกค้าติดต่อบริษัทโดยตรงในภายหลัง ระบบจะตรวจสอบประวัติการเชื่อมโยงเพื่อตัดสินว่าเป็นลูกค้าของเซลล์หรือไม่</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">3.2 บริษัททัวร์พันธมิตร</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-paydee-orange-primary mr-2">•</span>
                  <span>ผู้ว่าจ้างต้องลงทะเบียนและยืนยันตัวตนตามที่บริษัทกำหนด</span>
                </li>
                <li className="flex items-start">
                  <span className="text-paydee-orange-primary mr-2">•</span>
                  <span>ผู้ว่าจ้างต้องชำระ ค่าธรรมเนียมสมาชิกแรกเข้า 100,000 บาทต่อปี ซึ่งสามารถลงโปรแกรมทัวร์ได้สูงสุด 3 โปรแกรมต่อปี</span>
                </li>
                <li className="flex items-start">
                  <span className="text-paydee-orange-primary mr-2">•</span>
                  <span>ผู้ว่าจ้างสามารถ นำโปรแกรมทัวร์ไปหมุนเวียนหรือปรับเปลี่ยน ในกรณีที่ขายออกแล้ว หรือเพื่อปรับปรุงรายละเอียดโปรแกรม ให้สอดคล้องกับความต้องการของลูกค้าและมาตรฐานของแพลตฟอร์ม</span>
                </li>
                <li className="flex items-start">
                  <span className="text-paydee-orange-primary mr-2">•</span>
                  <span>ผู้ว่าจ้างต้องให้ข้อมูลที่ถูกต้องครบถ้วน รวมถึงเอกสารการประกอบธุรกิจที่เกี่ยวข้อง</span>
                </li>
                <li className="flex items-start">
                  <span className="text-paydee-orange-primary mr-2">•</span>
                  <span>การใช้บริการของแพลตฟอร์มถือว่าผู้ว่าจ้างยอมรับและผูกพันตามข้อตกลงนี้โดยสมบูรณ์</span>
                </li>
              </ul>
            </div>
          </section>

          {/* Section 4 */}
          <section id="payment" className="mb-12 scroll-mt-24">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 flex items-center">
              <span className="bg-paydee-blue-primary text-white w-8 h-8 rounded-full flex items-center justify-center mr-3 text-sm">4</span>
              การชำระเงินและค่าคอมมิชชั่น
            </h2>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-paydee-orange-primary mr-2">•</span>
                <span>บริษัทจะทำการโอนเงินค่าคอมมิชชั่นให้แก่เซลล์ตามสัดส่วนที่แสดงไว้ในระบบ โดยโอนเข้าบัญชีธนาคารที่ผู้ขายระบุ</span>
              </li>
              <li className="flex items-start">
                <span className="text-paydee-orange-primary mr-2">•</span>
                <span>ค่าคอมมิชชั่นจะคิดจากราคาขายสุทธิหลังหักส่วนลดหรือค่าใช้จ่ายอื่น ๆ</span>
              </li>
              <li className="flex items-start">
                <span className="text-paydee-orange-primary mr-2">•</span>
                <span>บริษัทไม่รับผิดชอบกรณีบัญชีธนาคารของเซลล์ระบุข้อมูลไม่ถูกต้อง</span>
              </li>
              <li className="flex items-start">
                <span className="text-paydee-orange-primary mr-2">•</span>
                <span>บริษัทขอสงวนสิทธิ์ในการปรับอัตราค่าคอมมิชชั่น หรือเงื่อนไขการจ่าย โดยจะแจ้งให้ทราบล่วงหน้า</span>
              </li>
            </ul>
          </section>

          {/* Section 5 */}
          <section id="rights" className="mb-12 scroll-mt-24">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 flex items-center">
              <span className="bg-paydee-blue-primary text-white w-8 h-8 rounded-full flex items-center justify-center mr-3 text-sm">5</span>
              การคุ้มครองสิทธิ์และความโปร่งใส
            </h2>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-paydee-orange-primary mr-2">•</span>
                <span>บริษัทมีระบบเชื่อมโยงรหัสลูกค้าเพื่อป้องกันการซ้ำซ้อนระหว่างเซลล์</span>
              </li>
              <li className="flex items-start">
                <span className="text-paydee-orange-primary mr-2">•</span>
                <span>ลูกค้าที่มาจากลิงก์หรือรหัสของเซลล์จะถูกบันทึกโดยอัตโนมัติ เพื่อยืนยันสิทธิ์ค่าคอมมิชชั่น</span>
              </li>
              <li className="flex items-start">
                <span className="text-paydee-orange-primary mr-2">•</span>
                <span>ในกรณีที่มีข้อโต้แย้ง บริษัทจะตรวจสอบจากระบบและหลักฐานที่มีอยู่ก่อนตัดสินผล</span>
              </li>
            </ul>
          </section>

          {/* Section 6 */}
          <section id="security" className="mb-12 scroll-mt-24">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 flex items-center">
              <span className="bg-paydee-blue-primary text-white w-8 h-8 rounded-full flex items-center justify-center mr-3 text-sm">6</span>
              การรักษาความปลอดภัยของข้อมูล
            </h2>
            <p className="text-gray-700 leading-relaxed">
              บริษัทให้ความสำคัญกับความปลอดภัยของข้อมูลส่วนบุคคลของผู้ใช้ทุกฝ่าย โดยใช้ระบบเข้ารหัส (Encryption) และการยืนยันตัวตนก่อนเข้าสู่ระบบ เพื่อป้องกันการเข้าถึงโดยไม่ได้รับอนุญาต
            </p>
          </section>

          {/* Section 7 */}
          <section id="privacy" className="mb-12 scroll-mt-24">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 flex items-center">
              <span className="bg-paydee-blue-primary text-white w-8 h-8 rounded-full flex items-center justify-center mr-3 text-sm">7</span>
              นโยบายคุ้มครองความเป็นส่วนตัว (Privacy Policy)
            </h2>
            
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">7.1 การเก็บรวบรวมข้อมูล</h3>
              <p className="text-gray-700 mb-3">บริษัทอาจเก็บข้อมูลดังต่อไปนี้:</p>
              <ul className="space-y-2 text-gray-700 ml-4">
                <li className="flex items-start">
                  <span className="text-paydee-orange-primary mr-2">•</span>
                  <span>ข้อมูลส่วนบุคคล เช่น ชื่อ ที่อยู่ หมายเลขโทรศัพท์ อีเมลล์ และข้อมูลบัญชีธนาคาร</span>
                </li>
                <li className="flex items-start">
                  <span className="text-paydee-orange-primary mr-2">•</span>
                  <span>ข้อมูลการใช้งานระบบ เช่น เวลาเข้าสู่ระบบ การคลิก การขาย และ IP Address</span>
                </li>
                <li className="flex items-start">
                  <span className="text-paydee-orange-primary mr-2">•</span>
                  <span>ข้อมูลทางเทคนิคเพื่อปรับปรุงประสบการณ์การใช้งาน</span>
                </li>
              </ul>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">7.2 วัตถุประสงค์การใช้ข้อมูล</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-paydee-orange-primary mr-2">•</span>
                  <span>เพื่อดำเนินการด้านการขาย การจ่ายค่าคอมมิชชั่น และการติดต่อสื่อสาร</span>
                </li>
                <li className="flex items-start">
                  <span className="text-paydee-orange-primary mr-2">•</span>
                  <span>เพื่อพัฒนาคุณภาพของบริการและระบบแพลตฟอร์ม</span>
                </li>
                <li className="flex items-start">
                  <span className="text-paydee-orange-primary mr-2">•</span>
                  <span>เพื่อใช้ในการตลาดหรือโปรโมชั่น (โดยได้รับความยินยอมล่วงหน้า)</span>
                </li>
              </ul>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">7.3 การเปิดเผยข้อมูลต่อบุคคลที่สาม</h3>
              <p className="text-gray-700 mb-3">บริษัทจะไม่เปิดเผยข้อมูลส่วนบุคคลแก่บุคคลภายนอก เว้นแต่</p>
              <ul className="space-y-2 text-gray-700 ml-4">
                <li className="flex items-start">
                  <span className="text-paydee-orange-primary mr-2">•</span>
                  <span>ได้รับความยินยอมจากเจ้าของข้อมูล</span>
                </li>
                <li className="flex items-start">
                  <span className="text-paydee-orange-primary mr-2">•</span>
                  <span>มีคำสั่งจากศาลหรือหน่วยงานราชการที่มีอำนาจตามกฎหมาย</span>
                </li>
              </ul>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">7.4 สิทธิของเจ้าของข้อมูล</h3>
              <p className="text-gray-700 mb-3">ผู้ใช้งานมีสิทธิ์ในการ:</p>
              <ul className="space-y-2 text-gray-700 ml-4">
                <li className="flex items-start">
                  <span className="text-paydee-orange-primary mr-2">•</span>
                  <span>ขอเข้าถึงข้อมูลส่วนบุคคลของตน</span>
                </li>
                <li className="flex items-start">
                  <span className="text-paydee-orange-primary mr-2">•</span>
                  <span>ขอแก้ไขหรือยกเลิกบัญชี</span>
                </li>
                <li className="flex items-start">
                  <span className="text-paydee-orange-primary mr-2">•</span>
                  <span>ขอให้ลบข้อมูลออกจากระบบ (ภายใต้เงื่อนไขทางกฎหมาย)</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">7.5 การเก็บรักษาข้อมูล</h3>
              <p className="text-gray-700">
                ข้อมูลส่วนบุคคลจะถูกเก็บไว้ตราบเท่าที่จำเป็นต่อวัตถุประสงค์ทางธุรกิจ หรือจนกว่าผู้ใช้งานจะยกเลิกบัญชีและไม่มีภาระผูกพันใด ๆ คงค้างกับบริษัท
              </p>
            </div>
          </section>

          {/* Section 8 */}
          <section id="modification" className="mb-12 scroll-mt-24">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 flex items-center">
              <span className="bg-paydee-blue-primary text-white w-8 h-8 rounded-full flex items-center justify-center mr-3 text-sm">8</span>
              การแก้ไขเปลี่ยนแปลงเงื่อนไข
            </h2>
            <p className="text-gray-700 leading-relaxed">
              บริษัทขอสงวนสิทธิ์ในการแก้ไข ปรับปรุง หรือเพิ่มเติมข้อตกลงนี้ โดยไม่จำเป็นต้องแจ้งให้ทราบล่วงหน้า ทั้งนี้เงื่อนไขใหม่จะมีผลทันทีเมื่อประกาศบนเว็บไซต์
            </p>
          </section>

          {/* Section 9 */}
          <section id="contact" className="mb-12 scroll-mt-24">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 flex items-center">
              <span className="bg-paydee-blue-primary text-white w-8 h-8 rounded-full flex items-center justify-center mr-3 text-sm">9</span>
              การติดต่อบริษัท
            </h2>
            <div className="bg-gradient-to-r from-paydee-blue-primary/10 to-paydee-orange-primary/10 p-6 rounded-xl">
              <div className="space-y-3 text-gray-700">
                <p className="font-semibold text-lg">Paydee.me powered by Gography Tour and Travel Co., Ltd.</p>
                <p>เลขทะเบียนนิติบุคคลเดียวกับบริษัท Gography Tour and Travel</p>
                <p><strong>ที่ตั้ง:</strong> 79/53 Romkloa soi 1 minburi bangkok 10510</p>
                <p><strong>อีเมลติดต่อ:</strong> info@gography.net</p>
              </div>
            </div>
          </section>

          {/* Back to Home Button */}
          <div className="text-center mt-12">
            <Link 
              href="/"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-paydee-blue-primary to-paydee-orange-primary text-white font-semibold rounded-full hover:shadow-lg transform hover:scale-105 transition-all duration-300"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              กลับสู่หน้าหลัก
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SellerRulesPage;