import { getRequestConfig } from 'next-intl/server';
import { routing } from './routing';
import { normalizeLocale } from '@/lib/i18n/config';
import { mergeWithFallback } from '@/lib/i18n/fallback';

export default getRequestConfig(async ({ requestLocale }) => {
  // This typically corresponds to the `[locale]` segment
  let locale = await requestLocale;
  const normalizedLocale = locale ? normalizeLocale(locale) : null;

  // Ensure that the incoming locale is valid
  if (normalizedLocale) {
    locale = normalizedLocale;
  } else if (!locale || !routing.locales.includes(locale as typeof routing.locales[number])) {
    locale = routing.defaultLocale;
  }

  // Load messages based on locale
  // In development, this is dynamically imported which can be slow
  // Consider caching or preloading in production builds
  let messages;
  
  try {
    switch (locale) {
      case 'en':
        messages = (await import('../../messages/en.json')).default;
        break;
      case 'ja':
        messages = mergeWithFallback(
          (await import('../../messages/ja.json')).default,
          (await import('../../messages/en.json')).default
        );
        break;
      case 'ko':
        messages = mergeWithFallback(
          (await import('../../messages/ko.json')).default,
          (await import('../../messages/en.json')).default
        );
        break;
      case 'es':
        messages = mergeWithFallback(
          (await import('../../messages/es.json')).default,
          (await import('../../messages/en.json')).default
        );
        break;
      case 'fr':
        messages = mergeWithFallback(
          (await import('../../messages/fr.json')).default,
          (await import('../../messages/en.json')).default
        );
        break;
      case 'de':
        messages = mergeWithFallback(
          (await import('../../messages/de.json')).default,
          (await import('../../messages/en.json')).default
        );
        break;
      case 'zh':
        messages = mergeWithFallback(
          (await import('../../messages/zh.json')).default,
          (await import('../../messages/en.json')).default
        );
        break;
      case 'zh-TW':
        messages = mergeWithFallback(
          (await import('../../messages/zh-TW.json')).default,
          (await import('../../messages/en.json')).default
        );
        break;
      case 'pt':
        messages = mergeWithFallback(
          (await import('../../messages/pt.json')).default,
          (await import('../../messages/en.json')).default
        );
        break;
      default:
        messages = (await import('../../messages/en.json')).default;
    }
  } catch {
    // Fallback to English if loading fails
    messages = (await import('../../messages/en.json')).default;
  }

  return {
    locale,
    messages,
    // Configure time zone and formats
    timeZone: 'UTC',
    now: new Date(),
  };
});
