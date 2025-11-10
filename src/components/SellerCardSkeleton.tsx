export default function SellerCardSkeleton() {
  return (
    <div className="w-full max-w-md mx-auto bg-white rounded-2xl shadow-2xl p-8 animate-pulse">
      {/* PayDee Logo skeleton */}
      <div className="flex justify-center mb-8">
        <div className="w-32 h-8 bg-gray-300 rounded"></div>
      </div>

      {/* Avatar skeleton */}
      <div className="flex justify-center mb-6">
        <div className="relative">
          <div className="w-32 h-32 rounded-full bg-gray-300"></div>
          {/* Badge skeleton */}
          <div className="absolute bottom-1 right-1 w-8 h-8 rounded-full bg-gray-400"></div>
        </div>
      </div>

      {/* Name skeleton */}
      <div className="flex justify-center mb-2">
        <div className="w-48 h-8 bg-gray-300 rounded"></div>
      </div>

      {/* Seller ID skeleton */}
      <div className="flex justify-center mb-6">
        <div className="w-32 h-6 bg-gray-200 rounded"></div>
      </div>

      {/* Divider */}
      <div className="w-full h-px bg-gray-200 my-6"></div>

      {/* Verification section skeleton */}
      <div className="space-y-3">
        <div className="flex justify-center">
          <div className="w-40 h-6 bg-gray-300 rounded"></div>
        </div>
        <div className="flex justify-center">
          <div className="w-48 h-5 bg-gray-200 rounded"></div>
        </div>
        <div className="flex justify-center">
          <div className="w-36 h-5 bg-gray-200 rounded"></div>
        </div>
      </div>

      {/* Divider */}
      <div className="w-full h-px bg-gray-200 my-6"></div>

      {/* Share buttons skeleton */}
      <div className="space-y-3">
        <div className="flex justify-center">
          <div className="w-24 h-4 bg-gray-300 rounded"></div>
        </div>
        <div className="flex justify-center gap-3">
          <div className="w-12 h-12 rounded-full bg-gray-300"></div>
          <div className="w-12 h-12 rounded-full bg-gray-300"></div>
          <div className="w-12 h-12 rounded-full bg-gray-300"></div>
          <div className="w-12 h-12 rounded-full bg-gray-300"></div>
        </div>
      </div>
    </div>
  )
}
