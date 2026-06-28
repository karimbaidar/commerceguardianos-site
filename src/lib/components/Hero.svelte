<script lang="ts">
  import { appStoreUrl } from '$lib/config';
  import CtaButton from './CtaButton.svelte';
  import ShopifyBadge from './ShopifyBadge.svelte';
</script>

<section class="hero">
  <div class="container hero-grid">
    <div class="hero-copy">
      <p class="eyebrow">Now available on the Shopify App Store</p>
      <h1>Protect Shopify orders before fulfillment</h1>
      <p class="lead">
        CommerceGuardian OS helps merchants detect risky addresses, failed-delivery risks,
        revenue leaks, fulfillment mistakes, and compliance-readiness gaps inside Shopify Admin.
      </p>
      <div class="button-row">
        <CtaButton href={appStoreUrl} label="Install on the Shopify App Store" variant="primary" />
        <CtaButton href="/free-shopify-address-audit/" label="Run a free order-risk audit" variant="secondary" />
      </div>
      <div class="badge-wrap">
        <ShopifyBadge variant="light" />
      </div>
    </div>
    <div class="dashboard" aria-label="CommerceGuardian OS order risk dashboard preview">
      <div class="dashboard-top">
        <span>Order risk review</span>
        <strong>Monitor mode</strong>
      </div>
      <div class="risk-row urgent">
        <div>
          <strong>#1048</strong>
          <span>Address-risk signal</span>
        </div>
        <em>Correction pending</em>
      </div>
      <div class="risk-row">
        <div>
          <strong>#1049</strong>
          <span>Catalog pricing review</span>
        </div>
        <em>Tagged</em>
      </div>
      <div class="risk-row">
        <div>
          <strong>#1050</strong>
          <span>Fulfillment check</span>
        </div>
        <em>Ready</em>
      </div>
      <div class="dashboard-metrics">
        <div>
          <span>Risky orders</span>
          <strong>Review queue</strong>
        </div>
        <div>
          <span>Protected revenue</span>
          <strong>Visibility</strong>
        </div>
      </div>
    </div>
  </div>
</section>

<style>
  .hero {
    min-height: 680px;
    display: flex;
    align-items: center;
    background:
      linear-gradient(125deg, rgba(7, 24, 39, 0.98), rgba(6, 17, 14, 0.94)),
      radial-gradient(circle at 80% 20%, rgba(0, 169, 110, 0.18), transparent 34%);
    color: #ffffff;
    padding: 74px 0 86px;
  }

  .hero-grid {
    display: grid;
    grid-template-columns: minmax(0, 1.08fr) minmax(330px, 0.92fr);
    gap: 48px;
    align-items: center;
  }

  .hero-copy {
    min-width: 0;
  }

  .badge-wrap {
    margin-top: 24px;
  }

  .dashboard {
    border: 1px solid rgba(255, 255, 255, 0.16);
    border-radius: 8px;
    background: rgba(255, 255, 255, 0.08);
    padding: 20px;
  }

  .dashboard-top,
  .risk-row,
  .dashboard-metrics {
    border: 1px solid rgba(255, 255, 255, 0.14);
    border-radius: 8px;
    background: rgba(6, 17, 14, 0.62);
  }

  .dashboard-top {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 16px;
    padding: 16px;
    margin-bottom: 14px;
  }

  .dashboard-top span {
    color: #d8e7e2;
    font-weight: 800;
  }

  .dashboard-top strong {
    border-radius: 999px;
    background: var(--green-soft);
    color: #06402d;
    padding: 5px 10px;
    font-size: 0.82rem;
  }

  .risk-row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 16px;
    padding: 16px;
    margin-top: 12px;
  }

  .risk-row div {
    display: grid;
    gap: 2px;
  }

  .risk-row span {
    color: #bfd1cb;
  }

  .risk-row em {
    border-radius: 999px;
    color: #c9f6df;
    font-style: normal;
    font-weight: 800;
  }

  .risk-row.urgent {
    border-color: rgba(0, 169, 110, 0.6);
  }

  .dashboard-metrics {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 10px;
    margin-top: 16px;
    padding: 16px;
  }

  .dashboard-metrics div {
    display: grid;
    gap: 4px;
  }

  .dashboard-metrics span {
    color: #bfd1cb;
    font-size: 0.9rem;
  }

  @media (max-width: 900px) {
    .hero {
      min-height: 0;
    }

    .hero-grid {
      grid-template-columns: 1fr;
    }
  }

  @media (max-width: 560px) {
    .dashboard-metrics {
      grid-template-columns: 1fr;
    }

    .risk-row,
    .dashboard-top {
      align-items: flex-start;
      flex-direction: column;
    }
  }
</style>
