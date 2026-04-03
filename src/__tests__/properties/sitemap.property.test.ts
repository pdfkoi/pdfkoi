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
});
