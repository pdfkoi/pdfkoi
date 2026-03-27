/**
 * Internationalization utilities
 * Re-exports all i18n configuration and utilities
 */

import { defaultLocale, localeConfig, locales } from './config';

export {
  locales,
  defaultLocale,
  localeConfig,
  isRTL,
  isValidLocale,
  getLocaleFromPath,
  getLocalizedPath,
  type Locale,
} from './config';

export {
  isRTLLocale,
  getDirection,
  getRTLClasses,
  flipPosition,
  getLogicalProperty,
  getIconRotation,
} from './rtl';

export {
  loadMessages,
  loadEnglishMessages,
  getNestedValue,
  getTranslationWithFallback,
  mergeWithFallback,
  createTranslator,
  hasTranslation,
  getMissingKeys,
  type NestedMessages,
} from './fallback';

// Legacy exports for backward compatibility
export const SUPPORTED_LOCALES = locales;
export const DEFAULT_LOCALE = defaultLocale;
export const LOCALE_CONFIG = localeConfig;
