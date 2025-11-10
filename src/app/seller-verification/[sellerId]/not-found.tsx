import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-paydee-orange-primary/10 via-paydee-blue-primary/10 to-paydee-yellow-primary/10 flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-2xl p-8 text-center">
        {/* Error Icon */}
        <div className="flex justify-center mb-6">
          <div className="w-24 h-24 rounded-full bg-red-100 flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-12 h-12 text-red-600"
            >
              <path
                fillRule="evenodd"
                d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-1.72 6.97a.75.75 0 1 0-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 1 0 1.06 1.06L12 13.06l1.72 1.72a.75.75 0 1 0 1.06-1.06L13.06 12l1.72-1.72a.75.75 0 1 0-1.06-1.06L12 10.94l-1.72-1.72Z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>

        {/* Error Title */}
        <h1 className="text-2xl font-bold text-gray-900 mb-3">
          ไม่พบข้อมูล Seller
        </h1>

        {/* Error Message */}
        <p className="text-gray-600 mb-2">
          Seller ID ที่คุณค้นหาไม่ถูกต้อง หรือยังไม่ได้รับการอนุมัติ
        </p>

        <p className="text-sm text-gray-500 mb-6">
          กรุณาตรวจสอบ Seller ID อีกครั้ง หรือติดต่อ PayDee เพื่อขอข้อมูลเพิ่มเติม
        </p>

        {/* Divider */}
        <div className="w-full h-px bg-gray-200 my-6"></div>

        {/* Info Box */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
          <p className="text-sm text-blue-800">
            <strong>Seller ID</strong> ประกอบด้วย 5 ตัวอักษร<br />
            ตัวอย่าง: <span className="font-mono font-bold">7B9C0</span>
          </p>
        </div>

        {/* Action Buttons */}
        <div className="space-y-3">
          <Link
            href="/"
            className="block w-full bg-paydee-orange-primary hover:bg-paydee-orange-primary/90 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200"
          >
            กลับหน้าแรก
          </Link>

          <a
            href="https://app.paydee.me"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full bg-white hover:bg-gray-50 text-gray-700 font-semibold py-3 px-6 rounded-lg border-2 border-gray-300 transition-colors duration-200"
          >
            ไปยัง PayDee App
          </a>
        </div>

        {/* Footer */}
        <p className="text-xs text-gray-400 mt-6">
          หากคุณคิดว่านี่เป็นข้อผิดพลาด กรุณาติดต่อทีมงาน PayDee
        </p>
      </div>
    </div>
  )
}
