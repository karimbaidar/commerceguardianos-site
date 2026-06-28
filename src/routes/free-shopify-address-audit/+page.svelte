<script lang="ts">
  import CtaButton from '$lib/components/CtaButton.svelte';
  import FreeAuditForm from '$lib/components/FreeAuditForm.svelte';
  import { appStoreUrl } from '$lib/config';

  const checks = [
    'Fake, incomplete, suspicious, mismatched, placeholder, or risky shipping addresses',
    'Failed-delivery and return-to-sender risk signals',
    'Fulfillment mistakes that deserve review before shipment',
    'Pricing, catalog, and margin-loss signals',
    'Correction status and order tags',
    'Compliance-readiness and customer-data handling visibility'
  ];

  const audience = [
    'Stores with wrong-address or failed-delivery pain',
    'Fast fulfillment teams that need a review step',
    'International shipping stores',
    'High-AOV physical goods merchants',
    'Personalized product sellers',
    'Brands with reshipment or support-ticket pressure'
  ];
</script>

<section class="section dark page-hero">
  <div class="container">
    <p class="eyebrow">Free order-risk audit</p>
    <h1>Find order-risk leaks before they cost you money</h1>
    <p class="lead">
      Install CommerceGuardian OS and run your first 50 checks free. Start in monitor or tag mode
      before enabling any fulfillment action.
    </p>
    <div class="button-row">
      <CtaButton href={appStoreUrl} label="Install on the Shopify App Store" variant="primary" />
    </div>
  </div>
</section>

<section class="section">
  <div class="container split">
    <div>
      <p class="eyebrow">Who it is for</p>
      <h2>For merchants that want to catch order issues before shipment</h2>
      <p class="lead">
        The audit is useful when your team sees avoidable address corrections, failed deliveries,
        support tickets, reshipments, refunds, chargebacks, or quiet margin loss.
      </p>
    </div>
    <ul class="check-list">
      {#each audience as item}
        <li>{item}</li>
      {/each}
    </ul>
  </div>
</section>

<section class="section soft">
  <div class="container">
    <p class="eyebrow">What the audit checks</p>
    <h2>Address, fulfillment, revenue, catalog, and readiness signals</h2>
    <div class="grid three">
      {#each checks as item}
        <article class="card">
          <h3>{item}</h3>
        </article>
      {/each}
    </div>
  </div>
</section>

<section class="section">
  <div class="container split">
    <div>
      <p class="eyebrow">After install</p>
      <h2>Start with visibility before operational changes</h2>
      <p class="lead">
        Install through Shopify, run checks on new orders, review risky signals inside Shopify
        Admin, and decide whether monitor, tags, customer correction links, or fulfillment review
        should become part of your workflow.
      </p>
    </div>
    <div class="stack">
      <article class="card">
        <h3>1. Install</h3>
        <p>Install CommerceGuardian OS from the Shopify App Store.</p>
      </article>
      <article class="card">
        <h3>2. Monitor</h3>
        <p>Use the first 50 checks free to see which orders deserve review.</p>
      </article>
      <article class="card">
        <h3>3. Improve workflow</h3>
        <p>Add tags, correction links, or fulfillment review where they make operational sense.</p>
      </article>
    </div>
  </div>
</section>

<section class="section soft">
  <div class="container">
    <FreeAuditForm />
  </div>
</section>

<style>
  .page-hero {
    padding-top: 92px;
  }

  .check-list {
    display: grid;
    gap: 12px;
    padding: 0;
    margin: 0;
    list-style: none;
  }

  .check-list li {
    border: 1px solid var(--line);
    border-radius: 8px;
    background: #ffffff;
    padding: 16px 18px;
    color: #1c2c26;
    font-weight: 850;
  }
</style>
