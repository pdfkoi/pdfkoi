import { describe, expect, it } from 'vitest';
import sitemap, { getSitemapUrlCount } from '@/app/sitemap';
import { siteConfig } from '@/config/site';
import { getPublicPath, defaultLocale, locales } from '@/lib/i18n/config';
import { shouldIndexCategoryHub } from '@/lib/seo/indexing-policy';
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

  it('keeps tools directory pages out of the sitemap', () => {
    const entries = sitemap();

    for (const locale of locales) {
      expect(entries).not.toContainEqual(
        expect.objectContaining({
          url: `${siteConfig.url}${getPublicPath('/tools', locale)}`,
        })
      );
    }
  });

  it('includes category hubs only for locales that remain indexable', () => {
    const entries = sitemap();

    for (const locale of locales) {
      for (const category of TOOL_CATEGORIES) {
        const matcher = expect.objectContaining({
          url: `${siteConfig.url}${getPublicPath(`/tools/category/${category}`, locale)}`,
        });

        if (shouldIndexCategoryHub(locale)) {
          expect(entries).toContainEqual(matcher);
        } else {
          expect(entries).not.toContainEqual(matcher);
        }
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

  it('keeps privacy and cookies pages out of the sitemap', () => {
    const entries = sitemap();
    const blockedPathFragments = ['/privacy/', '/cookies/'];

    for (const entry of entries) {
      for (const blockedPathFragment of blockedPathFragments) {
        expect(entry.url).not.toContain(blockedPathFragment);
      }
    }
  });
});
