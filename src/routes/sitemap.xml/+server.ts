import { siteUrl } from '$lib/config';

export const prerender = true;

const paths = [
  '/',
  '/features/',
  '/pricing/',
  '/free-shopify-address-audit/',
  '/partners/',
  '/security/',
  '/press/',
  '/blog/',
  '/blog/prevent-wrong-address-shipments-shopify/',
  '/blog/reduce-return-to-sender-shopify/',
  '/blog/shopify-order-risk-before-fulfillment/'
];

export const GET = () => {
  const urls = paths
    .map((path) => {
      return [
        '  <url>',
        `    <loc>${siteUrl}${path}</loc>`,
        '    <changefreq>weekly</changefreq>',
        '    <priority>0.7</priority>',
        '  </url>'
      ].join('\n');
    })
    .join('\n');

  return new Response(`<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`, {
    headers: {
      'content-type': 'application/xml'
    }
  });
};
