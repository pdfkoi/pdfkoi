import type { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { defaultLocale, locales, type Locale } from '@/lib/i18n/config';
import { JsonLd } from '@/components/seo/JsonLd';
import { generateHomeMetadata, generateOrganizationSchema, generateWebSiteSchema } from '@/lib/seo';
import HomePageClient from './HomePageClient';

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const validLocale = locales.includes(locale as Locale) ? (locale as Locale) : defaultLocale;
  const t = await getTranslations({ locale: validLocale, namespace: 'metadata' });

  return generateHomeMetadata(validLocale, {
    title: t('home.title'),
    description: t('home.description'),
  });
}

interface HomePageProps {
  params: Promise<{ locale: string }>;
}

export default async function HomePage({ params }: HomePageProps) {
  const { locale } = await params;

  // Enable static rendering
  setRequestLocale(locale);

  // Get localized content for tools
  const { tools } = await import('@/config/tools');
  const { getToolContent } = await import('@/config/tool-content');

  const localizedToolContent = tools.reduce((acc, tool) => {
    const content = getToolContent(locale as Locale, tool.id);
    // Use metaDescription for the card description as it's short and summary-like
    // Use title from the content
    if (content) {
      acc[tool.id] = {
        title: content.title,
        description: content.metaDescription
      };
    }
    return acc;
  }, {} as Record<string, { title: string; description: string }>);

  return (
    <>
      <JsonLd data={[generateWebSiteSchema(locale as Locale), generateOrganizationSchema()]} />
      <HomePageClient locale={locale as Locale} localizedToolContent={localizedToolContent} />
    </>
  );
}
