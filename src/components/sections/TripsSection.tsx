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
    <section id="trips-section" className="mb-10 md:py-4">
      <div className="container mx-auto max-w-7xl px-4 lg:px-8 xl:px-12">
        <div className="text-center mb-8 md:mb-12">
          <div className="p-8">
            <Button className="bg-orange-600 hover:bg-orange-700 text-white px-4 md:px-30 md:py-4 rounded-full text-md md:text-xl font-semibold w-full md:w-auto transition-all transform hover:scale-105">
              ร่วมทีมกับเราตอนนี้
            </Button>
          </div>
          <p className="text-2xl md:text-4xl font-semibold mb-4">
            ทริปขายดีประจำเดือน
          </p>
          <p className="text-gray-600 text-xl mb-6">
            เลือกทริปที่คุณชอบและเริ่มสร้างรายได้กันเลย
          </p>
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