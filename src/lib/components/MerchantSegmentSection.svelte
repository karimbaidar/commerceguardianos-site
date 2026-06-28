<script lang="ts">
  import { segments } from '$lib/content';
</script>

<section class="section">
  <div class="container split">
    <div>
      <p class="eyebrow">Built for physical goods merchants</p>
      <h2>Useful when failed deliveries and reshipments are expensive</h2>
      <p class="lead">
        CommerceGuardian OS is designed for stores where a wrong address, rushed fulfillment
        mistake, or margin leak creates real operational cost.
      </p>
    </div>
    <div class="segment-grid">
      {#each segments as segment}
        <article>{segment}</article>
      {/each}
    </div>
  </div>
</section>

<style>
  .segment-grid {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 12px;
  }

  article {
    min-height: 92px;
    border: 1px solid var(--line);
    border-radius: 8px;
    background: #ffffff;
    padding: 18px;
    color: #1c2c26;
    font-weight: 850;
  }

  @media (max-width: 560px) {
    .segment-grid {
      grid-template-columns: 1fr;
    }
  }
</style>
