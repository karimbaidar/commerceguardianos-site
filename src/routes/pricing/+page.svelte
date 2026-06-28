<script lang="ts">
  import CtaButton from '$lib/components/CtaButton.svelte';
  import FAQ from '$lib/components/FAQ.svelte';
  import PricingCard from '$lib/components/PricingCard.svelte';
  import { appStoreUrl } from '$lib/config';
  import { pricingPlans } from '$lib/content';

  const outcomes = [
    'Fewer failed-delivery surprises',
    'Fewer avoidable support tickets',
    'Fewer reshipment reviews after the fact',
    'Better operational visibility before shipment'
  ];
</script>

<section class="section dark page-hero">
  <div class="container">
    <p class="eyebrow">Pricing</p>
    <h1>Start free, then scale order-risk checks with volume</h1>
    <p class="lead">
      CommerceGuardian OS plans are organized around pre-fulfillment visibility, with the free
      plan covering the first 50 checks each month.
    </p>
    <div class="button-row">
      <CtaButton href={appStoreUrl} label="Install on the Shopify App Store" variant="primary" />
    </div>
  </div>
</section>

<section class="section">
  <div class="container">
    <div class="grid four">
      {#each pricingPlans as plan, index}
        <PricingCard {...plan} featured={index === 2} />
      {/each}
    </div>
    <p class="notice pricing-notice">
      Plan details may change. Final billing is handled through Shopify.
    </p>
  </div>
</section>

<section class="section soft">
  <div class="container split">
    <div>
      <p class="eyebrow">Outcome-oriented pricing</p>
      <h2>Pay for visibility that helps protect fulfillment and margin</h2>
      <p class="lead">
        The value is not another dashboard for its own sake. It is catching issues while there is
        still time to review, correct, tag, or pause a risky order.
      </p>
    </div>
    <ul class="outcome-list">
      {#each outcomes as outcome}
        <li>{outcome}</li>
      {/each}
    </ul>
  </div>
</section>

<FAQ />

<style>
  .page-hero {
    padding-top: 92px;
  }

  .pricing-notice {
    margin-top: 24px;
  }

  .outcome-list {
    display: grid;
    gap: 12px;
    padding: 0;
    margin: 0;
    list-style: none;
  }

  .outcome-list li {
    border: 1px solid var(--line);
    border-radius: 8px;
    background: #ffffff;
    padding: 18px;
    color: #1c2c26;
    font-weight: 850;
  }
</style>
