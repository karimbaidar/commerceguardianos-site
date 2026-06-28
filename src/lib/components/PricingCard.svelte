<script lang="ts">
  import { appStoreUrl } from '$lib/config';
  import CtaButton from './CtaButton.svelte';

  export let name: string;
  export let price: string;
  export let checks: string;
  export let description: string;
  export let featured = false;
</script>

<article class="card pricing-card" class:featured>
  {#if featured}
    <p class="tag">Popular starting point</p>
  {/if}
  <h3>{name}</h3>
  <p class="price">{price}<span>/month</span></p>
  <p class="checks">{checks}</p>
  <p>{description}</p>
  <CtaButton href={appStoreUrl} label="Install on the Shopify App Store" variant="dark" />
</article>

<style>
  .pricing-card {
    display: flex;
    min-height: 385px;
    flex-direction: column;
    gap: 12px;
  }

  .pricing-card.featured {
    border-color: var(--green);
  }

  .tag {
    width: fit-content;
    border-radius: 999px;
    background: var(--green-soft);
    color: var(--green-dark);
    padding: 5px 9px;
    font-size: 0.82rem;
    font-weight: 850;
  }

  .price {
    color: var(--ink);
    font-size: 2.4rem;
    font-weight: 900;
    line-height: 1;
    margin-bottom: 0;
  }

  .price span {
    color: var(--muted);
    font-size: 0.95rem;
    font-weight: 700;
  }

  .checks {
    color: var(--green-dark);
    font-weight: 850;
  }

  :global(.pricing-card .cta-button) {
    margin-top: auto;
  }
</style>
