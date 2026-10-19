import { getLocaleRedirectPath } from './_lib/locale-redirects.js';
import { getQueryRedirectPath } from './_lib/legacy-category-redirect.js';

export function onRequest(context) {
  const url = new URL(context.request.url);

  const queryDestination = getQueryRedirectPath(url.pathname, url.searchParams);
  if (queryDestination) {
    return new Response(null, {
      status: 301,
      headers: {
        'Location': `${url.origin}${queryDestination}`,
        'Cache-Control': 'public, max-age=31536000',
      },
    });
  }

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
