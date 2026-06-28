import { siteUrl } from '$lib/config';

export const prerender = true;

export const GET = () =>
  new Response(`User-agent: *
Allow: /

Sitemap: ${siteUrl}/sitemap.xml
`, {
    headers: {
      'content-type': 'text/plain'
    }
  });
