export interface PaginationData {
  totalPages: number;
  currentTrips: TripWithDetails[];
}

export interface StatisticItemProps {
  value: number;
  label: string;
  duration?: number;
  suffix?: string;
}

export interface AnimationConfig {
  delay?: string;
  fillMode?: 'both' | 'forwards' | 'backwards' | 'none';
}

// Re-export types from supabase lib
export type { TripWithDetails, Trip, TripSchedule, Country } from '@/lib/supabase';