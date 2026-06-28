<script lang="ts">
  import { appStoreUrl, emailPlaceholder } from '$lib/config';
</script>

<article class="press-release">
  <p class="eyebrow">Press release draft</p>
  <h2>CommerceGuardian OS Launches on the Shopify App Store to Help Merchants Protect Orders Before Fulfillment</h2>
  <p>
    CommerceGuardian OS is now available on the Shopify App Store, giving Shopify merchants a
    practical way to review risky order signals before fulfillment. The app helps detect
    risky addresses, failed-delivery risks, fulfillment mistakes, revenue leaks, catalog and
    pricing issues, and compliance-readiness gaps inside Shopify Admin.
  </p>
  <p>
    The app is designed for physical goods merchants that want better visibility before a
    wrong address, return-to-sender shipment, reshipment, support ticket, refund, chargeback,
    or margin issue becomes expensive.
  </p>
  <p>
    Merchants can start with monitor or tag mode and use the first 50 checks on the free plan.
    Billing and installation are handled through Shopify.
  </p>
  <p>
    App Store link:
    <a href={appStoreUrl} target="_blank" rel="noreferrer">{appStoreUrl}</a>
  </p>
  <p>Media contact: Karim at {emailPlaceholder}</p>
  <p class="note">Press release pending Shopify review before wider distribution.</p>
</article>

<style>
  .press-release {
    border: 1px solid var(--line);
    border-radius: 8px;
    background: #ffffff;
    padding: 30px;
  }

  a {
    color: var(--green-dark);
    font-weight: 850;
  }

  .note {
    border-left: 4px solid var(--green);
    background: var(--surface-soft);
    padding: 14px 16px;
    color: #23342d;
    font-weight: 750;
  }
</style>
