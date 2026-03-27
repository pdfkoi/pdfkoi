/**
 * 首页SEO优化 - 改进的元数据生成
 * 
 * 将此添加到 src/lib/seo/metadata.ts 中的 generateHomeMetadata 函数
 * 
 * 这个文件展示了如何优化首页的Title和Description
 */

import type { Locale } from '@/lib/i18n/config';
import { generateBaseMetadata } from '@/lib/seo/metadata';

// ==========================================
// 改进的首页元数据 - 替换现有的 generateHomeMetadata
// ==========================================

/**
 * 生成优化的首页元数据
 * 
 * SEO优化点:
 * 1. Title包含主要关键词 "PDF tools"
 * 2. Description包含多个长尾关键词
 * 3. 自然融入品牌名称
 * 4. 包含行动号召(CTA)相关词汇
 */
export function generateHomeMetadataOptimized(locale: Locale) {
  // 针对不同语言的优化内容
  const titleContent: Record<Locale, string> = {
    en: 'Free PDF Tools Online - Merge, Split, Compress & Convert',
    ja: '無料PDF ツール - PDF を結合、分割、圧縮、変換',
    ko: '무료 PDF 도구 - PDF 병합, 분할, 압축 및 변환',
    es: 'Herramientas PDF Gratuitas Online - Combinar, Dividir, Comprimir y Convertir',
    fr: 'Outils PDF Gratuits en Ligne - Fusionner, Diviser, Compresser et Convertir',
    de: 'Kostenlose PDF-Tools Online - Zusammenführen, Teilen, Komprimieren und Konvertieren',
    zh: '免费PDF工具 - 合并、分割、压缩和转换PDF',
    'zh-TW': '免費PDF工具 - 合併、分割、壓縮和轉換PDF',
    pt: 'Ferramentas PDF Gratuitas Online - Mesclar, Dividir, Comprimir e Converter',
  };

  // 改进的描述 - 包含长尾关键词
  const descriptionContent: Record<Locale, string> = {
    en: 'PDFkoi offers 95+ free, private, browser-based PDF tools for merging, splitting, compressing, converting, signing and editing. No uploads, no signup required, complete privacy.',
    ja: 'PDFkoiは、結合、分割、圧縮、変換、署名、編集に使える95以上の無料・プライベート・ブラウザ完結のPDFツールを提供しています。アップロード不要、登録不要です。',
    ko: 'PDFkoi는 병합, 분할, 압축, 변환, 서명 및 편집을 위한 95개 이상의 무료, 개인 정보 보호, 브라우저 기반 PDF 도구를 제공합니다. 업로드와 회원가입이 필요 없습니다.',
    es: 'PDFkoi ofrece más de 95 herramientas PDF gratis, privadas y basadas en el navegador para unir, dividir, comprimir, convertir, firmar y editar archivos PDF. Sin subidas ni registro.',
    fr: 'PDFkoi propose plus de 95 outils PDF gratuits, privés et dans le navigateur pour fusionner, scinder, compresser, convertir, signer et éditer des fichiers PDF. Sans téléversement ni inscription.',
    de: 'PDFkoi bietet 95+ kostenlose, private, browserbasierte PDF-Tools zum Zusammenführen, Teilen, Komprimieren, Konvertieren, Signieren und Bearbeiten von PDF-Dateien. Keine Uploads, keine Registrierung.',
    zh: 'PDFkoi 提供 95+ 款免费、私密、基于浏览器的 PDF 工具，可用于合并、拆分、压缩、转换、签署和编辑 PDF 文件。无需上传，无需注册。',
    'zh-TW': 'PDFkoi 提供 95+ 款免費、私密、基於瀏覽器的 PDF 工具，可用於合併、拆分、壓縮、轉換、簽署和編輯 PDF 檔案。無需上傳，無需註冊。',
    pt: 'PDFkoi oferece mais de 95 ferramentas PDF grátis, privadas e no navegador para mesclar, dividir, comprimir, converter, assinar e editar arquivos PDF. Sem uploads e sem cadastro.',
  };

  // 针对每种语言的关键词
  const keywordContent: Record<Locale, string[]> = {
    en: [
      'PDF tools',
      'free PDF tools',
      'online PDF tools',
      'merge PDF',
      'split PDF',
      'compress PDF',
      'convert PDF',
      'PDF converter',
      'PDF editor',
      'PDF merger',
      'PDF splitter',
      'PDF compressor',
      'free online PDF',
      'browser-based PDF',
      'no registration PDF',
    ],
    ja: [
      'PDF ツール',
      '無料 PDF',
      'PDF 結合',
      'PDF 分割',
      'PDF 圧縮',
      'PDF 変換',
    ],
    ko: [
      'PDF 도구',
      '무료 PDF',
      'PDF 병합',
      'PDF 분할',
      'PDF 압축',
      'PDF 변환',
    ],
    es: [
      'herramientas PDF',
      'PDF gratuitas',
      'combinar PDF',
      'dividir PDF',
      'comprimir PDF',
      'convertir PDF',
    ],
    fr: [
      'outils PDF',
      'PDF gratuits',
      'fusionner PDF',
      'diviser PDF',
      'compresser PDF',
      'convertir PDF',
    ],
    de: [
      'PDF-Tools',
      'kostenlose PDF',
      'PDF zusammenführen',
      'PDF teilen',
      'PDF komprimieren',
      'PDF konvertieren',
    ],
    zh: [
      'PDF工具',
      '免费PDF',
      '合并PDF',
      '分割PDF',
      '压缩PDF',
      '转换PDF',
    ],
    'zh-TW': [
      'PDF工具',
      '免費PDF',
      '合併PDF',
      '分割PDF',
      '壓縮PDF',
      '轉換PDF',
    ],
    pt: [
      'ferramentas PDF',
      'PDF gratuitas',
      'mesclar PDF',
      'dividir PDF',
      'comprimir PDF',
      'converter PDF',
    ],
  };

  const title = titleContent[locale];
  const description = descriptionContent[locale];
  const keywords = keywordContent[locale];

  return generateBaseMetadata({
    locale,
    path: '',
    title,
    description,
    keywords,
  });
}

