const LEGACY_CATEGORY_SET = new Set([
  'edit-annotate',
  'convert-to-pdf',
  'convert-from-pdf',
  'organize-manage',
  'optimize-repair',
  'secure-pdf',
]);

export function getLegacyCategoryRedirectPath(pathname, category) {
  if (!category || !LEGACY_CATEGORY_SET.has(category)) {
    return null;
  }

  const normalizedPath = pathname.replace(/\/+$/, '') || '/';

  if (normalizedPath === '/tools') {
    return `/tools/category/${category}/`;
  }

  const localeMatch = normalizedPath.match(/^\/([a-zA-Z-]+)\/tools$/);
  if (!localeMatch) {
    return null;
  }

  const [, locale] = localeMatch;
  if (locale === 'en') {
    return `/tools/category/${category}/`;
  }

  return `/${locale}/tools/category/${category}/`;
}
