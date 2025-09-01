"use client"

import { useState, useEffect, useMemo, useCallback } from "react";
import { fetchTripsWithSchedules } from "@/lib/supabase";
import { TripWithDetails, PaginationData } from "@/types";
import { PAGINATION } from "@/constants";

export const useTrips = () => {
  const [trips, setTrips] = useState<TripWithDetails[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const loadTrips = async () => {
      try {
        const data = await fetchTripsWithSchedules();
        setTrips(data);
      } catch (error) {
        console.error('Error loading trips:', error);
      } finally {
        setLoading(false);
      }
    };

    loadTrips();
  }, []);

  const paginationData = useMemo<PaginationData>(() => {
    const totalPages = Math.ceil(trips.length / PAGINATION.ITEMS_PER_PAGE);
    const startIndex = (currentPage - 1) * PAGINATION.ITEMS_PER_PAGE;
    const endIndex = startIndex + PAGINATION.ITEMS_PER_PAGE;
    const currentTrips = trips.slice(startIndex, endIndex);
    
    return { totalPages, currentTrips };
  }, [trips, currentPage]);

  const handlePageChange = useCallback((page: number) => {
    setCurrentPage(page);
    const tripsSection = document.getElementById('trips-section');
    if (tripsSection) {
      tripsSection.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  return {
    trips,
    loading,
    currentPage,
    paginationData,
    handlePageChange,
  };
};