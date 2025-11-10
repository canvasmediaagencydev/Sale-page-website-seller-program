import { createClient } from '@supabase/supabase-js'
import { Database } from '../../database.types'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient<Database>(supabaseUrl, supabaseAnonKey)

// Type definitions for the data we'll fetch
export type Trip = Database['public']['Tables']['trips']['Row']
export type TripSchedule = Database['public']['Tables']['trip_schedules']['Row']
export type Country = Database['public']['Tables']['countries']['Row']
export type UserProfile = Database['public']['Tables']['user_profiles']['Row']

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

// Seller-related types and functions
export interface SellerCardData {
  id: string
  full_name: string | null
  avatar_url: string | null
  approved_at: string | null
  email: string | null
}

/**
 * Fetch seller by the last 5 characters of their UUID
 * Only returns approved sellers (approved_at is not null)
 * @param sellerId - Last 5 characters of UUID (e.g., "40000")
 * @returns Seller data or null if not found/not approved
 */
export async function fetchSellerById(sellerId: string): Promise<SellerCardData | null> {
  try {
    // Query all user profiles
    const { data, error } = await supabase
      .from('user_profiles')
      .select('id, full_name, avatar_url, approved_at, email')

    if (error) {
      console.error('Error fetching seller:', error)
      return null
    }

    if (!data || data.length === 0) {
      return null
    }

    // Filter approved sellers with names
    const approvedSellers = data.filter(profile =>
      profile.approved_at !== null && profile.full_name !== null
    )

    if (approvedSellers.length === 0) {
      return null
    }

    // Find seller whose UUID ends with the provided sellerId (last 5 chars)
    const seller = approvedSellers.find(profile => {
      const cleanUuid = profile.id.replace(/-/g, '').toUpperCase()
      const lastFiveChars = cleanUuid.slice(-5)
      return lastFiveChars === sellerId.toUpperCase()
    })

    return seller || null
  } catch (error) {
    console.error('Unexpected error in fetchSellerById:', error)
    return null
  }
}

/**
 * Search approved sellers by name or Seller ID
 * @param searchQuery - Search query (minimum 5 characters)
 * @returns Array of matching approved sellers
 */
export async function searchApprovedSellers(searchQuery: string): Promise<SellerCardData[]> {
  try {
    // Validate minimum length
    if (!searchQuery || searchQuery.trim().length < 5) {
      return []
    }

    const query = searchQuery.trim().toLowerCase()

    // Fetch all approved sellers (we need to check Seller ID which is derived from UUID)
    const { data, error } = await supabase
      .from('user_profiles')
      .select('id, full_name, avatar_url, approved_at, email')
      .order('approved_at', { ascending: false })

    if (error) {
      console.error('[searchApprovedSellers] Supabase error:', error)
      return []
    }

    if (!data || data.length === 0) {
      return []
    }

    // Filter approved sellers with names
    const approvedSellers = data.filter(profile =>
      profile.approved_at !== null && profile.full_name !== null
    )

    // Search by name or seller ID (client-side filtering needed for Seller ID)
    const results = approvedSellers.filter(seller => {
      const fullName = seller.full_name?.toLowerCase() || ''
      const cleanUuid = seller.id.replace(/-/g, '').toUpperCase()
      const sellerId = cleanUuid.slice(-5).toLowerCase()

      return fullName.includes(query) || sellerId.includes(query)
    })

    return results
  } catch (error) {
    console.error('[searchApprovedSellers] Unexpected error:', error)
    return []
  }
}
