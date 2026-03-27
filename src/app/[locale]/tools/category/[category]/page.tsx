import type { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { locales, type Locale } from '@/lib/i18n/config';
import { TOOL_CATEGORIES, type ToolCategory } from '@/types/tool';
import { generateCategoryMetadata } from '@/lib/seo';
import CategoryPageClient from './CategoryPageClient';
import { notFound } from 'next/navigation';

export function generateStaticParams() {
    return locales.flatMap((locale) =>
        TOOL_CATEGORIES.map((category) => ({
            locale,
            category,
        }))
    );
}

const categoryTranslationKeys: Record<ToolCategory, string> = {
    'edit-annotate': 'editAnnotate',
    'convert-to-pdf': 'convertToPdf',
    'convert-from-pdf': 'convertFromPdf',
    'organize-manage': 'organizeManage',
    'optimize-repair': 'optimizeRepair',
    'secure-pdf': 'securePdf',
};

export async function generateMetadata({
    params,
}: {
    params: Promise<{ locale: string; category: string }>;
}): Promise<Metadata> {
    const { locale, category } = await params;
    const validLocale = locales.includes(locale as Locale) ? (locale as Locale) : 'en';

    if (!TOOL_CATEGORIES.includes(category as ToolCategory)) {
        notFound();
    }

    const tHome = await getTranslations({ locale: validLocale, namespace: 'home.categories' });
    const categoryName = tHome(categoryTranslationKeys[category as ToolCategory]);

    return generateCategoryMetadata(validLocale, category, {
        title: `${categoryName} Tools`,
        description: `Browse free online ${categoryName} PDF tools. Secure, fast, and easy to use in your browser.`,
    });
}

export default async function CategoryPage({ params }: { params: Promise<{ locale: string; category: string }> }) {
    const { locale, category } = await params;

    // Validate category
    if (!TOOL_CATEGORIES.includes(category as ToolCategory)) {
        notFound();
    }

    // Enable static rendering
    setRequestLocale(locale);

    // Get localized content for tools
    const { tools } = await import('@/config/tools');
    const { getToolContent } = await import('@/config/tool-content');

    const localizedToolContent = tools.reduce((acc, tool) => {
        const content = getToolContent(locale as Locale, tool.id);
        if (content) {
            acc[tool.id] = {
                title: content.title,
                description: content.metaDescription
            };
        }
        return acc;
    }, {} as Record<string, { title: string; description: string }>);

    return (
        <CategoryPageClient
            locale={locale as Locale}
            category={category as ToolCategory}
            localizedToolContent={localizedToolContent}
        />
    );
}

