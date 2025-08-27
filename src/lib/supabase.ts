import { createClient } from '@supabase/supabase-js'
import { Database } from '../../database.types'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient<Database>(supabaseUrl, supabaseAnonKey)

// Type definitions for the data we'll fetch
export type Trip = Database['public']['Tables']['trips']['Row']
export type TripSchedule = Database['public']['Tables']['trip_schedules']['Row']
export type Country = Database['public']['Tables']['countries']['Row']

// Combined type for trips with their schedules and country info
export interface TripWithDetails extends Trip {
  country: Country | null
  trip_schedules: TripSchedule[]
}

// In-memory cache for trips
let tripsCache: TripWithDetails[] | null = null;
let cacheTimestamp = 0;
const CACHE_DURATION = 5 * 60 * 1000; // 5 minutes

// Function to fetch trips with their schedules and country information
export async function fetchTripsWithSchedules(): Promise<TripWithDetails[]> {
  // Check if cache is valid
  const now = Date.now();
  if (tripsCache && (now - cacheTimestamp) < CACHE_DURATION) {
    return tripsCache;
  }

  const { data, error } = await supabase
    .from('trips')
    .select(`
      *,
      country:countries(*),
      trip_schedules(*)
    `)
    .eq('is_active', true)
    .order('created_at', { ascending: false })
    .limit(20) // Limit เพื่อลดข้อมูลที่โหลด

  if (error) {
    console.error('Error fetching trips:', error)
    return tripsCache || [] // Return cache if available
  }

  // Update cache
  tripsCache = data as TripWithDetails[];
  cacheTimestamp = now;

  return tripsCache;
}
