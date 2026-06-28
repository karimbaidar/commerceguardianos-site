<script lang="ts">
  import CtaButton from '$lib/components/CtaButton.svelte';
  import { appStoreUrl } from '$lib/config';
</script>

<article class="article">
  <p class="eyebrow">Failed delivery prevention</p>
  <h1>How Shopify stores can reduce return-to-sender orders</h1>
  <p class="lead">
    Return-to-sender issues create extra shipping cost, support work, refund pressure, and customer
    frustration. The most useful prevention window is before fulfillment.
  </p>

  <h2>Review the order before it reaches the warehouse</h2>
  <p>
    Many return-to-sender problems start as small address or fulfillment signals: missing delivery
    details, a suspicious address format, a rushed pick-and-pack process, or a product that needs
    special handling. If the order is not reviewed until after shipment, the merchant has fewer
    options.
  </p>

  <h2>Separate address-risk from guaranteed deliverability</h2>
  <p>
    Merchants should treat address-risk signals as review inputs, not guaranteed deliverability
    decisions. The goal is to identify orders that deserve attention, confirm customer details
    where needed, and keep a clear record of correction status before the order ships.
  </p>

  <h2>Create a return-to-sender checklist</h2>
  <ul>
    <li>Flag risky or incomplete delivery details before the fulfillment handoff.</li>
    <li>Use customer correction links for orders that need confirmation.</li>
    <li>Tag orders that need review so warehouse and support teams see the same status.</li>
    <li>Watch for product, catalog, pricing, and margin signals that can make returns more costly.</li>
    <li>Review repeat patterns by region, carrier workflow, product category, or fulfillment speed.</li>
  </ul>

  <h2>Protect fast fulfillment without slowing every order</h2>
  <p>
    The goal is not to manually inspect every shipment. A better workflow routes only the orders
    with meaningful signals into review. CommerceGuardian OS helps Shopify merchants start in
    monitor or tag mode, then choose where correction links and fulfillment review should fit.
  </p>

  <h2>Install CommerceGuardian OS</h2>
  <p>
    CommerceGuardian OS helps detect risky addresses, failed-delivery risks, fulfillment mistakes,
    revenue leaks, and compliance-readiness gaps inside Shopify Admin. The free plan covers the
    first 50 checks.
  </p>
  <div class="button-row">
    <CtaButton href={appStoreUrl} label="Install on the Shopify App Store" variant="primary" />
    <CtaButton href="/pricing/" label="View pricing" variant="dark" />
  </div>
</article>
