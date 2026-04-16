# PDFkoi Indexing Change Log

This file tracks Search Console and indexation-related changes so future SEO fixes can be traced back to a specific decision, date, and verification result.

## How to Use

For every indexation or canonical fix, add a new entry with:

1. Date
2. Trigger
3. Affected URLs or URL patterns
4. Root cause
5. Code/config files changed
6. Verification performed
7. Follow-up actions in Google Search Console

## Entry Template

### YYYY-MM-DD - Short title

- Trigger:
- Affected URLs:
- Root cause:
- Changes:
- Files:
- Verification:
- GSC follow-up:
- Notes:

## 2026-04-17 - Legal pages removed from index targets

- Trigger:
  Google Search Console reported duplicate/canonical conflicts for legal pages such as `/es/cookies/`, `/de/cookies/`, and `/en/privacy/`.
- Affected URLs:
  `/privacy/`, `/:locale/privacy/`, `/cookies/`, `/:locale/cookies/`
- Root cause:
  These pages were present in the sitemap and were still indexable, even though they are legal/support pages with low SEO value and a high chance of being treated as duplicate or alternate content across locales.
- Changes:
  Removed legal pages from sitemap generation and set them to `noindex, nofollow`.
- Files:
  `src/app/sitemap.ts`
  `src/lib/seo/metadata.ts`
  `src/__tests__/properties/seo.property.test.ts`
  `src/__tests__/properties/sitemap.property.test.ts`
- Verification:
  Production build completed successfully.
  Exported HTML for `out/en/privacy/index.html`, `out/es/cookies/index.html`, and `out/de/cookies/index.html` contains `meta name="robots" content="noindex, nofollow"`.
  Exported `out/sitemap.xml` no longer contains `/privacy/` or `/cookies/`.
- GSC follow-up:
  After deployment, request validation in Search Console for the affected duplicate/canonical issues.
- Notes:
  Access to these pages was intentionally preserved. Only indexing targets were reduced.

## 2026-04-17 - Tools directory and category hub indexing strategy tightened

- Trigger:
  After reviewing the affected Search Console URLs, `/tools/` and some localized category hub pages were identified as likely low-value index targets compared with tool detail pages.
- Affected URLs:
  `/tools/`, `/:locale/tools/`, `/tools/category/:category/`, `/:locale/tools/category/:category/`
- Root cause:
  The tools directory acts mainly as a browse/filter page, and many localized category hubs can overlap heavily with stronger tool detail pages. Allowing all of them to index increases the chance of duplicate or thin-content classification.
- Changes:
  Marked the tools directory as `noindex, nofollow` for all locales.
  Removed tools directory URLs from the sitemap.
  Kept category hubs indexable only for `en` and `zh`.
  Marked category hubs as `noindex, nofollow` for other locales and excluded those locales from the sitemap.
- Files:
  `src/lib/seo/indexing-policy.ts`
  `src/lib/seo/metadata.ts`
  `src/app/(localized)/[locale]/tools/page.tsx`
  `src/app/(localized)/[locale]/tools/category/[category]/page.tsx`
  `src/app/sitemap.ts`
  `src/__tests__/properties/seo.property.test.ts`
  `src/__tests__/properties/sitemap.property.test.ts`
- Verification:
  Production build completed successfully.
  Exported `out/en/tools/index.html` contains `meta name="robots" content="noindex, nofollow"`.
  Exported `out/ja/tools/category/convert-to-pdf/index.html` contains `meta name="robots" content="noindex, nofollow"`.
  Exported `out/zh/tools/category/convert-to-pdf/index.html` remains indexable.
  Exported `out/sitemap.xml` no longer contains `/tools/` URLs and only includes category hubs for `en` and `zh`.
- GSC follow-up:
  After deployment, monitor the Duplicate and Alternate page reports for `/:locale/tools/` and category-hub URLs.
- Notes:
  Tool detail pages remain the primary index targets. This change intentionally shifts crawl/index equity away from browse pages and toward tool pages.
