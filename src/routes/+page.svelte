<script lang="ts">
  import BlogCard from '$lib/components/BlogCard.svelte';
  import CtaButton from '$lib/components/CtaButton.svelte';
  import FAQ from '$lib/components/FAQ.svelte';
  import FeatureCard from '$lib/components/FeatureCard.svelte';
  import Hero from '$lib/components/Hero.svelte';
  import MerchantSegmentSection from '$lib/components/MerchantSegmentSection.svelte';
  import PricingCard from '$lib/components/PricingCard.svelte';
  import RiskWorkflow from '$lib/components/RiskWorkflow.svelte';
  import TrustSecurity from '$lib/components/TrustSecurity.svelte';
  import { appStoreUrl } from '$lib/config';
  import { blogPosts, features, pricingPlans } from '$lib/content';
</script>

<Hero />

<section class="section">
  <div class="container">
    <p class="eyebrow">Order problems compound</p>
    <h2>Small order issues become expensive fast</h2>
    <p class="lead">
      A suspicious address or fulfillment mistake can move from one Shopify order to several
      support, shipping, and margin problems if it is not reviewed before shipment.
    </p>
    <div class="pain-grid">
      {#each ['Wrong address', 'Failed delivery', 'Support ticket', 'Reshipment', 'Refund or chargeback', 'Lost margin'] as item}
        <article>{item}</article>
      {/each}
    </div>
  </div>
</section>

<RiskWorkflow />

<section class="section">
  <div class="container">
    <p class="eyebrow">Core capabilities</p>
    <h2>Order-risk protection that goes beyond address validation</h2>
    <p class="lead">
      CommerceGuardian OS combines address-risk signals, correction workflows, operational
      review, revenue leak detection, and compliance-readiness visibility inside Shopify Admin.
    </p>
    <div class="grid three feature-grid">
      {#each features as feature}
        <FeatureCard title={feature.title} text={feature.text} />
      {/each}
    </div>
  </div>
</section>

<MerchantSegmentSection />

<section class="section soft">
  <div class="container">
    <p class="eyebrow">Pricing</p>
    <h2>Start with your first 50 checks free</h2>
    <p class="lead">
      Plans are designed around fewer failed deliveries, fewer support tickets, fewer
      reshipments, and better operational visibility before fulfillment.
    </p>
    <div class="grid four pricing-grid">
      {#each pricingPlans as plan, index}
        <PricingCard {...plan} featured={index === 2} />
      {/each}
    </div>
    <p class="pricing-note">Plan details may change. Final billing is handled through Shopify.</p>
    <div class="button-row">
      <CtaButton href="/pricing/" label="Compare pricing" variant="dark" />
      <CtaButton href={appStoreUrl} label="Install CommerceGuardian OS" variant="primary" />
    </div>
  </div>
</section>

<TrustSecurity />

<section class="section">
  <div class="container">
    <p class="eyebrow">Merchant guides</p>
    <h2>Practical Shopify order-risk advice</h2>
    <div class="grid three">
      {#each blogPosts as post}
        <BlogCard {...post} />
      {/each}
    </div>
  </div>
</section>

<FAQ />

<section class="section dark final-cta">
  <div class="container">
    <p class="eyebrow">Final check before fulfillment</p>
    <h2>Catch risky orders before they become losses</h2>
    <p class="lead">
      Install CommerceGuardian OS from the Shopify App Store and start with monitor or tag mode.
    </p>
    <div class="button-row">
      <CtaButton href={appStoreUrl} label="Install CommerceGuardian OS" variant="primary" />
      <CtaButton href="/free-shopify-address-audit/" label="Run a free order-risk audit" variant="secondary" />
    </div>
  </div>
</section>

<style>
  .pain-grid {
    display: grid;
    grid-template-columns: repeat(6, minmax(0, 1fr));
    gap: 12px;
    margin-top: 32px;
  }

  .pain-grid article {
    min-height: 118px;
    display: flex;
    align-items: flex-end;
    border: 1px solid var(--line);
    border-radius: 8px;
    background: #ffffff;
    padding: 18px;
    color: #13231d;
    font-weight: 900;
  }

  .feature-grid,
  .pricing-grid {
    margin-top: 32px;
  }

  .pricing-note {
    color: var(--muted);
    margin-top: 18px;
  }

  .final-cta {
    text-align: left;
  }

  @media (max-width: 1100px) {
    .pain-grid {
      grid-template-columns: repeat(3, minmax(0, 1fr));
    }
  }

  @media (max-width: 640px) {
    .pain-grid {
      grid-template-columns: 1fr;
    }
  }
</style>