// ==========================================
// HTML结构优化 - 用于首页 HomePageClient.tsx
// ==========================================

/**
 * 改进的首页H1结构
 * 
 * 原始版本:
 * <h1>
 *   <span>Convert & Compress PDFs in Seconds</span>
 *   <span>Transform Your Documents Instantly</span>
 * </h1>
 * 
 * 优化版本 (包含关键词):
 */

export const OPTIMIZED_HOME_TITLE = 'Free PDF Tools Online - Merge, Split, Compress & Convert PDF Files';

export const OPTIMIZED_HOME_SUBTITLE = 'Explore 95+ free, private, browser-based PDF tools. No registration, no uploads, 100% private.';

/**
 * 改进的内部链接提示
 * 
 * 为首页不同部分建议的内部链接:
 */
export const internalLinkingStrategy = {
  heroSection: [
    { text: 'Browse All PDF Tools', href: '/tools', priority: 'high' },
    { text: 'Learn More About PDFkoi', href: '/about', priority: 'medium' },
  ],
  
  popularToolsSection: [
    // 应该链接到Top 5热门工具
    { text: 'See All Tools', href: '/tools', priority: 'high' },
  ],
  
  featuresSection: [
    { text: 'How It Works', href: '/faq', priority: 'medium' },
    { text: 'Privacy Policy', href: '/privacy', priority: 'low' },
  ],
  
  footerSection: [
    { text: 'Contact Us', href: '/contact', priority: 'medium' },
    { text: 'Terms of Service', href: '/terms', priority: 'low' },
  ],
};

/**
 * 改进的图片alt文本模板
 */
export function generateOptimizedAltText(toolName: string, category: string): string {
  return `${toolName} - Free Online ${category} Tool to Process PDF Files`;
}

/**
 * 集合页面Schema中应该包含的元素
 */
export const collectionsPageContent = {
  name: 'PDFkoi',
  description: 'Free, Private, Browser-Based PDF Tools',
  
  // 应该在collectionPage中包含的相关工具数量
  toolCountToInclude: 10,
  
  // 应该在collectionPage中包含的相关页面
  relatedPages: [
    { name: 'All PDF Tools', path: '/tools' },
    { name: 'About PDFkoi', path: '/about' },
    { name: 'FAQ', path: '/faq' },
    { name: 'Privacy Policy', path: '/privacy' },
  ],
};

/**
 * 首页FAQ部分的建议内容
 * 用于FAQ Schema的Rich Snippets
 */
export const homepageFAQContent = [
  {
    question: 'Is PDFkoi completely free to use?',
    answer: 'Yes, PDFkoi is 100% free. All 95+ tools are completely free with no registration required, no file size limits, and no ads.',
  },
  {
    question: 'How is my PDF file secure?',
    answer: 'Your files are completely secure. All processing happens locally in your browser. Your files never leave your device or upload to our servers.',
  },
  {
    question: 'What file formats are supported?',
    answer: 'PDFkoi supports 20+ file formats including PDF, JPG, PNG, GIF, TIFF, DOCX, XLSX, PPTX and more.',
  },
  {
    question: 'Do I need to install anything?',
    answer: 'No installation needed. PDFkoi works directly in your web browser. Just open the website and start using it immediately.',
  },
  {
    question: 'In how many languages is PDFkoi available?',
    answer: 'PDFkoi is available in 9 languages: English, Japanese, Korean, Spanish, French, German, Chinese (Simplified), Chinese (Traditional), and Portuguese.',
  },
];
