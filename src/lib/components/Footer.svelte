<script lang="ts">
  import { base } from '$app/paths';
  import { appStoreUrl, futureDomain } from '$lib/config';
  import ShopifyBadge from './ShopifyBadge.svelte';

  const columns = [
    {
      title: 'Product',
      links: [
        { label: 'Features', href: '/features/' },
        { label: 'Pricing', href: '/pricing/' },
        { label: 'Free audit', href: '/free-shopify-address-audit/' }
      ]
    },
    {
      title: 'Company',
      links: [
        { label: 'Partners', href: '/partners/' },
        { label: 'Security', href: '/security/' },
        { label: 'Press', href: '/press/' },
        { label: 'Blog', href: '/blog/' }
      ]
    }
  ];
</script>

<footer class="footer">
  <div class="container footer-grid">
    <div class="footer-brand">
      <a class="brand" href={`${base}/`}>CommerceGuardian OS</a>
      <p>
        Protect Shopify orders before fulfillment with address-risk, fulfillment, revenue,
        catalog, and compliance-readiness visibility inside Shopify Admin.
      </p>
      <ShopifyBadge variant="light" />
    </div>
    {#each columns as column}
      <div>
        <h2>{column.title}</h2>
        <ul>
          {#each column.links as link}
            <li><a href={`${base}${link.href}`}>{link.label}</a></li>
          {/each}
        </ul>
      </div>
    {/each}
    <div>
      <h2>Shopify</h2>
      <ul>
        <li><a href={appStoreUrl} target="_blank" rel="noreferrer">App Store listing</a></li>
        <li><span>Domain: {futureDomain}</span></li>
      </ul>
    </div>
  </div>
  <div class="container footer-bottom">
    <p>© 2026 CommerceGuardian OS. Shopify is a trademark of Shopify Inc.</p>
    <p>Compliance-readiness support does not replace legal review.</p>
  </div>
</footer>

<style>
  .footer {
    background: #06110e;
    color: #ffffff;
    padding: 60px 0 28px;
  }

  .footer-grid {
    display: grid;
    grid-template-columns: minmax(260px, 1.6fr) repeat(3, minmax(130px, 0.75fr));
    gap: 30px;
  }

  .brand {
    display: inline-flex;
    margin-bottom: 14px;
    color: #ffffff;
    font-size: 1.15rem;
    font-weight: 900;
    text-decoration: none;
  }

  .footer-brand p {
    max-width: 440px;
    color: #bfd1cb;
  }

  h2 {
    color: #ffffff;
    font-size: 0.95rem;
    margin: 0 0 14px;
  }

  ul {
    display: grid;
    gap: 9px;
    padding: 0;
    margin: 0;
    list-style: none;
  }

  a,
  span {
    color: #bfd1cb;
    text-decoration: none;
  }

  a:hover {
    color: #ffffff;
  }

  .footer-bottom {
    display: flex;
    justify-content: space-between;
    gap: 20px;
    border-top: 1px solid rgba(255, 255, 255, 0.12);
    margin-top: 42px;
    padding-top: 20px;
  }

  .footer-bottom p {
    margin: 0;
    color: #9fb6ae;
    font-size: 0.9rem;
  }

  @media (max-width: 900px) {
    .footer-grid {
      grid-template-columns: 1fr 1fr;
    }

    .footer-bottom {
      flex-direction: column;
    }
  }

  @media (max-width: 560px) {
    .footer-grid {
      grid-template-columns: 1fr;
    }
  }
</style>
