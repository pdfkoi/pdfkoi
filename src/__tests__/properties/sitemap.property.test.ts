import { describe, expect, it } from 'vitest';
import sitemap, { getSitemapUrlCount } from '@/app/sitemap';
import { siteConfig } from '@/config/site';
import { getPublicPath, defaultLocale } from '@/lib/i18n/config';
import { TOOL_CATEGORIES } from '@/types/tool';

describe('Sitemap property tests', () => {
  it('core sitemap includes every category hub for each included locale', () => {
    const entries = sitemap();
    const coreLocales = [defaultLocale, 'zh'] as const;

    for (const locale of coreLocales) {
      for (const category of TOOL_CATEGORIES) {
        expect(entries).toContainEqual(
          expect.objectContaining({
            url: `${siteConfig.url}${getPublicPath(`/tools/category/${category}`, locale)}`,
            changeFrequency: 'weekly',
            priority: 0.85,
          })
        );
      }
    }
  });

  it('reported sitemap URL count matches the generated entry count', () => {
    const entries = sitemap();

    expect(getSitemapUrlCount()).toBe(entries.length);
  });

  it('keeps Search Console remediation URLs in the sitemap during core mode', () => {
    const entries = sitemap();
    const remediationUrls = [
      'https://pdfkoi.com/zh-tw/tools/page-dimensions/',
      'https://pdfkoi.com/zh/tools/crop-pdf/',
      'https://pdfkoi.com/zh/tools/edit-metadata/',
      'https://pdfkoi.com/ko/tools/extract-tables/',
      'https://pdfkoi.com/zh-tw/tools/compress-pdf/',
      'https://pdfkoi.com/es/tools/heic-to-pdf/',
      'https://pdfkoi.com/tools/jpg-to-pdf/',
    ];

    for (const url of remediationUrls) {
      expect(entries).toContainEqual(
        expect.objectContaining({
          url,
          changeFrequency: 'weekly',
          priority: 0.8,
        })
      );
    }
  });
});
