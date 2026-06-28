<script lang="ts">
  import CtaButton from '$lib/components/CtaButton.svelte';
  import TrustSecurity from '$lib/components/TrustSecurity.svelte';
  import { appStoreUrl } from '$lib/config';

  const sections = [
    {
      title: 'Customer-data minimization',
      text: 'CommerceGuardian OS workflows are designed to focus on the customer and order information needed for order-risk review instead of collecting unnecessary data.'
    },
    {
      title: 'Secure correction links',
      text: 'Correction links give customers a focused path to confirm or correct delivery details when a merchant needs updated information before shipment.'
    },
    {
      title: 'Privacy-conscious workflows',
      text: 'The product is positioned around operational review, merchant control, and visibility into customer-data handling touchpoints.'
    },
    {
      title: 'Compliance-readiness visibility',
      text: 'CommerceGuardian OS can support internal process visibility, but it does not replace legal review or merchant policy decisions.'
    },
    {
      title: 'Merchant control',
      text: 'Stores can start in monitor or tag mode and decide how order-risk signals should affect fulfillment, support, and correction workflows.'
    },
    {
      title: 'Shopify Admin workflow',
      text: 'The app is built for Shopify merchants and works inside Shopify Admin without requiring checkout changes.'
    }
  ];
</script>

<section class="section dark page-hero">
  <div class="container">
    <p class="eyebrow">Security</p>
    <h1>Privacy-conscious order-risk workflows for Shopify merchants</h1>
    <p class="lead">
      CommerceGuardian OS supports secure correction workflows, customer-data minimization,
      merchant-controlled review, and compliance-readiness visibility with careful, honest
      claims.
    </p>
    <div class="button-row">
      <CtaButton href={appStoreUrl} label="Install on the Shopify App Store" variant="primary" />
    </div>
  </div>
</section>

<section class="section">
  <div class="container">
    <p class="eyebrow">Approach</p>
    <h2>Security and readiness principles</h2>
    <div class="grid three">
      {#each sections as item}
        <article class="card">
          <h3>{item.title}</h3>
          <p>{item.text}</p>
        </article>
      {/each}
    </div>
  </div>
</section>

<TrustSecurity />

<section class="section">
  <div class="container">
    <p class="eyebrow">Important wording</p>
    <h2>What CommerceGuardian OS does not claim</h2>
    <p class="lead">
      CommerceGuardian OS supports compliance-readiness visibility and order-risk review. It is
      not a substitute for legal review, payment risk tooling, fulfillment policy, or merchant
      customer-service decisions.
    </p>
  </div>
</section>

<style>
  .page-hero {
    padding-top: 92px;
  }
</style>
