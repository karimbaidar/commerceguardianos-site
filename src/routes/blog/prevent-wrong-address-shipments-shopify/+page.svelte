<script lang="ts">
  import CtaButton from '$lib/components/CtaButton.svelte';
  import { appStoreUrl } from '$lib/config';
</script>

<article class="article">
  <p class="eyebrow">Shopify operations</p>
  <h1>How to prevent wrong-address shipments on Shopify</h1>
  <p class="lead">
    Wrong-address shipments are painful because they usually become visible after the package is
    already moving. The better workflow is to catch risky delivery details before fulfillment.
  </p>

  <h2>Start with the signals that usually need review</h2>
  <p>
    A risky address is not always obviously fake. Shopify merchants should review orders when
    shipping details look incomplete, mismatched, suspicious, placeholder-like, or inconsistent
    with the rest of the order. International orders and high-AOV orders often deserve extra care
    because the cost of a failed delivery can be higher.
  </p>
  <ul>
    <li>Missing apartment, unit, building, or local delivery detail.</li>
    <li>Customer name, phone, or address fields that appear mismatched or incomplete.</li>
    <li>Placeholder text such as repeated characters or generic address entries.</li>
    <li>Orders with fast fulfillment pressure where a small mistake can ship quickly.</li>
  </ul>

  <h2>Use a correction workflow before shipment</h2>
  <p>
    When the order needs customer input, do not rely only on an unstructured support thread.
    Secure customer correction links give the customer a focused way to confirm or correct
    delivery details. The merchant can then review correction status before the shipment leaves.
  </p>

  <h2>Tag and review orders inside Shopify Admin</h2>
  <p>
    A simple tag-based review process helps fulfillment and support teams see which orders should
    pause, proceed, or wait for confirmation. CommerceGuardian OS is built for Shopify Admin and
    can start in monitor or tag mode, so merchants can observe risky address signals before
    enabling any fulfillment action.
  </p>

  <h2>Turn the workflow into a habit</h2>
  <ol>
    <li>Detect risky address signals as orders arrive.</li>
    <li>Review suspicious orders before they enter the fulfillment queue.</li>
    <li>Send a secure correction link when customer confirmation is needed.</li>
    <li>Use correction status and order tags to decide whether to ship.</li>
    <li>Review repeat issues by product, region, fulfillment speed, or customer segment.</li>
  </ol>

  <h2>How CommerceGuardian OS helps</h2>
  <p>
    CommerceGuardian OS helps Shopify merchants detect risky addresses, failed-delivery risks,
    fulfillment issues, revenue leaks, and compliance-readiness gaps before orders become losses.
    It is available on the Shopify App Store and includes the first 50 checks on the free plan.
  </p>
  <div class="button-row">
    <CtaButton href={appStoreUrl} label="Install on the Shopify App Store" variant="primary" />
    <CtaButton href="/free-shopify-address-audit/" label="Run a free order-risk audit" variant="dark" />
  </div>
</article>
