<script lang="ts">
  import { base } from '$app/paths';

  export let title: string;
  export let href: string;
  export let description: string;
</script>

<article class="card blog-card">
  <h3><a href={`${base}${href}`}>{title}</a></h3>
  <p>{description}</p>
  <a class="read" href={`${base}${href}`}>Read article</a>
</article>

<style>
  .blog-card {
    display: flex;
    min-height: 245px;
    flex-direction: column;
    gap: 12px;
  }

  h3 a {
    color: var(--ink);
    text-decoration: none;
  }

  h3 a:hover,
  .read:hover {
    color: var(--green-dark);
  }

  p {
    margin: 0;
  }

  .read {
    margin-top: auto;
    color: var(--green-dark);
    font-weight: 850;
    text-decoration: none;
  }
</style>
