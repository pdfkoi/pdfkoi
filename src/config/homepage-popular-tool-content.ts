import type { Locale } from '@/lib/i18n/config';

export interface HomepagePopularToolCopy {
  title: string;
  description: string;
}

const homepagePopularToolContentEn: Record<string, HomepagePopularToolCopy> = {
  'merge-pdf': {
    title: 'Merge PDF Files Online',
    description: 'Combine multiple PDF files in the right order into one finished document.',
  },
  'split-pdf': {
    title: 'Split PDF Pages Online',
    description: 'Split by page range, extract selected pages, or save each page separately.',
  },
  'compress-pdf': {
    title: 'Compress PDF for Email',
    description: 'Reduce PDF size for email, uploads, and sharing while keeping text readable.',
  },
  'pdf-to-docx': {
    title: 'Convert PDF to Editable Word',
    description: 'Turn PDF files into editable Word documents for revision and reuse.',
  },
  'jpg-to-pdf': {
    title: 'Combine JPG Images into One PDF',
    description: 'Turn photos, screenshots, or scanned JPG files into one PDF for submission.',
  },
  'pdf-to-jpg': {
    title: 'Convert PDF Pages to JPG',
    description: 'Export one page or every page as high-quality JPG images for sharing.',
  },
};

const homepagePopularToolContentZh: Record<string, HomepagePopularToolCopy> = {
  'merge-pdf': {
    title: '怎么把多个 PDF 合并成一个文件',
    description: '支持按顺序合并多个 PDF，适合报告整理、扫描件拼接和资料汇总。',
  },
  'split-pdf': {
    title: '怎么按页码拆分 PDF',
    description: '按页码范围拆分、提取指定页面，或把每页另存为单独文件。',
  },
  'compress-pdf': {
    title: '怎么把 PDF 压缩到适合邮件发送',
    description: '减小 PDF 大小，方便邮件发送、表单上传和资料分享。',
  },
  'pdf-to-docx': {
    title: '怎么把 PDF 转成可编辑 Word',
    description: '把 PDF 转成可继续修改的 Word 文档，适合简历、合同和报告编辑。',
  },
  'jpg-to-pdf': {
    title: '怎么把多张 JPG 图片合并成一个 PDF',
    description: '把多张照片、截图或资料图片整理成一个 PDF，方便提交和发送。',
  },
  'pdf-to-jpg': {
    title: '怎么把 PDF 页面转成 JPG 图片',
    description: '把 PDF 单页或全部页面导出成 JPG，适合预览、分享和发微信。',
  },
};

const homepagePopularToolContentZhTw: Record<string, HomepagePopularToolCopy> = {
  'merge-pdf': {
    title: '線上合併 PDF 檔案',
    description: '依順序合併多個 PDF 檔案，適合報告整理、掃描文件整合與資料彙整。',
  },
  'split-pdf': {
    title: '依頁碼線上拆分 PDF',
    description: '依頁碼範圍拆分、擷取指定頁面，或將每頁另存為獨立檔案。',
  },
  'compress-pdf': {
    title: '線上壓縮 PDF 以便寄送',
    description: '減少 PDF 檔案大小，方便電子郵件寄送、上傳與分享。',
  },
  'pdf-to-docx': {
    title: '將 PDF 轉為可編輯 Word',
    description: '把 PDF 轉成可繼續修改的 Word 文件，適合履歷、合約與報告編修。',
  },
  'jpg-to-pdf': {
    title: '將多張 JPG 圖片合併為一個 PDF',
    description: '將多張照片、截圖或資料圖片整理成一份 PDF，方便提交與分享。',
  },
  'pdf-to-jpg': {
    title: '將 PDF 頁面轉成 JPG 圖片',
    description: '把 PDF 單頁或全部頁面匯出成 JPG，適合預覽、分享與保存。',
  },
};

export function getHomepagePopularToolContent(locale: Locale): Record<string, HomepagePopularToolCopy> {
  if (locale === 'zh') {
    return homepagePopularToolContentZh;
  }

  if (locale === 'zh-TW') {
    return homepagePopularToolContentZhTw;
  }

  if (locale === 'en') {
    return homepagePopularToolContentEn;
  }

  return {};
}
