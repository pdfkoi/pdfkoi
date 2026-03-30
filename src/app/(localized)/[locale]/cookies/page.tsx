import type { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';
import { normalizeLocale, getPublicLocaleParams } from '@/lib/i18n/config';
import { generateCookiesMetadata } from '@/lib/seo';
import CookiesPageClient from './CookiesPageClient';

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

  return generateCookiesMetadata(validLocale);
}

interface CookiesPageProps {
  params: Promise<{ locale: string }>;
}

export default async function CookiesPage({ params }: CookiesPageProps) {
  const { locale } = await params;
  const validLocale = normalizeLocale(locale) || 'en';

  setRequestLocale(validLocale);

  return <CookiesPageClient locale={validLocale} />;
}
