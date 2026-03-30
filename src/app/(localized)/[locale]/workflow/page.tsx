import type { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { normalizeLocale, getPublicLocaleParams } from '@/lib/i18n/config';
import { generateWorkflowMetadata } from '@/lib/seo';
import WorkflowPageClient from './WorkflowPageClient';

export function generateStaticParams() {
    return getPublicLocaleParams();
}

interface WorkflowPageProps {
    params: Promise<{ locale: string }>;
}

export async function generateMetadata({
    params,
}: {
    params: Promise<{ locale: string }>;
}): Promise<Metadata> {
    const { locale } = await params;
    const validLocale = normalizeLocale(locale) || 'en';
    const tWorkflow = await getTranslations({ locale: validLocale, namespace: 'workflow' });

    return generateWorkflowMetadata(validLocale, {
        title: tWorkflow('metaTitle'),
        description: tWorkflow('metaDescription'),
    });
}

export default async function WorkflowPage({ params }: WorkflowPageProps) {
    const { locale } = await params;
    const validLocale = normalizeLocale(locale) || 'en';

    // Enable static rendering
    setRequestLocale(validLocale);

    return <WorkflowPageClient locale={validLocale} />;
}
