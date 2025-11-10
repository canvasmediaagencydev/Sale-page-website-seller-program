/**
 * Seller utilities for generating and validating Seller IDs
 * Seller ID = last 5-6 characters of user_profiles UUID
 */

/**
 * Generate a short Seller ID from a full UUID
 * Takes the last 5 characters of the UUID (excluding hyphens)
 * @param uuid - Full UUID from user_profiles.id
 * @returns Short Seller ID (5 characters, uppercase)
 * @example generateSellerId('550e8400-e29b-41d4-a716-446655440000') => '40000'
 */
export function generateSellerId(uuid: string): string {
  // Remove hyphens and take last 5 characters
  const cleanUuid = uuid.replace(/-/g, '').toUpperCase();
  return cleanUuid.slice(-5);
}

/**
 * Validate if a Seller ID matches the expected format
 * @param sellerId - Seller ID to validate
 * @returns true if valid format (5 alphanumeric characters)
 */
export function isValidSellerIdFormat(sellerId: string): boolean {
  // Allow exactly 5 uppercase alphanumeric characters
  const pattern = /^[A-Z0-9]{5}$/;
  return pattern.test(sellerId);
}

/**
 * Format approved date for display
 * @param approvedAt - ISO date string
 * @returns Formatted date string (e.g., "15 Jan 2025")
 */
export function formatApprovedDate(approvedAt: string | null): string {
  if (!approvedAt) return 'N/A';

  const date = new Date(approvedAt);
  const options: Intl.DateTimeFormatOptions = {
    day: 'numeric',
    month: 'short',
    year: 'numeric'
  };

  return date.toLocaleDateString('en-GB', options);
}

/**
 * Generate share text for social media
 * @param sellerName - Full name of seller
 * @param sellerId - Short Seller ID
 * @param url - Full URL to the card
 * @returns Formatted share text
 */
export function generateShareText(
  sellerName: string,
  sellerId: string,
  url: string
): string {
  return `ตรวจสอบตัวตน ${sellerName} (Seller ID: ${sellerId}) Verified Seller โดย PayDee\n${url}`;
}
