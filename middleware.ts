import createMiddleware from 'next-intl/middleware';
import { routing } from '@/i18n/routing';

// 强制默认英语，忽略浏览器语言检测
export default createMiddleware(routing);

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
