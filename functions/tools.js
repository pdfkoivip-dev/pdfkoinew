import { getQueryRedirectPath } from './_lib/legacy-category-redirect.js';

export function onRequest(context) {
  const url = new URL(context.request.url);
  const destination = getQueryRedirectPath(url.pathname, url.searchParams);

  if (!destination) {
    return context.next();
  }

  return Response.redirect(new URL(destination, url.origin), 301);
}
