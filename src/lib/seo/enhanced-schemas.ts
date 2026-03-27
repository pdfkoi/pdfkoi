/**
 * 首页SEO优化 - 改进的结构化数据生成
 * 
 * 将此文件添加到 src/lib/seo/ 目录
 * 名称: enhanced-schemas.ts
 */

import { siteConfig } from '@/config/site';
import { type Locale, defaultLocale } from '@/lib/i18n/config';

/**
 * CollectionPage Schema - 展示工具集合
 * 用于首页，告诉搜索引擎这是一个工具集合页面
 */
export interface CollectionPageSchema {
  '@context': 'https://schema.org';
  '@type': 'CollectionPage';
  name: string;
  description: string;
  url: string;
  mainEntity: Array<{
    '@type': 'SoftwareApplication';
    name: string;
    url: string;
  }>;
  hasPart: Array<{
    '@type': 'WebPage';
    name: string;
    url: string;
  }>;
}

/**
 * FAQPage Schema - 首页FAQ部分
 * 增强页面在搜索结果中的展现
 */
export interface FAQPageSchema {
  '@context': 'https://schema.org';
  '@type': 'FAQPage';
  mainEntity: Array<{
    '@type': 'Question';
    name: string;
    acceptedAnswer: {
      '@type': 'Answer';
      text: string;
    };
  }>;
}

/**
 * AggregateOffer Schema - 展示工具的聚合价格
 * 用于展示"67+免费工具"的特性
 */
export interface AggregateOfferSchema {
  '@context': 'https://schema.org';
  '@type': 'AggregateOffer';
  priceCurrency: 'USD';
  lowPrice: '0';
  highPrice: '0';
  offerCount: number;
  availability: 'https://schema.org/InStock';
  description: string;
}

/**
 * BreadcrumbList Schema - 增强导航可视化
 */
export interface BreadcrumbListSchema {
  '@context': 'https://schema.org';
  '@type': 'BreadcrumbList';
  itemListElement: Array<{
    '@type': 'ListItem';
    position: number;
    name: string;
    item: string;
  }>;
}

/**
 * 生成CollectionPage Schema for首页
 */
export function generateHomeCollectionPageSchema(
  toolCount: number,
  popularToolSlugs: string[],
  locale: Locale
): CollectionPageSchema {
  const url = locale === defaultLocale 
    ? siteConfig.url 
    : `${siteConfig.url}/${locale}`;

  return {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: siteConfig.name,
    description: siteConfig.description,
    url,
    mainEntity: popularToolSlugs.map(slug => ({
      '@type': 'SoftwareApplication',
      name: slug, // 应该从工具配置获取实际名称
      url: `${url}/tools/${slug}`,
    })),
    hasPart: [
      {
        '@type': 'WebPage',
        name: 'All PDF Tools',
        url: `${url}/tools`,
      },
      {
        '@type': 'WebPage',
        name: 'About Us',
        url: `${url}/about`,
      },
      {
        '@type': 'WebPage',
        name: 'FAQ',
        url: `${url}/faq`,
      },
    ],
  };
}

/**
 * 生成首页FAQ Schema
 * 提高Rich Snippet展示率
 */
export function generateHomePageFAQSchema(): FAQPageSchema {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: '是否完全免费使用PDFkoi的所有工具？',
        acceptedAnswer: {
          '@type': 'Answer',
          text: '是的，PDFkoi的所有67+个PDF工具都是100%免费的。无需注册，无需上传限制，无广告。我们相信强大的PDF工具应该对所有人都可用。',
        },
      },
      {
        '@type': 'Question',
        name: '我的PDF文件在PDFkoi上安全吗？',
        acceptedAnswer: {
          '@type': 'Answer',
          text: '完全安全。所有文件处理完全在您的浏览器中进行。您的文件永远不会上传到我们的服务器。所有处理都是本地进行的，确保最大隐私。',
        },
      },
      {
        '@type': 'Question',
        name: 'PDFkoi支持哪些文件格式？',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'PDFkoi支持超过20种格式，包括PDF, JPG, PNG, GIF, TIFF, Word (DOCX), Excel (XLSX), PowerPoint (PPTX)等。并且我们不断添加新的格式支持。',
        },
      },
      {
        '@type': 'Question',
        name: '如何开始使用PDFkoi？',
        acceptedAnswer: {
          '@type': 'Answer',
          text: '使用PDFkoi非常简单：1) 选择您需要的工具，2) 上传或导入您的文件，3) 在浏览器中处理文件，4) 下载结果。无需安装或注册。',
        },
      },
      {
        '@type': 'Question',
        name: 'PDFkoi在哪些语言中可用？',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'PDFkoi支持9种语言：英语、日语、韩语、西班牙语、法语、德语、中文(简体)、中文(繁体)和葡萄牙语。',
        },
      },
    ],
  };
}

/**
 * 生成AggregateOffer Schema
 * 展示免费的特性
 */
export function generateHomeAggregateOfferSchema(toolCount: number): AggregateOfferSchema {
  return {
    '@context': 'https://schema.org',
    '@type': 'AggregateOffer',
    priceCurrency: 'USD',
    lowPrice: '0',
    highPrice: '0',
    offerCount: toolCount,
    availability: 'https://schema.org/InStock',
    description: `${toolCount}+ Free Online PDF Tools. All completely free, no registration required.`,
  };
}

/**
 * 生成首页Breadcrumb Schema
 */
export function generateHomeBreadcrumbSchema(locale: Locale): BreadcrumbListSchema {
  const url = locale === defaultLocale 
    ? siteConfig.url 
    : `${siteConfig.url}/${locale}`;

  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: url,
      },
    ],
  };
}

/**
 * 组合生成所有首页需要的Schema
 */
export function generateEnhancedHomePageSchemas(
  toolCount: number,
  popularToolSlugs: string[],
  locale: Locale
) {
  return {
    collectionPage: generateHomeCollectionPageSchema(toolCount, popularToolSlugs, locale),
    faqPage: generateHomePageFAQSchema(),
    aggregateOffer: generateHomeAggregateOfferSchema(toolCount),
    breadcrumb: generateHomeBreadcrumbSchema(locale),
  };
}
