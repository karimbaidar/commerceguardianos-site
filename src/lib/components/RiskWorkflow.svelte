<script lang="ts">
  import { workflowSteps } from '$lib/content';
</script>

<section class="section soft">
  <div class="container">
    <p class="eyebrow">Risk workflow</p>
    <h2>Detect, Review, Correct, Protect</h2>
    <p class="lead">
      CommerceGuardian OS gives merchants a practical review path before fulfillment turns a
      small order issue into a customer-service and margin problem.
    </p>
    <div class="workflow">
      {#each workflowSteps as step, index}
        <article>
          <span>{index + 1}</span>
          <h3>{step.title}</h3>
          <p>{step.text}</p>
        </article>
      {/each}
    </div>
  </div>
</section>

<style>
  .workflow {
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    gap: 16px;
    margin-top: 34px;
  }

  article {
    position: relative;
    min-height: 240px;
    border: 1px solid var(--line);
    border-radius: 8px;
    background: #ffffff;
    padding: 24px;
  }

  span {
    display: inline-flex;
    width: 34px;
    height: 34px;
    align-items: center;
    justify-content: center;
    border-radius: 999px;
    background: var(--green);
    color: #04120d;
    font-weight: 900;
    margin-bottom: 18px;
  }

  p {
    color: var(--muted);
    margin-bottom: 0;
  }

  @media (max-width: 900px) {
    .workflow {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
  }

  @media (max-width: 560px) {
    .workflow {
      grid-template-columns: 1fr;
    }
  }
</style>
