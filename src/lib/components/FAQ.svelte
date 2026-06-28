<script lang="ts">
  import { faqs } from '$lib/content';
</script>

<section class="section soft">
  <div class="container">
    <p class="eyebrow">FAQ</p>
    <h2>Clear answers before you install</h2>
    <div class="faq-list">
      {#each faqs as item}
        <details>
          <summary>{item.question}</summary>
          <p>{item.answer}</p>
        </details>
      {/each}
    </div>
  </div>
</section>

<style>
  .faq-list {
    display: grid;
    gap: 12px;
    margin-top: 28px;
  }

  details {
    border: 1px solid var(--line);
    border-radius: 8px;
    background: #ffffff;
    padding: 18px 20px;
  }

  summary {
    cursor: pointer;
    color: var(--ink);
    font-size: 1.05rem;
    font-weight: 850;
  }

  p {
    margin: 12px 0 0;
    color: var(--muted);
  }
</style>
