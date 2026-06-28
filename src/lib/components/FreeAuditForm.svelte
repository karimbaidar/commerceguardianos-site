<script lang="ts">
  import { appStoreUrl } from '$lib/config';
  import CtaButton from './CtaButton.svelte';
</script>

<section class="audit-placeholder">
  <div>
    <p class="eyebrow">Setup help</p>
    <h2>Want setup help?</h2>
    <p>
      Install CommerceGuardian OS from the Shopify App Store and run the first 50 checks free.
      Setup and support details are available through the App Store listing.
    </p>
    <CtaButton href={appStoreUrl} label="Install on the Shopify App Store" variant="primary" />
  </div>
  <form aria-label="Setup help placeholder form">
    <label>
      Store URL
      <input type="url" placeholder="https://your-store.myshopify.com" disabled />
    </label>
    <label>
      What do you want checked?
      <textarea placeholder="Wrong-address orders, return-to-sender issues, fulfillment risk..." disabled></textarea>
    </label>
    <p>Form intake is not active on this public site.</p>
  </form>
</section>

<style>
  .audit-placeholder {
    display: grid;
    grid-template-columns: minmax(0, 0.9fr) minmax(320px, 1fr);
    gap: 34px;
    align-items: start;
    border: 1px solid var(--line);
    border-radius: 8px;
    background: #ffffff;
    padding: 30px;
  }

  form {
    display: grid;
    gap: 14px;
  }

  label {
    display: grid;
    gap: 6px;
    color: var(--ink);
    font-weight: 850;
  }

  input,
  textarea {
    width: 100%;
    border: 1px solid var(--line);
    border-radius: 6px;
    background: var(--surface-soft);
    color: var(--muted);
    padding: 12px 13px;
  }

  textarea {
    min-height: 120px;
    resize: vertical;
  }

  p {
    color: var(--muted);
  }

  @media (max-width: 900px) {
    .audit-placeholder {
      grid-template-columns: 1fr;
    }
  }
</style>
