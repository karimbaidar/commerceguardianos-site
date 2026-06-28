<script lang="ts">
  import CtaButton from '$lib/components/CtaButton.svelte';
  import { appStoreUrl } from '$lib/config';
</script>

<section class="section dark not-found">
  <div class="container">
    <p class="eyebrow">404</p>
    <h1>Page not found</h1>
    <p class="lead">
      The page you requested is not available. CommerceGuardian OS helps Shopify merchants protect
      orders before fulfillment.
    </p>
    <div class="button-row">
      <CtaButton href="/" label="Go to homepage" variant="secondary" />
      <CtaButton href={appStoreUrl} label="Install on the Shopify App Store" variant="primary" />
    </div>
  </div>
</section>

<style>
  .not-found {
    min-height: 520px;
    display: flex;
    align-items: center;
  }
</style>
