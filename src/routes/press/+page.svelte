<script lang="ts">
  import CtaButton from '$lib/components/CtaButton.svelte';
  import PressRelease from '$lib/components/PressRelease.svelte';
  import ShopifyBadge from '$lib/components/ShopifyBadge.svelte';
  import { appStoreUrl, emailPlaceholder } from '$lib/config';
</script>

<section class="section dark page-hero">
  <div class="container">
    <p class="eyebrow">Press</p>
    <h1>CommerceGuardian OS launches on the Shopify App Store</h1>
    <p class="lead">
      A media page for launch coverage, partner announcements, and Shopify merchant publications.
    </p>
    <div class="button-row">
      <CtaButton href={appStoreUrl} label="View App Store listing" variant="primary" />
    </div>
  </div>
</section>

<section class="section">
  <div class="container split">
    <div>
      <p class="eyebrow">Launch summary</p>
      <h2>Protect Shopify orders before fulfillment</h2>
      <p class="lead">
        CommerceGuardian OS helps Shopify merchants detect risky addresses, failed-delivery risks,
        revenue leaks, fulfillment mistakes, and compliance-readiness gaps inside Shopify Admin.
      </p>
      <p>Media contact: Karim at {emailPlaceholder}</p>
    </div>
    <div class="media-card">
      <h3>Media kit</h3>
      <p>App name: CommerceGuardian OS</p>
      <p>App Store listing: <a href={appStoreUrl} target="_blank" rel="noreferrer">{appStoreUrl}</a></p>
      <p>Primary message: Protect Shopify orders before fulfillment.</p>
      <ShopifyBadge variant="dark" />
    </div>
  </div>
</section>

<section class="section soft">
  <div class="container">
    <PressRelease />
  </div>
</section>

<style>
  .page-hero {
    padding-top: 92px;
  }

  .media-card {
    border: 1px solid var(--line);
    border-radius: 8px;
    background: #ffffff;
    padding: 26px;
  }

  .media-card a {
    color: var(--green-dark);
    font-weight: 850;
  }
</style>
