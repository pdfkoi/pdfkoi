import { getLegacyCategoryRedirectPath } from './_lib/legacy-category-redirect.js';

export function onRequest(context) {
  const url = new URL(context.request.url);
  const category = url.searchParams.get('category');
  const destination = getLegacyCategoryRedirectPath(url.pathname, category);

  if (!destination) {
    return context.next();
  }

  return Response.redirect(new URL(destination, url.origin), 301);
}
