import type { Metadata } from 'next';
import { baseMetadata, RootDocument } from '@/app/document';

export const metadata: Metadata = {
  ...baseMetadata,
  title: 'PDFkoi - Professional PDF Tools',
  description: 'Free online PDF tools for merging, splitting, compressing, and converting PDF files. All processing happens in your browser for maximum privacy.',
};

export default function DefaultRootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <RootDocument lang="en">{children}</RootDocument>;
}
