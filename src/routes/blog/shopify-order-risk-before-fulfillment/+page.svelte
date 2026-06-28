<script lang="ts">
  import CtaButton from '$lib/components/CtaButton.svelte';
  import { appStoreUrl } from '$lib/config';
</script>

<article class="article">
  <p class="eyebrow">Order-risk operations</p>
  <h1>Why Shopify order risk should be reviewed before fulfillment</h1>
  <p class="lead">
    Once an order ships, the merchant has fewer options. Pre-fulfillment review gives teams time
    to detect, correct, tag, and protect risky orders before they turn into losses.
  </p>

  <h2>Order risk is broader than payment risk</h2>
  <p>
    Many merchants think about risk only as payment fraud. Operational order risk is broader. A
    suspicious address, fulfillment mistake, pricing issue, catalog problem, or data-handling
    visibility gap can still create refunds, chargebacks, support tickets, failed deliveries, and
    lost margin.
  </p>

  <h2>Review the signals that affect fulfillment decisions</h2>
  <ul>
    <li>Address-risk signals that suggest a customer confirmation step may be needed.</li>
    <li>Correction status for orders where delivery details have been requested.</li>
    <li>Fulfillment mistake indicators before pick, pack, and ship work begins.</li>
    <li>Pricing and catalog issues that can quietly reduce profit.</li>
    <li>Compliance-readiness and customer-data handling visibility for internal process review.</li>
  </ul>

  <h2>Use monitor mode before changing operations</h2>
  <p>
    A careful rollout starts with visibility. Monitor mode lets merchants understand the types of
    order-risk signals appearing in the store. Tag mode can then route review work to support or
    fulfillment teams without changing checkout.
  </p>

  <h2>Build a practical pre-fulfillment workflow</h2>
  <ol>
    <li>Detect risky order signals as soon as practical after order creation.</li>
    <li>Review issues in Shopify Admin before fulfillment work begins.</li>
    <li>Send secure customer correction links when delivery details need confirmation.</li>
    <li>Use order tags and correction status to coordinate internal teams.</li>
    <li>Track the operational issues that repeatedly create support or margin pressure.</li>
  </ol>

  <h2>CommerceGuardian OS for Shopify merchants</h2>
  <p>
    CommerceGuardian OS helps Shopify merchants detect risky orders before they become refunds,
    chargebacks, failed deliveries, reshipments, support tickets, or lost margin. It works inside
    Shopify Admin and the free plan covers the first 50 checks.
  </p>
  <div class="button-row">
    <CtaButton href={appStoreUrl} label="Install on the Shopify App Store" variant="primary" />
    <CtaButton href="/features/" label="Explore features" variant="dark" />
  </div>
</article>
