import type { Metadata } from 'next';
import { setRequestLocale, getTranslations } from 'next-intl/server';
import { normalizeLocale, getPublicLocaleParams } from '@/lib/i18n/config';
import { generatePrivacyMetadata } from '@/lib/seo';
import PrivacyPageClient from './PrivacyPageClient';

export function generateStaticParams() {
  return getPublicLocaleParams();
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const validLocale = normalizeLocale(locale) || 'en';
  const t = await getTranslations({ locale: validLocale, namespace: 'metadata' });

  return generatePrivacyMetadata(validLocale, {
    title: t('privacy.title'),
    description: t('privacy.description'),
  });
}

interface PrivacyPageProps {
  params: Promise<{ locale: string }>;
}

export default async function PrivacyPage({ params }: PrivacyPageProps) {
  const { locale } = await params;
  const validLocale = normalizeLocale(locale) || 'en';

  // Enable static rendering
  setRequestLocale(validLocale);

  return <PrivacyPageClient locale={validLocale} />;
}
