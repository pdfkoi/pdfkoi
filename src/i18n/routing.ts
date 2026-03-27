import { defineRouting } from 'next-intl/routing';
import { locales, defaultLocale } from '@/lib/i18n/config';

export const routing = defineRouting({
  // A list of all locales that are supported
  locales,

  // Used when no locale matches
  defaultLocale,

  // Always use locale prefix in URL for static export compatibility
  localePrefix: 'always',

  // Keep `/` stable as the canonical English homepage for SEO
  localeDetection: false,
});
