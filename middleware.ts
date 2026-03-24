import createMiddleware from 'next-intl/middleware';
import { routing } from '@/i18n/routing';

// 强制默认英语，忽略浏览器语言检测
const localeNegotiation = ({ 
  requestLocale, 
  localePrefix, 
  locales, 
  defaultLocale 
}: any) => {
  // 始终返回英语作为默认语言
  let locale = defaultLocale;
  
  // 只在 URL 明确指定其他语言时切换
  if (requestLocale && locales.includes(requestLocale)) {
    locale = requestLocale;
  }
  
  return locale;
};

export default createMiddleware({
  ...routing,
  localeNegotiation,
});

export const config = {
  // Match all pathnames except for
  // - API routes
  // - Static files (images, fonts, etc.)
  // - Next.js internals
  matcher: [
    // Match all pathnames except for
    // - ... if they start with `/api`, `/_next` or `/_vercel`
    // - ... if they contain a dot (e.g. `favicon.ico`)
    '/((?!api|_next|_vercel|.*\\..*).*)',
  ],
};
