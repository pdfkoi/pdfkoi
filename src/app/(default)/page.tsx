import type { Metadata } from 'next';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, getTranslations, setRequestLocale } from 'next-intl/server';
import { defaultLocale, type Locale } from '@/lib/i18n/config';
import { tools } from '@/config/tools';
import { getToolContent } from '@/config/tool-content';
import { generateHomeMetadata } from '@/lib/seo';
import { generateOrganizationSchema, generateWebSiteSchema } from '@/lib/seo';
import { JsonLd } from '@/components/seo/JsonLd';
import HomePageClient from '../(localized)/[locale]/HomePageClient';

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations({ locale: defaultLocale, namespace: 'metadata' });

  return generateHomeMetadata(defaultLocale, {
    title: t('home.title'),
    description: t('home.description'),
  });
}

export default async function RootPage() {
  const locale = defaultLocale;

  setRequestLocale(locale);
  const messages = await getMessages();

  const localizedToolContent = tools.reduce((acc, tool) => {
    const content = getToolContent(locale as Locale, tool.id);

    if (content) {
      acc[tool.id] = {
        title: content.title,
        description: content.metaDescription,
      };
    }

    return acc;
  }, {} as Record<string, { title: string; description: string }>);

  return (
    <NextIntlClientProvider messages={messages}>
      <JsonLd data={[generateWebSiteSchema(locale), generateOrganizationSchema()]} />
      <HomePageClient locale={locale} localizedToolContent={localizedToolContent} />
    </NextIntlClientProvider>
  );
}
