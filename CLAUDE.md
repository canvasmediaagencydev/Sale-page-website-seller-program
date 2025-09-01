# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js 15 application for a tour sales landing page called "PayDee" (previously "Gography"). It's a seller-focused application that allows sales agents to browse and promote tours, earning commissions. The app is built with TypeScript, Tailwind CSS, and uses Supabase as the backend database.

## Commands

### Development
```bash
npm run dev        # Start development server with Turbopack
npm run build      # Build for production
npm start          # Start production server
npm run lint       # Run ESLint
```

### Testing
Currently no test framework is configured in the project.

## Architecture & Structure

### Core Technologies
- **Next.js 15** with App Router architecture
- **React 19** with client-side components
- **TypeScript** for type safety
- **Tailwind CSS v4** for styling with custom animations (tw-animate-css)
- **Supabase** for database operations and authentication
- **shadcn/ui** components (New York variant) configured
- **Motion** library for animations

### Key Directories
- `src/app/` - Next.js app directory with layout and main page
- `src/components/` - Reusable React components including animations, UI elements
- `src/lib/` - Utility functions and Supabase client configuration
- `src/data/` - Static data files
- `public/` - Static assets including fonts, images, and SVGs

### Database Architecture
The application uses Supabase with these main entities:
- **trips** - Tour packages with pricing, commission info, and details
- **trip_schedules** - Available dates for each trip
- **countries** - Country information with flags
- **bookings** - Sales bookings with commission tracking
- **customers** - Customer information
- **user_profiles** - Seller profiles with approval status
- **sales_targets** - Monthly commission targets

Key database views:
- `trips_with_next_schedule` - Trips with their next available schedule
- `seller_booking_stats` - Aggregated booking statistics per seller

### Component Structure
- **UI Components**: Button, Pagination, Navbar, Footer
- **Animation Components**: BlurText, DelayedBlurText, CountUp, CircularText, SplashCursor
- **Business Components**: TripsCard (displays tour information), AutoPlayVideo
- **Background Components**: DarkVeil for overlay effects

### Configuration Files
- `next.config.ts` - Performance optimizations, image domains, compiler settings
- `components.json` - shadcn/ui configuration with New York style
- `tsconfig.json` - TypeScript configuration with path mapping (@/* -> ./src/*)
- `database.types.ts` - Generated TypeScript types for Supabase database

### Performance Optimizations
- Lazy loading for non-critical components (TripCard, AutoPlayVideo)
- Image optimization with WebP/AVIF formats
- In-memory caching for trips data (5-minute duration)
- Memoized expensive calculations in pagination
- Bundle analyzer available with ANALYZE=true environment variable

### Styling Approach
- Tailwind CSS with custom utilities and animations
- LINE Seed Sans TH fonts for Thai text
- Playfair Display for headings
- Responsive design with mobile-first approach
- Custom background images and overlay effects

### Data Flow
1. **Supabase Client** (`src/lib/supabase.ts`) - Centralized database access
2. **Type Safety** - Full TypeScript coverage with generated database types
3. **Caching Strategy** - In-memory cache for trips to reduce database calls
4. **Error Handling** - Fallback to cache on database errors

### Key Features
- Tour listing with pagination
- Commission tracking and display
- Schedule selection for each tour
- Responsive design optimized for mobile and desktop
- Performance-focused with lazy loading and caching
- SEO optimized with Open Graph metadata

### Remote Image Domains
The app allows images from:
- gography-r2.tumwebsme.com (main CDN)
- Supabase storage
- Google/Unsplash for fallbacks
- Mux for video content