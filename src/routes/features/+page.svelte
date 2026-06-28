<script lang="ts">
  import CtaButton from '$lib/components/CtaButton.svelte';
  import FeatureCard from '$lib/components/FeatureCard.svelte';
  import RiskWorkflow from '$lib/components/RiskWorkflow.svelte';
  import TrustSecurity from '$lib/components/TrustSecurity.svelte';
  import { appStoreUrl } from '$lib/config';
  import { features } from '$lib/content';

  const dashboardItems = [
    'Risky orders that need review',
    'Correction status visibility',
    'Protected revenue signals',
    'Order tags for operations',
    'Address-risk and fulfillment signals',
    'Catalog, pricing, and margin checks'
  ];
</script>

<section class="section dark page-hero">
  <div class="container">
    <p class="eyebrow">Full feature set</p>
    <h1>Protect Shopify orders with pre-fulfillment risk visibility</h1>
    <p class="lead">
      CommerceGuardian OS helps merchants detect order issues early, review them inside
      Shopify Admin, and use secure correction workflows when customer delivery details need
      attention.
    </p>
    <div class="button-row">
      <CtaButton href={appStoreUrl} label="Install on the Shopify App Store" variant="primary" />
      <CtaButton href="/free-shopify-address-audit/" label="Run a free order-risk audit" variant="secondary" />
    </div>
  </div>
</section>

<section class="section">
  <div class="container">
    <p class="eyebrow">Capabilities</p>
    <h2>Built for order-risk review, not just address cleanup</h2>
    <div class="grid three feature-grid">
      {#each features as feature}
        <FeatureCard title={feature.title} text={feature.text} />
      {/each}
    </div>
  </div>
</section>

<RiskWorkflow />

<section class="section">
  <div class="container split">
    <div>
      <p class="eyebrow">Order risk dashboard</p>
      <h2>Give teams a clear review queue inside Shopify Admin</h2>
      <p class="lead">
        Merchants need enough signal to decide whether to ship, tag, review, or request a
        customer correction. CommerceGuardian OS turns scattered order concerns into an
        operational review workflow.
      </p>
    </div>
    <div class="card dashboard-list">
      {#each dashboardItems as item}
        <p>{item}</p>
      {/each}
    </div>
  </div>
</section>

<section class="section soft">
  <div class="container split">
    <div>
      <p class="eyebrow">Shopify-native</p>
      <h2>No checkout change required</h2>
      <p class="lead">
        CommerceGuardian OS is built for Shopify merchants and works in Shopify Admin. Stores can
        start in monitor or tag mode first, then decide how to integrate checks into fulfillment.
      </p>
    </div>
    <div class="stack">
      <article class="card">
        <h3>Monitor first</h3>
        <p>Observe risky order signals before changing operational behavior.</p>
      </article>
      <article class="card">
        <h3>Tag for workflow</h3>
        <p>Use order tags to route review work across support and fulfillment teams.</p>
      </article>
      <article class="card">
        <h3>Review before shipment</h3>
        <p>Slow down the orders that deserve attention before they become avoidable losses.</p>
      </article>
    </div>
  </div>
</section>

<TrustSecurity />

<style>
  .page-hero {
    padding-top: 92px;
  }

  .feature-grid {
    margin-top: 30px;
  }

  .dashboard-list {
    display: grid;
    gap: 10px;
  }

  .dashboard-list p {
    border-left: 4px solid var(--green);
    background: var(--surface-soft);
    padding: 12px 14px;
    margin: 0;
    color: #21342c;
    font-weight: 800;
  }
</style>
