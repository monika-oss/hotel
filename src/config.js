/**
 * Master Configuration File for HotelApp Frontend
 * 
 * This file acts as the single source of truth for the 4 developers working on the UI.
 * Use these constants instead of hardcoding values to maintain consistency across all 43 pages.
 */

// 1. API Configuration
export const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000/api';

export const API_ENDPOINTS = {
  AUTH: {
    LOGIN: '/auth/login',
    REGISTER: '/auth/register',
  },
  HOTELS: {
    BASE: '/hotels',
    SEARCH: '/hotels/search',
    CITIES: '/hotels/cities'
  },
  BOOKINGS: {
    BASE: '/bookings',
    APPLY_COUPON: '/bookings/apply-coupon'
  },
  ADMIN: '/admin',
  PARTNER: '/partner'
};

// 2. Local Storage Keys
export const STORAGE_KEYS = {
  TOKEN: 'srb_auth_token',
  USER: 'srb_user_data',
  THEME: 'srb_theme_pref'
};

// 2. Design System Tokens (Tailwind classes or Hex codes)
export const THEME = {
  colors: {
    primary: '#1e3a8a',     // Navy Blue (blue-900)
    primaryDark: '#172554', // Darker Navy (blue-950)
    secondary: '#1d4ed8',   // Lighter Blue (blue-700)
    accent: '#eab308',      // Yellow (yellow-500)
    accentHover: '#ca8a04', // Dark Yellow (yellow-600)
    success: '#10b981',     // Green (for LIVE Confirmations)
    warning: '#f97316',     // Orange (for CALL Mode)
    error: '#ef4444',       // Red
  }
};

// 3. Typography Standards
export const TYPOGRAPHY = {
  fontFamily: "'Inter', sans-serif",
  sizes: {
    h1: 'text-4xl font-bold',      // 36px
    h2: 'text-3xl font-semibold',  // 30px
    h3: 'text-2xl font-semibold',  // 24px
    body: 'text-base font-normal', // 16px
    small: 'text-sm font-normal',  // 14px
    tiny: 'text-xs font-normal'    // 12px
  }
};

// 4. UI Component Standards
export const COMPONENTS = {
  button: {
    base: 'rounded-md font-semibold transition-all duration-200 flex items-center justify-center',
    sizes: {
      small: 'px-3 py-1.5 text-sm',
      medium: 'px-4 py-2 text-base',
      large: 'px-6 py-3 text-lg'
    },
    variants: {
      primary: `bg-[${THEME.colors.primary}] text-white hover:bg-[${THEME.colors.primaryDark}]`,
      accent: `bg-[${THEME.colors.accent}] text-white hover:bg-[${THEME.colors.accentHover}]`,
      outline: `border-2 border-[${THEME.colors.primary}] text-[${THEME.colors.primary}] hover:bg-gray-50`
    }
  },
  card: {
    base: 'bg-white rounded-xl shadow-md border border-gray-100 p-6'
  }
};

// 5. User Roles (RBAC)
export const ROLES = {
  USER: 'USER',
  PARTNER: 'HOTEL_PARTNER',
  ADMIN: 'ADMIN'
};

// 6. Booking Status Lifecycle
export const BOOKING_STATUS = {
  PENDING_PAYMENT: 'PENDING_PAYMENT',
  PAYMENT_SUCCESS: 'PAYMENT_SUCCESS',
  CONFIRMED: 'CONFIRMED',
  CHECKED_IN: 'CHECKED_IN',
  CHECKED_OUT: 'CHECKED_OUT',
  CANCELLED: 'CANCELLED',
  REFUNDED: 'REFUNDED'
};

// 7. Hotel Listing Modes
export const LISTING_MODES = {
  LIVE: 'LIVE', // Real-time inventory
  CALL: 'CALL'  // Manual confirmation
};

export const HOTEL_STATUS = {
  PENDING: 'PENDING',
  APPROVED: 'APPROVED',
  SUSPENDED: 'SUSPENDED'
};

// 8. Formatting Utilities
export const formatCurrency = (amount) => {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0
  }).format(amount);
};

export const formatDate = (dateString) => {
  if (!dateString) return '';
  const options = { year: 'numeric', month: 'short', day: 'numeric' };
  return new Date(dateString).toLocaleDateString('en-IN', options); // e.g., "15 Aug 2026"
};

// 9. Pagination & App Defaults
export const APP_CONFIG = {
  defaultPageLimit: 10,
  maxGuestsPerRoom: 8,
  supportPhone: '+91-9876543210',
  supportEmail: 'support@srbgroups.com'
};
