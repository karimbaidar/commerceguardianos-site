<script lang="ts">
  import { base } from '$app/paths';
  import { appStoreUrl } from '$lib/config';

  export let variant: 'dark' | 'light' = 'dark';

  $: src =
    variant === 'light'
      ? `${base}/assets/shopify-app-store-badge-light.png`
      : `${base}/assets/shopify-app-store-badge-black.png`;
</script>

<a class="badge-link" href={appStoreUrl} target="_blank" rel="noreferrer">
  <img src={src} alt="Find CommerceGuardian OS on the Shopify App Store" width="188" height="50" />
</a>

<style>
  .badge-link {
    display: inline-flex;
    width: 188px;
    height: 50px;
    align-items: center;
    justify-content: center;
  }

  img {
    display: block;
    width: 188px;
    height: 50px;
  }
</style>
