<script lang="ts">
  export let title: string;
  export let text: string;
</script>

<article class="card feature-card">
  <span aria-hidden="true" class="marker"></span>
  <h3>{title}</h3>
  <p>{text}</p>
</article>

<style>
  .feature-card {
    display: grid;
    gap: 8px;
    min-height: 210px;
  }

  .marker {
    width: 34px;
    height: 6px;
    border-radius: 999px;
    background: var(--green);
  }

  p {
    margin: 0;
  }
</style>
