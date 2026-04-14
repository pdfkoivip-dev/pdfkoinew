import { getLocaleRedirectPath } from './_lib/locale-redirects.js';

export function onRequest(context) {
  const url = new URL(context.request.url);
  const destination = getLocaleRedirectPath(url);

  if (!destination) {
    return context.next();
  }

  return Response.redirect(new URL(destination, url.origin), 301);
}
