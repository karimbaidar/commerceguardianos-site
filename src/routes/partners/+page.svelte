<script lang="ts">
  import CtaButton from '$lib/components/CtaButton.svelte';
</script>

<section class="section dark page-hero">
  <div class="container">
    <p class="eyebrow">For Shopify partners</p>
    <h1>Help clients catch order-risk issues before fulfillment</h1>
    <p class="lead">
      CommerceGuardian OS gives Shopify agencies, 3PLs, and consultants a practical way to
      surface wrong-address, failed-delivery, fulfillment, and revenue leak issues for clients.
    </p>
    <div class="button-row">
      <CtaButton href="/free-shopify-address-audit/" label="Offer a client audit" variant="primary" />
    </div>
  </div>
</section>

<section class="section">
  <div class="container split">
    <div>
      <p class="eyebrow">Why agencies should care</p>
      <h2>Operational leaks affect retention, support load, and margin</h2>
      <p class="lead">
        Clients often notice the refund, chargeback, reshipment, or support ticket after the
        order is already out the door. A pre-fulfillment audit creates a focused improvement
        conversation around real order workflow.
      </p>
    </div>
    <div class="stack">
      <article class="card">
        <h3>Implementation partners</h3>
        <p>Add order-risk review to post-launch optimization and operational cleanup packages.</p>
      </article>
      <article class="card">
        <h3>Growth consultants</h3>
        <p>Pair conversion work with margin protection and failed-delivery reduction workflows.</p>
      </article>
      <article class="card">
        <h3>Support and CX advisors</h3>
        <p>Help clients reduce avoidable tickets tied to address issues and fulfillment mistakes.</p>
      </article>
    </div>
  </div>
</section>

<section class="section soft">
  <div class="container split">
    <div>
      <p class="eyebrow">3PL use cases</p>
      <h2>Review risky orders before pick, pack, and ship</h2>
      <p class="lead">
        3PL teams can use order tags and review signals to help merchants identify shipments that
        need customer confirmation, address cleanup, or fulfillment review before the warehouse
        creates more downstream work.
      </p>
    </div>
    <ul class="use-list">
      <li>Flag address-risk signals before fulfillment handoff</li>
      <li>Route correction status into merchant communication</li>
      <li>Protect fast fulfillment workflows from preventable errors</li>
      <li>Create a wrong-address and fulfillment-risk audit offer</li>
    </ul>
  </div>
</section>

<section class="section dark">
  <div class="container">
    <p class="eyebrow">Referral and partner CTA</p>
    <h2>Partner with CommerceGuardian OS</h2>
    <p class="lead">
      Offer a wrong-address and fulfillment-risk audit to your clients. For referrals, setup
      support, or partner conversations, start from the Shopify App Store listing.
    </p>
    <div class="button-row">
      <CtaButton href="/free-shopify-address-audit/" label="Start with a free audit" variant="primary" />
    </div>
  </div>
</section>

<style>
  .page-hero {
    padding-top: 92px;
  }

  .use-list {
    display: grid;
    gap: 12px;
    padding: 0;
    margin: 0;
    list-style: none;
  }

  .use-list li {
    border: 1px solid var(--line);
    border-radius: 8px;
    background: #ffffff;
    padding: 18px;
    color: #1c2c26;
    font-weight: 850;
  }
</style>
