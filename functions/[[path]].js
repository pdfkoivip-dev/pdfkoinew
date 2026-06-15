import { getLocaleRedirectPath } from './_lib/locale-redirects.js';

export function onRequest(context) {
  const url = new URL(context.request.url);
  const destination = getLocaleRedirectPath(url);

  if (!destination) {
    return context.next();
  }

  return new Response(null, {
    status: 301,
    headers: {
      'Location': `${url.origin}${destination}`,
      'Cache-Control': 'public, max-age=31536000', // Cache redirect for 1 year
    },
  });
}
