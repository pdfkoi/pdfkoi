import { describe, expect, it } from 'vitest';
import { getLegacyCategoryRedirectPath } from '../../../functions/_lib/legacy-category-redirect.js';

describe('legacy category redirect helper', () => {
  it('maps the default tools filter URL to the static category hub', () => {
    expect(getLegacyCategoryRedirectPath('/tools', 'edit-annotate')).toBe('/tools/category/edit-annotate/');
  });

  it('maps localized tools filter URLs to localized category hubs', () => {
    expect(getLegacyCategoryRedirectPath('/zh/tools', 'secure-pdf')).toBe('/zh/tools/category/secure-pdf/');
  });

  it('normalizes the English locale back to the default canonical path', () => {
    expect(getLegacyCategoryRedirectPath('/en/tools', 'convert-to-pdf')).toBe('/tools/category/convert-to-pdf/');
  });

  it('ignores unsupported categories and unrelated paths', () => {
    expect(getLegacyCategoryRedirectPath('/tools', 'not-a-real-category')).toBeNull();
    expect(getLegacyCategoryRedirectPath('/tools/category/edit-annotate', 'edit-annotate')).toBeNull();
  });
});
