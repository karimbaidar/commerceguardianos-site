<script lang="ts">
  import { emailPlaceholder } from '$lib/config';
  import CtaButton from './CtaButton.svelte';
</script>

<section class="section dark">
  <div class="container split">
    <div>
      <p class="eyebrow">Partner program</p>
      <h2>Offer a wrong-address and fulfillment-risk audit to your clients</h2>
      <p class="lead">
        Shopify agencies, 3PLs, and consultants can use CommerceGuardian OS as a practical
        order-risk review layer for stores with failed-delivery, reshipment, and support pain.
      </p>
      <p class="contact">Referral and partner contact: Karim at {emailPlaceholder}</p>
    </div>
    <div class="button-row">
      <CtaButton href="/partners/" label="Partner with CommerceGuardian OS" variant="primary" />
      <CtaButton href="/free-shopify-address-audit/" label="Run a client audit" variant="secondary" />
    </div>
  </div>
</section>

<style>
  .contact {
    color: #d8e7e2;
    font-weight: 750;
  }
</style>
