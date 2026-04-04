import type { Locale } from '@/lib/i18n/config';

const preferredEnglishAnchorText: Record<string, string> = {
  'edit-pdf': 'Edit PDF',
  'sign-pdf': 'Sign PDF',
  'form-filler': 'Fill PDF Form',
  'add-watermark': 'Add Watermark',
  'merge-pdf': 'Merge PDF Files Online',
  'split-pdf': 'Split PDF Pages Online',
  'organize-pdf': 'Organize PDF',
  'extract-pages': 'Extract Pages',
  'compress-pdf': 'Compress PDF for Email',
  'repair-pdf': 'Repair PDF',
  'pdf-to-pdfa': 'PDF to PDF/A',
  'remove-metadata': 'Remove Metadata',
  'word-to-pdf': 'Word to PDF',
  'jpg-to-pdf': 'Combine JPG Images into One PDF',
  'excel-to-pdf': 'Excel to PDF',
  'png-to-pdf': 'PNG to PDF',
  'image-to-pdf': 'Image to PDF',
  'pdf-to-docx': 'Convert PDF to Editable Word',
  'pdf-to-jpg': 'Convert PDF Pages to JPG',
  'pdf-to-png': 'PDF to PNG',
  'pdf-to-excel': 'PDF to Excel',
  'encrypt-pdf': 'Protect PDF',
  'remove-restrictions': 'Unlock PDF',
  'sanitize-pdf': 'Sanitize PDF',
  'change-permissions': 'Change PDF Permissions',
};

const preferredChineseAnchorText: Record<string, string> = {
  'edit-pdf': '编辑 PDF',
  'sign-pdf': '签署 PDF',
  'form-filler': '填写 PDF 表单',
  'add-watermark': '添加水印',
  'merge-pdf': '怎么把多个 PDF 合并成一个文件',
  'split-pdf': '怎么按页码拆分 PDF',
  'organize-pdf': '整理 PDF 页面',
  'extract-pages': '提取 PDF 页面',
  'compress-pdf': '怎么把 PDF 压缩到适合邮件发送',
  'repair-pdf': '修复 PDF',
  'pdf-to-pdfa': 'PDF 转 PDF/A',
  'remove-metadata': '删除 PDF 元数据',
  'word-to-pdf': 'Word 转 PDF',
  'jpg-to-pdf': '怎么把多张 JPG 图片合并成一个 PDF',
  'excel-to-pdf': 'Excel 转 PDF',
  'png-to-pdf': 'PNG 转 PDF',
  'image-to-pdf': '图片转 PDF',
  'pdf-to-docx': '怎么把 PDF 转成可编辑 Word',
  'pdf-to-jpg': '怎么把 PDF 页面转成 JPG 图片',
  'pdf-to-png': 'PDF 转 PNG',
  'pdf-to-excel': 'PDF 转 Excel',
  'encrypt-pdf': '给 PDF 加密码',
  'remove-restrictions': '解除 PDF 限制',
  'sanitize-pdf': '清理 PDF 敏感信息',
  'change-permissions': '修改 PDF 权限',
};

const preferredTraditionalChineseAnchorText: Record<string, string> = {
  'edit-pdf': '編輯 PDF',
  'sign-pdf': '簽署 PDF',
  'form-filler': '填寫 PDF 表單',
  'add-watermark': '加入浮水印',
  'merge-pdf': '線上合併 PDF 檔案',
  'split-pdf': '依頁碼線上拆分 PDF',
  'organize-pdf': '整理 PDF 頁面',
  'extract-pages': '擷取 PDF 頁面',
  'compress-pdf': '線上壓縮 PDF 以便寄送',
  'repair-pdf': '修復 PDF',
  'pdf-to-pdfa': 'PDF 轉 PDF/A',
  'remove-metadata': '刪除 PDF 中繼資料',
  'word-to-pdf': 'Word 轉 PDF',
  'jpg-to-pdf': '將多張 JPG 圖片合併為一個 PDF',
  'excel-to-pdf': 'Excel 轉 PDF',
  'png-to-pdf': 'PNG 轉 PDF',
  'image-to-pdf': '圖片轉 PDF',
  'pdf-to-docx': '將 PDF 轉為可編輯 Word',
  'pdf-to-jpg': '將 PDF 頁面轉成 JPG 圖片',
  'pdf-to-png': 'PDF 轉 PNG',
  'pdf-to-excel': 'PDF 轉 Excel',
  'encrypt-pdf': '保護 PDF',
  'remove-restrictions': '解除 PDF 限制',
  'sanitize-pdf': '清理 PDF 敏感資訊',
  'change-permissions': '變更 PDF 權限',
};

export function getPreferredToolAnchorText(
  locale: Locale,
  toolId: string,
  fallbackTitle: string
): string {
  if (locale === 'en' && preferredEnglishAnchorText[toolId]) {
    return preferredEnglishAnchorText[toolId];
  }

  if (locale === 'zh' && preferredChineseAnchorText[toolId]) {
    return preferredChineseAnchorText[toolId];
  }

  if (locale === 'zh-TW' && preferredTraditionalChineseAnchorText[toolId]) {
    return preferredTraditionalChineseAnchorText[toolId];
  }

  return fallbackTitle;
}
