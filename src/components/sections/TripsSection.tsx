"use client"

import { lazy, Suspense } from "react";
import Button from "@/components/Button";
import Pagination from "@/components/Pagination";
import { TripWithDetails, PaginationData } from "@/types";
import { PAGINATION } from "@/constants";

// Lazy load components that are not immediately visible
const TripCard = lazy(() => import("@/components/TripsCard"));

interface TripsSectionProps {
  loading: boolean;
  paginationData: PaginationData;
  currentPage: number;
  handlePageChange: (page: number) => void;
  totalTrips: number;
}

const LoadingSkeleton = () => (
  <div className="bg-white rounded-2xl shadow-lg overflow-hidden w-full max-w-sm animate-pulse">
    <div className="h-48 bg-gray-300"></div>
    <div className="p-4">
      <div className="h-6 bg-gray-300 rounded mb-2"></div>
      <div className="h-4 bg-gray-300 rounded mb-3 w-3/4"></div>
      <div className="h-10 bg-gray-300 rounded mb-3"></div>
      <div className="h-6 bg-gray-300 rounded mb-4 w-1/2"></div>
      <div className="h-10 bg-gray-300 rounded"></div>
    </div>
  </div>
);

const TripsSection = ({
  loading,
  paginationData,
  currentPage,
  handlePageChange,
  totalTrips
}: TripsSectionProps) => {
  return (
    <section id="trips-section" className="py-16 md:py-20 bg-gradient-to-b from-white to-gray-50/50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-32 h-32 bg-paydee-blue-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-paydee-orange-primary/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto max-w-7xl px-4 lg:px-8 xl:px-16 relative">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-paydee-blue-primary/10 to-paydee-orange-primary/10 backdrop-blur-sm border border-paydee-blue-primary/20 text-paydee-blue-primary rounded-full text-sm font-semibold mb-6">
            <span className="w-2 h-2 bg-paydee-orange-primary rounded-full mr-2 animate-pulse"></span>
            ทริปแนะนำ
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-gray-900 mb-6 leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-paydee-blue-primary via-paydee-orange-primary to-paydee-yellow-primary">
              ทริปขายดี
            </span>
            <span className="block text-gray-900">
              ประจำเดือน
            </span>
          </h2>
          <p className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed mb-8">
            เลือกทริปที่คุณชอบและเริ่มสร้างรายได้กันเลย
          </p>
          <Button className="bg-gradient-to-r from-paydee-orange-primary via-paydee-yellow-primary to-paydee-orange-primary bg-size-200 bg-pos-0 hover:bg-pos-100 text-white px-8 py-4 rounded-2xl text-lg font-bold shadow-xl hover:shadow-paydee-orange-primary/25 transform hover:scale-105 transition-all duration-500">
            ร่วมทีมกับเราตอนนี้
          </Button>
        </div>

        {/* Trip Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 md:gap-8 justify-items-center">
          {loading ? (
            // Loading skeleton
            Array.from({ length: PAGINATION.ITEMS_PER_PAGE }).map((_, index) => (
              <LoadingSkeleton key={index} />
            ))
          ) : totalTrips > 0 ? (
            paginationData.currentTrips.map((trip) => (
              <Suspense key={trip.id} fallback={<LoadingSkeleton />}>
                <TripCard trip={trip} />
              </Suspense>
            ))
          ) : (
            <div className="col-span-full text-center py-8">
              <p className="text-gray-500 text-lg">ไม่พบข้อมูลทริป</p>
            </div>
          )}
        </div>

        {/* Pagination */}
        {!loading && totalTrips > 0 && (
          <Pagination
            currentPage={currentPage}
            totalPages={paginationData.totalPages}
            onPageChange={handlePageChange}
            itemsPerPage={PAGINATION.ITEMS_PER_PAGE}
            totalItems={totalTrips}
          />
        )}
      </div>
    </section>
  );
};

export default TripsSection;