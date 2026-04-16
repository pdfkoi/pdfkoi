import { defaultLocale, type Locale } from '@/lib/i18n/config';

const CATEGORY_HUB_INDEXABLE_LOCALES = new Set<Locale>([defaultLocale, 'zh']);

export function shouldIndexToolsDirectory(): boolean {
  return false;
}

export function shouldIndexCategoryHub(locale: Locale): boolean {
  return CATEGORY_HUB_INDEXABLE_LOCALES.has(locale);
}

export function getCategoryHubIndexableLocales(): Locale[] {
  return Array.from(CATEGORY_HUB_INDEXABLE_LOCALES);
}
